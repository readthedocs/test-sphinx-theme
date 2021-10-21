const { RemoteBrowserTarget } = require('happo.io');
const happoPluginScrape = require('happo-plugin-scrape');

const branch = process.env.CIRCLE_BRANCH;
const url = 'https://readthedocs-static-dev.s3.us-east-2.amazonaws.com/qa/theme/' + branch + '/index.html';

const examples = [
  { name: 'Inline markup', selector: 'section#inline-markup' },
];

module.exports = {
  project: 'test-sphinx-theme',
  type: 'plain',

  plugins: [
    happoPluginScrape({
      pages: [{
        url: url,
        examples: examples,
      }],
    }),
  ],

  targets: {
    'chrome-desktop': new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
      maxHeight: 1000,
    }),
  },
};
