import beginner from '../images/beginner.png';
import complete from '../images/complete.png';
import jsBootcamp from '../images/jsBootcamp.png';
import build20 from '../images/build20.png';
import typescript from '../images/typescript.jpeg';
import reactBootcamp from '../images/reactBootcamp.png';

interface CourseData {
  skill: string;
  name: string;
  pathName: string;
  instructor: string;
  cert: StaticImageData;
  blurb: string;
}

const courseData: CourseData[] = [
  {
    skill: 'HTML/CSS',
    name: 'HTML, CSS, and JavaScript - Certification Class for Beginners',
    pathName: 'HTML-CSS-JS-cert',
    instructor: 'YouAccel Training',
    cert: beginner,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'HTML/CSS',
    name: 'The Complete Front-End Web Development Course!',
    pathName: 'complete-frontend',
    instructor: 'Joseph Delgadillo',
    cert: complete,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'TS/JS',
    name: 'JavaScript Beginner Bootcamp',
    pathName: 'JS-bootcamp',
    instructor: 'Rob Merrill',
    cert: jsBootcamp,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'HTML/CSS',
    name: 'The Complete Web Developer Course: Build 20 Websites',
    pathName: 'build-20-websites',
    instructor: 'John Bura',
    cert: build20,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'TS/JS',
    name: "TypeScript: The Complete Developer's Guide",
    pathName: 'TS',
    instructor: 'Stephen Grider',
    cert: typescript,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'react',
    name: 'The Modern React Bootcamp',
    pathName: 'react-bootcamp',
    instructor: 'Colt Steele',
    cert: reactBootcamp,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
];

export default courseData;
