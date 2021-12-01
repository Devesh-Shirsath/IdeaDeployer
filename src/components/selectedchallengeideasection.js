import React, { useState, useEffect } from "react";
import firebaseDb from "../firebase";
import SelectedChallengeIdeaCard from "./selectedchallengeideascard";

const SelectedChallengeIdeaSection = (props) => {
    var [mychallengeObjects, setmychallengeObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child(`users/${props.userId}/challenges`).on('value', snapshot => {
            if (snapshot.val != null) {
                setmychallengeObjects({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    const editVal = obj => {
        firebaseDb.child(`users/${props.userId}/challenges/${currentId}`).set(
            obj,
            err => {
                if (err) console.log(err)
                else setCurrentId('')
            }
        )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this Challenge?')) {
            firebaseDb.child(`users/${props.userId}/challenges/${key}`).remove(
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
                Object.keys(mychallengeObjects).map(id => {
                    return <div className="row" key={id}>
                        <div className="col-12">
                            <div className="card">
                                <div className="filter">
                                    <i className="icon bi bi-heart"></i>
                                    <a className="icon" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li><a className="dropdown-item" onClick={() => { setCurrentId(id) }}><i className="bi bi-pencil"></i>Edit</a></li>
                                        <li><a className="dropdown-item" onClick={() => { onDelete(id) }}><i className="bi bi-trash"></i>Delete</a></li>
                                    </ul>
                                </div>
                                <SelectedChallengeIdeaCard
                                    title={mychallengeObjects[id].title}
                                    ideaCount={mychallengeObjects[id].ideaCount}
                                    timeLeft={mychallengeObjects[id].timeLeft}
                                    description={mychallengeObjects[id].description}
                                    timeStamp={mychallengeObjects[id].timeStamp}
                                />
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default SelectedChallengeIdeaSection;