import React, { useContext } from "react";
import MyContext from "../ContextAPI/MyContext";
import Header from "../Components/Header";
import Projects from "../Components/Projects";
import Presentation from "../Components/Presentation";
import Contact from "../Components/Contact";

function Home() {
  const context = useContext(MyContext);
  const { page } = context;

  return (
    <>
      <Header />
      <div className="padding-content">
        {page === "home" ? <Presentation /> : null}
        {page === "projects" ? <Projects /> : null}
        {page === "contact" ? <Contact /> : null}
      </div>
    </>
  );
}

export default Home;
