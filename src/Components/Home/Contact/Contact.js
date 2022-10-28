import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-container mt-5">
            <div className="text-center">
                <h4 style={{color: 'blue'}}>Contact</h4>
                <h1 style={{color: 'white'}}>Always connect with us</h1>
            </div>
            
            <div>
                <form className="formating-design">
                    <input className="mb-3" style={{width: '900px'}}  placeholder="Email Address*"></input> <br/>
                    <input className="mb-3" style={{width: '900px'}} placeholder="Subject*"></input> <br/>
                    <input style={{width: '900px', height: '200px'}}  placeholder="Message*"></input><br/>
                    <button className="btn btn-success format-button">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;