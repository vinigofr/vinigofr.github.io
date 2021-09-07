import React from "react";
import github from "../../icons/github.svg";
import styled from "styled-components";
import linkedin from "../../icons/linkedin.svg";
import "../../Styles/RightNav.css";

const NewNav = styled.div`
  display: flex;
  gep: 1em;
  align-items: center;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'}
  }
`;

function RightNav(props) {
  const { setPage, currPage, open } = props;


  function choosePage(page) {
    setPage(page.id);
  }

  return (
    <NewNav open={ open } className="header-options">
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
          style={{ width: "40px", height: "40px", color: "pink" }}
          className="pointer"
          id="github"
          src={github}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/vinigofr/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="Linkedin Link"
          style={{ width: "40px", height: "40px" }}
          className="pointer"
          id="linkedin"
          src={linkedin}
        />
      </a>
    </NewNav>
  );
}

export default RightNav;
