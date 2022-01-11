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
    subtitle: 'Hello!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec nam. Diam volutpat commodo sed egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Venenatis cras sed felis eget velit aliquet sagittis.',
  },
  {
    icon: faUserGraduate,
    subtitle: 'Session 0',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec nam. Diam volutpat commodo sed egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Venenatis cras sed felis eget velit aliquet sagittis.',
  },
  {
    icon: faSchool,
    subtitle: 'My Journey to Coding',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec nam. Diam volutpat commodo sed egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Venenatis cras sed felis eget velit aliquet sagittis.',
  },
  {
    icon: faLaptopCode,
    subtitle: 'Choosing the Right Character Class',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec nam. Diam volutpat commodo sed egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Venenatis cras sed felis eget velit aliquet sagittis.',
  },
  {
    icon: faDiceD20,
    subtitle: "When I'm Not Coding",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec nam. Diam volutpat commodo sed egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Venenatis cras sed felis eget velit aliquet sagittis.',
  },
];

export default characterSheetText;
