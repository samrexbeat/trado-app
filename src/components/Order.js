import React, { useState, useEffect,  useContext } from "react";
import { baseUrl } from "./constant";
import Navbarlog from "./Navbar-login";

    
const Order = () =>  {
      const [data, setData] = useState([]);
      const [filter, setFilter] = useState(data);
      const [loading, setLoading] = useState(false);
     
    
      // const deleteProduct =async () => {
      //   const res = await fetch(`https://localhost:7252/api/Products/${id}`)
      // }
      let componentsMounted = true;
    
      useEffect(() => {
        const getOrders = async () => {
          setLoading(true);
          const response = await fetch(`${baseUrl}api/Order`);
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
        getOrders();
      }, []);

      

    
      const Loading = () => {
        return <>Loading....</>;
      };
    
      const ShowOrders = () => {
        return (
          <>
            <table class="table table-striped mt-4">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Order Number</th>
                  <th scope="col">Order Qty</th>
                  <th scope="col">Total Order</th>
                  
                </tr>
              </thead>
    
              <tbody>
                {filter.map((order, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{order.id}</td>
                        <td>{order.orderNo}</td>
                        <td> {order.totalOrder}</td>
                        
                        
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </>
        );
      };
    
      return (
        <div>
          <Navbarlog/>
          <div className="container my2">
            <div className="row">
              <div className="col-12 mb-5">
                <h1 className="display-6 fw-bolder text-center text-success">Order</h1>
                <hr />
              </div>
            </div>
            <div className="row justify-content-center">
              {loading ? <Loading /> : <ShowOrders />}
            </div>
          </div>
        </div>
      );
    };
    

export default Order;