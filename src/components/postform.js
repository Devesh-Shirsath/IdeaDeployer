import React, { useState, useEffect } from "react";
import firebaseDb from "../firebase";

function PostForm(props) {
    const initialFieldValues = {
        userId: `${props.userId}`,
        creator: `${props.displayName}`,
        title: '',
        ideaCount: 0,
        description: '',
        timeStamp: ''
    }
    var [values, setValues] = useState(initialFieldValues);

    console.log(props.currentId);
    
    useEffect(() => {
        if (props.currentId === '')
        setValues({
            ...initialFieldValues
        })
        
        else {
            firebaseDb.child(`challenges/${props.currentId}`).on('value', snapshot => {
                if (snapshot.val != null) {
                    setValues({
                        ...snapshot.val()
                    })
                }
            })
        }
    }, [props.currentId,props.challengeObjects])
    
    const addOrEdit = obj => {
        var myCurrentDate = new Date();
        var date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth() + 1) + '-' + myCurrentDate.getDate() + ' ' + myCurrentDate.getHours() + ':' + myCurrentDate.getMinutes() + ':' + myCurrentDate.getSeconds();
        obj.timeStamp = date;
        
        if (props.currentId === '') {
            firebaseDb.child('challenges').push(
                obj,
                err => {
                    if (err) console.log(err)
                }
                )
            } else {
                firebaseDb.child(`challenges/${props.currentId}`).set(
                obj,
                err => {
                    if (err) console.log(err)
                }
            )
        }
    }

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    
    const handleFormSubmit = e => {
        e.preventDefault();
        addOrEdit(values);
    }
    
    console.log(values);
    return (
        <div className="modal fade" id="postChallenge" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Post Challenge</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { props.setCurrentId('') }}></button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-3" autoComplete="off" onSubmit={handleFormSubmit}>
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingName"
                                        placeholder="Your Name"
                                        name="title"
                                        value={values.title}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="floatingName">Title</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Address"
                                        id="floatingTextarea"
                                        name="description"
                                        value={values.description}
                                        style={{ height: "100px" }}
                                        onChange={handleInputChange}>
                                    </textarea>
                                    <label htmlFor="floatingTextarea">Description</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { props.setCurrentId('') }}>Discard</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">{props.currentId === '' ? "Post" : "Update"}</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostForm;

{/* <form>
<div className="form-group">
    <label htmlFor="recipient-name" className="col-form-label">Title:</label>
    <input type="text" className="form-control" id="recipient-name" />
</div>
<div className="form-group">
    <label htmlFor="message-text" className="col-form-label">Description:</label>
    <textarea className="form-control" id="message-text"></textarea>
</div>
</form> */}