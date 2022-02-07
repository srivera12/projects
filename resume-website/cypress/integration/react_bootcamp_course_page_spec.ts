describe('React Bootcamp Course Page', () => {
  beforeEach(() => {
    cy.visit('/courses/react-bootcamp');
  });

  it('loads successfully', () => {
    cy.url().should('include', '/courses/react-bootcamp');
  });

  describe('Project Links', () => {
    it('has functional color boxes with forms app link', () => {
      cy.get('[data-cy="link-1"]')
        .invoke('attr', 'href')
        .should(
          'equal',
          'https://github.com/srivera12/learn-to-code/tree/master/udemy/modern-react-bootcamp/color-boxes-with-forms'
        );
    });

    it('has functional hooks todo app link', () => {
      cy.get('[data-cy="link-2"]')
        .invoke('attr', 'href')
        .should(
          'equal',
          'https://github.com/srivera12/learn-to-code/tree/master/udemy/modern-react-bootcamp/hooks-todo'
        );
    });

    it('has functional color palette project link', () => {
      cy.get('[data-cy="link-3"]')
        .invoke('attr', 'href')
        .should(
          'equal',
          'https://github.com/srivera12/learn-to-code/tree/master/udemy/modern-react-bootcamp/massive-color-project'
        );
    });
  });

  it('has functional github button', () => {
    cy.get('[data-cy="github-link"]')
      .invoke('attr', 'href')
      .should('equal', 'https://github.com/srivera12/learn-to-code/tree/master/udemy/modern-react-bootcamp');
  });

  it('has functional back to skills button', () => {
    cy.get('[data-cy="skills-button"]').click();
    cy.url().should('include', '/skills');
  });
});

export {};
