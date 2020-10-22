import React from 'react';
import Header from "../shared/Header";
import {Link} from "react-router-dom";
import './styles.css'

// You need to import your shared header...

const Home = () => {
    return (
        <>
            <Header title="Home, home on the range..."/>
            <p>Click the button to learn about me, Ken Coleman.</p>
            <p>
                <Link to="/about">
                    <button type="button">
                        Button
                    </button>
                </Link>
            </p>
        </>
    );
};

export default Home;