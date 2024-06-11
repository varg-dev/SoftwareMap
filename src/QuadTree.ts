import * as THREE from 'three';

export class QuadTree {
	/*
	Layout of children:

	0 1
	2 3
	 */
	protected children: Array<QuadTree> | undefined;
	protected meshes: Array<THREE.Mesh | THREE.InstancedMesh> | undefined;
	protected maxLods: Set<number>;
	protected _glyphCount: Array<number> | undefined;

	protected minX: number;
	protected minY: number;
	protected maxX: number;
	protected maxY: number;
	protected avgX: number;
	protected avgY: number;
	protected width: number;
	protected height: number;
	protected halfWidth: number;
	protected halfHeight: number;

	/**
	 *
	 * @param levels
	 * @param numGlyphs
	 * @param minX Inclusive
	 * @param minY Inclusive
	 * @param maxX Exclusive
	 * @param maxY Exclusive
	 */
	constructor(levels: number, numGlyphs: number, minX: number, minY: number, maxX: number, maxY: number) {
		this.maxLods = new Set<number>();

		this.minX = minX;
		this.minY = minY;
		this.maxX = maxX;
		this.maxY = maxY;
		this.avgX = (maxX + minX) / 2;
		this.avgY = (maxY + minY) / 2;
		this.width = maxX - minX;
		this.height = maxY - minY;
		this.halfWidth = this.width / 2;
		this.halfHeight = this.height / 2;

		if (levels !== 0) {
			this.children = new Array<QuadTree>();
			this.children.push(new QuadTree(levels - 1, numGlyphs, minX, this.avgY, this.avgX, maxY));
			this.children.push(new QuadTree(levels - 1, numGlyphs, this.avgX, this.avgY, maxX, maxY));
			this.children.push(new QuadTree(levels - 1, numGlyphs, minX, minY, this.avgX, this.avgY));
			this.children.push(new QuadTree(levels - 1, numGlyphs, this.avgX, minY, maxX, this.avgY));
		} else {
			this.meshes = new Array<THREE.Mesh | THREE.InstancedMesh>();
			this._glyphCount = new Array<number>(numGlyphs).fill(0);
		}
	}

	public incrementGlyphCount(meshId: number, position: THREE.Vector2): void {
		if (this.children === undefined) ++this._glyphCount![meshId];
		else {
			if (position.x >= this.avgX) {
				if (position.y >= this.avgY) {
					this.children[1].incrementGlyphCount(meshId, position);
				} else {
					this.children[3].incrementGlyphCount(meshId, position);
				}
			} else {
				if (position.y >= this.avgY) {
					this.children[0].incrementGlyphCount(meshId, position);
				} else {
					this.children[2].incrementGlyphCount(meshId, position);
				}
			}
		}
	}

	public store(mesh: THREE.Mesh, position: THREE.Vector2): void {
		if (this.children === undefined) this.meshes!.push(mesh);
		else {
			if (position.x >= this.avgX) {
				if (position.y >= this.avgY) {
					this.children[1].store(mesh, position);
				} else {
					this.children[3].store(mesh, position);
				}
			} else {
				if (position.y >= this.avgY) {
					this.children[0].store(mesh, position);
				} else {
					this.children[2].store(mesh, position);
				}
			}
		}
	}

	protected updateVisibility(cameraPosition: THREE.Vector3, lodThreshold: number): void {
		for (const maxLod of this.maxLods) {
			const visibleLods = new Array<boolean>(maxLod);

			for (let lod = 0; lod < maxLod; ++lod) {
				// missing handling for infinite distances, i.e. lod == maxLod
				const lowerRadius = this.radiusOnPlane(cameraPosition, lodThreshold * lod);
				const upperRadius = this.radiusOnPlane(cameraPosition, lodThreshold * (lod + 1));

				// -> This LoD is used
				if (this.intersects(cameraPosition, lowerRadius, this) || this.intersects(cameraPosition, upperRadius, this)) {
					if (this.children === undefined) {
						visibleLods[lod] = true;
					} else {
						for (const node of this.children) {
							node.updateVisibility(cameraPosition, lodThreshold);
						}
					}
				} else { // This LoD is not used in any of the children or meshes
					if (this.children === undefined) {
						visibleLods[lod] = false;
					} else {
						for (const node of this.children) {
							node.setVisibility(maxLod, visibleLods);
						}
					}
				}
			}

			this.setVisibility(maxLod, visibleLods);
		}
	}

	protected setVisibility(maxLod: number, visibleLods: Array<boolean>): void {
		if (this.meshes !== undefined) {
			for (const mesh of this.meshes) {
				if (mesh.userData['maxLod'] === maxLod) mesh.visible = visibleLods[mesh.userData['lod']];
			}
		}
	}

	public get leafNodes(): Array<QuadTree> {
		const result = new Array<QuadTree>();
		if (this.children !== undefined) {
			for (let i = 0; i < this.children.length; ++i) {
				result.push(...this.children[i].leafNodes);
			}
		} else {
			result.push(this);
		}
		return result;
	}

	public get glyphCount(): Array<number> | undefined {
		return this._glyphCount;
	}

	public clear(): void {
		if (this.children === undefined) this.meshes = new Array<THREE.Mesh | THREE.InstancedMesh>();
		else {
			for (const child of this.children) child.clear();
		}
	}

	// https://stackoverflow.com/a/402010
	protected intersects(cameraPosition: THREE.Vector3, radius: number, treeNode: QuadTree): boolean {
		const distanceX = Math.abs(cameraPosition.x - treeNode.avgX);
		const distanceY = Math.abs(cameraPosition.z - treeNode.avgY);

		if (distanceX > (treeNode.halfWidth + radius)) return false;
		if (distanceY > (treeNode.halfHeight + radius)) return false;

		if (distanceX <= (treeNode.halfWidth)) return true;
		if (distanceY <= (treeNode.halfHeight)) return true;

		const squaredCornerDistance = (distanceX - treeNode.halfWidth)**2 + (distanceY - treeNode.halfHeight)**2;

		return (squaredCornerDistance <= radius**2);
	}

	// https://math.stackexchange.com/questions/943383/determine-circle-of-intersection-of-plane-and-sphere
	protected radiusOnPlane(cameraPosition: THREE.Vector3, sphereRadius: number): number {
		const distanceToPlane = cameraPosition.y;
		if (distanceToPlane > sphereRadius) return 0;

		return Math.sqrt(sphereRadius**2 - distanceToPlane**2);
	}
}