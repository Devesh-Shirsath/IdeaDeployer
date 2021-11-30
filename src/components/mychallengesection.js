import React, { useState, useEffect } from "react";
import MyChallengeCard from "./mychallengecard";
import firebaseDb from "../firebase";

const MyChallengeSection = () => {

    var [mychallengeObjects, setmychallengeObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child(`users/Jyotiraj/challenges`).on('value', snapshot => {
            if (snapshot.val != null) {
                console.log(snapshot.val())
                setmychallengeObjects({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    const editVal = obj => {
        firebaseDb.child(`users/Jyotiraj/challenges/${currentId}`).set(
            obj,
            err => {
                if (err) console.log(err)
                else setCurrentId('')
            }
        )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`users/Jyotiraj/challenges/${key}`).remove(
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
                                <MyChallengeCard
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

export default MyChallengeSection;