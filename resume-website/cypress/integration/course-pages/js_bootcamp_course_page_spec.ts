describe('JS Bootcamp Course Page', () => {
  beforeEach(() => {
    cy.visit('/courses/JS-bootcamp');
  });

  it('loads successfully', () => {
    cy.url().should('include', '/courses/JS-bootcamp');
  });

  describe('Project Links', () => {
    it('has functional Bear, Human, Gun Game link', () => {
      cy.get('[data-cy="link-1"]')
        .invoke('attr', 'href')
        .should(
          'equal',
          'https://github.com/srivera12/learn-to-code/tree/master/stackskills/javascript-beginner-bootcamp/bearHumanGunGame'
        );
    });

    it('has functional random quote machine link', () => {
      cy.get('[data-cy="link-2"]')
        .invoke('attr', 'href')
        .should(
          'equal',
          'https://github.com/srivera12/learn-to-code/tree/master/stackskills/javascript-beginner-bootcamp/quoteMachine'
        );
    });

    it('has functional react project link', () => {
      cy.get('[data-cy="link-3"]')
        .invoke('attr', 'href')
        .should(
          'equal',
          'https://github.com/srivera12/learn-to-code/blob/master/stackskills/javascript-beginner-bootcamp/react/reactProjectMenuWithProps.html'
        );
    });
  });

  it('has functional github button', () => {
    cy.get('[data-cy="github-link"]')
      .invoke('attr', 'href')
      .should(
        'equal',
        'https://github.com/srivera12/learn-to-code/tree/master/stackskills/javascript-beginner-bootcamp'
      );
  });

  it('has functional back to skills button', () => {
    cy.get('[data-cy="skills-button"]').click();
    cy.url().should('include', '/skills');
  });
});
