import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="row mt-5 footer-container">
            <div  className="d-flex ms-5">
                <div  className="col-md-3">
                    <p className="mt-5">Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment Of Personal Disease</p>
                    <p>Tooth Extraction</p>
                    <p>Check Up</p>
                </div>
                <div  className="col-md-3">
                    <h5 className="mb-3" style={{color: 'green'}}>Services</h5>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment Of Personal Disease</p>
                    <p>Tooth Extraction</p>
                    <p>Check Up</p>
                    <p>Check Up</p>
                    <p>Teeth Problems</p>
                </div>
                <div  className="col-md-3">
                    <h5 className="mb-3"  style={{color: 'green'}}>Oral Health</h5>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment Of Personal Disease</p>
                    <p>Tooth Extraction</p>
                    <p>Check Up</p>
                    <p>Check Up</p>
                    <p>Teeth Problems</p>
                </div>
                <div  className="col-md-3">
                    <h5 v style={{color: 'green'}}>Our Address</h5>
                    <h5>New York-Near Hudson <br /> River</h5>
                    <br/>
                    <br/>
                    <h3>Call Now</h3>
                    <button className="btn btn-success">+2033581585</button>

                </div>
            </div>
            <div>
                <p className="text-center mt-5">Copyright 2020 All Rights Reserved</p>
            </div>
        </section>
    );
};

export default Footer;