import React, { useContext } from "react";
import MyContext from "../../ContextAPI/MyContext";
import github from "../../icons/github.svg";
import styled from "styled-components";
import linkedinWhite from "../../icons/linkedinWhite.svg";
import PropTypes from 'prop-types';

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
  const { open, setOpen } = props;

  function choosePage(page) {
    setPage(page.id);
  }

  return (
    <NewNav open={open} className="header-options">
      <p
        style={page === "home" ? { textDecoration: "underline" } : null}
        className="pointer"
        id="home"
        onClick={(e) => {
          choosePage(e.target);
          setOpen(!open);
        }}
      >
        Início
      </p>
      <p
        style={page === "projects" ? { textDecoration: "underline" } : null}
        className="pointer"
        id="projects"
        onClick={(e) => {
          choosePage(e.target);
          setOpen(!open);
        }}
      >
        Projetos
      </p>
      <p
        style={page === "contact" ? { textDecoration: "underline" } : null}
        className="pointer"
        id="contact"
        onClick={(e) => {
          choosePage(e.target);
          setOpen(!open);
        }}
      >
        Contato
      </p>
      <a
        href="https://github.com/vinigofr"
        target="_blank"
        rel="noreferrer"
        id="github"
      >
        <img
          alt="GitHub Link"
          style={{ width: "40px", height: "40px", color: "pink" }}
          className="pointer"
          src={github}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/vinigofr/"
        target="_blank"
        rel="noreferrer"
        id="linkedin"
      >
        <img
          alt="Linkedin Link"
          style={{ width: "40px", height: "40px" }}
          className="pointer"
          src={linkedinWhite}
        />
      </a>
    </NewNav>
  );
}

export default RightNav;

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}
