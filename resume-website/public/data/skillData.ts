import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import tsAndJS from '../images/tsAndJS.jpeg';
import htmlAndCss from '../images/htmlAndCss.png';
import react from '../images/react.png';

interface SkillData {
  skill: string;
  name: string;
  icon: IconDefinition;
  pic: StaticImageData;
  blurb: string;
}

const skillData: SkillData[] = [
  {
    skill: 'react',
    name: 'React',
    icon: faReact,
    pic: react,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'TS/JS',
    name: 'TypeScript and JavaScript',
    icon: faJs,
    pic: tsAndJS,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'HTML/CSS',
    name: 'HTML and CSS',
    icon: faHtml5,
    pic: htmlAndCss,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
];

export default skillData;
