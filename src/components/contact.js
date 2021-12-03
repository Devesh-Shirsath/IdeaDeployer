import React from 'react';

function Contact() {
    return (
        <div className="col-lg-8">
            <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                    <img src="/assets/jyotiraj.jpg" alt="Profile" className="rounded-circle" />
                    <h2>Jyotiraj Dixit</h2>
                    <h3>SDE Intern @CuriousJr</h3>
                    <div className="social-links mt-2">
                        <a href="https://twitter.com/Jyotiraj_Dixit" target="_blank" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="https://www.facebook.com/jrd.dixit/" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/jyotiraj_dixit/" target="_blank" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/jyotiraj-dixit-9478481aa/" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                    <img src="/assets/devesh.jpeg" alt="Profile" className="rounded-circle" />
                    <h2>Devesh Shirsath</h2>
                    <h3>Web Designer @Cliff.ai</h3>
                    <div className="social-links mt-2">
                        <a href="https://twitter.com/Jyotiraj_Dixit" target="_blank" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="https://m.facebook.com/devesh.shirsath" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/shirsathji99/" target="_blank" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/mwlite/in/devesh-shirsath-644625172" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;