import React, { useEffect } from "react";
import firebaseDb from "../firebase";
import MyIdeaCard from "./myideacard";

const MyIdeaSection = (props) => {

    useEffect(() => {
        firebaseDb.child('challenges').on('value', snapshot => {
            if (snapshot.val() != null) {
                props.setchallengeObjects({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    const onDelete = (id, iid) => {
        if (window.confirm('Are you sure to delete this idea?')) {
            firebaseDb.child(`challenges/${id}/ideas/${iid}`).remove(
                err => {
                    if (err) console.log(err)
                }
            )
        }
    }

    return (
        <div className="col-lg-8">
            {
                Object.keys(props.challengeObjects).reverse().map(id => {
                    if (props.challengeObjects[id].ideas !== undefined)
                        return Object.keys(props.challengeObjects[id].ideas).reverse().filter((item) => {
                            if (props.searchTerm === "") {
                                return item;
                            }
                            else if (props.challengeObjects[id].ideas[item].title.toUpperCase().includes(props.searchTerm.toUpperCase().trim())) {
                                return item;
                            }
                            return null;
                        }).map(iid => {
                            if (props.userId === props.challengeObjects[id].ideas[iid].userId)
                                return <div className="row" key={iid}>
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="filter">
                                                <a className="icon" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                    <li><a className="dropdown-item" onClick={() => { props.setCurrentId(iid) }} data-bs-toggle="modal" data-bs-target="#postChallenge"><i className="bi bi-pencil"></i>Edit</a></li>
                                                    <li><a className="dropdown-item" onClick={() => { onDelete(id, iid) }}><i className="bi bi-trash"></i>Delete</a></li>
                                                </ul>
                                            </div>
                                            <MyIdeaCard
                                                challengeName={props.challengeObjects[id].title}
                                                title={props.challengeObjects[id].ideas[iid].title}
                                                timeStamp={props.challengeObjects[id].ideas[iid].timeStamp}
                                                description={props.challengeObjects[id].ideas[iid].description}
                                            />
                                        </div>
                                    </div>
                                </div>
                        })
                })
            }
        </div>
    );
}

export default MyIdeaSection;