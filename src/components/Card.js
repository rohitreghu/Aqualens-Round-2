import React from "react";

const Card = ({ title, description, src }) => {
    return (
        <div style={{ textAlign: "center" }} className="card">
            <div className="card-body">
                <h5>{title}</h5>
                <p>{description}</p>
                {src && <img style={{width:"100px", height:"150px"}} src={src} alt="img" />}
                <br />
                <button className="btn btn-sm btn-block btn-primary mt-4">View Details</button>
            </div>
        </div>
    );
};

export default Card;