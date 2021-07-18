import React from "react";

import Carousel from "./Carousel";
import ClearLenses from "./ClearLenses";
import LensAccessories from "./LensAcessories";
import VideoGallery from "./VideoGallery";
import Queries from "./Queries";

const Home = () => {
    return (
        <div>
            <Carousel />
            <ClearLenses />
            <LensAccessories />

            <VideoGallery />
            <Queries />
        </div>
    );
};

export default Home;