import React, { useContext } from "react";
import MyContext from '../../ContextAPI/MyContext';
import github from "../../icons/github.svg";
import styled from "styled-components";
import linkedin from "../../icons/linkedin.svg";

const NewNav = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 25px;
    background-color: rgb(113, 18, 177);
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    flex-flow: column wrap;
    position: fixed;
    font-weight: bolder;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
  }
`;

function RightNav(props) {
  const context = useContext(MyContext);
  const { page, setPage } = context;
  const { open } = props;

  function choosePage(page) {
    setPage(page.id);
  }

  return (
    <NewNav open={open} className="header-options">
      <p
        style={page === "home" ? { textDecoration: "underline" } : null}
        className="pointer"
        id="home"
        onClick={(e) => choosePage(e.target)}
      >
        Início
      </p>
      <p
        style={page === "projects" ? { textDecoration: "underline" } : null}
        className="pointer"
        id="projects"
        onClick={(e) => choosePage(e.target)}
      >
        Projetos
      </p>
      <p
        style={page === "contact" ? { textDecoration: "underline" } : null}
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
