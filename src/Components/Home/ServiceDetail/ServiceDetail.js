import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} alt=""/>
            <h3 className="mb-3 mt-3">{service.name}</h3>
            <p className="text-secondary">lorem ipsum service thing simple quite ppre ten thina jomauna </p>
        </div>
    );
};

export default ServiceDetail;