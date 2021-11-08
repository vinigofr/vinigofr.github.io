import React, { useContext } from "react";
import MyContext from "../ContextAPI/MyContext";
import Header from "../Components/Header";
import Projects from "../Components/Projects";
import Presentation from "../Components/Presentation";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home() {
  const context = useContext(MyContext);
  const { page } = context;

  return (
    <>
      <Header />
      <div className="padding-content">
        {page === "home" && <Presentation />}
        {page === "projects" && <Projects />}
        {page === "contact" && <Contact />}
      </div>
      <Footer />
    </>
  );
}

export default Home;
