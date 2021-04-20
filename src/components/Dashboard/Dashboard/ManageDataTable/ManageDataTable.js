import React from 'react';

const ManageDataTable = ({services}) => {
    const handleDelete=(productId)=>{
    
        fetch(`http://localhost:5000/deleteService/${productId}`,{
          method:'DELETE',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify()
        })
        .then(res=>res.json())
        .then(data=>console.log('delete data ',data))
        }
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Time</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Car</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  services.map((service, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{service.name}</td>
                        <td>{service.time}</td>
                        <td>{service.price}</td>
                        <td>{service.car}</td>
                        <td><button onClick={()=>handleDelete(service._id)}>Delete</button> </td>                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ManageDataTable;