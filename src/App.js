import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router';
import Main from './components/main';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import PostForm from './components/postform';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Sidebar />
        <Main />
        <PostForm />
      </div>
  );
}
export default App;
