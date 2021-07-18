import React from "react";

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img style={{ width: "100%" }} src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Homepage_Banner_R3_1.jpg?v=1625801758" alt="Carousel-1" />
                </div>
                <div className="carousel-item active">
                    <img style={{ width: "100%" }} src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/HomepageBanners_Desktop_WithoutCTAWeb_Banner_Color-Lens.png?v=1623848690" alt="Carousel-2" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span style={{ backgroundColor: "black", borderRadius: "50%", height: "30px", width: "30px" }} className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only" >Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span style={{ backgroundColor: "black", borderRadius: "50%", height: "30px", width: "30px" }} className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;