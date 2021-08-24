import React, { useState } from 'react';
import Header from '../Components/Header';
import Projects from '../Components/Projects';
function Home() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <Header setPage={ setPage } currPage={ page } />
      { page === 'home' ? 'Welcome' : null }
      { page === 'projects' ? <Projects /> : null }
      { page === 'github' ? 'github' : null }
      { page === 'linkedin' ? 'linkedin' : null }
      { page === 'contact' ? 'contato' : null }
    </div>
  )
}

export default Home
