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
import PostIdeaForm from './components/postideaform';
import Auth from './SignUpCheck/auth';
import { firebase } from './firebase';
import VoteSection from './components/votesection';
import SelectedChallengeIdeaSection from './components/selectedchallengeideasection';

function App() {
  const [userDetails, setUserDetails] = useState({
    uid: '',
    displayName: '',
    photoURL: ''
  });
  const [signedIn, setSignedIn] = useState(false);
  var [currentId, setCurrentId] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      setUserDetails(user);
      return setSignedIn(true);
    }
    setSignedIn(false);
  })

  
  if (signedIn === true) {
    console.log(userDetails)
    return (
      <Router>
        <div className="App">
          <Navbar displayName={userDetails.displayName} photoURL={userDetails.photoURL} />
          <Sidebar displayName={userDetails.displayName} />

          <main id="main" className="main">
            <section className="section dashboard profile">
              <div className="row">
                <Routes>
                  <Route path="/" exact element={<ChallengeSection currentId={currentId} setCurrentId={setCurrentId} />} />
                  <Route path="/vote_ideas" exact element={<VoteSection />} />
                  <Route path="/:title/ideas" exact element={<SelectedChallengeIdeaSection />} />
                  <Route path={`/users/:displayName/challenges`} exact element={<MyChallengeSection userId={userDetails.uid} />} />
                  <Route path={`/users/:displayName/execution`} exact element={<ExecutionSection />} />
                  <Route path="/contact" exact element={<Contact />} />
                </Routes>
                <RightSidebar />
              </div>
            </section>
          </main>

          <PostForm userId={userDetails.uid} displayName={userDetails.displayName} currentId={currentId} setCurrentId={setCurrentId} />
          <PostIdeaForm />
        </div>
      </Router>
    );
  }
  else {
    return (
      <Auth setUserDetails={setUserDetails} />
    )
  }
}
export default App;
