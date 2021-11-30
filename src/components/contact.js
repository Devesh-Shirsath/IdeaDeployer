import React from 'react';

function Contact() {
    return (
        <div className="col-lg-8">
            <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                    <img src="/assets/profile.png" alt="Profile" className="rounded-circle" />
                    <h2>Jyotiraj Dixit</h2>
                    <h3>SDE Intern @CuriousJr</h3>
                    <div className="social-links mt-2">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                    <img src="/assets/profile.png" alt="Profile" className="rounded-circle" />
                    <h2>Devesh Shirsath</h2>
                    <h3>Web Designer @Cliff.ai</h3>
                    <div className="social-links mt-2">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;