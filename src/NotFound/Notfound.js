import React from 'react';
import { Link } from 'react-router-dom';
import "./notFound.css"


const Notfound = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 bg'>

                </div>
                <div className='col-md-6'>
                    <div className='text-center mt-5 pt-5'>
                        <h1>OPPS! PAGE
                            <br /> NOT FOUND</h1>
                        <p>
                            The HTTP 404, 404 not found, 404, 404 error, page not found or file not found. The website hosting server will typically generate a "404 Not Found" web page when a user attempts to follow a broken or dead link
                        </p>
                        <Link to='/home'><button className='btn'><strong>GO To HOME</strong></button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Notfound;