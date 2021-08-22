import React from 'react';
import '../general-style.css';

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
}
]

export default function Header(props) {
  const { setPage } = props;

  function choosePage(page) {
    setPage(page.id);
  };

  return (
      <header className="main-header">
        {headerButtons.map(({text, value}) => (
          <p 
          className="main-header" 
          id={ value }
          onClick={ (e) => choosePage(e.target) }
          >
            {text}
          </p>
        ))}
      </header>
  );
}
