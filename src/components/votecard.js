import React from "react";
import { Link } from "react-router-dom";

function VoteCard(props) {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}  <span className="text-danger small pt-1 fw-bold"> • Voting </span> <span> <br />{props.creator} • Challenge • {props.timeStamp} • {props.ideaCount} ideas</span></h5>

      <div className="d-flex align-items-center">
        <div className="ps-1">
          <span className="text-muted small pt-2">
            {props.description}
          </span>
        </div>
      </div>

      <div className="d-flex" style={{ justifyContent: "flex-end" }}>
        <div onClick={() => { props.updateCurrentId(props.cardId) }}>
          <Link className="btn btn-light" to={`/${props.title}/ideas`}>See Ideas</Link>
        </div>
      </div>
    </div>
  );
}

export default VoteCard;