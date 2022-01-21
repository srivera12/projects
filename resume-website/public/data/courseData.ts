import beginner from '../images/beginner.png';
import complete from '../images/complete.png';
import jsBootcamp from '../images/jsBootcamp.png';
import build20 from '../images/build20.png';
import typescript from '../images/typescript.jpeg';
import reactBootcamp from '../images/reactBootcamp.png';

interface CoursePageData {
  skill: string;
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
    skill: 'HTML/CSS',
    pathName: 'HTML-CSS-JS-cert',
    name: 'HTML, CSS, and JavaScript - Certification Class for Beginners',
    instructor: 'YouAccel Training',
    cert: beginner,
    blurb:
      'In this course, I took my first formal foray into the world of web development. From the baby steps of basic HTML document structure, to CSS stylings and cool hover effects, to the (at the time) complexities of JavaScript conditionals and loops.',
    skillsLearned: [
      'Foundational HTML tags and their uses. This was in order by topic, so the first lessons were pure HTML, without CSS.',
      'How to target elements by class name, id, and/or element type, and apply styles to get desired positions and appearances.',
      'Basic JavaScript. Introduced to the concepts of variables, arrays, loops, conditional statements, etc.',
    ],
    projectHighligts: [
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
    pathName: 'complete-frontend',
    name: 'The Complete Front-End Web Development Course!',
    instructor: 'Joseph Delgadillo',
    cert: complete,
    blurb:
      "This course included more recent functionalities of HTML5, CSS3, and JS6, but also added jQuery and Bootstrap. My personal favorite part of this course was the Pipboy from Bethesda's Fallout games, a project created with Bootstrap, jQuery, and vanilla Javascript.",
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
    skill: 'TS/JS',
    pathName: 'JS-bootcamp',
    name: 'JavaScript Beginner Bootcamp',
    instructor: 'Rob Merrill',
    cert: jsBootcamp,
    blurb:
      "With this bootcamp, I was able to really focus in on my Javascript skills to gain a solid foundation. While working through the content, I developed a confidence to write my own JS code to do what I wanted, rather than just repeating the same things I've seen instructors do in previous courses. During this course I made the To-Do Tracker and Quote Machine that you can check out and use in the 'Projects' section of this site.",
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
    skill: 'HTML/CSS',
    pathName: 'build-20-websites',
    name: 'The Complete Web Developer Course: Build 20 Websites',
    instructor: 'John Bura',
    cert: build20,
    blurb:
      'This course covered some foundational HTML and CSS skills in a project-based setting. Throughout the course, I made quite a few websites with varying structures, designs and styles. By the time I started this course, I had a fairly strong handle on these skills, so this course was straightforward and I completed it quickly. It was a good opportunity to really drill into my CSS skills and get more confident through repetition.',
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
    skill: 'TS/JS',
    pathName: 'TS',
    name: "TypeScript: The Complete Developer's Guide",
    instructor: 'Stephen Grider',
    cert: typescript,
    blurb:
      'This course covered Typescript comprehensively, from the foundational basics of simple type annotations all way to the complexities of using it with various JS libraries and web frameworks. It was exciting to be working on a course designed, not necessarily for beginners to software development, but rather developers who are beginners in this specific content. There was a lot of assumed knowledge, which made this course occasionally challenging, but ultimately was a great experience to move beyond basic tutorial.',
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
    skill: 'react',
    pathName: 'react-bootcamp',
    name: 'The Modern React Bootcamp',
    instructor: 'Colt Steele',
    cert: reactBootcamp,
    blurb:
      'This projects-based bootcamp covered both original and newer React concepts, so I now have a practical understanding of both class components and functional components that use hooks and contexts. There were a lot of larger and complex projects in this course, and the knowledge I gained from it allowed me to complete React projects completely on my own.',
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
