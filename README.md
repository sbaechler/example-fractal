# Example Design System

> Design Systems are for People.

## Structure
Fractal based styleguides consist of two parts:
Components and Documentation. The Documentation part
is for the design concepts. The Components part holds the actual components.

The documentation is written in [Markdown](https://learn.getgrav.org/content/markdown).
The components are [Handlebars](http://handlebarsjs.com/) files.

To write Markdown, use your favorite text editor (e.g. [Atom](https://atom.io/))
with a markdown plugin, or an online editor like [Dillinger](http://dillinger.io/).


## The Guide
This guide is based on [Fractal](http://fractal.build/). The component structure is based
on the [GE Predix Design system](https://medium.com/ge-design/ges-predix-design-system-8236d47b0891).
The documentation structure is based on the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/)
with a bit of [Shopify Polaris](https://polaris.shopify.com) sprinkled in.


## Visual Regression test
Visualize changes by comparing screenshots of the components. 
This functionality is provided by [BackstopJS](https://github.com/garris/BackstopJS). 

You can compare the current state to the latest built state.

1. Make sure you have a local build by running `npm run build`.
2. Create reference screenshots by running `npm run visual-reference`.
3. To create the diffs, run `npm run visual`. Make sure the local server is running.
4. Optionally update the references with the new state by running `npm run visual-approve`.

The backstop configuration is in the folder tests/backstop/config.js.


## Installation
Node.js 6.9 or higher is required.

Run `npm install`.

To simplify the creating of new components install the [fractalcomp](https://www.npmjs.com/package/newfractalcomp) 
package.

## Run locally

Run `npm start`.
