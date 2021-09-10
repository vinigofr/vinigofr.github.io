import Home from './Pages/Home'
import React from 'react';
import MyContext from './ContextAPI/MyContext';

function App() {

  const [page, setPage] = React.useState('home');

  const websiteContext = {
    page, setPage // <-- Indicador de página atual
  }

  return (
    <MyContext.Provider value={ websiteContext }>
      <Home />
    </MyContext.Provider>
  );
}

export default App;
