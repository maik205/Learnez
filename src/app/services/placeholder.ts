import { Course } from './interfaces/course.interface';
import { Roadmap } from './interfaces/roadmap.interface';
export const PLACEHOLDER_ROADMAPS: Roadmap[] = [
  {
    title: 'Frontend Developer Roadmap',
    description:
      'This roadmap guides beginners through the essential steps to becoming a frontend developer.',
    steps: [
      {
        stepName: 'Learn HTML',
        stepDescription:
          'Understand the basic structure of web pages and how to use HTML tags to create elements.',
        relatedCategories: ['Frontend', 'HTML'],
        isCompleted: false,
      },
      {
        stepName: 'Learn CSS',
        stepDescription:
          'Master CSS to style web pages, including layout, colors, and responsive design.',
        relatedCategories: ['Frontend', 'CSS'],
        isCompleted: false,
      },
      {
        stepName: 'Learn JavaScript',
        stepDescription:
          'Become proficient in JavaScript to add interactivity to web pages.',
        relatedCategories: ['Frontend', 'JavaScript'],
        isCompleted: false,
      },
    ],
    skill: {
      skillName: 'Frontend Development',
      skillDescription:
        'Develop the ability to build and design web pages using HTML, CSS, and JavaScript.',
      relatedCategories: ['Web Development', 'Frontend'],
    },
    relatedCategories: ['Web Development', 'Frontend'],
    timeOfGeneration: Date.now(),
  },
  {
    title: 'Backend Developer Roadmap',
    description:
      'This roadmap introduces the skills needed to become a backend developer.',
    steps: [
      {
        stepName: 'Learn a Programming Language',
        stepDescription:
          'Choose a backend language like Python, Java, or Node.js, and learn its syntax and concepts.',
        relatedCategories: ['Backend', 'Programming'],
        isCompleted: false,
      },
      {
        stepName: 'Understand Databases',
        stepDescription:
          'Learn how to work with databases, both SQL and NoSQL, and perform CRUD operations.',
        relatedCategories: ['Backend', 'Databases'],
        isCompleted: false,
      },
      {
        stepName: 'Learn RESTful APIs',
        stepDescription:
          'Understand how to build and consume RESTful APIs for data exchange.',
        relatedCategories: ['Backend', 'APIs'],
        isCompleted: false,
      },
    ],
    skill: {
      skillName: 'Backend Development',
      skillDescription:
        'Gain knowledge in building server-side applications, managing databases, and handling APIs.',
      relatedCategories: ['Web Development', 'Backend'],
    },
    relatedCategories: ['Web Development', 'Backend'],
    timeOfGeneration: Date.now(),
  },
];

export const PLACEHOLDER_COURSES: Course[] = [
  {
    teacherId: '1',
    id: '1',
    title: 'Angular',
    description:
      'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
    relatedCategories: ['Web Development', 'Frontend'],
    dateCreated: Date.now(),
    imageName: 'https://angular.io/assets/images/logos/angular/angular.png',
  },
  {
    teacherId: '2',
    id: '2',
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    relatedCategories: ['Web Development', 'Frontend'],
    dateCreated: Date.now(),
    imageName: 'https://angular.io/assets/images/logos/angular/angular.png',
  },
  {
    teacherId: '3',
    id: '3',
    title: 'Vue',
    description: 'Vue is a progressive framework for building user interfaces.',
    relatedCategories: ['Web Development', 'Frontend'],
    dateCreated: Date.now(),
    imageName: 'https://angular.io/assets/images/logos/angular/angular.png',
  },
];
