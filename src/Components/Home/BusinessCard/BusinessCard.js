import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BusinessCard.css';

const BusinessCard = ({data}) => {
    return (
        <div className="col-md-4 text-white info-card">
          <div className={`d-flex justify-content-center info-container info-${data.background}`}>
            <div className="ms-3">
                <FontAwesomeIcon className="font-icon" icon={data.icon}></FontAwesomeIcon>
            </div>
            <div>            
              <h6>{data.title}</h6>
              <small>{data.description}</small>
            </div>
          </div>
        </div>
    );
};

export default BusinessCard;