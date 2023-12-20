import React, { useState, useEffect } from "react";
import "./style.css";
import BarChartn from "./bar-chart";
import { PieChart } from '@mui/x-charts/PieChart';
import { baseUrl } from "./constant";
import Navbarlog from "./Navbar-login";

const Dashboard = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

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


  return (
    
        <div>
          <Navbarlog/>
             <div>
          <div className="container my2">
            <div className="row">
              <div className="d-flex user-tag">
                <h1 className="display-tag fw-bolder text-warning ">Welcome</h1>
                <p className=" fw-bolder text-success px-2 mt-3">Sam</p>
              </div>
              <hr />
            </div>
            <div className="row justify-content-center">
            <div className="d-flex col-10">
                    <div className="display-box bg-success mx-12 p-3">
                        <p className="sm-in-box" >Total Transactions</p>
                        <h4 className="lg-in-box">1,129,189,493</h4>
                        <div className="d-flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.41668 11.6666V4.5645L3.15001 7.83117L2.33334 6.99992L7.00001 2.33325L11.6667 6.99992L10.85 7.83117L7.58334 4.5645V11.6666H6.41668Z" fill="#056839"/>
                        </svg>
                        <p className="xs-in-box mr-2">15%</p>
                        <p className="xs-in-box">Last month</p>
                        </div>
                    </div>

                    <div className="display-box bg-g2 mx-12 p-3">
                        <p className="sm-in-box" >Total Transactions</p>
                        <h4 className="lg-in-box">1,129,189,493</h4>
                        <div className="d-flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.41668 11.6666V4.5645L3.15001 7.83117L2.33334 6.99992L7.00001 2.33325L11.6667 6.99992L10.85 7.83117L7.58334 4.5645V11.6666H6.41668Z" fill="#056839"/>
                        </svg>
                        <p className="xs-in-box mr-2">15%</p>
                        <p className="xs-in-box">Last month</p>
                        </div>
                    </div>

                    <div className="display-box bg-g4 mx-12 p-3">
                        <p className="sm-in-box" >Total Transactions</p>
                        <h4 className="lg-in-box">1,129,189,493</h4>
                        <div className="d-flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.41668 11.6666V4.5645L3.15001 7.83117L2.33334 6.99992L7.00001 2.33325L11.6667 6.99992L10.85 7.83117L7.58334 4.5645V11.6666H6.41668Z" fill="#056839"/>
                        </svg>
                        <p className="xs-in-box mr-2">15%</p>
                        <p className="xs-in-box">Last month</p>
                        </div>
                    </div>
                    <div className="display-box bg-g3 mx-12 p-3">
                        <p className="sm-in-box" >Total Transactions</p>
                        <h4 className="lg-in-box">1,129,189,493</h4>
                        <div className="d-flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.41668 11.6666V4.5645L3.15001 7.83117L2.33334 6.99992L7.00001 2.33325L11.6667 6.99992L10.85 7.83117L7.58334 4.5645V11.6666H6.41668Z" fill="#056839"/>
                        </svg>
                        <p className="xs-in-box mr-2">15%</p>
                        <p className="xs-in-box">Last month</p>
                        </div>
                    </div>
              </div>
              <div className="d-flex col-10 ">

<div className="data-card mt-10 mx-12 w-11">
    <div className="-mt-7">
 <BarChartn/> 
    </div>
</div>



<div className="data-card mt-10 mx-12 d-flex">    
<div >
<h4 className="-mt-4 mb-4">Transactions</h4>
<div>
<h4 className="sl-in-box -mb-2">162,3748</h4>
<p className="xs-in-box">Transactions Processed</p>
</div>
<div>
<h4 className="sl-in-box -mb-2">₦120,293,463</h4>
<p className="xs-in-box">Transaction Volume</p>
</div>
<div>
<h4 className="sl-in-box -mb-2">₦11,901,821</h4>
<p className="xs-in-box">Average Transaction Value</p>
</div>
</div>      
 <PieChart
//  colors={[ 'blue', 'lightblue']} // Use palette
 series={[
   {
     data: [
       { value: 55, color: '#506056', label: 'x'}, { value: 45, color: '#a5c2b0', label:"y"}], 
      innerRadius: 75,
      outerRadius: 99,
      paddingAngle: -7,
      cornerRadius: -1,
      startAngle: -150,
      endAngle: 212,
      cx: 125,
      cy: 99,}
  ]} 
/> 
    
</div>
</div>
<div className="">
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
</div>
            </div>
          </div>
        </div>
        </div>
    )
};

export default Dashboard;