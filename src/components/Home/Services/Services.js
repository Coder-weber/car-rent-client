import React, { useState } from 'react';
import briefcase from '../../../images/briefcase.png';
import plane from '../../../images/plane.png';
import diamond from '../../../images/diamond.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import AppointmentHeader from '../../Appointment/AppointmentHeader/AppointmentHeader';
import BookAppointment from '../../Appointment/BookAppointment/BookAppointment';

const serviceData = [
    {
        name: 'BUSINESS CLASS',
        img: briefcase
    },
    {
        name: 'WEDDINGS',
        img: diamond
    },
    {
        name: 'AIRPORT TRANSPORT',
        img: plane
    }

]

const Services = () => {
    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            
              
              
                {/* {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                } */}
            </div>
        </div>
        </section>
    );
};

export default Services;