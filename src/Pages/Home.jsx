import React, { useContext } from 'react';
import MyContext from '../ContextAPI/MyContext';
import Header from '../Components/Header';
import Projects from '../Components/Projects';
import Presentation from '../Components/Presentation';

function Home() {
  const context = useContext(MyContext);
  const { page } = context;

  return (
    <div>
      <Header/>
      { page === 'home' ? <Presentation /> : null }
      { page === 'projects' ? <Projects /> : null }
      { page === 'contact' ? 'contato' : null }
    </div>
  )
}

export default Home;
