describe('HTML/CSS/JS Cert Course Page', () => { 
  beforeEach(() => { 
    cy.visit('/courses/HTML-CSS-JS-cert'); 
  }); 

  it('loads successfully', () => { 
    cy.url().should('include', '/courses/HTML-CSS-JS-cert'); 
  }); 

  describe('Project Links', () => { 
    it('has functional HTML project link', () => { 
      cy.get('[data-cy="link-1"]') 
        .invoke('attr', 'href') 
        .should( 
          'equal', 
          'https://github.com/srivera12/learn-to-code/blob/master/stackskills/beginner-html-css-js/html/project.html' 
        ); 
    }); 

    it('has functional CSS project link', () => { 
      cy.get('[data-cy="link-2"]') 
        .invoke('attr', 'href') 
        .should( 
          'equal', 
          'https://github.com/srivera12/learn-to-code/blob/master/stackskills/beginner-html-css-js/css/cssproject.html' 
        ); 
    }); 

    it('has functional JS project link', () => { 
      cy.get('[data-cy="link-3"]') 
        .invoke('attr', 'href') 
        .should( 
          'equal', 
          'https://github.com/srivera12/learn-to-code/blob/master/stackskills/beginner-html-css-js/js/background-randomizer.html' 
        ); 
    }); 
  }); 

  it('has functional github button', () => { 
    cy.get('[data-cy="github-link"]') 
      .invoke('attr', 'href') 
      .should('equal', 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/beginner-html-css-js'); 
  }); 

  it('has functional back to skills button', () => { 
    cy.get('[data-cy="skills-button"]').click(); 
    cy.url().should('include', '/skills'); 
  }); 
}); 
