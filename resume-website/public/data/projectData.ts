import jsTodo from '../images/JSTodo.png';
import quoteApp from '../images/quoteApp.png';
import D20Roller from '../images/D20Roller.png';
import reactTodo from '../images/reactTodo.png';
import academicTracker from '../images/academicTracker.png';

interface ProjectData {
  pathName: string;
  name: string;
  pic: StaticImageData;
  projectLink: string;
  githubLink: string;
  blurb: string;
  approach: string;
  challenges: string[];
  reflections: string[];
}

const projectData: ProjectData[] = [
  {
    pathName: 'JS-todo-app',
    name: 'JavaScript To-Do App',
    pic: jsTodo,
    projectLink: '/projects/JS-todo/index.html',
    githubLink: 'https://github.com/srivera12/projects/tree/master/JS-todo',
    blurb:
      'This is a simple task tracker made using JavaScript. The first project I continued to develop by adding my own styles, features, and functionality. Saves tasks to local storage.',
    approach:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    challenges: [
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
    ],
    reflections: [
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
    ],
  },
  {
    pathName: 'montessori-quotes-app',
    name: 'Montessori Quotes App',
    pic: quoteApp,
    projectLink: '/projects/montessori-quote/index.html',
    githubLink: 'https://github.com/srivera12/projects/tree/master/montessori-quote',
    blurb:
      'Simple quote app I made for my mom, who is a Montessori teacher. I modified it from simply giving random quotes from an API to allowig you to search for quotes by topic or source.',
    approach:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    challenges: [
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
    ],
    reflections: [
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
    ],
  },
  {
    pathName: 'd20-roller',
    name: 'D20 Roller',
    pic: D20Roller,
    projectLink: 'https://cocky-volhard-99fcb6.netlify.app',
    githubLink: 'https://github.com/srivera12/projects/tree/master/d20-roller',
    blurb:
      "In an online class, the project was to make a dice roller in React. Being the fan of DnD that I am, I had to make it a d20 and add in the DM's response to the roll. It's been used in the place of a real d20 in a pinch.",
    approach:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    challenges: [
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
    ],
    reflections: [
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
    ],
  },
  {
    pathName: 'react-todo-app',
    name: 'React To-Do App',
    pic: reactTodo,
    projectLink: 'https://objective-goldstine-cc2c68.netlify.app',
    githubLink: 'https://github.com/srivera12/projects/tree/master/react-todo',
    blurb:
      'The newer and more complex version of my first task tracker. Made in React with hooks, a context, and a dispatch, it has all of the features of the JS one, but with the addition of editing tasks, deleting individual tasks, and a celebration when all tasks are complete.',
    approach:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    challenges: [
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
    ],
    reflections: [
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
    ],
  },
  {
    pathName: 'academic-tracker',
    name: 'Academic Tracker',
    pic: academicTracker,
    projectLink: 'https://awesome-gates-3270af.netlify.app',
    githubLink: 'https://github.com/srivera12/projects/tree/master/academic-tracker',
    blurb:
      'I made this for my little sister, who is in high school. She needed something that determined if she made her assignment quotas for the week in each class, with as little effort as possible. Also features the ability to customize the background, and saves classes and customizations in local storage.',
    approach:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    challenges: [
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
    ],
    reflections: [
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit. Nunc consequat interdum varius sit. Nunc consequat interdum varius sit.',
    ],
  },
];

export default projectData;
