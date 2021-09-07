import React, { useState } from 'react';
import Header from '../Components/Header';
import Projects from '../Components/Projects';
import Presentation from '../Components/Presentation';

function Home() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <Header setPage={ setPage } currPage={ page } />
      { page === 'home' ? <Presentation /> : null }
      { page === 'projects' ? <Projects /> : null }
      { page === 'github' ? 'github' : null }
      { page === 'linkedin' ? 'linkedin' : null }
      { page === 'contact' ? 'contato' : null }
    </div>
  )
}

export default Home;
