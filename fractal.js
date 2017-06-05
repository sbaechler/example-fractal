'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Example Project');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'src', 'components'));
fractal.components.set('default.preview', '@preview');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'src', 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));


const mandelbrot = require('@frctl/mandelbrot');
const repeatHelper = require('handlebars-helper-repeat');

fractal.web.set('static.path', __dirname + '/public');

const hbs = require('@frctl/handlebars')({
    helpers: {
        json: (context) => JSON.stringify(context),
        repeat: repeatHelper
    }
});

fractal.components.engine(hbs);

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: "black",
    // any other theme configuration values here
    panels: ['html', 'info', 'notes'],
    lang: 'de'
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default

fractal.web.set('builder.dest', __dirname + '/build');
