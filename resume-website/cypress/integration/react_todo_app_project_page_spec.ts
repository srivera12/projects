describe('React To-Do App Project Page', () => {
  beforeEach(() => {
    cy.visit('/project-pages/react-todo-app');
  });

  it('successfully loads', () => {
    cy.url().should('include', '/project-pages/react-todo-app');
  });

  it('has functional project button', () => {
    cy.get('[data-cy="react-todo-app-project-button"]')
      .invoke('attr', 'href')
      .should('equal', 'https://objective-goldstine-cc2c68.netlify.app');
  });

  it('has functional github button', () => {
    cy.get('[data-cy="react-todo-app-github-button"]')
      .invoke('attr', 'href')
      .should('equal', 'https://github.com/srivera12/projects/tree/master/react-todo');
  });

  it('has functional back to projects button', () => {
    cy.get('[data-cy="projects-button"]').click();
    cy.url().should('include', '/projects');
  });
});

export {};
