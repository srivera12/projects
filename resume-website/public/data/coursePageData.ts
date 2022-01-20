import beginner from '../images/beginner.png';
import complete from '../images/complete.png';
import jsBootcamp from '../images/jsBootcamp.png';
import build20 from '../images/build20.png';
import typescript from '../images/typescript.jpeg';
import reactBootcamp from '../images/reactBootcamp.png';

interface CoursePageData {
  pathName: string;
  name: string;
  instructor: string;
  cert: StaticImageData;
  blurb: string;
  skillsLearned: string[];
  projectHighligts: Project[];
  githubLink: string;
}

interface Project {
  name: string;
  link: string;
}

const coursePageData: CoursePageData[] = [
  {
    pathName: 'HTML-CSS-JS-cert',
    name: 'HTML, CSS, and JavaScript - Certification Class for Beginners',
    instructor: 'YouAccel Training',
    cert: beginner,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/beginner-html-css-js',
  },
  {
    pathName: 'complete-frontend',
    name: 'The Complete Front-End Web Development Course!',
    instructor: 'Joseph Delgadillo',
    cert: complete,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/complete-front-end',
  },
  {
    pathName: 'JS-bootcamp',
    name: 'JavaScript Beginner Bootcamp',
    instructor: 'Rob Merrill',
    cert: jsBootcamp,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/javascript-beginner-bootcamp',
  },
  {
    pathName: 'build-20-websites',
    name: 'The Complete Web Developer Course: Build 20 Websites',
    instructor: 'John Bura',
    cert: build20,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/make-20-websites',
  },
  {
    pathName: 'TS',
    name: "TypeScript: The Complete Developer's Guide",
    instructor: 'Stephen Grider',
    cert: typescript,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/typescript',
  },
  {
    pathName: 'react-bootcamp',
    name: 'The Modern React Bootcamp',
    instructor: 'Colt Steele',
    cert: reactBootcamp,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/modern-react-bootcamp',
  },
];

export default coursePageData;
