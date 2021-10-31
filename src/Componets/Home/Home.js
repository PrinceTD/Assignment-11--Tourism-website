import React from 'react';
import Banner from '../../Page/BannerPage/Banner';
import Footer from '../../Page/Footer/Footer';
import OurService from '../../Page/OurService/OurService';
import Video from '../../Page/Video/Video';
import Header from '../Header/Header';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <OurService></OurService>
            <HomeService></HomeService>
            
            <Video></Video>
            <Footer></Footer>
        </div>
    );
};

export default Home;