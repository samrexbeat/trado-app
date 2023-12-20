import { createContext, useState, useEffect } from 'react'
import { baseUrl } from '../components/constant'

export const OrderContext = createContext()

export const OrderProvider =  ({ children }) => {

    const [orderItems, setOrderItems] = useState('orderItem')

    const addItemToOrder = async(item) =>{
            const InputValue = {orderItems}
            console.log(InputValue)
            let res = await fetch(`${baseUrl}api/Order`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(InputValue)
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
    }
