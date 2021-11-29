import React from "react";

function PostForm() {
    return (
        <div className="modal fade" id="postChallenge" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Post Challenge</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingName" placeholder="Your Name" />
                                    <label htmlFor="floatingName">Title</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Address" id="floatingTextarea" style={{ height: "100px" }}></textarea>
                                    <label htmlFor="floatingTextarea">Address</label>
                                </div>
                            </div>
                        </form>
                        <form>
                            <div className="form-group">
                                <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                <input type="text" className="form-control" id="recipient-name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message-text" className="col-form-label">Description:</label>
                                <textarea className="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Discard</button>
                        <button type="button" className="btn btn-primary">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostForm;