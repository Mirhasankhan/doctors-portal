import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png';

const MakeAppointment = () => {
    return (
        <section className="row make-appointment">
            <div className="col-md-5">
                <img src={doctor} alt=""/>
            </div>
            <div className="col-md-7">
                <div>
                    <h4 className="mt-5" style={{ color: 'green' }}>APPOINTMENT</h4>
                    <h1 style={{ color: 'white' }}>Make an appointment <br /> Today</h1>
                    <br />
                    <p className="text-white">It is a long established fact that a reader will be distractedby the readable content of a page when looking at its.</p>
                    <button className="btn btn-primary">Lean More</button>
                </div>
            </div>

        </section>
    );
};

export default MakeAppointment;