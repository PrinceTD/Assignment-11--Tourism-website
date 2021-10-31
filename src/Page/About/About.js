import React from 'react';
import Header from '../../Componets/Header/Header';
import Footer from '../Footer/Footer';
import "./About.css"

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="text-center">
                <div className="bg-img text-light">
                    <h2 className='mt-5 mb-5 '>
                        About me
                    </h2>
                </div>
                <div>
                    <h3 className='pt-3 clr-border mt-5'>WHO WE ARE</h3>
                  
                    <p className="mb-5 pb-5">
                        Established in 1962, Landscaping WP Company proudly serves all major markets, as one of the adventure full-service providers for high-end residential estates and commercial landscaping. Landscaping WP is made up of nearly 200 highly skilled landscape expert.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;