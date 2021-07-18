import React from "react";

import Card from "./Card";

const LensAccessories = () => {
    return (
        <div className="container-fluid my-2" >
            <div style={{ backgroundColor: "#ecf5cb", textAlign: "center", padding: "3% 0" }}>
                <img style={{ width: "25%" }} src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/FDA_1_f90504a4-f819-490d-bd82-19ea32c8a337.png?v=1623859736" alt="fda-img" />
                <div className="row">
                    <div style={{ margin: "2% auto" }} className="d-flex justify-content-center">
                        <Card title="Check Your Power" description="Provide your eye glasses power an dwe will tell you your contact lens power" />
                    </div>
                </div>

                <div style={{padding:"2% 25%"}}>
                    <div className="row">
                        <div className="col">
                            <Card title="Lens Solution" description="Starting € 3" src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Solution_Image.png?v=1623233491" />
                        </div>
                        <div className="col">
                            <Card title="Lens Accessories" description="Starting € 4" src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/image_42_cb0541a1-9f42-490b-b162-3b811d39f480.png?v=1623174996" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LensAccessories;