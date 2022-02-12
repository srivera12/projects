describe('Build 20 Websites Course Page', () => { 
  beforeEach(() => { 
    cy.visit('/courses/build-20-websites'); 
  }); 

  it('loads successfully', () => { 
    cy.url().should('include', '/courses/build-20-websites'); 
  }); 

  describe('Project Links', () => { 
    it('has functional minimal webpage link', () => { 
      cy.get('[data-cy="link-1"]') 
        .invoke('attr', 'href') 
        .should( 
          'equal', 
          'https://github.com/srivera12/learn-to-code/tree/master/stackskills/make-20-websites/minimal-site-1' 
        ); 
    }); 

    it('has functional mock photography webpage link', () => { 
      cy.get('[data-cy="link-2"]') 
        .invoke('attr', 'href') 
        .should( 
          'equal', 
          'https://github.com/srivera12/learn-to-code/tree/master/stackskills/make-20-websites/photography-site' 
        ); 
    }); 

    it('has functional simple webpage using js link', () => { 
      cy.get('[data-cy="link-3"]') 
        .invoke('attr', 'href') 
        .should( 
          'equal', 
          'https://github.com/srivera12/learn-to-code/tree/master/stackskills/make-20-websites/basic-site-redux' 
        ); 
    }); 
  }); 

  it('has functional github button', () => { 
    cy.get('[data-cy="github-link"]') 
      .invoke('attr', 'href') 
      .should('equal', 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/make-20-websites'); 
  }); 

  it('has functional back to skills button', () => { 
    cy.get('[data-cy="skills-button"]').click(); 
    cy.url().should('include', '/skills'); 
  }); 
}); 
