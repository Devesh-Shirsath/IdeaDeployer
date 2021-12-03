import React, { useEffect } from 'react';
import { firebase } from '../firebase';
import "./HeroPage.css";
import "./aos/aos.css";
import "./swiper/swiper-bundle.min.css";
import "./glightbox/css/glightbox.min.css";

function HeroPage(props) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    })
    firebase.auth().signInWithPopup(provider)
      .then((res) => {
        props.setUserDetails(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><img src="/assets/planner_icon.png" alt="Planner" /><a>Planner</a></h1>

          <nav id="navbar" className="navbar">
            <a className="getstarted scrollto" onClick={signInWithGoogle} style={{cursor:"pointer"}}>Sign Up</a>
          </nav>

        </div>
      </header>

      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 text-center">
              <h1>Now your team can Ideate, Vote, and Execute.</h1>
              <h2>Vote out the best idea for any challenge and start executing it using Planner.</h2>
            </div>
          </div>
          <div className="text-center">
            <a onClick={signInWithGoogle} className="btn-get-started scrollto" style={{cursor:"pointer"}}>Get Started!</a>
          </div>

          <div className="row icon-boxes">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="ri-stack-line"></i></div>
                <h4 className="title"><a>Explore</a></h4>
                <p className="description">Productive exploration comes through collaborative brainstorming. Planner lets the users post challenges where other users can post their ideas.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="ri-palette-line"></i></div>
                <h4 className="title"><a>Ideate</a></h4>
                <p className="description">Best solution is an outcome of intensive ideation for any challenge. More ideas, better solution it will be.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="ri-command-line"></i></div>
                <h4 className="title"><a>Vote</a></h4>
                <p className="description">Voting helps challengers by letting them see the best ideas, and helps them plan the execution phase easily</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="ri-fingerprint-line"></i></div>
                <h4 className="title"><a>Execute</a></h4>
                <p className="description">Now that the challengers know whats the scope of the problem and whats the best suitable idea for it, they can easily execute the idea.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default HeroPage;