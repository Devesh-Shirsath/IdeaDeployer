import React from "react";

function ExecutionCard(props) {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>

            <div className="d-flex align-items-center">
                <div className="ps-1">
                    <span className="text-muted small pt-2">
                        Description : {props.description}
                    </span>
                </div>
            </div>

            <div className="d-flex align-items-center">
                <div className="ps-1">
                    <span className="text-muted small pt-2">
                        Idea : {props.idea}
                    </span>
                </div>
            </div>

            <div className="d-flex" style={{ justifyContent: "flex-end" }}>
                <div>
                    <button type="button" className="btn btn-light"><span className="text-danger small pt-1 fw-bold"> Ongoing {props.status}</span></button>
                </div>
            </div>
        </div>
    );
}

export default ExecutionCard;