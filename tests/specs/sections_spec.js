const sections = [
  '#inline-markup',
  '#math',
  '#literal-blocks',
  '#line-blocks',
  '#block-quotes',
  '#doctest-blocks',
  '#code-blocks',
  '#sidebar',
  '#footnotes',
  '#citations',
  '#glossary',
  '#targets',
  '#contents',
  '#centered-text',
  '#images',
  '#figures',
  '#admonitions',
  '#topics-sidebars-and-rubrics',
  '#target-footnotes',
  '#replacement-text',
  '#compound-paragraph',
  '#download-links',
  '#enumerated-lists',
  '#definition-lists',
  '#option-lists',
  '#field-list',
  '#bullet-lists #simple',
  '#bullet-lists #complex',
  '#bullet-lists #second-list-level',
  '#hlists',
  '#numbered-list',
  '#grid-tables',
  '#giant-tables',
  '#list-tables',
  '#test-py-module',
  '#c-api',
  '#javascript-api',
  '#generated-index',
  '#optional-parameter-args',
  '#data',
]

describe('Section', function () {
  before(() => {
    cy.visit('./docs/_build/html/index.html');
  });
  for (const section of sections) {
    it(section, function () {
      cy.get(section).happoScreenshot();
    });
  }
});
