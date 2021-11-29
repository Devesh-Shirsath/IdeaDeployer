import React, { useState, useEffect } from "react";
import Card from "./card";
import Rightsidebar from "./rightsidebar";
import firebaseDb from "../firebase";

const Main = () => {

    var [challengeObjects, setchallengeObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('users').on('value', snapshot => {
            if (snapshot.val != null)
                setchallengeObjects({
                    ...snapshot.val()
                })
        })
    }, [])

    const addOrEdit = obj => {
        if (currentId === '')
            firebaseDb.child('users').push(
                obj,
                err => {
                    if (err) console.log(err)
                    else setCurrentId('')
                }
            )

        else
            firebaseDb.child(`users/${currentId}`).set(
                obj,
                err => {
                    if (err) console.log(err)
                    else setCurrentId('')
                }
            )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`users/${key}`).remove(
                err => {
                    if (err) console.log(err)
                    else setCurrentId('')
                }
            )
        }
    }

    return (
        <main id="main" className="main">
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            Object.keys(challengeObjects).map(id => {
                                return <div className="row" key = {id}>
                                    <div className="col-12">
                                        <Card
                                            creator = {challengeObjects[id].creator}
                                            title = {challengeObjects[id].title}
                                            ideaCount = {challengeObjects[id].ideaCount}
                                            timeLeft = {challengeObjects[id].timeLeft}
                                            description = {challengeObjects[id].description}
                                        />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <Rightsidebar />
                </div>
            </section>
        </main>
    );
}

export default Main;