import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../../images/car.jpg';
import car2 from '../../../images/car2.jpg';
import car3 from '../../../images/car3.jpg';
import car4 from '../../../images/car4.jpg';


// start

import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// end




const HeaderMain = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Rent The Best Qulity Car's With Us</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link to="/appointment" className="btn btn-brand">GET RENT</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
           
            <Carousel style={{height:'300px'}}>
                <div>
                    <img  src={car} />
                    <p className="legend">Car Rent</p>
                </div>
                <div>
                    <img src={car2} />
                    <p className="legend">World Car Rent </p>
                </div>
                <div>
                    <img src={car3} />
                    <p className="legend">Save the drive</p>
                </div>
                <div>
                    <img src={car4} />
                    <p className="legend">Timely the back key</p>
                </div>
            </Carousel>

           
           
           </div>
        </main>
    );
};

export default HeaderMain;