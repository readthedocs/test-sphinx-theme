const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  project: 'test-sphinx-theme',
  type: 'plain',

  targets: {
    'chrome-desktop': new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
      maxHeight: 3000,
    }),
  },
};
