describe('Home Page', () => { 
  it('successfully loads', () => { 
    cy.visit('/'); 
    cy.url().should('equal', 'http://localhost:3000/'); 
  }); 

  describe('d20 roller tests', () => { 
    beforeEach(() => { 
      cy.visit('/'); 
    }); 

    it('should roll d20 when clicked', () => { 
      cy.get('[data-cy="d20"]').click(); 
      cy.get('[data-cy="d20-img"]').invoke('attr', 'src').should('not.equal', '/images/d20Pic.png'); 
    }); 

    it('should only provide a number 1-20', () => { 
      cy.get('[data-cy="d20"]').click(); 
      cy.get('[data-cy="rolled-text-title"]').should('include', /[1-9]|1[0-9]|20/); 
    }); 

    describe('roll tests', () => { 
      after(() => { 
        delete window['Cypress' as any]['d20_roll' as any]; 
      }); 

      it('should roll 1', () => { 
        window['Cypress' as any]['d20_roll'] = 1; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('Unlucky') 
          .invoke('text') 
          .should('equal', "Unlucky! If you'd like to practice, try using my d20 roller app!"); 
        cy.contains('d20 roller app').invoke('attr', 'href').should('equal', '/project-pages/d20-roller'); 
      }); 

      it('should roll 2', () => { 
        window['Cypress']['d20_roll'] = 2; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('Everyone') 
          .invoke('text') 
          .should( 
            'equal', 
            'Everyone has to start somewhere! Check out my earliest coding project, a to-do app using JavaScript!' 
          ); 
        cy.contains('to-do app using JavaScript').invoke('attr', 'href').should('equal', '/project-pages/JS-todo-app'); 
      }); 

      it('should roll 3', () => { 
        window['Cypress']['d20_roll'] = 3; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('Did') 
          .invoke('text') 
          .should( 
            'equal', 
            'Did you know that I started learning to code in April 2021? Check out the very first course I took!' 
          ); 
        cy.contains('very first course').invoke('attr', 'href').should('equal', '/courses/HTML-CSS-JS-cert'); 
      }); 

      it('should roll 4', () => { 
        window['Cypress']['d20_roll'] = 4; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('Did') 
          .invoke('text') 
          .should( 
            'equal', 
            'Did you know I used to be a teacher? Read all about it, and the great skills that experience taught me, on my character sheet.' 
          ); 
        cy.contains('character sheet').invoke('attr', 'href').should('equal', '/about'); 
      }); 

      it('should roll 5', () => { 
        window['Cypress']['d20_roll'] = 5; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('Feeling') 
          .invoke('text') 
          .should('equal', "Feeling swamped? Why don't you try out my React To-Do App to help keep track of things!"); 
        cy.contains('React To-Do App').invoke('attr', 'href').should('equal', '/project-pages/react-todo-app'); 
      }); 

      it('should roll 6', () => { 
        window['Cypress']['d20_roll'] = 6; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('When') 
          .invoke('text') 
          .should( 
            'equal', 
            'When I was in college, I studied environmental science and geology. You can read all about it and more on my character sheet.' 
          ); 
        cy.contains('character sheet').invoke('attr', 'href').should('equal', '/about'); 
      }); 

      it('should roll 7', () => { 
        window['Cypress']['d20_roll'] = 7; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('check out') 
          .invoke('text') 
          .should('equal', 'You can check out previous versions of my portfolio website in the archive.'); 
        cy.contains('archive').invoke('attr', 'href').should('equal', '/archive'); 
      }); 

      it('should roll 8', () => { 
        window['Cypress']['d20_roll'] = 8; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('Would') 
          .invoke('text') 
          .should('equal', "Would you like to take a look at some of the projects I've made?"); 
        cy.contains('projects').invoke('attr', 'href').should('equal', '/projects'); 
      }); 

      it('should roll 9', () => { 
        window['Cypress']['d20_roll'] = 9; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('What') 
          .invoke('text') 
          .should( 
            'equal', 
            'What do you like to do when you are offline? You can find out what I do in my spare time on the about page.' 
          ); 
        cy.contains('about page').invoke('attr', 'href').should('equal', '/about'); 
      }); 

      it('should roll 10', () => { 
        window['Cypress']['d20_roll'] = 10; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('Have') 
          .invoke('text') 
          .should('equal', 'Have you ever played a Fallout game? I made a mock Pip-Boy for one of my coding courses.'); 
        cy.contains('one of my coding courses').invoke('attr', 'href').should('equal', '/courses/complete-frontend'); 
      }); 

      it('should roll 11', () => { 
        window['Cypress']['d20_roll'] = 11; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('Did') 
          .invoke('text') 
          .should('equal', 'Did you know I made an academic tracker for my teenaged sister? Check it out here!'); 
        cy.contains('here').invoke('attr', 'href').should('equal', '/project-pages/academic-tracker'); 
      }); 

      it('should roll 12', () => { 
        window['Cypress']['d20_roll'] = 12; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('completed') 
          .invoke('text') 
          .should( 
            'equal', 
            'I completed a JavaScript Bootcamp and made some pretty cool projects. Check them out here!' 
          ); 
        cy.contains('here').invoke('attr', 'href').should('equal', '/courses/JS-bootcamp'); 
      }); 

      it('should roll 13', () => { 
        window['Cypress']['d20_roll'] = 13; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('If') 
          .invoke('text') 
          .should('equal', "If you'd like to jump straight to my code you can check it out on GitHub."); 
        cy.contains('on GitHub').invoke('attr', 'href').should('equal', 'https://github.com/srivera12'); 
      }); 

      it('should roll 14', () => { 
        window['Cypress']['d20_roll'] = 14; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('If') 
          .invoke('text') 
          .should( 
            'equal', 
            "If you'd like to contact me through email or LinkedIn, or even just check out my GitHub, head over to the contact page." 
          ); 
        cy.contains('contact page').invoke('attr', 'href').should('equal', '/contact'); 
      }); 

      it('should roll 15', () => { 
        window['Cypress']['d20_roll'] = 15; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('had') 
          .invoke('text') 
          .should('equal', "I've had practice making a variety of webpages during my Build 20 Websites course!"); 
        cy.contains('Build 20 Websites course').invoke('attr', 'href').should('equal', '/courses/build-20-websites'); 
      }); 

      it('should roll 16', () => { 
        window['Cypress']['d20_roll'] = 16; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('It') 
          .invoke('text') 
          .should( 
            'equal', 
            'It always feels great to make something that people find helpful. Check out this quote app I made for my mom, who is a Montessori teacher.' 
          ); 
        cy.contains('quote app').invoke('attr', 'href').should('equal', '/project-pages/montessori-quotes-app'); 
      }); 

      it('should roll 17', () => { 
        window['Cypress']['d20_roll'] = 17; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('Did') 
          .invoke('text') 
          .should( 
            'equal', 
            'Did you know I coded this website using TypeScript? I learned all about it when I completed this course.' 
          ); 
        cy.contains('this course').invoke('attr', 'href').should('equal', '/courses/TS'); 
      }); 

      it('should roll 18', () => { 
        window['Cypress']['d20_roll'] = 18; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('Since') 
          .invoke('text') 
          .should( 
            'equal', 
            "Since I've started learning to code, it's been so much fun learning new languages and get familiar with various tools and frameworks. Check out what I've learned over on the skills page." 
          ); 
        cy.contains('skills page').invoke('attr', 'href').should('equal', '/skills'); 
      }); 

      it('should roll 19', () => { 
        window['Cypress']['d20_roll'] = 19; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('React') 
          .invoke('text') 
          .should( 
            'equal', 
            'React is a powerful and popular web framework. I learned how to use it for projects like this website through this bootcamp.' 
          ); 
        cy.contains('this bootcamp').invoke('attr', 'href').should('equal', '/courses/react-bootcamp'); 
      }); 

      it('should roll 20', () => { 
        window['Cypress']['d20_roll'] = 20; 
        cy.get('[data-cy="d20"]').click(); 
        cy.contains('Great').invoke('text').should('equal', 'Great roll! Go ahead and tell me that you got a Nat 20!'); 
        cy.contains('tell me') 
          .invoke('attr', 'href') 
          .should('equal', 'mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website'); 
      }); 
    }); 
  }); 
}); 
