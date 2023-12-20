import React, { useState, useEffect } from "react";
import { Link, NavLink} from "react-router-dom";
import { baseUrl } from "./constant";
import "./style.css";
import { toast } from "react-toastify";
import Navbaradmin from "./Navbar-admin";


const Adminpage = () => {

  // const productApi = (url =`${baseUrl}api/Products`)=>{
  //   return{
  //           // fetchAll: () =>axios.get(url),
  //           createItem: newRecord => axios.post(url, newRecord),
  //           update: (id, updatedRecord)=>axios.put(url + id, updatedRecord),
  //           delete: id => (url + id)
  //   }
  // }

 
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  

  

  let componentsMounted = true;

  useEffect(() => {
    getProducts()
  }, []);


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
 


  const deleteProduct =async(id) =>{
    const response = await fetch(`${baseUrl}api/Products/${id}`,{
    method: "DELETE",
      }).then((result)=>{
        result.json().then((response)=>{
          console.log(response)
          getProducts()
        })
      })  ;




    //   if (!response.ok) {
    //     const error = await response.json();
    //     throw error ? error : "Something bad happended";
    //   }
      
      
    // ShowProducts()

    //   toast(" deleted successfully", {
    //     type: "warning",
    //     position: "top-right",
    //   });
            
  }
 

  const Loading = () => {
    return <>Loading....</>;
  };

  const ShowProducts = () => {
    return (
      <>
       
          <div className="d-grip d-md-flex justify-content-md-end mb-3">
            <NavLink to="/addproducts" >
              <button className="btn btn-warning">Add New Products</button>
            </NavLink>
          </div>
          
             <table class="table table-striped mt-4">
             <thead class="thead-dark">
               <tr>
                 <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
              <th scope="col">PointValue</th>
              <th scope="col">Product Image</th>
              <th scope="col">Edit</th>
              <th className="text-danger" scope="col">Delete</th>
            </tr>
         </thead>

        <tbody>
           {filter.map((product, index) => {
              return (
                <>
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td> {product.pointValue}</td>
                    <td><img src={product.imagePath} className="image"/></td>
                    <td >
                      <Link  to={"/edit/"+product.id} className="text-success no-underline"><i class="fa fa-pencil" aria-hidden="true"></i>
                       
                       </Link>
                       </td>
                   <td ><button onClick={()=>deleteProduct(product.id)} className="text-danger no-btn"><i class="fa fa-trash" aria-hidden="true"></i>
                     
                     </button>
                     </td>
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
      <Navbaradmin/>
      <div className="container my2 py-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center text-success">Admin Dashboard</h1>
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

export default Adminpage;





 


