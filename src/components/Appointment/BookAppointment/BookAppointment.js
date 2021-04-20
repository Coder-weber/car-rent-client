import React, { useEffect, useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'BUSINESS CLASS',
        visitingHour: '9:00 AM - 4:00 PM',
        totalSpace: 50,
        price:200
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'WEDDINGS',
        visitingHour: '24 Hours',
        totalSpace: 100,
        price:400
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'AIRPORT TRANSPORT',
        visitingHour: '24 Hours',
        totalSpace: 100,
        price:500
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'BIRTHDAYS',
        visitingHour: '24 Hours',
        totalSpace: 50,
        price:300
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'PROMS',
        visitingHour: '24 Hours',
        totalSpace: 30,
        price:400
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        subject: 'PARTIES',
        visitingHour: '24 Hours',
        totalSpace: 100,
        price:400
    }
]
const BookAppointment = ({date}) => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Available Rent on {date.toDateString()}</h2>
            <div className="row">
                {
                    services.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;