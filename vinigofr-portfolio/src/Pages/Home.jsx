import React, { useState } from 'react';
import Header from '../Components/Header';
function Home() {
  const [page, setPage] = useState('home'); 
  return (
    <div>
      {console.log(page)}
      <Header setPage={ setPage } />
      { page }
    </div>
  )
}

export default Home
