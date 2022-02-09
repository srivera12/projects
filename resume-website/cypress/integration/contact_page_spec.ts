describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('loads successfully', () => {
    cy.url().should('include', '/contact');
  });

  it('opens email', () => {
    cy.get('[data-cy="email-link"]')
      .invoke('attr', 'href')
      .should('equal', 'mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website');
  });

  it('links to github', () => {
    cy.get('[data-cy="github-link"]').invoke('attr', 'href').should('equal', 'https://github.com/srivera12');
  });

  it('links to linkedin', () => {
    cy.get('[data-cy="linkedin-link"]')
      .invoke('attr', 'href')
      .should('equal', 'https://www.linkedin.com/in/sarahkrivera/');
  });

  it('has functional contact button', () => {
    cy.get('[data-cy="contact-button"]')
      .invoke('attr', 'href')
      .should('equal', 'mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website');
  });
});
