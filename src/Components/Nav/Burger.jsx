import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import "../../Styles/Burger.css";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  div {
    border-radius: 10px;
    width: 2rem;
    height: 0.25em;
    background-color: ${({ open }) => (open ? "#fff" : "#000")};}};
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
  }
`;

function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
     <RightNav />
    </>
  );
}

export default Burger;
