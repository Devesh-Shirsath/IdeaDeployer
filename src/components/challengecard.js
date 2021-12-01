import React from "react";

function ChallengeCard(props) {
  return (
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
          <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#postIdea">Post Idea</button>
        </div>
      </div>
    </div>
  );
}

export default ChallengeCard;