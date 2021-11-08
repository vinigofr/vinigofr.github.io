import trivia from '../projectsImages/trivia.png';
import recipesApp from '../projectsImages/recipes-app.png';
import ghUserFinder from '../projectsImages/github-user-finder.png';

const allProjects = [
  { 
    id: 1,
    name: 'App de Receitas',
    description: 'Projeto que consome várias APIs de comidas e bebidas',
    image: recipesApp,
    type: 'front-end',
    technologies: ['React', 'ContextAPI', 'React-Router', 'Bootstrap'],
    url: 'https://vinigofr.github.io/recipes-app',
  },
  { 
    id: 2,
    name: 'Trivia',
    description: 'Projeto de pergunutas e respostas',
    image: trivia,
    type: 'front-end',
    technologies: ['React', 'ContextAPI', 'React-Router'],
    url: 'https://vinigofr.github.io/trivia-project',
  },
  {
    id: 3,
    name: 'GitHub User Finder',
    description: "Projeto básico de front-end que consome uma API do GitHubs",
    image: ghUserFinder,
    type: 'front-end',
    technologies: ['React', 'ContextAPI'],
    url: 'https://vinigofr.github.io/github-user-finder',
  },
  {
    id: 4,
    name: 'Todo List',
    description: "Projeto feito com JS Vanilla que simula uma Todo List",
    image: 'link',
    type: 'front-end',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JS ES6'],
    url: 'https://vinigofr.github.io/todo-list',
  }
]

export default allProjects;
