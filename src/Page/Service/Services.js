import React, { useEffect, useState } from 'react';
import Header from '../../Componets/Header/Header';
import Service from './Service';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`./FackData.json`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className='container'>
            <Header></Header>
            
            <div className='mt-5'>
                <h2>
                    OUR TOUR PACKAGES
                </h2>
                <p className='pt-2'>
                    We Will Train, Support and Provide Your With Decades Of Expertise. Sign up today for webinar. Be a part of Canada's largest home based travel network. Sign up today for free webinar. Great Business Venture. Work From Home.
                </p>
            </div>
            <div className='mt-5 mb-5'>
                {
                    service.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;