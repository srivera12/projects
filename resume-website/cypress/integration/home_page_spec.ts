describe('Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  describe('d20 roller tests', () => {
    it('should roll d20 when clicked', () => {
      cy.visit('/');
      cy.get('[data-cy="d20"]').click();
      cy.get('[data-cy="d20-img').invoke('attr', 'src').should('not.equal', '/images/d20Pic.png');
    });

    it('should only provide a number 1-20', () => {
      cy.visit('/');
      cy.get('[data-cy="d20"]').click();
      cy.get('[data-cy=rolled-text-title]').should('include', /[1-9]|1[0-9]|20/);
    });

    // it('should display intended text when 1 is rolled', () => {
    //   cy.visit('/');
    //   cy.get('[data-cy="d20"]')
    //     .click()
    //     .then(() => {
    //       if (cy.contains(/1/)) {
    //         cy.get('[data-cy="fun-fact"]').should('include', 'Unlucky!');
    //         cy.get('[data-cy="fun-fact-link]').invoke('attr', 'href').should('equal', '/project-pages/d20-roller');
    //       } else {
    //       }
    //     });
    // });
  });
});
