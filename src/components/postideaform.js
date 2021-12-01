import React, { useState } from "react";
import firebaseDb from "../firebase";

function PostIdeaForm(props) {
    const initialFieldValues = {
        creator: 'Jyotiraj',
        title: '',
        ideaCount: 0,
        timeLeft: '2 days',
        description: '',
        timeStamp: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    const addVal = obj => {
        firebaseDb.child('challenges').push(
            obj,
            err => {
                if (err) console.log(err)
            }
        )
        firebaseDb.child(`users/Jyotiraj/challenges`).push(
            obj,
            err => {
                if (err) console.log(err)
            }
        )
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
        addVal(values);
    }

    return (
        <div className="modal fade" id="postIdea" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Post Idea</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                    <label htmlFor="floatingName">Idea Title</label>
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
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Discard</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Post</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostIdeaForm;

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