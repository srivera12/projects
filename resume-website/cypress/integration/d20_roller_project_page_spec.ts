describe('D20 Roller Project Page', () => {
  beforeEach(() => {
    cy.visit('/project-pages/d20-roller');
  });

  it('successfully loads', () => {
    cy.url().should('include', '/project-pages/d20-roller');
  });

  it('has functional project button', () => {
    cy.get('[data-cy="d20-roller-project-button"]')
      .invoke('attr', 'href')
      .should('equal', 'https://cocky-volhard-99fcb6.netlify.app');
  });

  it('has functional github button', () => {
    cy.get('[data-cy="d20-roller-github-button"]')
      .invoke('attr', 'href')
      .should('equal', 'https://github.com/srivera12/projects/tree/master/d20-roller');
  });

  it('has functional back to projects button', () => {
    cy.get('[data-cy="projects-button"]').click();
    cy.url().should('include', '/projects');
  });
});
