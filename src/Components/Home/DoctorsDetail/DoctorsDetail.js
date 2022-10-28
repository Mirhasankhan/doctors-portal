import React from 'react';

const DoctorsDetail = ({doc}) => {
    return (
        <div className="col-md-4 ms-5">
            <img style={{height: '200px'}} src={doc.img} alt=""/>
            <h3 className="mt-3">{doc.name}</h3>
            <p className="ms-5">{doc.number}</p>              
        </div>
    );
};

export default DoctorsDetail;