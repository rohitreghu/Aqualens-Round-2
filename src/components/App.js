import React, { Fragment } from "react";

import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Home />
            <Footer />
        </Fragment>
    );
};

export default App;