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
        <Link href="/project-pages/d20-roller"> 
          <a>d20 roller app</a> 
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
        <Link href="/project-pages/JS-todo-app"> 
          <a>to-do app using JavaScript</a> 
        </Link> 
        ! 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 3, 
    d20PicPath: '/images/3.png', 
    funFact: ( 
      <> 
        Did you know that I started learning to code in April 2021? Check out the{' '} 
        <Link href="/courses/HTML-CSS-JS-cert"> 
          <a>very first course</a> 
        </Link>{' '} 
        I took! 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 4, 
    d20PicPath: '/images/4.png', 
    funFact: ( 
      <> 
        Did you know I used to be a teacher? Read all about it, and the great skills that experience taught me, on my{' '} 
        <Link href="/about"> 
          <a>character sheet</a> 
        </Link> 
        . 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 5, 
    d20PicPath: '/images/5.png', 
    funFact: ( 
      <> 
        Feeling swamped? Why don't you try out my{' '} 
        <Link href="/project-pages/react-todo-app"> 
          <a>React To-Do App</a> 
        </Link>{' '} 
        to help keep track of things! 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 6, 
    d20PicPath: '/images/6.png', 
    funFact: ( 
      <> 
        When I was in college, I studied environmental science and geology. You can read all about it and more on my{' '} 
        <Link href="/about"> 
          <a>character sheet</a> 
        </Link> 
        . 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 7, 
    d20PicPath: '/images/7.png', 
    funFact: ( 
      <> 
        You can check out previous versions of my portfolio website in the{' '} 
        <Link href="/archive"> 
          <a>archive</a> 
        </Link> 
        . 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 8, 
    d20PicPath: '/images/8.png', 
    funFact: ( 
      <> 
        Would you like to take a look at some of the{' '} 
        <Link href="/projects"> 
          <a>projects</a> 
        </Link>{' '} 
        I've made? 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 9, 
    d20PicPath: '/images/9.png', 
    funFact: ( 
      <> 
        What do you like to do when you are offline? You can find out what I do in my spare time on the{' '} 
        <Link href="/about"> 
          <a>about page</a> 
        </Link> 
        . 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 10, 
    d20PicPath: '/images/10.png', 
    funFact: ( 
      <> 
        Have you ever played a Fallout game? I made a mock Pip-Boy for{' '} 
        <Link href="/courses/complete-frontend"> 
          <a>one of my coding courses</a> 
        </Link> 
        . 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 11, 
    d20PicPath: '/images/11.png', 
    funFact: ( 
      <> 
        Did you know I made an academic tracker for my teenaged sister? Check it out{' '} 
        <Link href="/project-pages/academic-tracker"> 
          <a>here</a> 
        </Link> 
        ! 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 12, 
    d20PicPath: '/images/12.png', 
    funFact: ( 
      <> 
        I completed a JavaScript Bootcamp and made some pretty cool projects. Check them out{' '} 
        <Link href="/courses/JS-bootcamp"> 
          <a>here</a> 
        </Link> 
        ! 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 13, 
    d20PicPath: '/images/13.png', 
    funFact: ( 
      <> 
        If you'd like to jump straight to my code you can check it out{' '} 
        <Link href="https://github.com/srivera12"> 
          <a>on GitHub</a> 
        </Link> 
        . 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 14, 
    d20PicPath: '/images/14.png', 
    funFact: ( 
      <> 
        If you'd like to contact me through email or LinkedIn, or even just check out my GitHub, head over to the{' '} 
        <Link href="/contact"> 
          <a>contact page</a> 
        </Link> 
        . 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 15, 
    d20PicPath: '/images/15.png', 
    funFact: ( 
      <> 
        I've had practice making a variety of webpages during my{' '} 
        <Link href="/courses/build-20-websites"> 
          <a>Build 20 Websites course</a> 
        </Link> 
        ! 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 16, 
    d20PicPath: '/images/16.png', 
    funFact: ( 
      <> 
        It always feels great to make something that people find helpful. Check out this{' '} 
        <Link href="/project-pages/montessori-quotes-app"> 
          <a>quote app</a> 
        </Link>{' '} 
        I made for my mom, who is a Montessori teacher. 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 17, 
    d20PicPath: '/images/17.png', 
    funFact: ( 
      <> 
        Did you know I coded this website using TypeScript? I learned all about it when I completed{' '} 
        <Link href="/courses/TS"> 
          <a>this course</a> 
        </Link> 
        . 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 18, 
    d20PicPath: '/images/18.png', 
    funFact: ( 
      <> 
        Since I've started learning to code, it's been so much fun learning new languages and get familiar with various 
        tools and frameworks. Check out what I've learned over on the{' '} 
        <Link href="/skills"> 
          <a>skills page</a> 
        </Link> 
        . 
      </> 
    ), 
  }, 
  { 
    rolledNumber: 19, 
    d20PicPath: '/images/19.png', 
    funFact: ( 
      <> 
        React is a powerful and popular web framework. I learned how to use it for projects like this website through{' '} 
        <Link href="/courses/react-bootcamp"> 
          <a>this bootcamp</a> 
        </Link> 
        . 
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
