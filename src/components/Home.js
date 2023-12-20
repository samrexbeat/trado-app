import React from "react";
import Products from "./products";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
    <div className="hero">
            <div class="card bg-dark text-white border-0">
  <img src="/assets/pexels-nataliya-vaitkevich.jpg" class="card-img" alt="Background"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 class="card-title display-3 fw-bolder mb-0 text-white">Together, let's celebrate the power of nature and embrace the evolution of herbal remedies in Africa with Tradomed! </h5>
    <p class="card-text lead fs-4 mt-4"> Harnessing the rich botanical resources of our beloved continent.</p>
    </div>
  </div>
</div>
<Products />
    </div>
    </div>
)}

export default Home;