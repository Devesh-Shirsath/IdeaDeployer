import React, { useState, useEffect } from "react";

function Card() {
  return (
    <div className="col-lg-8">
      <div className="row">
        <div className="col-12">
          <div className="card">

            <div className="filter">
              <i className="icon bi bi-heart"></i>
              <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li><a className="dropdown-item" href="#"><i className="bi bi-pencil"></i>Edit</a></li>
                <li><a className="dropdown-item" href="#"><i className="bi bi-trash"></i>Delete</a></li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">Challenge Title  <span className="text-danger small pt-1 fw-bold"> • Live</span> <span> <br />Creater • Challenge • time left • 200 ideas</span></h5>

              <div className="d-flex align-items-center">
                <div className="ps-1">
                  <span className="text-muted small pt-2">
                    This is the description of the challenge posted by Jyotiraj Dixit. This is the dummy text.
                    This is the description of the challenge posted by Jyotiraj Dixit. This is the dummy text.
                  </span>
                </div>
              </div>

              <div className="d-flex" style={{justifyContent:"flex-end"}}>
                <div>
                  <button type="button" class="btn btn-light">Light</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;