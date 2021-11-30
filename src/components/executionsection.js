import React, { useState, useEffect } from "react";
import ExecutionCard from "./executioncard";
import firebaseDb from "../firebase";

const ExecutionSection = () => {

    var [executionObjects, setexecutionObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child(`execution/Jyotiraj`).on('value', snapshot => {
            if (snapshot.val != null) {
                console.log(snapshot.val())
                setexecutionObjects({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    const editVal = obj => {
        firebaseDb.child(`execution/Jyotiraj/${currentId}`).set(
            obj,
            err => {
                if (err) console.log(err)
                else setCurrentId('')
            }
        )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`execution/Jyotiraj/${key}`).remove(
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
                Object.keys(executionObjects).map(id => {
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
                                <ExecutionCard
                                    title={executionObjects[id].title}
                                    description={executionObjects[id].description}
                                    ideaSelected={executionObjects[id].ideaSelected}
                                    status={executionObjects[id].status}
                                />
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default ExecutionSection;