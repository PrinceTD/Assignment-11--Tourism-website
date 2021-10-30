import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./banner.css"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className='row pt-5'>
                    <div className='col-md-8 mt-5'>
                        <h1 className='border-clr mb-5 mt-5'>
                            NEW EXPERIENCE <br />
                            <span className='color mt-3'>
                                WONDERFUL ADVENTURE
                            </span>
                        </h1>
                        <p className='mt-5 mb-5'>
                            An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing, scuba diving
                        </p>
                        <div className='mb-5 pb-5'>
                            <Link to='/service'>
                                <button className='mt-3 mb-5 btn'>BOOK NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-5'>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;