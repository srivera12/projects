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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
