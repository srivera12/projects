describe('Skills Page', () => { 
  beforeEach(() => { 
    cy.visit('/skills'); 
  }); 

  it('loads successfully', () => { 
    cy.url().should('include', '/skills'); 
  }); 

  describe('React Skill Dialog', () => { 
    it('displays react skill dialog when react icon is clicked', () => { 
      cy.get('[data-cy="react-icon"]').click(); 
      cy.get('[data-cy="react-dialog"]'); 
    }); 

    it('displays react course with functional button to course page', () => { 
      cy.get('[data-cy="react-icon"]').click(); 
      cy.get('[data-cy="react-bootcamp"]').contains('Read More').click(); 
      cy.url().should('include', '/courses/react-bootcamp'); 
    }); 
  }); 

  describe('TS/JS Skill Dialog', () => { 
    it('displays TS/JS skill dialog when TS/JS icon is clicked', () => { 
      cy.get('[data-cy="TS-JS-icon"]').click(); 
      cy.get('[data-cy="TS-JS-dialog"]'); 
    }); 

    it('displays typescript course with functional button to course page', () => { 
      cy.get('[data-cy="TS-JS-icon"]').click(); 
      cy.get('[data-cy="TS"]').contains('Read More').click(); 
      cy.url().should('include', '/courses/TS'); 
    }); 

    it('displays JS bootcamp with functional button to course page', () => { 
      cy.get('[data-cy="TS-JS-icon"]').click(); 
      cy.get('[data-cy="JS-bootcamp"]').contains('Read More').click(); 
      cy.url().should('include', '/courses/JS-bootcamp'); 
    }); 
  }); 

  describe('HTML/CSS Skill Dialog', () => { 
    it('displays HTML/CSS skill dialog when HTML/CSS icon is clicked', () => { 
      cy.get('[data-cy="HTML-CSS-icon"]').click(); 
      cy.get('[data-cy="HTML-CSS-dialog"]').should('exist'); 
    }); 

    it('displays HTML/CSS/JS cert course with functional button to course page', () => { 
      cy.get('[data-cy="HTML-CSS-icon"]').click(); 
      cy.get('[data-cy="HTML-CSS-JS-cert"]').contains('Read More').click(); 
      cy.url().should('include', '/courses/HTML-CSS-JS-cert'); 
    }); 

    it('displays complete frontend course with functional button to course page', () => { 
      cy.get('[data-cy="HTML-CSS-icon"]').click(); 
      cy.get('[data-cy="complete-frontend"]').contains('Read More').click(); 
      cy.url().should('include', '/courses/complete-frontend'); 
    }); 

    it('displays build 20 websites course with functional button to course page', () => { 
      cy.get('[data-cy="HTML-CSS-icon"]').click(); 
      cy.get('[data-cy="build-20-websites"]').contains('Read More').click(); 
      cy.url().should('include', '/courses/build-20-websites'); 
    }); 
  }); 
}); 
