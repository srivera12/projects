describe('Typescript Course Page', () => { 
  beforeEach(() => { 
    cy.visit('/courses/TS'); 
  }); 

  it('loads successfully', () => { 
    cy.url().should('include', '/courses/TS'); 
  }); 

  describe('Project Links', () => { 
    it('has functional sorting app link', () => { 
      cy.get('[data-cy="link-1"]') 
        .invoke('attr', 'href') 
        .should('equal', 'https://github.com/srivera12/learn-to-code/tree/master/udemy/typescript/sort'); 
    }); 

    it('has functional typescript with Express project link', () => { 
      cy.get('[data-cy="link-2"]') 
        .invoke('attr', 'href') 
        .should('equal', 'https://github.com/srivera12/learn-to-code/tree/master/udemy/typescript/server'); 
    }); 

    it('has functional build basic web framework project link', () => { 
      cy.get('[data-cy="link-3"]') 
        .invoke('attr', 'href') 
        .should('equal', 'https://github.com/srivera12/learn-to-code/tree/master/udemy/typescript/web'); 
    }); 
  }); 

  it('has functional github button', () => { 
    cy.get('[data-cy="github-link"]') 
      .invoke('attr', 'href') 
      .should('equal', 'https://github.com/srivera12/learn-to-code/tree/master/udemy/typescript'); 
  }); 

  it('has functional back to skills button', () => { 
    cy.get('[data-cy="skills-button"]').click(); 
    cy.url().should('include', '/skills'); 
  }); 
}); 
