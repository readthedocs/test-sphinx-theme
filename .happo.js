const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  project: "test-sphinx-theme",

  // apiKey: process.env.HAPPO_API_KEY,
  //apiSecret: process.env.HAPPO_API_SECRET,

  pages: [
    { 
        url: 'https://readthedocs-static-dev.s3.us-east-2.amazonaws.com/qa/theme/sphinx4-theme1-docutils17-html5/demo/demo.html' //,
        // title: 'Sphinx 4, HTML 5'
    },
  ],

  targets: {
    'chrome-desktop': new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
  },
};
