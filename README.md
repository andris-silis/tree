
## Installation:
 Clone this repository

 Change into repository root directory

 `npm install`

 `npm build`


## Run:
  Open `www/index.html` in browser


## Development:
JS source code is inside directory `src/` with an entry point `src/js/application/bootstrap.js`

JS code is built using Webpack as CommonJS builder and Gulp as a command runner. Code is separated into vendors and app bundles for faster rebuild when developing.

CSS build config is inside gulp-config.js, CSS is
  automatically vendor-prefixed and CSS files merged into one.


## Build the JS code
  `npm build`


### For development - starts a LiveReload server and rebuilds files on change:
  `npm run-script build && npm run-script watch`

### Production build - minifies the end result:
  `npm run-script build-prod`

  Built CSS and JS is placed in `www/compiled` directory.



