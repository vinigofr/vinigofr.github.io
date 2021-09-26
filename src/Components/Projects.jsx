import React from "react";
import allProjects from "../Helpers/allProject";
import project from '../Images/projects.svg';
function Projects() {
  return (
    <>
      <h1 className="page-title">Projetos</h1>
      <img src={project} className="main-page-image" alt="Imagem de pessoaas trabalhando em conjunto" />
      <div className="projects-section">
        {allProjects.map((project) => (
          <div className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noreferrer">
              Acessar projeto
            </a>
            <img src={project.image} alt="Imagem do projeto" />
            <p>Tipo do projeto: {`${project.type}`}</p>
            <p>
              Tecnologias utilizadas: {`${project.technologies.join(", ")}`}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
