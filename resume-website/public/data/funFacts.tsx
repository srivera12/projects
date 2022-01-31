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
  d20PicPath: string;
  funFact: ReactJSXElement;
}

const funFacts: d20Rolls[] = [
  {
    rolledNumber: 1,
    d20PicPath: '/images/1.png',
    funFact: (
      <>
        Unlucky! If you'd like to practice, try using my{' '}
        <Link href="/project-pages/d20-roller" data-cy="dun-fact-link">
          d20 roller app
        </Link>
        !
      </>
    ),
  },
  {
    rolledNumber: 2,
    d20PicPath: '/images/2.png',
    funFact: (
      <>
        Everyone has to start somewhere! Check out my earliest coding project, a{' '}
        <Link href="/project-pages/JS-todo-app">to-do app using JavaScript</Link>!
      </>
    ),
  },
  {
    rolledNumber: 3,
    d20PicPath: '/images/3.png',
    funFact: (
      <>
        Did you know that I started learning to code in April 2021? Check out the{' '}
        <Link href="/courses/HTML-CSS-JS-cert">very first course</Link> I took!
      </>
    ),
  },
  {
    rolledNumber: 4,
    d20PicPath: '/images/4.png',
    funFact: (
      <>
        Did you know I used to be a teacher? Read all about it, and the great skills that experience taught me, on my{' '}
        <Link href="/about">character sheet</Link>.
      </>
    ),
  },
  {
    rolledNumber: 5,
    d20PicPath: '/images/5.png',
    funFact: (
      <>
        Feeling swamped? Why don't you try out my <Link href="/project-pages/react-todo-app">React To-Do App</Link> to
        help keep track of things!
      </>
    ),
  },
  {
    rolledNumber: 6,
    d20PicPath: '/images/6.png',
    funFact: (
      <>
        When I was in college, I studied environmental science and geology. You can read all about it and more on the{' '}
        <Link href="/about">about page</Link>.
      </>
    ),
  },
  {
    rolledNumber: 7,
    d20PicPath: '/images/7.png',
    funFact: (
      <>
        You can check out previous versions of my portfolio website in the <Link href="/archive">archive</Link>.
      </>
    ),
  },
  {
    rolledNumber: 8,
    d20PicPath: '/images/8.png',
    funFact: (
      <>
        Would you like to take a look at some of the <Link href="/projects">projects</Link> I've made?
      </>
    ),
  },
  {
    rolledNumber: 9,
    d20PicPath: '/images/9.png',
    funFact: (
      <>
        What do you like to do when you are offline? You can find out what I do in my spare time on the{' '}
        <Link href="/about">about page</Link>.
      </>
    ),
  },
  {
    rolledNumber: 10,
    d20PicPath: '/images/10.png',
    funFact: (
      <>
        Have you ever played a Fallout game? I made a mock Pip-Boy for{' '}
        <Link href="/courses/complete-frontend">one of my coding courses</Link>.
      </>
    ),
  },
  {
    rolledNumber: 11,
    d20PicPath: '/images/11.png',
    funFact: (
      <>
        Did you know I made an academic tracker for my teenaged sister? Check it out{' '}
        <Link href="/project-pages/academic-tracker">here</Link>!
      </>
    ),
  },
  {
    rolledNumber: 12,
    d20PicPath: '/images/12.png',
    funFact: (
      <>
        I completed a JavaScript Bootcamp and made some pretty cool projects. Check them out{' '}
        <Link href="/courses/JS-bootcamp">here</Link>!
      </>
    ),
  },
  {
    rolledNumber: 13,
    d20PicPath: '/images/13.png',
    funFact: (
      <>
        If you'd like to jump straight to my code you can check it out{' '}
        <Link href="https://github.com/srivera12">on GitHub</Link>.
      </>
    ),
  },
  {
    rolledNumber: 14,
    d20PicPath: '/images/14.png',
    funFact: (
      <>
        If you'd like to contact me through email or LinkedIn, or even just check out my GitHub, you can over on the{' '}
        <Link href="/contact">contact page</Link>.
      </>
    ),
  },
  {
    rolledNumber: 15,
    d20PicPath: '/images/15.png',
    funFact: (
      <>
        I've had practice making a variety of webpages during my{' '}
        <Link href="/courses/build-20-websites">Build 20 Websites course</Link>!
      </>
    ),
  },
  {
    rolledNumber: 16,
    d20PicPath: '/images/16.png',
    funFact: (
      <>
        It always feels great to make something that people find helpful. Check out this{' '}
        <Link href="/project-pages/montessori-quotes-app">quote app</Link> I made for my mom, who is a Montessori
        teacher.
      </>
    ),
  },
  {
    rolledNumber: 17,
    d20PicPath: '/images/17.png',
    funFact: (
      <>
        Did you know I coded this website using TypeScript? I learned how to when I completed{' '}
        <Link href="/courses/TS">this course</Link>.
      </>
    ),
  },
  {
    rolledNumber: 18,
    d20PicPath: '/images/18.png',
    funFact: (
      <>
        Since I've started learning to code, it's been so much fun to learning new languages and get familiar with
        various tools and frameworks. Check out what I've learned over on the <Link href="/skills">skills page</Link>.
      </>
    ),
  },
  {
    rolledNumber: 19,
    d20PicPath: '/images/19.png',
    funFact: (
      <>
        React is a powerful and popular web framework. I learned how to use it for projects like this website through{' '}
        <Link href="/courses/react-bootcamp">this bootcamp</Link>.
      </>
    ),
  },
  {
    rolledNumber: 20,
    d20PicPath: '/images/20.png',
    funFact: (
      <>
        Great roll! Go ahead and{' '}
        <a href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website">tell me</a> that you
        got a Nat 20!
      </>
    ),
  },
];

export default funFacts;
