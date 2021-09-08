import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
// Créditos à FullStack Mastery por ter disponibilizado o conteúdo que
// permitiu realizar o "Menu Hamburguer".
// Fonte: https://www.youtube.com/watch?v=GGkBwpxV7AI

const StyledBurger = styled.div`
  // width: 2rem;
  height: 2rem;
  top: 15px;
  right: 20px;
  display: none;
  z-index: 20;
  margin-right: 20px;

    div {
      border-radius: 10px;
      width: 2rem;
      height: 0.25em;
      background-color: ${({ open }) => open ? "#fff" : "#000"};
      transform-origin: 1px;
      transition: all 0.3s linear;
      
      &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
      }
    
      &:nth-child(2) {
        transform: ${({open}) => open ? 'translate(100%)' : 'translateX(0)'};
        opacity: ${({open}) => open ? 0 : 1};
      }
    
      &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
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
     <RightNav open={open} />
    </>
  );
}

export default Burger;
