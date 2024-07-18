import {defineConfig} from 'vite';

export default defineConfig({
	assetsInclude: ['**/*.glb'],
	build: {
		target: 'es2022'
	},
	base: '/SoftwareMap/'
});