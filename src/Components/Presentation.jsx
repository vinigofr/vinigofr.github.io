import React from "react";
import programmer from "../Images/programmer.svg";
import arrayOfTechnologies from "../Helpers/arrayOfTechnologies";

function Presentation() {
  return (
    <>
      <h1 className="page-title">Prazer, me chamo Vinicius 👨🏻‍💻</h1>
      <main className="presentation-container">
        <section style={{ "padding-bottom": "20px" }}className="presentation-section p1">
          <h3 className="centralize">Sou desenvolvedor de Software Front-End</h3>
          <img
            className="main-page-image"
            src={programmer}
            alt="Imagem de um programador usando seu notebook que está sob a mesa. Ele está sentado numa cadeira, há uma planta ao lado direito"
          />
          <h3 className="centralize">
            Sou estudante de desenvolvimento back-end na Trybe com o objetivo de
            me tornar um Desenvolvedor de Software FullStack
          </h3>
        </section>
        <span className="divider"></span>
        <section className="tech-section">
          <h3 className="p1 centralize">Ferramentas e tecnologias:</h3>
          <div className="tech-container">
            {arrayOfTechnologies.map(({ name, icon }, index) => (
              <div className="tech-card" key={`${name}-${index}`}>
                <img src={icon} alt={name} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Presentation;
