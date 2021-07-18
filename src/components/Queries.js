import React from "react";

const Queries = () => {
    return (
        <div className="container">
            <div style={{ backgroundColor: "lightgreen", margin: "1% 10%" }} className="card">
                <div className="card-body">
                    <h3 className="card-title d-flex justify-content-center">Got Any Questions?</h3>
                    <form style={{ padding: "5% 10%" }}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Mobile Number</label>
                                <input type="text" className="form-control" placeholder="Mobile" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <input type="text" className="form-control" placeholder="Message" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-lg btn-primary">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Queries;