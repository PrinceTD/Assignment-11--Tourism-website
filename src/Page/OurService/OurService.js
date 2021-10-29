import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ourService.css'


const OurService = () => {
    return (
        <div className='container '>
            <div class="row row-cols-1 row-cols-md-4 g-4  mt-5 mb-5 pb-5 pt-5">
                <div class="col">
                    <div class="card h-100 text-center border-cart">
                        <h1> <i class="fas fa-map-marked-alt icon-clr"></i></h1>
                        <div class="card-body">
                            <h5 class="card-title">200+ AMAZING <br /> DESTINATION</h5>
                            <p class=""><small>Good rates. No reservation costs. Read hotel reviews.</small></p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 text-center border-cart">
                        <h1><i class="fas fa-hotel icon-clr"></i></h1>
                        <div class="card-body">
                            <h5 class="card-title">COMFORTABLE <br /> HOTEL</h5>
                            <p class=""><small>Over 2,563,000 Hotels Worldwide.</small></p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 text-center border-cart">
                        <h1><i class="fas fa-address-book icon-clr"></i></h1>
                        <div class="card-body">
                            <h5 class="card-title">FLEXIBLE <br /> BOOKING</h5>
                            <p class=""><small>Find Hotel Booking In New York safe and secure</small></p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 text-center border-cart">
                        <h1><i class="fas fa-user-lock icon-clr"></i></h1>
                        <div class="card-body">
                            <h5 class="card-title">SUPER FAST <br /> BOOKING</h5>
                            <p class=""><small>Get Expert Advice and Curated Content on Searchley</small></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;