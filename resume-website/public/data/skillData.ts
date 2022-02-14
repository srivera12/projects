import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

export interface SkillData {
  skill: string;
  skillDataCy: string;
  name: string;
  icon: IconDefinition;
  picPath: string;
  blurb: string;
}

const skillData: SkillData[] = [
  {
    skill: 'react',
    skillDataCy: 'react',
    name: 'React',
    icon: faReact,
    picPath: '/images/react.png',
    blurb:
      "I've completed a React bootcamp that included both the traditional class components as well as the more modern uses of hooks, contexts, etc. I made several React projects during the bootcamp, but I've also completed a couple projects on my own, such as the Academic Tracker, which can be found under 'Projects', as well as this website.",
  },
  {
    skill: 'TS/JS',
    skillDataCy: 'TS-JS',
    name: 'TypeScript and JavaScript',
    icon: faJs,
    picPath: '/images/tsAndJS.jpeg',
    blurb:
      "Several of the online courses I've completed covered JavaScript, but I've also completed a bootcamp specifically focused on it, as well as one focused on TypeScript. I have several projects I've created that use JavaScript, and many more that I've completed while going through JS and TS courses. I also utilized TypeScript while creating this website. ",
  },
  {
    skill: 'HTML/CSS',
    skillDataCy: 'HTML-CSS',
    name: 'HTML and CSS',
    icon: faHtml5,
    picPath: '/images/htmlAndCss.png',
    blurb:
      "HTML and CSS are foundational to frontend software engineering, so I've used them for nearly every project I've completed, whether on my own or coding along in an online course. I needed to utilize my understanding of HTML and CSS in writing the JSX for this website.",
  },
];

export default skillData;
