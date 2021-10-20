const { RemoteBrowserTarget } = require('happo.io');

const branch = process.env.CIRCLE_BRANCH;
const url = 'https://readthedocs-static-dev.s3.us-east-2.amazonaws.com/qa/theme/' + branch + '/index.html';

module.exports = {
  project: 'test-sphinx-theme',

  pages: [{ url: url, title: "styleguide" }],

  targets: {
    'chrome-desktop': new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
  },
};
