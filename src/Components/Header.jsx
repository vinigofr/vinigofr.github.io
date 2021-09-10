import React from "react";
import ViniciusTitle from "./ViniciusTitle";
import "../Styles/general-style.css";
import Burger from "./Nav/Burger";

export default function Header(props) {

  return (
    <header className="home-header">
      <ViniciusTitle />
      <Burger/>
    </header>
  );
}
