import React, { useEffect, useState } from 'react';
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
import HeroPage from './SignUpCheck/HeroPage';
import { firebase } from './firebase';
import VoteSection from './components/votesection';
import SelectedChallengeIdeaSection from './components/selectedchallengeideasection';

function App() {
  const [userDetails, setUserDetails] = useState({
    uid: '',
    displayName: '',
    photoURL: '',
    email: ''
  });
  const [signedIn, setSignedIn] = useState(false);
  var [loading, setLoading] = useState(true);
  var [searchTerm, setSearchTerm] = useState('');
  var [currentId, setCurrentId] = useState('');
  var [ideaId, setIdeaId] = useState('');
  var [challengeObjects, setchallengeObjects] = useState({});

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUserDetails(user);
      return setSignedIn(true);
    }
    setSignedIn(false);
  })

  useEffect(() => {
    setLoading(false);
  })

  if (loading === true) {
    return (
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
  if (signedIn === true) {
    return (
      <Router>
        <div className="App">
          <Navbar displayName={userDetails.displayName} photoURL={userDetails.photoURL} emailId={userDetails.email} setSearchTerm={setSearchTerm} />
          <Sidebar displayName={userDetails.displayName} setCurrentId={setCurrentId} />

          <main id="main" className="main">
            <section className="section dashboard profile">
              <div className="row">
                <Routes>
                  <Route path="/" exact element={<ChallengeSection  {...({ currentId, setCurrentId, challengeObjects, setchallengeObjects, searchTerm })} />} />
                  <Route path="/vote_ideas" exact element={<VoteSection searchTerm={searchTerm} />} />
                  <Route path="/:title/ideas" exact element={<SelectedChallengeIdeaSection searchTerm={searchTerm} />} />
                  <Route path={`/users/:displayName/challenges`} exact element={<MyChallengeSection userId={userDetails.uid} {...({ currentId, setCurrentId, challengeObjects, setchallengeObjects , searchTerm})} />} />
                  <Route path={`/users/:displayName/execution`} exact element={<ExecutionSection searchTerm={searchTerm} />} />
                  <Route path="/contact" exact element={<Contact />} />
                </Routes>
                <RightSidebar />
              </div>
            </section>
          </main>

          <PostForm userId={userDetails.uid} displayName={userDetails.displayName} currentId={currentId} setCurrentId={setCurrentId} challengeObjects={challengeObjects} />
          <PostIdeaForm userId={userDetails.uid} displayName={userDetails.displayName} currentId={currentId} setCurrentId={setCurrentId} ideaId={ideaId} setIdeaId={setIdeaId} challengeObjects={challengeObjects} />
        </div>
      </Router>
    );
  }
  else {
    return (
      <HeroPage setUserDetails={setUserDetails} />
    )
  }
}
export default App;
