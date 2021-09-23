import React from "react";
import programmer from '../Images/programmer.svg';

function Presentation() {
  return (
    <div>
      <h1>Prazer, me chamo Vinicius 👨🏻‍💻</h1>
      <main>
        <section>
          <h3>Sou desenvolvedor de Software Front-End</h3>
          <img className="main-page-image" src={programmer} alt="Imagem de um programador usando seu notebook que está sob a mesa. Ele está sentado numa cadeira, há uma planta ao lado direito" />
          <br />
          <h3>
            Sou estudante de desenvolvimento back-end na Trybe com o
            objetivo de me tornar um Desenvolvedor de Software FullStack
          </h3>
        </section>
        <section>
          <h3>Possuo experiência com as seguintes tecnologias:</h3>
          <br />
          {[
            "JS",
            "HTML",
            "CSS",
            "React",
            "Jest",
            "ContextAPI",
            "Redux",
            "Git",
          ].join(", ")}
        </section>
      </main>
    </div>
  );
}

export default Presentation;
