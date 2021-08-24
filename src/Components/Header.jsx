import React from 'react';
import '../general-style.css';
import '../Styles/typewrite.css';

const headerButtons = [{
  text: 'Projetos',
  value: 'projects',
},{
  text: 'Contato',
  value: 'contact',
},
{
  text: 'GitHub',
  value: 'github',
},
{
  text: 'LinkedIn',
  value: 'linkedin',
}]

export default function Header(props) {
  const { setPage } = props;

  function choosePage(page) {
    setPage(page.id);
  };

  return (
      <header className="home-header">
        <div className="write-effect">
          <h1>Vinicius Gouveia</h1>
        </div>
        <div className="header-options">
        {headerButtons.map(({text, value}) => (
          <p
          className="pointer"
          id={ value }
          onClick={ (e) => choosePage(e.target) }
          >
            {text}
          </p>
        ))}
        </div>
      </header>
  );
}
