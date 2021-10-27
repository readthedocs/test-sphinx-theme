const { RemoteBrowserTarget } = require('happo.io');
const happoPluginScrape = require('happo-plugin-scrape');
const path = require('path');

const branch = process.env.CIRCLE_BRANCH;
const url = 'file://' + path.join(__dirname, 'docs', '_build', 'html', 'index.html');

const examples = [
  /*
  { name: 'Inline markup', selector: '#inline-markup' },
  { name: 'Math', selector: '#math' },
  { name: 'Literal blocks', selector: '#literal-blocks' },
  { name: 'Line blocks', selector: '#line-blocks' },
  { name: 'Block quotes', selector: '#block-quotes' },
  { name: 'Doctest blocks', selector: '#doctest-blocks' },
  { name: 'Code blocks', selector: '#code-blocks' },
  { name: 'Sidebar', selector: '#sidebar' },
  */
  { name: 'Body', selector: '.wy-grid-for-nav' },
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
