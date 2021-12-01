import React from "react";
import { Link } from "react-router-dom";

function MyChallengeCard(props) {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}  <span className="text-danger small pt-1 fw-bold"> • Live</span> <span> <br />Challenge • {props.timeLeft} • {props.ideaCount} ideas</span></h5>

      <div className="d-flex align-items-center">
        <div className="ps-1">
          <span className="text-muted small pt-2">
            {props.description}
          </span>
        </div>
      </div>

      <div className="d-flex" style={{ justifyContent: "flex-end" }}>
        <div>
        <Link className="btn btn-light" to={`/${props.title}/ideas`}>See Ideas</Link>
        </div>
      </div>
    </div>
  );
}

export default MyChallengeCard;