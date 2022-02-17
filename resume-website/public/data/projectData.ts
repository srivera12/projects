export interface ProjectData {
  pathName: string;
  name: string;
  picPath: string;
  projectLink: string;
  githubLink: string;
  blurb: string;
  approach: string;
  challenges: string[];
  reflections: string;
}

const projectData: ProjectData[] = [
  {
    pathName: 'JS-todo-app',
    name: 'JavaScript To-Do App',
    picPath: '/images/jsTodo.png',
    projectLink: '/projects/JS-todo/index.html',
    githubLink: 'https://github.com/srivera12/projects/tree/master/JS-todo',
    blurb:
      'This is a simple task tracker made using JavaScript. The first project I continued to develop by adding my own styles, features, and functionality. Saves tasks to local storage.',
    approach:
      'The original project simply creates li elements from an array, used local storage, and was completely un-styled. I wanted to add styles, as well as additional features to make it actually useful.',
    challenges: [
      "I initially had some trouble with how to add and remove classes in order to toggle a task as 'complete'. After some research, I learned about the 'classList.add()' and 'classList.remove()' methods.",
      'My previous use of bootstrap was more about simply utilizing their styles, rather than customizing them to fit your needs. Using Bootstrap to style this project gave me a chance to practice that.',
      "I didn't fully understand how this project used local storage, so I didn't know how to save the classes of the elements in order to preserve 'completed' status.",
    ],
    reflections:
      "Though it doesn't seem very impressive when I look back on it now, I was very proud of this project when I first made it. It marked the first time I felt confident enough in my abilities and understanding to improve upon something I was shown in a course. While I may not have been able to add all the functionality I wanted at that point, this project gave me a chance to really develop my skills and push myself, and because of that it is an important stepping stone that showcases my progress.",
  },
  {
    pathName: 'montessori-quotes-app',
    name: 'Montessori Quotes App',
    picPath: '/images/quoteApp.png',
    projectLink: '/projects/montessori-quote/index.html',
    githubLink: 'https://github.com/srivera12/projects/tree/master/montessori-quote',
    blurb:
      'Simple quote app I made for my mom, who is a Montessori teacher. I modified it from simply giving random quotes from an API to allowing you to search for quotes by topic or source.',
    approach:
      'The original project simply displayed a random quote from an API. Since I wanted to create something that would be useful for when my mom was in need of quotes, I needed to find a source of Montessori quotes, as well as ways to search for quotes for specific purposes.',
    challenges: [
      "I couldn't find any API that provided quotes by Maria Montessori, so I needed to create my own 'bank' of quotes for the app to pull from.",
      "I wanted to be able to use a select to search for quotes with specific traits, but I had never really used that element before. I needed to research how selects worked in order to know how 'value' worked.",
      "Not only did I want to search by topic/source, but I also didn't want to have to hard code the options in the select. It took me some time and trial and error, but eventually I figured out how to populate the select options using data from my quotes array.",
    ],
    reflections:
      'It may have taken some time, but I was very happy that I was able to write all the features and functionality I wanted this project to have. While I used the project from the course as the base for this, a Montessori quote app is something that I wanted to make for awhile. I was the first thing I made that filled a real need, and my mom still uses it. Nothing beats making something that is useful and helpful.',
  },
  {
    pathName: 'd20-roller',
    name: 'D20 Roller',
    picPath: '/images/D20Roller.png',
    projectLink: 'https://d20.srivera.dev',
    githubLink: 'https://github.com/srivera12/projects/tree/master/d20-roller',
    blurb:
      "In an online class, the project was to make a dice roller in React. Being the fan of DnD that I am, I had to make it a d20 and add in the DM's response to the roll. It's been used for playing DnD in a pinch.",
    approach:
      "This was originally just something I made for fun, because I thought it would be more interesting than simply making a dice roller that used an additional six-sided die. However, once I started, I was committed to making it as functional as I knew it should be, particularly once the course introduced me to the idea of adding a 'rolling' state and using that to render various texts.",
    challenges: [
      'The original project used Font Awesome dice icons. Since I was using a d20, I instead needed to find and make my own images, particularly for each of the numbers the die could roll.',
      'I had some difficulty dynamically rendering the images. At first it seemed that I might need to import all of the images, and then dynamically select which to render, but I was able to store the image path in a variable and dynamically change that to fit which image I wanted to render.',
      "At first it was rendering the image with the rolled number immediately, which looked odd while the image was still doing the rolling animation. However, I was able to use a conditional tied to the 'isRolling' state to have it briefly render a blank d20 until the animation stopped.",
    ],
    reflections:
      'Even though I originally made it as a more interesting version of a simple exercise in a course, this has ended up being one of  the apps I created that gets the most use. Both I and others I play DnD with have used it on several occasions. This showed me that even simple apps can be very useful, when I take the time to ensure they are well-made and I fine-tune their functionality.',
  },
  {
    pathName: 'react-todo-app',
    name: 'React To-Do App',
    picPath: '/images/reactTodo.png',
    projectLink: 'https://react-todo.srivera.dev',
    githubLink: 'https://github.com/srivera12/projects/tree/master/react-todo',
    blurb:
      'The newer and more complex version of my first task tracker. Made in React with hooks and a context, it has all of the features of the JS one, but with the addition of some new features.',
    approach:
      'This was designed to be in contrast with the first to-do app shown here, that was just JavaScript. This was a refactored version of a simple React to-do app created in a course, but this one uses hooks, contexts, and a dispatch.',
    challenges: [
      'One challenge was re-factoring this repeatedly. Once I was done switching everything to be functional components and use state with hooks, I needed to refactor again because we had been introduced to the concepts of a context, and so on.',
      'This project gave me a chance to get familiar with using Material UI components. I had used them in a limited sense before, but using them extensively here let me better understand how to use them effectively, as well as how to customize the styles to fit what I wanted.',
      'Having to change the method for syncing with local storage to fit each refactor helped me really understand how that process worked, which was very helpful for the next project I made.',
    ],
    reflections:
      "This project definitely feels like an 'all grown up' version of my JavaScript to-do app. It has a lot of the same functionality and a similar appearance, but it looks a lot better and has all of the functionality I originally wanted the JavaScript one to have. Creating this was a great moment to take stock of my process, and how creating this far more complicated version felt less daunting than making the simpler one did only 2 months before.",
  },
  {
    pathName: 'academic-tracker',
    name: 'Academic Tracker',
    picPath: '/images/academicTracker.png',
    projectLink: 'https://academic-tracker.srivera.dev',
    githubLink: 'https://github.com/srivera12/projects/tree/master/academic-tracker',
    blurb:
      'I made this for my little sister, who is in high school. She needed to keep track of completed assignments for each class as simply as possible, but also wanted some fun features.',
    approach:
      'This was the first project that was completely my own from start to finish, so I chose to use what I had been working with most frequently - Create React App and Material UI. I also talked with my sister at length about what she needed from this app so that it would actually be useful for her.',
    challenges: [
      "My sister wanted things as simple as possible. She didn't want to have to enter in any information about the assignments, just the class and the number of assignments. She also wanted it to track week to week rather than daily or for the semester.",
      'My sister is a teenager, and she wanted the app to be fun and encouraging. So I needed to find tools that would allow for fun celebratory effects when she finished all the assignments for a class, or all her assignments for the week.',
      "Once I completed the app, my sister requested the ability to customize the background with colors or images. This required using some tools I haven't used before, finding a way to dynamically render a background image, figuring out how to allow the user to switch between having a customized background image or background color, as well as how to save their customizations to local storage.",
    ],
    reflections:
      "This is my most recent project, so I don't have the same level of hindsight about it that I do for my other projects. However, I am very happy with how this turned out. It has all the features and functionality my sister requested, and she has been finding it useful to help keep track of her academic work.",
  },
];

export default projectData;
