describe('Navigation', function () {
  before(() => {
    cy.visit('./docs/_build/html/index.html');
  });
  it('is visible', function () {
    cy.get('nav.wy-nav-side').happoScreenshot();
  });
  it('expands', () => {
    cy.get('a.reference.current').find('span.toctree-expand').first().click();
    cy.get('nav.wy-nav-side').happoScreenshot();
  })
});
