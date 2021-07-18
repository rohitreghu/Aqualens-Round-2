import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a href="!#" className="navbar-brand ml-3">
                <img src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Image_4_3x_5d5017c4-1ad3-46f4-9ed4-070d4bb2878d_200x.png?v=1586433793" alt="brand-logo" />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active mr-2">
                        <a className="nav-link" href="!#">START YOUR TRIAL</a>
                    </li>
                    <li className="nav-item active mx-2">
                        <a className="nav-link" href="!#">CLEAR&nbsp;LENSES</a>
                    </li>
                    <li className="nav-item active mx-2">
                        <a className="nav-link" href="!#">LOGIN <img src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/image_1.png?v=1583924417" alt="login" /></a>
                    </li>
                    <li className="nav-item active ml-2 mr-3">
                        <a className="nav-link" href="!#">CART <img src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/image_2.png?v=1583926154" alt="cart" /></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;