import React from 'react';

const Testimonial = ({review}) => {
    // const {name,country,review,image}=props.review;
    // console.log('info ',name,'c ',country,'r ',review,'img ',image);
    // const {name, country,review,image } = props.testimonial;
//    console.log('info  ',image);
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{review.review}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                
            {
            review.image ? <img className="mx-3" width="60"  src={`data:image/png;base64,${review.image.img}`}/>
            :
            <img className="mx-3" width="60" src={`http://localhost:5000/${review.img}`} alt=""/>
        }
                
                <div>
                    <h6 className="text-primary">{review.name}</h6>
                    <p className="m-0">{review.country}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;