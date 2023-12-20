import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { baseUrl } from "./constant";


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);


  

  let componentsMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`${baseUrl}api/Products`);
      if (componentsMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentsMounted = false;
      };
     
    };
    getProducts();
  }, []);

  const Loading = () => {
    return ( <>
            <div className="col-md-3">
            <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
            <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
            <Skeleton height={350}/>
            </div>
    </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4 " key={product.id}>
                  <img src={product.imagePath} class="card-img-top" alt={product.name} height="230px" />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.name}</h5>
                    <p className="card-text">₦ {product.price}</p>
                    <NavLink to={`/product/${product.id}`} className="btn btn-success">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
       
      <div className="container my2 py-4">
      
        <div className="row">
        
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center text-success">Our Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts/>}
        </div>
      </div>
    </div>
  );
};

export default Products;
