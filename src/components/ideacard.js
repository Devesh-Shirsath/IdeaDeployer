import React from "react";

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
                    <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#postIdea" onClick={() => { props.updateCurrentId(props.cardId) }} style={{ display: props.userId !== props.creatorId && "none" }}>Execute</button>
                </div>
            </div>
        </div>
    );
}

export default IdeaCard;