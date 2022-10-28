import React from 'react';
import doctorSmall from '../../../images/doctor-small.png';
import DoctorsDetail from '../DoctorsDetail/DoctorsDetail';

const myDocs = [
    {
        name: 'Dr. Winson Harry',
        number: '+880-188934789',
        img: doctorSmall

    },
    {
        name: 'Dr. Amber Heard',
        number: '+880-188934789',
        img: doctorSmall

    },
    {
        name: 'Dr. Charlie Adams',
        number: '+880-188934789',
        img: doctorSmall

    }
]

const Doctors = () => {
    
    return (
        <section>
            <div className="mb-5">
                <h3 className="text-center" style={{color: 'blue'}}>Our Doctors</h3>
            </div>
            <div className="row">
            <div className="d-flex ms-5">
                {
                    myDocs.map(doc => <DoctorsDetail doc={doc}></DoctorsDetail> )
                }
            </div>
            </div>
        </section>
    );
};

export default Doctors;