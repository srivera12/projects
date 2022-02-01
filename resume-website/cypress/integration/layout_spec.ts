describe('layout', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('navbar', () => {
    it('navigates home', () => {
      cy.get('[data-cy="home-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/');
    });

    it('navigates to about', () => {
      cy.get('[data-cy="about-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/about');
    });

    it('navigates to skills', () => {
      cy.get('[data-cy="skills-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/skills');
    });

    it('navigates to projects', () => {
      cy.get('[data-cy="projects-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/projects');
    });

    it('navigates to contact', () => {
      cy.get('[data-cy="contact-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/contact');
    });

    it('navigates to archive', () => {
      cy.get('[data-cy="archive-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/archive');
    });
  });

  describe('footer', () => {
    it('links to about', () => {
      cy.get('[data-cy="name-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/about');
    });

    it('links to github', () => {
      cy.get('[data-cy="github-icon"]').invoke('attr', 'href').should('equal', 'https://github.com/srivera12');
    });

    it('open email', () => {
      cy.get('[data-cy="contact-button"]')
        .invoke('attr', 'href')
        .should('equal', 'mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website');
    });

    it('links to linkedIn', () => {
      cy.get('[data-cy="linkedin-icon"]')
        .invoke('attr', 'href')
        .should('equal', 'https://www.linkedin.com/in/sarahkrivera/');
    });
  });
});
