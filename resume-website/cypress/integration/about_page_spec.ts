describe('About Page', () => {
  it('loads successfully', () => {
    cy.visit('/about');
  });

  describe('Resume button', () => {
    it('provides resume', () => {
      cy.visit('/about');
      cy.get('[data-cy="resume-button"').click();
      //   add test to confirm resume is provided
    });
  });
});
