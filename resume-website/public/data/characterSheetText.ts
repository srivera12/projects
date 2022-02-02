import { faCommentAlt, faUserGraduate, faSchool, faLaptopCode, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface Paragraph {
  icon: IconDefinition;
  subtitle: string;
  text: string;
}

const characterSheetText: Paragraph[] = [
  {
    icon: faCommentAlt,
    subtitle: 'Hello World!',
    text: "Welcome to my portfolio website! I created this as a way to introduce myself and my software engineering skills to the world. I've been learning coding for several months now, and I wanted to experiment with my newfound skills. Read on to learn more about me and my software engineering journey, or click the 'Contact Me' button below to email me with any questions you may have!",
  },
  {
    icon: faUserGraduate,
    subtitle: 'Session 0',
    text: "I didn't start out coding. I had a variety of interests growing up, and it was hard to settle on one for college. I decided to lean into my interest in science by studying Environmental Science and Geology. I also worked as a writing tutor and a learning assistant in several environmental science classes. All of this gave me a breadth of experience and knowledge I can draw from to approach challenges and problems.",
  },
  {
    icon: faSchool,
    subtitle: 'My Journey to Coding',
    text: "I loved studying Environmental Science, but I wasn't excited by the idea of staying in academia. Since I enjoyed my time tutoring, and loved learning and sharing my knowledge, I decided to pursue a career in education. I received a Masters in Elementary Education from Johns Hopkins while teaching full time, and taught for 4 years in total. It was a privilege working with the wonderful children I taught, and my experience in that career greatly increased my skills in problem-solving, creative thinking, adaptability, and resiliency.",
  },
  {
    icon: faLaptopCode,
    subtitle: 'Choosing the Right Character Class',
    text: "Teaching was fufilling in many ways, but I realized it wasn't my passion. While looking into other things that sparked my interest, coding was suggested to me. I was immediately hooked - it had all the tech, math, and puzzle-solving aspects I had been missing. I started taking online classes in software development through Stackskills and Udemy, and never looked back. Nothing quite beats the exhilaration of figuring out how to get a complicated process to work, or the satisfaction of creating apps that are useful to me or others. ",
  },
  {
    icon: faDiceD20,
    subtitle: "When I'm Not Coding",
    text: "As much as I love coding, it isn't the only thing in my life. I'm close to my family and I love spending time with them, and spending time with my friends. In case it isn't obvious, I'm also a big fan of DnD (Dungeons and Dragons). It's a lot of fun to flex creative thinking and problem-solving in a fun and complicated fantasy world, as well as the soft skills of working together in a social setting. I've been in a few DnD campaigns and I even DM! I also read a lot, love spending time outside, and enjoy playing video games.",
  },
];

export default characterSheetText;
