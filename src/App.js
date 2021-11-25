import React from 'react';
import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
