import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    
        <div>
          <Navbar/>
            <div className="container my2 py-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center text-success">About Us</h1>
            <hr />

          </div>
          <h4 className=" mb-4">The TradoMed brand has pioneered the evolution of herbal remedies in Africa. With the 
            highly efficacious organic products we have, it has been proven that the effective health 
            solutions Africans need are all embedded in our environment. </h4>
            <h4 className=" mb-4">We have done a lot of work to fine-tune our products to attain the required clinical standard according to 
            international best practices.</h4>
            <h4 className=" mb-4">All our products have successfully passed clinical trials, and are approved by the relevant 
            authorities. We are poised to get these natural solutions to everyone who needs it in 
            Africa, at very affordable prices.</h4>
            <h4 className=" mb-4">Our products are not merely meant for managing health 
            conditions, but to provide the suitable remedy to deal with the predominant health
            challenges Africans are most susceptible to; and to satisfy the needs of the African market 
            with efficacious natural remedies and excellent service delivery.
</h4>
        </div>
        </div>
        </div>
    )
};

export default About;