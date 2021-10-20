const { RemoteBrowserTarget } = require('happo.io');

const branch = process.env.CIRCLE_BRANCH;
const url = 'https://readthedocs-static-dev.s3.us-east-2.amazonaws.com/qa/theme/' + branch + '/index.html';

module.exports = {
  project: 'test-sphinx-theme',

  pages: [
      { url: url + "#inline-markup", title: "Inline markup" }
      { url: url + "#math", title: "Math" }
      { url: url + "#literal-blocks", title: "Literal blocks" }
      { url: url + "#line-blocks", title: "Line blocks" }
      { url: url + "#doctest-blocks", title: "Doctest blocks" }
      { url: url + "#code-blocks", title: "Code blocks" }
      { url: url + "#sidebar", title: "Sidebar" }
      { url: url + "#code-with-sidebar", title: "Code with sidebar" }
      { url: url + "#footnotes", title: "Footnotes" }
      { url: url + "#citations", title: "Citations" }
      { url: url + "#targets", title: "Targets" }
      { url: url + "#directives", title: "Directives" }
      { url: url + "#images", title: "Images" }
      { url: url + "#figures", title: "Figures" }
      { url: url + "#admonitions", title: "Admonitions" }
      { url: url + "#topics-sidebars-and-rubrics", title: "Topics, sidebars, and rubrics" }
      { url: url + "#compound-paragraph", title: "Compound paragraph" }
      { url: url + "#enumerated-lists", title: "Enumerated lists" }
      { url: url + "#definition-lists", title: "Definition lists" }
      { url: url + "#option-lists", title: "Option lists" }
      { url: url + "#field-lists", title: "Field lists" }
      { url: url + "#bullet-lists", title: "Bullet lists" }
      { url: url + "#second-list-level", title: "Second level lists" }
      { url: url + "#hlists", title: "Hlists" }
      { url: url + "#grid-tables", title: "Grid tables" }
      { url: url + "#giant-tables", title: "Giant tables" }
      { url: url + "#list-tables", title: "List tables" }
      { url: url + "#test-py-module", title: "Python API" }
      { url: url + "#c-api", title: "C API" }
      { url: url + "#javascript-api", title: "JavaScript API" }
      { url: url + "#generated-index", title: "Generated Index" }
  ],

  targets: {
    'chrome-desktop': new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
      maxHeight: 1000,
    }),
  },
};
