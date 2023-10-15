import React from 'react';
import { GlobalProvider } from './context';
import "./styles/styles.scss";
import { Home } from './pages';

function App() {
  return (
    <GlobalProvider>
        <Home />
    </GlobalProvider>
  );
}

export default App;
