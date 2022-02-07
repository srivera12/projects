describe('Montessori Quotes App Project Page', () => {
  beforeEach(() => {
    cy.visit('/project-pages/montessori-quotes-app');
  });

  it('successfully loads', () => {
    cy.url().should('include', '/project-pages/montessori-quotes-app');
  });

  it('has functional project button', () => {
    cy.get('[data-cy="montessori-quotes-app-project-button"]')
      .invoke('attr', 'href')
      .should('include', '/projects/montessori-quote/index.html');
  });

  it('has functional github button', () => {
    cy.get('[data-cy="montessori-quotes-app-github-button"]')
      .invoke('attr', 'href')
      .should('equal', 'https://github.com/srivera12/projects/tree/master/montessori-quote');
  });

  it('has functional back to projects button', () => {
    cy.get('[data-cy="projects-button"]').click();
    cy.url().should('include', '/projects');
  });
});

export {};
