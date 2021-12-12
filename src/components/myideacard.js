import React from "react";
import { Link } from "react-router-dom";

function MyIdeaCard(props) {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}  <span> <br />Challenge • {props.challengeName} •  {props.timeStamp}</span></h5>

      <div className="d-flex align-items-center">
        <div className="ps-1">
          <span className="text-muted small pt-2">
            {props.description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyIdeaCard;