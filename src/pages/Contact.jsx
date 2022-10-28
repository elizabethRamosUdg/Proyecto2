import React from 'react';

import "../pages/style/contacto.css";
import fbimg from '../../src/images/fb.png'; // with import
import instaimg from '../../src/images/insta.png'; // with import

function Contact() {
    return (
        <div className="containerActividades">
            <div class="infocontainer">
                <h2>CONTACTANOS</h2>
                <h3>Av Enrique Díaz de León Sur 782, Moderna, 44200 Guadalajara, Jal.</h3>
                <h3>800 581 9111</h3>
                <h3><a href="mailto:elizabeth.ramos@udgvirtual.udg.mx">elizabeth.ramos@udgvirtual.udg.mx</a></h3>
                <div class="socialntw">
                    <a href="https://www.facebook.com/"><img alt="facebook" className="snicon" src={fbimg} /> </a>
                    <a href="https://www.instagram.com/"> <img alt="instagram" className="snicon" src={instaimg} /></a>
                </div>
            </div>
        </div >
    );
}

export default Contact;

