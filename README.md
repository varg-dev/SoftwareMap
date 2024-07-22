# The prototype
This prototype is part of a project that aims to build a web- and glyph-based visualization system for multivariate data.
Details on the use-case and how this prototype works can be found in the following publication:

* Sandro Steeger, Daniel Atzberger, Willy Scheibel, and Jürgen Döllner. 2024. Instanced Rendering of Parameterized 3D Glyphs with Adaptive Level-of-
Detail using three.js. In The 29th International ACM Conference on 3D Web Technology (WEB3D ’24). ACM, New York, NY, USA, 10 pages. [doi:10.1145/3665318.3677171](https://doi.org/10.1145/3665318.3677171).

# Usage
This prototype is hosted on GitHub Pages at https://varg-dev.github.io/SoftwareMap/. \
Alternatively, you can clone this repository locally and run `npm install --legacy-peer-deps`, which will install all necessary
[dependencies](#Dependencies) using [npm](https://www.npmjs.com/). This has been tested with Node v20.14.0 (LTS) and npm 10.8.2. \
When all dependencies have installed successfully, you may run `npm run build` to build the software.
Following this, run `npm run preview` to host a server which you can access using a web browser. This server will usually be
reachable at http://localhost:4173.

At the start, the prototype always loads a predefined dataset derived from the [TensorFlow](https://www.tensorflow.org/) software project.
Using the button on the top left, you can select your own datasets for visualization. These datasets have to be in CSV format and
contain only numerical data, while the first column must be called `Document` and will be interpreted as an identifier string. \
Using the GUI on the right side of the screen, select a glyph atlas and a mapping for `x position`, `y position`, and `Glyph type`.
Once this has been done, glyphs should appear. \
You can navigate on the visualization plane using a mouse, a touchpad, or a touch-enabled display.

## Dependencies
- [csv-parse](https://www.npmjs.com/package/csv-parse) to parse input datasets
- [lil-gui](https://lil-gui.georgealways.com/) to provide a GUI to change visualization parameters
- [three.js](https://threejs.org/) for rendering and managing the 3D scene
- [three-openll-labels](https://strawberriesandcheese.github.io/three-openll-labels/) for rendering on-demand detailed info for each glyph
- [threejs-world-in-hand](https://orbitnavjs.github.io/WIHNavigationWebsite/) for navigating on the visualization plane
