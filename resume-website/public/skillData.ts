import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

interface SkillData {
  skill: string;
  name: string;
  icon: IconDefinition;
  icon2?: IconDefinition;
  blurb: string;
}

const skillData: SkillData[] = [
  {
    skill: 'HTML/CSS',
    name: 'HTML and CSS',
    icon: faHtml5,
    icon2: faCss3,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'JS',
    name: 'JavaScript',
    icon: faJs,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
  {
    skill: 'react',
    name: 'React',
    icon: faReact,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
  },
];

export default skillData;
