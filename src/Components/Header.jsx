import React from "react";
import ViniciusTitle from "./ViniciusTitle";
import "../Styles/general-style.css";
import RightNav from "./Nav/RightNav";

export default function Header(props) {
  const { setPage, currPage } = props;

  return (
    <header className="home-header">
      <ViniciusTitle />
      <RightNav setPage={setPage} currPage={currPage} />
    </header>
  );
}
