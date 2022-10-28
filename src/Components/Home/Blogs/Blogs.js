import React from 'react';
import people1 from '../../../images/people1.png';
import BlogsDetail from '../BlogsDetail/BlogsDetail';


const myBlogs = [
    {
        name: 'Dr. Kane',
        comments: 'It is really nice place. I got a good treatment. the are awesome. if you are looking for a dentist you can come here. they can solve your proble easily. thank you.',
        img: people1,
        tips: 'Check at least a doctor in a year for your teeth'

    },
    {
        name: 'Dr. Blair',
        comments: 'It is really nice place. I got a good treatment. the are awesome. if you are looking for a dentist you can come here. they can solve your proble easily. thank you.',
        img: people1,
        tips: 'Two time brush ina a day can keep you healthy'

    },
    {
        name: 'Dr. Marcus',
        comments: 'It is really nice place. I got a good treatment. the are awesome. if you are looking for a dentist you can come here. they can solve your proble easily. thank you.',
        img: people1,
        tips: 'The tooth cancer is taking a challenge'

    }
]

const Blogs = () => {
    return (
        <section>
            <div>
                <div className="text-center mt-5">
                    <h3 style={{ color: 'blue' }}>OUR BLOG</h3>
                    <h2>From Our Blog News</h2>
                </div>
            </div>
            <div className="d-flex m-5 justify-content-between">
                <div className="d-flex ms-5">
                    {
                        myBlogs.map(myblog => <BlogsDetail myblog={myblog}></BlogsDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;