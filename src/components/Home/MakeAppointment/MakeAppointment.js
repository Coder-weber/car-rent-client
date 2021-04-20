import React from 'react';
import driver from '../../../images/car-driver.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={driver} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className=" text-uppercase">Rent</h5>
                        <h1 className="my-4">Make a Rent <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-brand">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;