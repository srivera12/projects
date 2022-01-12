interface CourseData {
  skill: string;
  name: string;
  instructor: string;
  certPath: string;
  blurb: string;
}

const courseData: CourseData[] = [
  {
    skill: 'HTML/CSS',
    name: 'HTML, CSS, and JavaScript - Certification Class for Beginners',
    instructor: 'YouAccel Training',
    certPath: '/beginner.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'HTML/CSS',
    name: 'The Complete Front-End Web Development Course!',
    instructor: 'Joseph Delgadillo',
    certPath: '/complete.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'JS',
    name: 'JavaScript Beginner Bootcamp',
    instructor: 'Rob Merrill',
    certPath: '/jsBootcamp.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'HTML/CSS',
    name: 'The Complete Web Developer Course: Build 20 Websites',
    instructor: 'John Bura',
    certPath: '/build20.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'JS',
    name: "TypeScript: The Complete Developer's Guide",
    instructor: 'Stephen Grider',
    certPath: '/typescript.jpeg',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'react',
    name: 'The Modern React Bootcamp',
    instructor: 'Colt Steele',
    certPath: '/reactBootcamp.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
];

export default courseData;
