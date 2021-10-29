import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './service.css'


const Service = (props) => {
    const { name, img, details, price } = props.service
    return (
        <div>
            <div class="card mb-4 back-border mt-5">
                <div class="row g-0">
                    <div class="col-md-4 ">
                       <img src={img} class="img-fluid rounded-start" alt="" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{details}</p>
                            <h2>
                                ${price}
                            </h2>
                        </div>

                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Service;