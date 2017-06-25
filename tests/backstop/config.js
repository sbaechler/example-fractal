const path = require('path');
const rootPath = path.dirname(path.dirname(__dirname));

module.exports = {
  id: "prod_test",
  viewports: [
    {
      name: "phone",
      width: 320,
      height: 1000
    },
    {
      name: "tablet_v",
      width: 568,
      height: 1000
    },
    {
      name: "desktop",
      width: 1200,
      height: 1000
    }
  ],
  scenarios: [
    // Compare the current state against the latest build:
    {
      label: "Landingpage",
      url: "http://localhost:3000/components/preview/landingpage",
      referenceUrl: `file://${rootPath}/build/components/preview/landingpage.html`,
      selectors: ["document"],
    },
    {
      label: 'Buttons',
      url: 'http://localhost:3000/components/preview/buttons',
      referenceUrl: `file://${rootPath}/build/components/preview/buttons.html`,
      selectors: ['.buttons-example'],
      misMatchThreshold : 0.1,
    }
    // Example configuration
    // {
    //   label: "BackstopJS Homepage",
    //   url: "https://garris.github.io/BackstopJS/",
    //   hideSelectors: [],  // sets the element style to visibility:hidden
    //   removeSelectors: [],  // sets the element style to display:none
    //   selectorExpansion: true,
    //   selectors: [
    //     ".row.firstPanel"
    //   ],
    //   readyEvent: null,
    //   delay: 500,
    //   misMatchThreshold : 0.1,  // 0.1 is the default.
    //   requireSameDimensions : true,
    //   onBeforeScript: "onBefore.js",
    //   onReadyScript: "onReady.js"
    // }
  ],
  paths: {
    bitmaps_reference: "tests/backstop/bitmaps/reference",
    bitmaps_test: "tests/backstop/bitmaps/test",
    casper_scripts: "tests/backstop/casper_scripts",
    html_report: "tests/backstop/reports/html",
    ci_report: "tests/backstop/reports/ci"
  },
  casperFlags: [
    "--ignore-ssl-errors=true",
    "--ssl-protocol=any"
  ],
  engine: "phantomjs",
  report: ["browser"],
  cliExitOnFail: false,
  debug: false
};
