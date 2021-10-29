import React from 'react';
import './video.css'

const Video = () => {
    return (
        <div className='container '>
            <div className='row mt-5 pt-5'>
                <div className='col-md-6'>
                    <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/k4aZMdSkUAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='col-md-6'>
                   
                    <h5 className='head'>
                    PROMOTION 
                    </h5>
                    <h2 className='pt-3 pb-3'>
                        WATCH OUR PROMOTIN VIDEO
                    </h2>
                    <p>Reach the people who matter to you. Start your YouTube video campaign on Google Ads. Be seen where everyone is watching and reach the people who matter the most.
                    <br />  <br /> 
                    Our Medicaid Plan Includes Extra Benefits, Like Rewards For Going To The Doctor. Our Medicaid
                    Reach the Right Customers. Pick Your Budget. Be Seen On YouTube</p>
                </div>
            </div>
        </div>
    );
};

export default Video;