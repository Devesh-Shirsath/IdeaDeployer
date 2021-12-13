import React from "react";

function ExecutionCard(props) {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.ctitle} <span className="small pt-1 fw-medium"> • {props.cname} </span> <br /> <span> {props.cdescription} </span></h5>

            <div className="d-flex align-items-center">
                <div className="ps-1">
                    <span className="text-muted small pt-2">
                        Idea Title: {props.ititle}
                    </span>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="ps-1">
                    <span className="text-muted small pt-2">
                        Idea Description: {props.idescription}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ExecutionCard;