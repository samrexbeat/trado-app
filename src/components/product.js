import React, { useContext, useEffect, useState } from 'react'
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { baseUrl } from "./constant";
import { CartContext } from '../context/cartfn'
import Navbarlog from './Navbar-login';


const Product = () => {

    const {id, price} = useParams();
    const[product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { cartItems, addToCart } = useContext(CartContext)
   

    useEffect(() => {
        const getProduct = async () => {
          setLoading(true);
          const response = await fetch(`${baseUrl}api/Products/${id}`);
          setProduct(await response.json());
          setLoading(false);
        }

        getProduct();

    }, []);


    // const addItemToCart = async(e) => {
    //     e.preventDefault();
        
    //     const setProductValue ={userId: "0", productId: product.id, productName: product.name ,quantity:"0", price: product.price, totalPrice:""}
    //     console.log(setProductValue)
    //     let res = await fetch(`${baseUrl}api/Carts`, {
    //         method: "POST",
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(setProductValue)
    //     });
    //     let resjson = await res.json();

    // };

    const Loading = ()=>{
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6">
                    <Skeleton height={75} width={300}/>
                    <Skeleton height={50} />
                    <Skeleton height={25} />
                    <Skeleton height={150} width={300}/>
                    <Skeleton height={50} width={100} style={{marginleft:6}}/>
                </div>
            </>
        )
    }

    const ShowProduct = ()=>{
        return(
            <>
                <div className="col-md-6">
                    <img src={product.imagePath} alt={product.name} height="370px" width="400px"/>
                    
                </div>
                    <div className="col-md-6 mt-5">
                        <h1 className="diaplay-5">
                            {product.name}
                        </h1>
                        <h4 className="text-uppercase text-warning">
                            Point Value {product.pointValue}
                            <i className="fa fa-star"></i>     
                        </h4>
                        <h3 className="display-6 fw-bold text-black-50 my-4">
                        ₦ {product.price}
                        </h3>
                        <p className="lead">{product.description}</p>
                        <button className="btn btn-success mx-4 px-3 py-2" onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                        <NavLink to="/" className="btn btn-outline-success Px-4 py-2">
                      Back to Products
                    </NavLink>

                    </div>

            </>
        )
    }

  return (
    
        <div>
            <Navbarlog/>
            <div className="container py-4 px-3">
            <div className="row">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
            </div>
            
        </div>
    )
};

export default Product;