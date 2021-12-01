import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import PostForm from './components/postform';
import RightSidebar from './components/rightsidebar';
import ChallengeSection from './components/challengesection';
import MyChallengeSection from './components/mychallengesection';
import ExecutionSection from './components/executionsection';
import Contact from './components/contact';
import PostIdeaForm from './components/votecard';
import Auth from './SignUpCheck/auth';
import { firebase } from './firebase';

function App() {

  const [signedIn, setSignedIn] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if(user) return setSignedIn(true);
    setSignedIn(false);
  })

  if (signedIn === true) {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Sidebar />

          <main id="main" className="main">
            <section className="section dashboard profile">
              <div className="row">
                <Routes>
                  <Route path="/" exact element={<ChallengeSection />} />
                  <Route path="/users/Jyotiraj/challenges" exact element={<MyChallengeSection />} />
                  <Route path="/users/Jyotiraj/execution" exact element={<ExecutionSection />} />
                  <Route path="/contact" exact element={<Contact />} />
                </Routes>
                <RightSidebar />
              </div>
            </section>
          </main>

          <PostForm />
          <PostIdeaForm />
        </div>
      </Router>
    );
  }
  else {
    return (
      <Auth />
    )
  }
}
export default App;
