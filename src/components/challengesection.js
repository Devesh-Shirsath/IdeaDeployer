import React, { useState, useEffect } from "react";
import ChallengeCard from "./challengecard";
import firebaseDb from "../firebase";

const ChallengeSection = () => {

    var [challengeObjects, setchallengeObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('challenges').on('value', snapshot => {
            if (snapshot.val != null) {
                setchallengeObjects({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    const editVal = obj => {
        firebaseDb.child(`challenges/${currentId}`).set(
            obj,
            err => {
                if (err) console.log(err)
                else setCurrentId('')
            }
        )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`challenges/${key}`).remove(
                err => {
                    if (err) console.log(err)
                    else setCurrentId('')
                }
            )
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
                                    <i className="icon bi bi-heart"></i>
                                    <a className="icon" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li><a className="dropdown-item" onClick={() => { setCurrentId(id)}} data-bs-toggle="modal" data-bs-target="#postChallenge"><i className="bi bi-pencil"></i>Edit</a></li>
                                        <li><a className="dropdown-item" onClick={() => { onDelete(id) }}><i className="bi bi-trash"></i>Delete</a></li>
                                    </ul>
                                </div>
                                <ChallengeCard
                                    creator={challengeObjects[id].creator}
                                    title={challengeObjects[id].title}
                                    ideaCount={challengeObjects[id].ideaCount}
                                    timeLeft={challengeObjects[id].timeLeft}
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