import React from 'react';
import "../pages/style/home.css";
import logo from '../../src/images/genericLogo.png'; // with import

function Home() {
    return (
    <div className="containerHome">
        <img alt="logoBig" className="logoBig" src={logo} />
    </div>
    );
}

export default Home;