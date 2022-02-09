describe('Complete Frontend Course Page', () => {
  beforeEach(() => {
    cy.visit('/courses/complete-frontend');
  });

  it('loads successfully', () => {
    cy.url().should('include', '/courses/complete-frontend');
  });

  describe('Project Links', () => {
    it('has functional HTML project link', () => {
      cy.get('[data-cy="link-1"]')
        .invoke('attr', 'href')
        .should(
          'equal',
          'https://github.com/srivera12/learn-to-code/blob/master/stackskills/complete-front-end/htmlproject.html'
        );
    });

    it('has functional jQuery code link', () => {
      cy.get('[data-cy="link-2"]')
        .invoke('attr', 'href')
        .should(
          'equal',
          'https://github.com/srivera12/learn-to-code/blob/master/stackskills/complete-front-end/jquery.js'
        );
    });

    it('has functional Pip-Boy project link', () => {
      cy.get('[data-cy="link-3"]')
        .invoke('attr', 'href')
        .should(
          'equal',
          'https://github.com/srivera12/learn-to-code/tree/master/stackskills/complete-front-end/PipBoy'
        );
    });
  });

  it('has functional github button', () => {
    cy.get('[data-cy="github-link"]')
      .invoke('attr', 'href')
      .should('equal', 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/complete-front-end');
  });

  it('has functional back to skills button', () => {
    cy.get('[data-cy="skills-button"]').click();
    cy.url().should('include', '/skills');
  });
});
