import beginner from '../images/beginner.png';
import complete from '../images/complete.png';
import jsBootcamp from '../images/jsBootcamp.png';
import build20 from '../images/build20.png';
import typescript from '../images/typescript.jpeg';
import reactBootcamp from '../images/reactBootcamp.png';

interface CoursePageData {
  skill: string;
  skillDataCy: string;
  pathName: string;
  name: string;
  instructor: string;
  certPath: string;
  blurb: string;
  skillsLearned: string[];
  projectHighlights: Project[];
  githubLink: string;
}

interface Project {
  name: string;
  link: string;
}

const coursePageData: CoursePageData[] = [
  {
    skill: 'HTML/CSS',
    skillDataCy: 'HTML-CSS',
    pathName: 'HTML-CSS-JS-cert',
    name: 'HTML, CSS, and JavaScript - Certification Class for Beginners',
    instructor: 'YouAccel Training',
    certPath: '/images/beginner.png',
    blurb:
      'In this course, I took my first formal foray into the world of web development. From the baby steps of basic HTML document structure, to CSS stylings and cool hover effects, to the (at the time) complexities of JavaScript conditionals and loops.',
    skillsLearned: [
      'Foundational HTML tags and their uses. This was in order by topic, so the first lessons were pure HTML, without CSS.',
      'How to target elements by class name, id, and/or element type, and apply styles to get desired positions and appearances.',
      'Basic JavaScript. Introduced to the concepts of variables, arrays, loops, conditional statements, etc.',
    ],
    projectHighlights: [
      {
        name: 'HTML Project - Webpage Using Only HTML',
        link: 'https://github.com/srivera12/learn-to-code/blob/master/stackskills/beginner-html-css-js/html/project.html',
      },
      {
        name: 'CSS Project - Webpage Fully Styled with CSS',
        link: 'https://github.com/srivera12/learn-to-code/blob/master/stackskills/beginner-html-css-js/css/cssproject.html',
      },
      {
        name: 'JavaScript Project - Randomize Background Color with JavaScript',
        link: 'https://github.com/srivera12/learn-to-code/blob/master/stackskills/beginner-html-css-js/js/background-randomizer.html',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/beginner-html-css-js',
  },
  {
    skill: 'HTML/CSS',
    skillDataCy: 'HTML-CSS',
    pathName: 'complete-frontend',
    name: 'The Complete Front-End Web Development Course!',
    instructor: 'Joseph Delgadillo',
    certPath: '/images/complete.png',
    blurb:
      "This course included more recent functionalities of HTML5, CSS3, and JS6, but also added jQuery and Bootstrap. My personal favorite part of this course was the Pipboy from Bethesda's Fallout games, a project created with Bootstrap, jQuery, and vanilla Javascript.",
    skillsLearned: [
      'More recent/more semantic HTML.',
      'Bootstrap/using a CSS framework in general.',
      'More comprehensive JavaScript, and jQuery.',
    ],
    projectHighlights: [
      {
        name: 'HTML Project - Webpage using more modern HTML.',
        link: 'https://github.com/srivera12/learn-to-code/blob/master/stackskills/complete-front-end/htmlproject.html',
      },
      {
        name: 'Exploring jQuery Features',
        link: 'https://github.com/srivera12/learn-to-code/blob/master/stackskills/complete-front-end/jquery.js',
      },
      {
        name: 'Pip-Boy from FallOut',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/complete-front-end/PipBoy',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/complete-front-end',
  },
  {
    skill: 'TS/JS',
    skillDataCy: 'TS-JS',
    pathName: 'JS-bootcamp',
    name: 'JavaScript Beginner Bootcamp',
    instructor: 'Rob Merrill',
    certPath: '/images/jsBootcamp.png',
    blurb:
      "With this bootcamp, I was able to really focus in on my Javascript skills to gain a solid foundation. While working through the content, I developed a confidence to write my own JS code to do what I wanted, rather than just repeating the same things I've seen instructors do in previous courses. During this course I made the To-Do Tracker and Quote Machine that you can check out and use in the 'Projects' section of this site.",
    skillsLearned: [
      'Deeper understanding of JS and how to utilize it more independently.',
      'Introduced to algorithm challenges.',
      'Introduced to React.',
    ],
    projectHighlights: [
      {
        name: 'Bear, Human, Gun Game (similar to rock, paper, scissors)',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/javascript-beginner-bootcamp/bearHumanGunGame',
      },
      {
        name: 'Random Quote Machine Using An API',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/javascript-beginner-bootcamp/quoteMachine',
      },
      {
        name: 'React Project - Mock Social Media Page',
        link: 'https://github.com/srivera12/learn-to-code/blob/master/stackskills/javascript-beginner-bootcamp/react/reactProjectMenuWithProps.html',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/javascript-beginner-bootcamp',
  },
  {
    skill: 'HTML/CSS',
    skillDataCy: 'HTML-CSS',
    pathName: 'build-20-websites',
    name: 'The Complete Web Developer Course: Build 20 Websites',
    instructor: 'John Bura',
    certPath: '/images/build20.png',
    blurb:
      'This course covered some foundational HTML and CSS skills in a project-based setting. Throughout the course, I made quite a few websites with varying structures, designs and styles. By the time I started this course, I had a fairly strong handle on these skills, so this course was straightforward and I completed it quickly. It was a good opportunity to really drill into my CSS skills and get more confident through repetition.',
    skillsLearned: [
      'Using CSS to structure a webpage into columns, shapes, etc.',
      'Utilizing tools like Font Awesome.',
      'Using pseudo-elements in CSS designs.',
    ],
    projectHighlights: [
      {
        name: 'Minimal Webpage with Columns',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/make-20-websites/minimal-site-1',
      },
      {
        name: 'Mock Photography Site with Hover Effects',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/make-20-websites/photography-site',
      },
      {
        name: 'Simple Site with JavaScript',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/make-20-websites/basic-site-redux',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/make-20-websites',
  },
  {
    skill: 'TS/JS',
    skillDataCy: 'TS-JS',
    pathName: 'TS',
    name: "TypeScript: The Complete Developer's Guide",
    instructor: 'Stephen Grider',
    certPath: '/images/typescript.jpeg',
    blurb:
      'This course covered Typescript comprehensively, from the foundational basics of simple type annotations all way to the complexities of using it with various JS libraries and web frameworks. It was exciting to be working on a course designed, not necessarily for beginners to software development, but rather developers who are beginners in this specific content. There was a lot of assumed knowledge, which made this course occasionally challenging, but ultimately was a great experience to move beyond basic tutorial.',
    skillsLearned: [
      'Foundational type annotations - variables, functions, arrays, etc.',
      'How to type using interfacts, tuples, generics, etc.',
      'Extracting/refactoring logic in order to make components reusable.',
    ],
    projectHighlights: [
      {
        name: 'Sorting App',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/typescript/sort',
      },
      {
        name: 'Using TypeScript with Express',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/typescript/server',
      },
      {
        name: 'Building Our Own Basic Web Framework',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/typescript/web',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/typescript',
  },
  {
    skill: 'react',
    skillDataCy: 'react',
    pathName: 'react-bootcamp',
    name: 'The Modern React Bootcamp',
    instructor: 'Colt Steele',
    certPath: '/images/reactBootcamp.png',
    blurb:
      'This projects-based bootcamp covered both original and newer React concepts, so I now have a practical understanding of both class components and functional components that use hooks and contexts. There were a lot of larger and complex projects in this course, and the knowledge I gained from it allowed me to complete React projects completely on my own.',
    skillsLearned: [
      'Understanding of how React works and how to use it independently.',
      'How to use tools like Create React App and Next JS.',
      'Made apps with both traditional class components and newer functional components with hooks and contexts.',
    ],
    projectHighlights: [
      {
        name: 'Color Boxes App Using Forms',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/modern-react-bootcamp/color-boxes-with-forms',
      },
      {
        name: 'React To-Do App Using Hooks',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/modern-react-bootcamp/hooks-todo',
      },
      {
        name: 'Massive Color Palette Project',
        link: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/modern-react-bootcamp/massive-color-project',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/modern-react-bootcamp',
  },
];

export default coursePageData;
