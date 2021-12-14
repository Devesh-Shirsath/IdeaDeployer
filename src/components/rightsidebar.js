import React, { useState, useEffect } from "react";
import firebaseDb from "../firebase";

function Rightsidebar() {
    var [updates, setUpdates] = useState({})

    useEffect(() => {
        firebaseDb.child('updates').on('value', snapshot => {
            if (snapshot.val() != null) {
                setUpdates({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    return (
        <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Recent Activity <span>| Today</span></h5>

                    <div className="activity">
                        {
                            Object.keys(updates).reverse().map(id => {
                                var myCurrentDate = new Date();
                                var date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth() + 1) + '-' + myCurrentDate.getDate();
                                if (updates[id].timeStamp.includes(date)) {
                                    return <div className="activity-item d-flex" key={id}>
                                        <div className="activite-label">{updates[id].timeStamp.split(' ')[1]}</div>
                                        <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                                        <div className="activity-content">
                                            {updates[id].type === 'Executing' ? "Executing Challenge" : updates[id].type} <a className="fw-bold text-dark">{updates[id].title}</a> Posted by <a className="fw-bold text-muted">{updates[id].creator}</a>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Rightsidebar;