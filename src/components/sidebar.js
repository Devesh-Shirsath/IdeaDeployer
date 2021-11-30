import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">

      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#postChallenge">
            Post a Challenge
          </button>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/">
            <i className="bi bi-bar-chart"></i>
            <span>Challenge</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/name/vote_idea">
            <i className="bi bi-lightbulb"></i>
            <span>Vote Ideas</span>
          </Link>
        </li>

        <li className="nav-heading">
          My Activity
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/users/Jyotiraj/challenges">
            <i className="bi bi-bar-chart"></i>
            <span>My Challenge</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/users/Jyotiraj/ideas">
            <i className="bi bi-lightbulb"></i>
            <span>My Ideas</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/users/Jyotiraj/execution">
            <i className="bi bi-nut"></i>
            <span>Under Execution</span>
          </Link>
        </li>

        <li className="nav-heading">
          For More Queries
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/contact">
            <i className="bi bi-person-fill"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>

    </aside>
  );
}

export default Sidebar;