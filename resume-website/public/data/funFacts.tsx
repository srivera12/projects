import roll1 from '../images/1.png';
import roll2 from '../images/2.png';
import roll3 from '../images/3.png';
import roll4 from '../images/4.png';
import roll5 from '../images/5.png';
import roll6 from '../images/6.png';
import roll7 from '../images/7.png';
import roll8 from '../images/8.png';
import roll9 from '../images/9.png';
import roll10 from '../images/10.png';
import roll11 from '../images/11.png';
import roll12 from '../images/12.png';
import roll13 from '../images/13.png';
import roll14 from '../images/14.png';
import roll15 from '../images/15.png';
import roll16 from '../images/16.png';
import roll17 from '../images/17.png';
import roll18 from '../images/18.png';
import roll19 from '../images/19.png';
import roll20 from '../images/20.png';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Link from 'next/link';

interface d20Rolls {
  rolledNumber: number;
  d20Pic: StaticImageData;
  funFact: ReactJSXElement;
}

const funFacts: d20Rolls[] = [
  {
    rolledNumber: 1,
    d20Pic: roll1,
    funFact: (
      <>
        Unlucky! If you'd like to practice, try using my<Link href="/project-pages/d20-roller"> d20 roller app</Link>!
      </>
    ),
  },
  {
    rolledNumber: 2,
    d20Pic: roll2,
    funFact: (
      <>
        Everyone has to start somewhere! Check out my earliest coding project,
        <Link href="/project-pages/JS-todo-app"> a to-do app using JavaScript</Link>!
      </>
    ),
  },
  {
    rolledNumber: 3,
    d20Pic: roll3,
    funFact: (
      <>
        Did you know that I started learning to code in April 2021? Check out the
        <Link href="/courses/HTML-CSS-JS-cert"> very first course </Link>I took!
      </>
    ),
  },
  { rolledNumber: 4, d20Pic: roll4, funFact: <>Unlucky! </> },
  {
    rolledNumber: 5,
    d20Pic: roll5,
    funFact: (
      <>
        Feeling swamped? Why don't you try out my<Link href="/project-pages/react-todo-app"> React To-Do App </Link>to
        help keep track of things!
      </>
    ),
  },
  { rolledNumber: 6, d20Pic: roll6, funFact: <>Unlucky! </> },
  { rolledNumber: 7, d20Pic: roll7, funFact: <>Unlucky! </> },
  {
    rolledNumber: 8,
    d20Pic: roll8,
    funFact: (
      <>
        Would you like to take a look at some of the <Link href="/projects"> projects </Link> I've made?
      </>
    ),
  },
  { rolledNumber: 9, d20Pic: roll9, funFact: <>Unlucky! </> },
  {
    rolledNumber: 10,
    d20Pic: roll10,
    funFact: (
      <>
        Have you ever played a Fallout game? I made a mock Pip-Boy for
        <Link href="/courses/complete-frontend"> one of my coding courses</Link>.
      </>
    ),
  },
  {
    rolledNumber: 11,
    d20Pic: roll11,
    funFact: (
      <>
        Did you know I made an academic tracker for my teenaged sister? Check it out
        <Link href="/project-pages/academic-tracker"> here</Link>!
      </>
    ),
  },
  {
    rolledNumber: 12,
    d20Pic: roll12,
    funFact: (
      <>
        I completed a JavaScript Bootcamp and made some pretty cool projects. Check them out
        <Link href="/courses/JS-bootcamp"> here</Link>!
      </>
    ),
  },
  { rolledNumber: 13, d20Pic: roll13, funFact: <>Unlucky! </> },
  { rolledNumber: 14, d20Pic: roll14, funFact: <>Unlucky! </> },
  {
    rolledNumber: 15,
    d20Pic: roll15,
    funFact: (
      <>
        I've had practice making a variety of webpages during my
        <Link href="/courses/build-20-websites"> Build 20 Websites course</Link>!
      </>
    ),
  },
  {
    rolledNumber: 16,
    d20Pic: roll16,
    funFact: (
      <>
        It always feels great to make something that people find helpful. Check out this
        <Link href="/project-pages/montessori-quote-app"> quote app </Link>I made for my mom, who is a Montessori
        teacher.
      </>
    ),
  },
  {
    rolledNumber: 17,
    d20Pic: roll17,
    funFact: (
      <>
        Did you know I coded this website using TypeScript! I learned how to when I completed
        <Link href="/courses/TS"> this course</Link>.
      </>
    ),
  },
  { rolledNumber: 18, d20Pic: roll18, funFact: <>Unlucky! </> },
  {
    rolledNumber: 19,
    d20Pic: roll19,
    funFact: (
      <>
        React is a powerful and popular web framework. I learned how to use it for projects like this website through
        <Link href="/courses/react-bootcamp"> this bootcamp</Link>.
      </>
    ),
  },
  {
    rolledNumber: 20,
    d20Pic: roll20,
    funFact: (
      <>
        Great roll! Go ahead and
        <a href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website"> tell me </a>that you
        got a Nat 20!
      </>
    ),
  },
];

export default funFacts;
