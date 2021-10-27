import React from 'react';

const Project = (props) => {
    const { title, img } = props.project;
    // console.log(props);
    return (
        <div className="p-2 mb-5 bg-body card checkout-details col-lg-3 bg-color">
            <div>
                <img src={img} className="card-img-top" alt="" width="80" height="250" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
        
    );
};

export default Project;