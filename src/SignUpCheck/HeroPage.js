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

          <h1 className="logo"><img src="/assets/planner_icon.png" alt="Planner" /><a href="index.html">Planner</a></h1>

          <nav id="navbar" className="navbar">
            <a className="getstarted scrollto" onClick={signInWithGoogle}>Sign Up</a>
          </nav>

        </div>
      </header>

      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 text-center">
              <h1>One Page Bootstrap Website Template</h1>
              <h2>We are team of talented designers</h2>
            </div>
          </div>
          <div className="text-center">
            <a onClick={signInWithGoogle} className="btn-get-started scrollto">Sign Up</a>
          </div>

          <div className="row icon-boxes">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="ri-stack-line"></i></div>
                <h4 className="title"><a>Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="ri-palette-line"></i></div>
                <h4 className="title"><a>Sed ut perspiciatis</a></h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="ri-command-line"></i></div>
                <h4 className="title"><a>Magni Dolores</a></h4>
                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="ri-fingerprint-line"></i></div>
                <h4 className="title"><a>Nemo Enim</a></h4>
                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default HeroPage;