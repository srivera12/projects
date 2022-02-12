describe('Academic Tracker Project Page', () => { 
  beforeEach(() => { 
    cy.visit('/project-pages/academic-tracker'); 
  }); 

  it('successfully loads', () => { 
    cy.url().should('include', '/project-pages/academic-tracker'); 
  }); 

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

  it('has functional back to projects button', () => { 
    cy.get('[data-cy="projects-button"]').click(); 
    cy.url().should('include', '/projects'); 
  }); 
}); 
