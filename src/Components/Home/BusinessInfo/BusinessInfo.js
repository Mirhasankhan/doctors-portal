import React from 'react';
import BusinessCard from '../BusinessCard/BusinessCard';
import { faClock, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const businessData = [
    {
        title: 'Opening Hours',
        description: 'we are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+15503485611',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    businessData.map(data => <BusinessCard data={data}></BusinessCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;