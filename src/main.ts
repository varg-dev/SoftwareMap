import * as THREE from 'three';

const div = document.getElementById('threeJsDiv') as HTMLElement;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(div.clientWidth, div.clientHeight);
div.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, div.clientWidth / div.clientHeight, 0.1, 1000);
camera.position.z = 5;

const scene = new THREE.Scene();
const box = new THREE.Mesh(new THREE.BoxGeometry(1), new THREE.MeshBasicMaterial());
scene.add(box);

renderer.render(scene, camera);