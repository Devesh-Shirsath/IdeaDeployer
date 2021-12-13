import React from "react";
import { Link } from "react-router-dom";

function IdeaCard(props) {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.title}
                <span> <br />
                    {props.creator} • Idea • {props.timeStamp} <span style={{ display: props.userId !== props.creatorId && "none" }}>• {props.votes} upvotes </span>
                </span>
            </h5>

            <div className="d-flex align-items-center">
                <div className="ps-1">
                    <span className="text-muted small pt-2">
                        {props.description}
                    </span>
                </div>
            </div>

            <div className="d-flex" style={{ justifyContent: "flex-end" , display: props.userId === props.creatorId && "none" }}>
                <div style={{ display: props.userId !== props.creatorId && "none" }}>
                    <Link type="button" className="btn btn-light" to={`/vote_ideas`} onClick={() => { props.execute(props.title, props.description) }} style={{ display: props.userId !== props.creatorId && "none" }}>Execute</Link>
                </div>
            </div>
        </div>
    );
}

export default IdeaCard;