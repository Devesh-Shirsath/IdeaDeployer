import React, { useState, useEffect } from "react";
import firebaseDb from "../firebase";
import IdeaCard from "./ideacard";

const IdeaSection = (props) => {
    var [challegeCreatorId, setChallegeCreatorId] = useState({userId: ''});

    useEffect(() => {
        props.setchallengeObjects({});
        firebaseDb.child(`challenges/${props.currentId}/ideas`).on('value', snapshot => {
            if (snapshot.val() != null) {
                props.setchallengeObjects({
                    ...snapshot.val()
                })
            }
        })
        firebaseDb.child(`challenges/${props.currentId}`).on('value', snapshot => {
            if (snapshot.val() != null) {
                setChallegeCreatorId({
                    userId: snapshot.val().userId
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
        }
    }

    return (
        <div className="col-lg-8">
            {
                Object.keys(props.challengeObjects).reverse().filter((item) => {
                    if (props.searchTerm === "") {
                        return item;
                    }
                    else if (props.challengeObjects[item].title.toUpperCase().includes(props.searchTerm.toUpperCase().trim())) {
                        return item;
                    }
                    return null;
                }).map(id => {
                    return <div className="row" key={id}>
                        <div className="col-12">
                            <div className="card">
                                <div className="filter">
                                    <i className="icon bi bi-heart" ></i>
                                    <a className="icon" data-bs-toggle="dropdown" style={{ display: props.userId !== props.challengeObjects[id].userId && "none" }}><i className="bi bi-three-dots"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow" style={{ display: props.userId !== props.challengeObjects[id].userId && "none" }}>
                                        <li><a className="dropdown-item" onClick={() => { props.setCurrentId(id) }} data-bs-toggle="modal" data-bs-target="#postIdea"><i className="bi bi-pencil"></i>Edit</a></li>
                                        <li><a className="dropdown-item" onClick={() => { onDelete(id) }}><i className="bi bi-trash"></i>Delete</a></li>
                                    </ul>
                                </div>
                                <IdeaCard
                                    userId={props.userId}
                                    creatorId={challegeCreatorId.userId}
                                    title={props.challengeObjects[id].title}
                                    creator={props.challengeObjects[id].creator}
                                    votes={props.challengeObjects[id].votes}
                                    timeStamp={props.challengeObjects[id].timeStamp}
                                    description={props.challengeObjects[id].description}
                                />
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default IdeaSection;