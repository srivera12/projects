describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('loads successfully', () => {
    cy.url().should('include', '/about');
  });

  describe('Resume button', () => {
    it('provides resume', () => {
      cy.get('[data-cy="resume-button"').click();
      //   add test to confirm resume is provided
    });
  });
});

export {};
