import React from "react";

function Card(props) {
  return (
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
        <h5 className="card-title">{props.title}  <span className="text-danger small pt-1 fw-bold"> • Live</span> <span> <br />{props.creator} • Challenge • {props.timeLeft} • {props.ideaCount} ideas</span></h5>

        <div className="d-flex align-items-center">
          <div className="ps-1">
            <span className="text-muted small pt-2">
              {props.description}
            </span>
          </div>
        </div>

        <div className="d-flex" style={{ justifyContent: "flex-end" }}>
          <div>
            <button type="button" className="btn btn-light">Light</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;