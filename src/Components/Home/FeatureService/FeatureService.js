import React from 'react';
import treatment from '../../../images/treatment.png';

const FeatureService = () => {
    return (
        <section className="mt-5 mb-5 d-flex justify-content-center">
            <div className="row w-50 ">
                <div className="col-md-5">
                    <img style={{height: '300px'}} className="img-fluid" src={treatment} alt="" />
                </div>
                <div className="col-md-7 align-self-center">
                    <h2>Exceptional Dental <br /> Care, on Your Terms</h2>
                    <p><small>It is a established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsums that it has a more-or-less normal distribution of letters as opposed to using Content here, making it look like readable English many desktop</small></p>
                    <br/>
                    <button className="btn btn-success">Learn More </button>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;