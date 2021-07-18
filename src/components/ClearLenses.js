import React from "react";

import Card from "./Card";

const ClearLenses = () => {
    return (
        <div className="container-fluid my-2">
            <div style={{ backgroundColor: "#f5dfcb" }}>
                <div style={{ padding: "2% 25%", textAlign: "center" }}>

                    <h2 className="display-4">Aqualens Contact Lenses</h2>

                    <p className=" text-muted">Nothing But The Best For Your Eyes</p>

                    <div className="row my-4 mx-5">
                        <div className="col">
                            <img src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Group_305.png?v=1622719021" alt="misc" />
                            <p>High Quality Product</p>
                        </div>
                        <div className="col">
                            <img src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Group_306.png?v=1622799633" alt="misc" />
                            <p>Maximum Comfort</p>
                        </div>
                        <div className="col">
                            <img src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Group_307.png?v=1622799669" alt="misc" />
                            <p>Value for Money</p>
                        </div>
                    </div>

                    <h2 className="display-4">Clear Lenses</h2>

                    <p className=" text-muted">Goodbye Bulky Glasses, Hello Comfy Lenses</p>

                    <div className="row">
                        <div className="col">
                            <Card title="Dailies" description="New, Clean Lenses Everyday Perfect for Part-Time Lens Wearers" src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Image_12.png?v=1623851600" />
                        </div>
                        <div className="col">
                            <Card title="Monthly" description="Better Suited For Sensitive Eyes Env and Travel Friendly" src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Image_13.png?v=1623851730" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClearLenses;