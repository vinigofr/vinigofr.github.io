import React from "react";
import ViniciusTitle from "./ViniciusTitle";
import "../Styles/general-style.css";
import github from '../icons/github.svg';
import linkedin from '../icons/linkedin.svg';


export default function Header(props) {
  const { setPage, currPage } = props;

  function choosePage(page) {
    setPage(page.id);
  }

  return (
    <header className="home-header">
      <ViniciusTitle />
      <div className="header-options">
        <p
          style={currPage === "home" ? { textDecoration: "underline" } : null}
          className="pointer"
          id="home"
          onClick={(e) => choosePage(e.target)}
        >
          Início
        </p>
        <p
          style={currPage === "projects" ? { textDecoration: "underline" } : null}
          className="pointer"
          id="projects"
          onClick={(e) => choosePage(e.target)}
        >
          Projetos
        </p>
        <p
          style={currPage === "contact" ? { textDecoration: "underline" } : null}
          className="pointer"
          id="contact"
          onClick={(e) => choosePage(e.target)}
        >
          Contato
        </p>
        <a href="https://github.com/vinigofr" target="_blank" rel="noreferrer">
          <img
            alt="GitHub Link"
            style={{ width: "40px", height: "40px", color: 'pink' }}
            className="pointer"
            id="github"
            src={ github }
          />
        </a>
        <a href="https://www.linkedin.com/in/vinigofr/" target="_blank" rel="noreferrer">
          <img
            alt="Linkedin Link"
            style={{ width: "40px", height: "40px" }}
            className="pointer"
            id="linkedin"
            src={ linkedin }
          />
        </a>
      </div>
    </header>
  );
}
