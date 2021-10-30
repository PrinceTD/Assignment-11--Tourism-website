import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './service.css'


const Service = (props) => {
    const { name, img, details, price } = props.service
    return (
        <div>
           
            <div className="card mb-4 back-border mt-5">
                <div className="row g-0">
                    <div className="col-md-4 ">
                       <img src={img} className="rounded-start" alt="" height="250px" width="350px"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{details}</p>
                            <h2>
                                ${price}
                            </h2>
                            <button className=' btn'>BOOK NOW</button>
                        </div>

                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Service;