describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render h1 with Template string', () => {
    cy.get('h1').should('have.text', 'Template');
  });
});
