describe('Layout', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Navbar', () => {
    it('navigates home', () => {
      cy.get('[data-cy="home-link"]').click();
      cy.url().should('include', '/');
    });

    it('navigates to about', () => {
      cy.get('[data-cy="about-link"]').click();
      cy.url().should('include', '/about');
    });

    it('navigates to skills', () => {
      cy.get('[data-cy="skills-link"]').click();
      cy.url().should('include', '/skills');
    });

    it('navigates to projects', () => {
      cy.get('[data-cy="projects-link"]').click();
      cy.url().should('include', '/projects');
    });

    it('navigates to contact', () => {
      cy.get('[data-cy="contact-link"]').click();
      cy.url().should('include', '/contact');
    });

    it('navigates to archive', () => {
      cy.get('[data-cy="archive-link"]').click();
      cy.url().should('include', '/archive');
    });
  });

  describe('Footer', () => {
    it('links to about', () => {
      cy.get('[data-cy="name-link"]').click();
      cy.url().should('include', '/about');
    });

    it('links to github', () => {
      cy.get('[data-cy="github-icon"]').invoke('attr', 'href').should('equal', 'https://github.com/srivera12');
    });

    it('opens email', () => {
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

  describe('Mobile Layout', () => {
    beforeEach(() => {
      cy.viewport(450, 750);
    });

    describe('Mobile Navbar', () => {
      it('navigates home', () => {
        cy.get('[data-cy="home-link"]').click();
        cy.url().should('include', '/');
      });

      describe('Mobile NavBar Drawer', () => {
        beforeEach(() => {
          cy.get('[data-cy="menu-button"]').click();
        });

        it('navigates to about', () => {
          cy.get('[data-cy="about-link"]').click();
          cy.url().should('include', '/about');
        });

        it('navigates to skills', () => {
          cy.get('[data-cy="skills-link"]').click();
          cy.url().should('include', '/skills');
        });

        it('navigates to projects', () => {
          cy.get('[data-cy="projects-link"]').click();
          cy.url().should('include', '/projects');
        });

        it('navigates to contact', () => {
          cy.get('[data-cy="contact-link"]').click();
          cy.url().should('include', '/contact');
        });

        it('navigates to archive', () => {
          cy.get('[data-cy="archive-link"]').click();
          cy.url().should('include', '/archive');
        });

        it('links to about', () => {
          cy.get('[data-cy="name-link"]').click();
          cy.url().should('include', '/about');
        });

        it('links to github', () => {
          cy.get('[data-cy="github-icon"]').invoke('attr', 'href').should('equal', 'https://github.com/srivera12');
        });

        it('opens email', () => {
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
  });
});
