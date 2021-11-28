import React from 'react';
import './App.css';
// import Main from './components/main';
// import Navbar from './components/navbar';
// import Sidebar from './components/sidebar';
import WriteUserData from './firebase';

function App() {
  return (
    <div className="App">

      {WriteUserData(16, "jrd", "jrd@gmail.com", "imagejrd.url")}

      {/* <Navbar />
      <Sidebar />
      <Main /> */}
    </div>
  );
}
export default App;
