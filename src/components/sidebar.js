import React,{useState,useEffect} from "react";

function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">
        
          <li className="nav-heading">Pages</li>
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid"></i>
              <span>Challenge</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid"></i>
              <span>Vote Ideas</span>
            </a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
        
        </aside>
  );
}

export default Sidebar;