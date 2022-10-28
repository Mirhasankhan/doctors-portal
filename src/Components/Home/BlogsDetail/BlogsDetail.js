import React from 'react';

const BlogsDetail = ({ myblog }) => {
    return (
        <div class="card" className="col-md-3 ms-5">
            <div class="card-body" className="d-flex mt-3">
                <img style={{ height: '50px', width: '50px' }} class="card-img-top" src={myblog.img} alt="" />
                <h5 class="card-title">{myblog.name}</h5>
            </div>
            <div className="mt-3">
                <h4>{myblog.tips}</h4>
                <br />
                <p class="card-text">{myblog.comments}</p>
            </div>
        </div>
    );
};

export default BlogsDetail;