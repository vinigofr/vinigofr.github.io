import React from "react";
import allProjects from "../Helpers/allProject";
import project from "../Images/projects.svg";
import Footer from "../Components/Footer";

function Projects() {
  return (
    <div>
      <h1 className="page-title">Projetos</h1>
      <section className="project-container">
        <img
          src={project}
          className="main-project-image"
          alt="Imagem de pessoaas trabalhando em conjunto"
        />
        <div className="project-section">
          {allProjects.map((project, index) => (
            <div className="project-card" key={`${project.name}-${index}`}>
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
      </section>
      <Footer />
    </div>
  );
}

export default Projects;
