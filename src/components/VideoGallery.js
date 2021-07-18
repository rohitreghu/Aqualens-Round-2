import React, { useState } from "react";

const VideoGallery = () => {
    const [selectedVideo, setSelectedVideo] = useState("dKKHz6b6T2E");

    const handleVideoSelect = (id) => {
        setSelectedVideo(id);
    };

    return (
        <div style={{ padding: "3% 10% 3% 10%" }} className="container-fluid">
            <div className="d-flex justify-content-center mb-4">
                <p className="display-4">Video Gallery</p>
            </div>
            <div className="row">
                <div className="col-sm-9">
                    <iframe style={{height:"100%", width:"100%"}} title={selectedVideo} id="video-player" className="" src={`https://www.youtube.com/embed/${selectedVideo}`}></iframe>
                </div>
                <div className="col-sm-3">
                    <div className="ui relaxed divided list">
                        <div onClick={() => handleVideoSelect("dKKHz6b6T2E")} className="video-item item">
                            <img style={{ width: "100%", cursor:"pointer" }} className="ui-image" src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Screenshot_2021-06-01_at_2.12.36_AM.png?v=1623907910%22%20data-src=%22//cdn.shopify.com/s/files/1/0084/6957/7794/files/Screenshot_2021-06-01_at_2.12.36_AM.png?v=1623907910" alt="video-thumbnail" />
                            <div className="content">
                                <div className="header">
                                    Why Aqualens Clear Dailies?
                                </div>
                            </div>
                        </div>
                        <div onClick={() => handleVideoSelect("8vcxQSzsHA8")} className="video-item item">
                            <img style={{ width: "100%", cursor:"pointer" }} className="ui-image" src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Screenshot_2021-06-07_at_11.52.35_AM.png?v=1623908039%22%20data-src=%22//cdn.shopify.com/s/files/1/0084/6957/7794/files/Screenshot_2021-06-07_at_11.52.35_AM.png?v=1623908039" alt="video-thumbnail" />
                            <div className="content">
                                <div className="header">
                                    Why chose Aqualens Contact Lenses?
                                </div>
                            </div>
                        </div>
                        <div onClick={() => handleVideoSelect("WahTX5fGdvY")} className="video-item item">
                            <img style={{ width: "100%", cursor:"pointer" }} className="ui-image" src="//cdn.shopify.com/s/files/1/0084/6957/7794/files/Screenshot_2021-06-07_at_11.50.33_AM.png?v=1623908000" alt="video-thumbnail" />
                            <div className="content">
                                <div className="header">
                                    Why use Aqualens Solution & Accessories?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default VideoGallery;