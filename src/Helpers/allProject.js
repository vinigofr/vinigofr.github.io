import trivia from '../projectsImages/trivia.png';
import recipesApp from '../projectsImages/recipes-app.png';
import ghUserFinder from '../projectsImages/github-user-finder.png';
import todoList from '../projectsImages/todo-list.png'

const allProjects = [
  { 
    id: 1,
    name: 'App de Receitas',
    description: 'Consumindo vários endpoints de comidas e bebidas',
    image: recipesApp,
    type: 'Front-end',
    technologies: ['React', 'ContextAPI', 'React-Router', 'Bootstrap'],
    url: 'https://vinigofr.github.io/recipes-app',
    repo: 'https://github.com/vinigofr/recipes-app'
  },
  { 
    id: 2,
    name: 'Trivia',
    description: 'Projeto de pergunutas e respostas',
    image: trivia,
    type: 'Front-end',
    technologies: ['React', 'ContextAPI', 'React-Router'],
    url: 'https://vinigofr.github.io/trivia-project',
    repo: 'https://github.com/vinigofr/trivia-project'
  },
  {
    id: 3,
    name: 'GitHub User Finder',
    description: "Projeto que consome uma API do GitHub",
    image: ghUserFinder,
    type: 'Front-end',
    technologies: ['React', 'ContextAPI'],
    url: 'https://vinigofr.github.io/github-user-finder',
    repo: 'https://github.com/vinigofr/github-user-finder'
  },
  {
    id: 4,
    name: 'Todo List',
    description: "Projeto feito com JS Vanilla que simula uma Todo List",
    image: todoList,
    type: 'Front-end',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JS ES6'],
    url: 'https://vinigofr.github.io/todo-list',
    repo: 'https://github.com/vinigofr/todo-list'
  }
]

export default allProjects;
