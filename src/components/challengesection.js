import React, { useState, useEffect } from "react";
import ChallengeCard from "./challengecard";
import firebaseDb from "../firebase";

const ChallengeSection = (props) => {

    var [challengeObjects, setchallengeObjects] = useState('')

    useEffect(() => {
        firebaseDb.child('challenges').on('value', snapshot => {
            if (snapshot.val != null) {
                setchallengeObjects({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this challenge?')) {
            firebaseDb.child(`challenges/${key}`).remove(
                err => {
                    if (err) console.log(err)
                }
            )
            props.setCurrentId(false);
        }
    }

    return (
        <div className="col-lg-8">
            {
                Object.keys(challengeObjects).map(id => {
                    return <div className="row" key={id}>
                        <div className="col-12">
                            <div className="card">
                                <div className="filter">
                                    <a className="icon" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li><a className="dropdown-item" onClick={() => { props.setCurrentId(id)}} data-bs-toggle="modal" data-bs-target="#postChallenge"><i className="bi bi-pencil"></i>Edit</a></li>
                                        <li><a className="dropdown-item" onClick={() => { onDelete(id) }}><i className="bi bi-trash"></i>Delete</a></li>
                                    </ul>
                                </div>
                                <ChallengeCard
                                    cardId={id}
                                    updateCurrentId={(cid) => {props.setCurrentId(cid)}}
                                    creator={challengeObjects[id].creator}
                                    title={challengeObjects[id].title}
                                    ideaCount={challengeObjects[id].ideaCount}
                                    timeStamp={challengeObjects[id].timeStamp}
                                    description={challengeObjects[id].description}
                                />
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default ChallengeSection;