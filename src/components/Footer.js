import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="container-fluid">
                <footer className="px-5">
                    <div className="row">
                        <div className="col-lg-5 col-sm-12 py-5">
                            <img src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Image_4_3x_5d5017c4-1ad3-46f4-9ed4-070d4bb2878d_200x.png?v=1586433793" alt="brand-logo" />
                            <hr />
                            <p className="mt-4">Stay Connected!</p>
                            <form>
                                <div className="form-row">
                                    <div className="col-md-8 col-sm-6">
                                        <input type="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="col-md-4 col-sm-2">
                                        <button className="btn btn-primary">JOIN AQUA CLUB</button>
                                    </div>
                                </div>
                            </form>
                            <hr />
                            <p className="mt-3">Follow Us!</p>
                            <a className="text-primary mr-2" rel="noreferrer" href="https://www.instagram.com/aqualens.in/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a className="text-primary mx-2" rel="noreferrer" href="https://www.facebook.com/aqualens/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a className="text-primary mx-2" rel="noreferrer" href="https://www.youtube.com/channel/UCUUKjBtHX1Zv_q6HQbt4veQ?view_as=subscriber" target="_blank"><i className="fab fa-youtube"></i></a>
                            <a className="text-primary ml-2" rel="noreferrer" href="https://twitter.com/aqualens_in?lang=en" target="_blank"><i className="fab fa-twitter"></i></a>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-sm-12 pt-5">
                            <p>Our Products</p>
                            <p>Dailies</p>
                            <p>Monthly</p>
                            <p>Color Lenses</p>
                            <p>Lens Solution</p>
                            <p>All Products</p>
                        </div>
                        <div className="col-lg-2 pt-5">
                            <p>More Info</p>
                            <p>Blog</p>
                            <p>F.A.Q's</p>
                            <p>Privacy Policy</p>
                            <p>About Us</p>
                        </div>
                        <div className="col-lg-2 pt-5">
                            <p>Support</p>
                            <p>9999899998</p>
                            <a rel="noreferrer" className="text-secondary" target="_blank" id="contact" href="mailto:support@aqualens.in">
                                <i className="fas fa-envelope fab">&nbsp;<span className="contact-link">support@aqualens.in</span></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
            <img style={{ maxWidth: "100%" }} src="https://cdn.shopify.com/s/files/1/0084/6957/7794/files/Footer-wave-element_2x_0f468180-fa12-49f6-8b63-6d33e3975446.png?v=1583496112" alt="footer" />
        </div>
    );
};

export default Footer;