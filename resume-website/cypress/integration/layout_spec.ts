describe('layout', () => {
  describe('navbar', () => {
    it('navigates home', () => {
      cy.visit('/');
      cy.get('[data-cy="home-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/');
    });

    it('navigates to about', () => {
      cy.visit('/');
      cy.get('[data-cy="about-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/about');
    });

    it('navigates to skills', () => {
      cy.visit('/');
      cy.get('[data-cy="skills-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/skills');
    });

    it('navigates to projects', () => {
      cy.visit('/');
      cy.get('[data-cy="projects-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/projects');
    });

    it('navigates to contact', () => {
      cy.visit('/');
      cy.get('[data-cy="contact-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/contact');
    });

    it('navigates to archive', () => {
      cy.visit('/');
      cy.get('[data-cy="archive-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/archive');
    });
  });

  describe('footer', () => {
    it('links to about', () => {
      cy.visit('/');
      cy.get('[data-cy="name-link"]').click();
      cy.url().should('equal', 'http://localhost:3000/about');
    });

    it('links to github', () => {
      cy.visit('/');
      cy.get('[data-cy="github-icon"]').invoke('attr', 'href').should('equal', 'https://github.com/srivera12');
    });

    it('open email', () => {
      cy.visit('/');
      cy.get('[data-cy="contact-button"]')
        .invoke('attr', 'href')
        .should('equal', 'mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website');
    });

    it('links to linkedIn', () => {
      cy.visit('/');
      cy.get('[data-cy="linkedin-icon"]')
        .invoke('attr', 'href')
        .should('equal', 'https://www.linkedin.com/in/sarahkrivera/');
    });
  });
});
