import React from 'react';
import quote from '../../../icons/quote.svg';
import people1 from '../../../images/people1.png';
import people2 from '../../../images/people2.png';
import people3 from '../../../images/people3.png';
import TestimonialDetail from '../TestimonialsDetail/TestimonialDetail';


const testimonial = [
    {
        name: 'Winson Harry',
        comments: 'It is really nice place. I got a good treatment. the are awesome. if you are looking for a dentist you can come here. they can solve your proble easily. thank you.',
        img: people1

    },
    {
        name: 'Amber Heard',
        comments: 'It is really nice place. I got a good treatment. the are awesome. if you are looking for a dentist you can come here. they can solve your proble easily. thank you.',
        img: people2

    },
    {
        name: 'Charlie Adams',
        comments: 'It is really nice place. I got a good treatment. the are awesome. if you are looking for a dentist you can come here. they can solve your proble easily. thank you.',
        img: people3

    }
]

const Testimonials = () => {
    return (
        <section>
            <div className="d-flex m-5 justify-content-between">
                <div>
                    <h5 style={{ color: 'green' }}>TESTIMONIAL</h5>
                    <h2>What's Our Patients <br /> Says</h2>
                </div>
                <div>
                    <img style={{height: '100px'}} src={quote} alt="" />
                </div>
            </div>
            <div className="row ">
                <div className="d-flex ms-5">
                    {
                        testimonial.map(testi => <TestimonialDetail testi={testi}></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;