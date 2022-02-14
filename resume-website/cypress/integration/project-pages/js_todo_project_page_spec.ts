describe('JS To-Do App Project Page', () => { 
  beforeEach(() => { 
    cy.visit('/project-pages/JS-todo-app'); 
  }); 

  it('successfully loads', () => { 
    cy.url().should('include', '/project-pages/JS-todo-app'); 
  }); 

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

  it('has functional back to projects button', () => { 
    cy.get('[data-cy="projects-button"]').click(); 
    cy.url().should('include', '/projects'); 
  }); 
}); 
