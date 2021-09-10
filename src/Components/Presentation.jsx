import React from "react";

function Presentation() {
  return (
    <div className="main-backgrounds">
      <h1>Olá, eu sou Vinicius Gouveia 👨🏻‍💻</h1>

      <main>
        <section>
          <h3>Desenvolvedor de Software Front-End</h3>
          <br />
          <h3>
            Atualmente sou estudante de desenvolvimento back-end na Trybe com o
            objetivo de me tornas um Desenvolvedor de Software FullStack
          </h3>
        </section>
        <section>
          <h3>Possuo experiência com as seguintes tecnologias:</h3>
          <br />
          {['JS','HTML','CSS','React','Jest','ContextAPI','Redux','Git'].join(', ')}
        </section>
      </main>
    </div>
  );
}

export default Presentation;
