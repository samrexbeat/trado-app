import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { baseUrl } from "./constant";
import "./style.css"
import Product from "./product";
const Cart = () =>  {
  
      const {id, price} = useParams();
      const [data, setData] = useState([]);
      const [filter, setFilter] = useState(data);
      const [loading, setLoading] = useState(false);
      
    
      // const deleteProduct =async () => {
      //   const res = await fetch(`https://localhost:7252/api/Products/${id}`)
      // }


      let componentsMounted = true;
    
      useEffect(() => {
        const getCartItems = async () => {
          setLoading(true);
          const response = await fetch(`${baseUrl}api/Carts`, /*`${baseUrl}api/Products/${id}`*/);
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
        getCartItems();
      }, []);
    
      const Loading = () => {
        return <>Loading....</>;
      };
    
      const ShowCart = () => {
        return (
          <>
           {filter.map((carts, product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4 " key={carts.id}>
                  <img src={carts.image} class="card-img-top" alt={carts.productName} height="150px" />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{carts.productName}</h5>
                    <p className="card-text">{carts.quantity}</p>
                    <p className="card-text">₦ {carts.price}</p>
                    <p className="card-text">₦ {carts.totalPrice}</p>
                    {/* <NavLink to={`/product/${product.id}`} className="btn btn-success">
                      Buy Now
                    </NavLink> */}
                  </div>
                </div>
                <div className="flex mx-20">
                        <button className="bg-white border-gray-300 border-2 w-7 h-7 rounded-full text-gray-300 test-md mr-2">-</button>
                    
                    <div className="sm-cards-text px-2 border-4 border-gray mr-2">5</div>
                    
                    <button className="bg-white border-gray-300 border-2 w-7 h-7 rounded-full text-gray-300 text-md mr-24">+</button>
                    </div>
              </div>
            </>
          );
        })}
          </>
        );
      };

     
    
      // const {isEmpty, totalUniqueItems, items, totalItems, updateItemQuantity, removeItem, emptyCart } = useCart()
      // if(isEmpty) return<><h1 className="text-center">"Your Cart is Empty"</h1></>
      

      return (
       
        <div>
           
          <div className="container my2">
            <div className="row">
              <div className="col-12 mb-5">
                <h1 className="display-6 fw-bolder text-center">Cart</h1>
                <hr />
              </div>
            </div>
            <div className="container py-4">
            <div className="row justify-content-center">
              {loading ? <Loading /> : <ShowCart />}  
            </div>

         
        </div>
          </div>
        </div>
      );
    };
  


export default Cart;