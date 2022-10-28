import React from 'react';

const TestimonialDetail = ({ testi }) => {
    return (
        // <section className="justify-content-between ml-5">
        //     <div>
        //         <p>{testi.comments}</p>
        //     </div>
        //     <div className="d-flex">
        //         <div>
        //             <img src={testi.img} alt=""/>                  
        //         </div>  
        //         <div>
        //             <h2>{testi.name}</h2>
        //             <h4>California</h4>   
        //         </div>        
        //     </div>
        // </section>
        <div class="card" className="col-md-3 ms-5">
            <p class="card-text">{testi.comments}</p>
            <div class="card-body" className="d-flex mt-3">
                <img style={{height: '50px', width: '50px'}} class="card-img-top" src={testi.img} alt="" />
                <h5 class="card-title">{testi.name}</h5>

            </div>
        </div>

    );
};

export default TestimonialDetail;