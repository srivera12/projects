describe('Archive Page', () => { 
  beforeEach(() => { 
    cy.visit('/archive'); 
  }); 

  it('successfully loads', () => { 
    cy.url().should('include', '/archive'); 
  }); 

  it('has functional previous website button', () => { 
    cy.get('[data-cy="web1-button"]') 
      .invoke('attr', 'href') 
      .should('equal', 'https://dazzling-bassi-9c5808.netlify.app'); 
  }); 
}); 
