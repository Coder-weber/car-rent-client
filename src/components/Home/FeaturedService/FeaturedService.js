import React from "react";
import featured from "../../../images/car-man.png";
const FeaturedService = () => {
  return (
    <section className="features-service pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5 mb-4 m-md-0">
            <img className="img-fluid" src={featured} alt="" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1>THE LUXURY YOU DESIRVE <br/> <small>WE BRING TO THE TABLE</small> </h1>
            <p className="text-secondary my-5">
            Let us spoil you and bring the joy of your ride. Either for your business or plesior, wedding day or that special love in your life, we take care of it all. Top cars for every occasion with full service and the best staff.
 </p>
            <button className="btn btn-brand">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
