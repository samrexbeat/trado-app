import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
import { baseUrl } from "./constant";
import Navbaradmin from "./Navbar-admin";


const EditProduct = ()=>{

    const {id} = useParams();
    const navigate = useNavigate();
    const [editProduct, setEditProduct] = useState({ id:'3fa85f64-5717-4562-b3fc-2c963f66afa6', name: '', description: '', pointValue: '', price: '', imageUrl:'', imageFile:null ,  created:'0001-01-01T00:00:00', imagePath:''});
    const [message, setMessage] = useState('');

    useEffect(() => {
        const getProduct = async () => {
          const response = await fetch(`${baseUrl}api/Products/${id}`);
          setEditProduct(await response.json());
         
        }

        getProduct();

    }, [id]);

    const handleInput = (e) =>{
        setEditProduct({ ...editProduct,  [e.target.name] : e.target.value, });
        
    } 
    // const handleFile = (e) => {
        
    //     if( e.target.files && e.target.files[0]){
    //         let imageFile = e.target.files[0];
    //         const reader = new FileReader();
    //         reader.onload = x=>{
    //             setEditProduct({
    //                 ...editProduct,
    //                 imageFile,
    //                 imagePath: x.target.result
    //             })
    //         }
    //         reader.readAsDataURL(imageFile)
    //     }
        
    // };

    const handleUpdate = async(e) =>{
        e.preventDefault();
        const editInputValue = { id:'3fa85f64-5717-4562-b3fc-2c963f66afa6', name: editProduct.name, description: editProduct.description, pointValue: editProduct.pointValue, price: editProduct.price, imageUrl:editProduct.imageUrl, imageFile:editProduct.imageFile ,  created:'0001-01-01T00:00:00', imagePath:editProduct.imagePath}
        console.log(editInputValue)
        let res = await fetch(`${baseUrl}api/Products/${id}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editInputValue)
        });

        let resjson = await res.json();
        if (res.status===200){

            setMessage(resjson.success)
            setTimeout(() => {
                navigate('/adminpage');
            }, 2000);       
        }
        else{
            setMessage('An Error Occured ')
        }
    }

    return(
        <>
        <Navbaradmin/>
        <div className="">
         <div className="container my2 py-4 mt-4">
            <form onSubmit={handleUpdate}>
<p className="text-success">{message}</p>
         <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Product Name</span>
  <input name="name" type="text" className={"form-control"} placeholder="Product Name" aria-label="Product Name" autocomplete="on" aria-describedby="basic-addon1" value={editProduct.name} onChange={handleInput}/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Description</span>
  <input name="description" type="text" class="form-control" placeholder="Description" aria-label="Description" aria-describedby="basic-addon2" value={editProduct.description} onChange={handleInput}/>
</div>

{/* <div class="mb-3">
  <input type="file" id="imageUpload" name="imageFile" accept="image/*" class={"form-control"} onChange={handleFile} />
    <img src={editProduct.imagePath} className="image" alt="..."/> 
  </div> */}

<div class="input-group mb-3">
<span class="input-group-text">Point Value</span>
  <input name="pointValue"  type="decimal" class="form-control" placeholder="Point Value" aria-label="Point Value" value={editProduct.pointValue} onChange={handleInput} />
 
  <span class="input-group-text">₦</span>
  <input name="price" type="number" class="form-control" placeholder="Price" aria-label="Price" value={editProduct.price} onChange={handleInput}/>
  <span class="input-group-text">.00</span>
</div>
<div className="d-grip d-md-flex justify-content-md-end mb-3">
<button type="submit" class="btn btn-success mb-4">
          Update Product
        </button>
</div>

</form>

</div>
</div>
        </>
    )
}

export default EditProduct;