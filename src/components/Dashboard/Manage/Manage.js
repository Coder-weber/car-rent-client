import React, { useEffect, useState } from 'react';
import ManageDataTable from '../Dashboard/ManageDataTable/ManageDataTable';
import Sidebar from '../Sidebar/Sidebar';

const Manage = () => {
    const [service,setServices] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container-fluid row" >
        <Sidebar></Sidebar>
        
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Services</h5>
            <ManageDataTable services={service}></ManageDataTable>
        </div>
    </div>
    );
};

export default Manage;