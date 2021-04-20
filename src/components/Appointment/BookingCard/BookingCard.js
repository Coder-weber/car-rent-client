import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import AppointmentForm from '../AppointmentForm/AppointmentForm';



const BookingCard = ({booking, date}) => {
 
    const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  const [loggedInUser, setLoggedInUser] =useContext(UserContext)
  console.log('user ',loggedInUser);
  const handleBooking=()=>{

    const newBooking = loggedInUser;
    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('login ',data);
      });
  };

  const  carId  = useParams();
  const idConver= Object.values(carId) 
  const idCapture=idConver[0];
  const [data, setData] =useState([]);

useEffect(()=>{
  fetch(`http://localhost:5000/service/:${idCapture}`,{
    method:'GET',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify()            
    })
    .then(res=>res.json())
    .then(data=>setData(data))

},[])  



  

  function closeModal(){
    setIsOpen(false);
  }

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.name}</h5>
                    <h6>{booking.time} Hours</h6>
                    <h5>{booking.price} Tk</h5>
                    <p>{booking.car} CARS AVAILABLE</p>
                    {/* {
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                    

                    } */}
                   <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>

                    {/* <button onClick={handleBooking} className="btn btn-brand text-uppercase">Book Appointment</button>
                                        */}
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.name} closeModal={closeModal} date={date} price={booking.price}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;