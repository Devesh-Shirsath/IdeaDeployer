import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebaseDb from "../firebase";
import IdeaCard from "./ideacard";

const IdeaSection = (props) => {
    var [challegeCreatorId, setChallegeCreatorId] = useState({ userId: '', cname: '', ctitle: '', cdescription: '' });
    var [toggle, setToggle]= useState(true);

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
                    userId: snapshot.val().userId,
                    cname: snapshot.val().creator,
                    ctitle: snapshot.val().title,
                    cdescription: snapshot.val().description
                })
            }
        })
    }, [])

    const Execute = (iititle, iidescription) => {
        const obj = {
            userId: `${challegeCreatorId.userId}`,
            cname: `${challegeCreatorId.cname}`,
            ctitle: `${challegeCreatorId.ctitle}`,
            cdescription: `${challegeCreatorId.cdescription}`,
            ititle: `${iititle}`,
            idescription: `${iidescription}`
        }
        var myCurrentDate = new Date();
        var date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth() + 1) + '-' + myCurrentDate.getDate() + ' ' + myCurrentDate.getHours() + ':' + myCurrentDate.getMinutes() + ':' + myCurrentDate.getSeconds();
        var updt = {
            creator: obj.cname,
            type: 'Executing',
            title: obj.ctitle,
            timeStamp: `${date}`
        }
        firebaseDb.child('updates').push(
            updt,
            err => {
                if (err) console.log(err)
            }
        )
        firebaseDb.child('execute').push(
            obj,
            err => {
                if (err) console.log(err)
            }
        )
        firebaseDb.child(`challenges/${props.currentId}`).remove(
            err => {
                if (err) console.log(err)
            }
        )
        props.setIdeaId('');
        props.setCurrentId('');
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this idea?')) {
            firebaseDb.child(`challenges/${props.currentId}/ideas/${key}`).remove(
                err => {
                    if (err) console.log(err)
                }
            )
        }
    }

    return (
        <div className="col-lg-8">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Challenges</Link></li>
                    <li className="breadcrumb-item"><Link to="/vote_ideas">Voting</Link></li>
                    <li className="breadcrumb-item active">{challegeCreatorId.ctitle}</li>
                </ol>
            </nav>
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
                                    <i className={toggle ? "icon bi bi-heart-fill" : "icon bi bi-heart" } onClick={() => { setToggle(!toggle) }}></i>
                                    <a className="icon" data-bs-toggle="dropdown" style={{ display: props.userId !== props.challengeObjects[id].userId && "none" }}><i className="bi bi-three-dots"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow" style={{ display: props.userId !== props.challengeObjects[id].userId && "none" }}>
                                        <li><a className="dropdown-item" onClick={() => { props.setIdeaId(id) }} data-bs-toggle="modal" data-bs-target="#postIdea"><i className="bi bi-pencil"></i>Edit</a></li>
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
                                    execute={(t, d) => { Execute(t, d) }}
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