import React, { useEffect } from 'react';

const AppointmentDataTable = ({appointments}) => {
    
    const handleCondition=getId=>{
        
    }
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Gender</th>
                <th className="text-secondary" scope="col">Car Count</th>
                <th className="text-secondary" scope="col">Hire Time</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Total Price</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.gender}</td>
                        <td>{appointment.car}</td>
                        <td>{appointment.time} Hours</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.price}</td>
                        <td>
                            <button onClick={()=>handleCondition(appointment._id)}>Pending</button> 
                            <button onClick={()=>handleCondition(appointment._id)}>On Going</button> 
                            <button onClick={()=>handleCondition(appointment._id)}>Done</button> 
                       
                        </td>
                        
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentDataTable;