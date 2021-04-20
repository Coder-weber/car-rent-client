import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Driver = ({driver}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
        {
            driver.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${driver.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${driver.img}`} alt=""/>
        }
            <h4>{driver.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Driver;