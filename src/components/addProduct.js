import React, { useState, useEffect } from "react";
import { baseUrl } from "./constant";
import axios from "axios";
import "./style.css";
import Navbaradmin from "./Navbar-admin";




const AddItem = ()=>{

    

    const[formValue, setFormValue] = useState({ id:'3fa85f64-5717-4562-b3fc-2c963f66afa6', name: '', description: '', pointValue: '', price: '', imageUrl:'', imageFile:null ,  created:'0001-01-01T00:00:00', imagePath:'https://localhost:7252/Uploads/'});
    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");
    // const [file, setFile] = useState("");
    // const [imagePath,setImagePath] = useState("");
    // const [price, setPrice] = useState("");
    // const [pointValue, setPointValue] = useState("");
    // const [imageUrl, serImageUrl] = useState("");
   
    const [message, setMessage] = useState({});

    const handleInput = (e) =>{
        const {name, value} = e.target.value;
        setFormValue({ ...formValue,  [e.target.name] : e.target.value, });
        
    } 
    const handleFile = (e) => {
        
        if( e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x=>{
                setFormValue({
                    ...formValue,
                    imageFile,
                    imagePath: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        
    };

   

    const validate = () => {
        let temp = {}
        temp.name = formValue.name ===""?false:true;
        temp.imagePath = formValue.imagePath===""?false:true;
        setMessage(temp)
        return Object.values(temp).every(x => x===true)
    }

    const handlesubmit = async(e) =>{
        e.preventDefault();
        if(validate()){
            const fd =  new FormData() ;
            fd.append("id", formValue.id)
            fd.append("name", formValue.name)
            fd.append("description", formValue.description)
            fd.append("pointValue", formValue.pointValue)
            fd.append("price", formValue.price)
            fd.append("imageUrl", formValue.imageUrl)
            fd.append("imageFile", formValue.imageFile)
            fd.append("created", formValue.dateTime)
            
            const createItem = {id:"3fa85f64-5717-4562-b3fc-2c963f66afa6", name: formValue.name, description: formValue.description, pointValue: formValue.pointValue, price: formValue.price, imageUrl:"", imageFile:formValue.imageFile, imagePath:"https://localhost:7252/Uploads/", created: "0001-01-01T00:00:00"}

            // addOrEdit(fd)
            console.log(createItem)
            // let res = await fetch(`${baseUrl}api/Products`, {
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json',
            //             'Content-Type': 'multipart/form-data'},
            //      body: fd
                
            //   });

            const config = {
                headers: {'Content-Type': 'multipart/form-data',},
              }
             const url = (`${baseUrl}api/Products`);
             axios.post(url, createItem, config)
             .then((response) => {
                const data = response.createItem;
                if(data==!null){
                    clearForm()
                }
                
             })
             .catch((err) =>{
                console.log('err', err);
             });
            
           
        }
           

       
        }
           
        // const addOrEdit = (fd, onSuccess) =>{
        //     productApi().create(fd)
        //     .then(res => {
        //         const fd = res.createItem;
        //       onSuccess()
        //       clearForm()
        //     })
        //     .catch(err => console.log(err))
        //   }

    const clearForm = () =>{
        setFormValue({id:'', name: '', description: '', pointValue: '', price: '', imageUrl:'', imageFile: null, created:'', imagePath:''})
        document.getElementById('imageUpload').value = null
        setMessage({})
    };

        const applyErrorClass = field => ((field in message && message[field]===false)?'invalid-field':'')

   
    return(
        <>
        <Navbaradmin/>
        <div className="">
         <div className="container my2 py-4 mt-4">
            <form noValidate onSubmit={handlesubmit} /*addOrEdit={addOrEdit}*/ >

         <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Product Name</span>
  <input name="name" type="text" className={"form-control"+applyErrorClass('name')} placeholder="Product Name" aria-label="Product Name" autocomplete="on" aria-describedby="basic-addon1" value={formValue.name} onChange={handleInput}/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Description</span>
  <input name="description" type="text" class="form-control" placeholder="Description" aria-label="Description" aria-describedby="basic-addon2" value={formValue.description} onChange={handleInput}/>
</div>

<div class="mb-3">
  <input type="file" id="imageUpload" name="imageFile" accept="image/*" class={"form-control-file"+applyErrorClass('imagePath')} onChange={handleFile} />
   <img src={formValue.imagePath} className="image" alt="..."/>
  </div>

<div class="input-group mb-3">
<span class="input-group-text">Point Value</span>
  <input name="pointValue"  type="decimal" class="form-control" placeholder="Point Value" aria-label="Point Value" value={formValue.pointValue} onChange={handleInput} />
 
  <span class="input-group-text">₦</span>
  <input name="price" type="number" class="form-control" placeholder="Price" aria-label="Price" value={formValue.price} onChange={handleInput}/>
  <span class="input-group-text">.00</span>
</div>
<div className="d-grip d-md-flex justify-content-md-end mb-3">
<button type="submit" class="btn btn-success mb-4" >
          Add Product
        </button>
</div>

</form>

        
        </div>
        </div>
        </>
    )
}

export default AddItem;
  
  
  
  
  
  

  
  
  
  
  

  
       