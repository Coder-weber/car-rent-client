import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddSerices = () => {
    const [info, setInfo] = useState({});
   
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('name', info.name);
        formData.append('time', info.time);
        formData.append('price', info.price);
        formData.append('car', info.car);
        

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
                     
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Service</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name"  placeholder="Enter the service name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Time</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name="time" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name="price" placeholder="Enter your price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Car Total</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name="car" placeholder="Enter your price" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddSerices;