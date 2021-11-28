import React,{useState,useEffect} from "react";

function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <button type="button" className="btn btn-dark">
              Post a Challenge
          </button>
          </li>
          <li className="nav-heading">
            Activity
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="index.html">
              <i className="bi bi-bar-chart"></i>
              <span>Challenge</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="index.html">
              <i className="bi bi-lightbulb"></i>
              <span>Vote Ideas</span>
            </a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-person-fill"></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>

        </aside>
  );
}

export default Sidebar;