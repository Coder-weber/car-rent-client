import React from "react";
import FeaturedService from "../FeaturedService/FeaturedService";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonials from "../Testimonials/Testimonials";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Blogs from "../Blogs/Blogs";
import Doctors from "../Drivers/Drivers";
import Contact from "../Contact/Contact";
import Footer from "../../Shared/Footer/Footer";
import Drivers from "../Drivers/Drivers";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeaturedService></FeaturedService>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Drivers></Drivers>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
