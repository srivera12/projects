describe('Projects Page', () => {
  beforeEach(() => {
    cy.visit('/projects');
  });

  it('loads successfully', () => {
    cy.url().should('include', '/projects');
  });

  it('provides website design plan', () => {
    cy.get('[data-cy="design-plan-button"]').click();
    // add test to confirm design plan is provided
  });

  describe('JS To-Do App Info', () => {
    it('has functional project button', () => {
      cy.get('[data-cy="JS-todo-app-project-button"]')
        .invoke('attr', 'href')
        .should('include', '/projects/JS-todo/index.html');
    });

    it('has functional github button', () => {
      cy.get('[data-cy="JS-todo-app-github-button"]')
        .invoke('attr', 'href')
        .should('equal', 'https://github.com/srivera12/projects/tree/master/JS-todo');
    });

    it('has functional read more button', () => {
      cy.get('[data-cy="JS-todo-app-read-more-button"]')
        .invoke('attr', 'href')
        .should('include', '/project-pages/JS-todo-app');
    });
  });

  describe('Montessori Quote App Info', () => {
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

    it('has functional read more button', () => {
      cy.get('[data-cy="montessori-quotes-app-read-more-button"]')
        .invoke('attr', 'href')
        .should('include', '/project-pages/montessori-quotes-app');
    });
  });

  describe('D20 Roller App Info', () => {
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

    it('has functional read more button', () => {
      cy.get('[data-cy="d20-roller-read-more-button"]')
        .invoke('attr', 'href')
        .should('include', '/project-pages/d20-roller');
    });
  });

  describe('React To-Do App Info', () => {
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

    it('has functional read more button', () => {
      cy.get('[data-cy="react-todo-app-read-more-button"]')
        .invoke('attr', 'href')
        .should('include', '/project-pages/react-todo-app');
    });
  });

  describe('Academic Tracker App Info', () => {
    it('has functional project button', () => {
      cy.get('[data-cy="academic-tracker-project-button"]')
        .invoke('attr', 'href')
        .should('equal', 'https://awesome-gates-3270af.netlify.app');
    });

    it('has functional github button', () => {
      cy.get('[data-cy="academic-tracker-github-button"]')
        .invoke('attr', 'href')
        .should('equal', 'https://github.com/srivera12/projects/tree/master/academic-tracker');
    });

    it('has functional read more button', () => {
      cy.get('[data-cy="academic-tracker-read-more-button"]')
        .invoke('attr', 'href')
        .should('include', '/project-pages/academic-tracker');
    });
  });
});
