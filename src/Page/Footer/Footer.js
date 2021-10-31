import React from 'react';

import './footer.css'

const Footer = () => {
    return (
       
        <div className='background'>
            <div className='container '>
            <div className='mt-5 pt-5 text-center'>
                <div className='p-2'>
                    <h2 className="footer pb-3">
                        STAY IN TOUCH
                    </h2>
                    <p>
                        Bespoke travel services for your business. Efficient. Cost-effective. Reliable. Online booking portal. 24 hour service. Great customer service. Dedicated account manager. Policy compliance. Corporate travel tools. Custom reports
                    </p>
                </div>
                <h3>
                    <i className="fab fa-facebook pe-4 icon"></i>
                    <i className="fab fa-youtube pe-4 icon"></i>
                    <i className="fas fa-envelope pe-4 icon"></i>
                    <i className="fab fa-twitter pe-4 icon"></i>
                    <i className="fab fa-google-plus-g icon"></i>
                </h3>
               <p className="pt-5 mt-4">
               Copyright 2021 © princeTD
               </p>
            </div>
        </div>
        </div>
    );
};

export default Footer;