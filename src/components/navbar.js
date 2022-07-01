import React from "react";
import { Link } from "react-router-dom";
import { firebase } from '../firebase';

class Navbar extends React.Component {
    select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    toggleCheck = () => {
        this.select('body').classList.toggle('toggle-sidebar');
    }

    searchToggle = () => {
        this.select('.search-bar').classList.toggle('search-bar-show');
    }

    signOut = () => {
        firebase.auth().signOut();
    }

    render() {

        return (
            <header id="header" className="header fixed-top d-flex align-items-center">


                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center">
                        <img src="/assets/planner_logo.png" alt="Planner" />
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn" onClick={this.toggleCheck}></i>
                </div>

                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" autoComplete="off">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" onChange={(event) => this.props.setSearchTerm(event.target.value)} />
                        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " onClick={this.searchToggle}>
                                <i className="bi bi-search"></i>
                            </a>
                        </li>

                        <li className="nav-item dropdown pe-3">

                            <a className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown" style={{cursor:"pointer"}}>
                                <img src={this.props.photoURL === '' ? "/assets/profile.png" : this.props.photoURL} alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">{this.props.displayName}</span>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>{this.props.displayName}</h6>
                                    <span>{this.props.emailId}</span>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li onClick={this.signOut} style={{cursor:"pointer"}}>
                                    <a className="dropdown-item d-flex align-items-center" >
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </nav>

            </header>
        );
    }
}

export default Navbar;