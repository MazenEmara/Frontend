import React, {Component, useState, useEffect} from "react";
import { ObjectID } from 'bson';
import OrderDataService from "../services/rabbit";

const axios = require ("axios");
const arr= [];


async function CheckDel(orderid) {
    var url = 'http://localhost:3000/orders' + orderid;
    axios.get(url).then(function (result) {
        see(result.data);
    });

    async function see(data) {
        console.log(data[0].Status);
        if (data[0].Status === 'PROCESSING') {
            
            setTimeout(() => {
                CheckDel(orderid);
            }, 5000);
        } else if (data[0].Status === 'FULFILLED') {
            setTimeout(() => {
                CheckDel(orderid);
            }, 5000);
        } else if (data[0].Status === 'CANCELED') {
        } else {
            setTimeout(() => {
                CheckDel(orderid);
            }, 5000);
        }
    }
}
const CardComponent = (props) => { 

    return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
        <div className="card card-sm card-product-grid">
            <figcaption className="info-wrap">
                
                <a className="title">{props.name}</a>
                <a className="title text-info"> Email: {props.Email}</a>
                <div className="title text-dark">Status: {props.Status}</div>
                <div className="title text-dark">Address: {props.address}</div>
                <div className="title text-dark">Total Price: {props.totalPrice}</div>
                <button className="btn btn-outline-success" type="button">View Shipping Status</button>
                <div className="description"></div>
            </figcaption>
        </div>
    </div>
)
}


const Order = props => {

    const [orders, setOrders] = useState([]);

  
    useEffect(() => {
      retrieveOrders();
    }, [])

    const retrieveOrders = () => {
        OrderDataService.getAll()
          .then(response => {
            console.log(response.data);
            setOrders(response.data.map((Or)=><CardComponent Email = {Or.Email} Status = {Or.Status}  address = {Or.address} orderedShipping = {Or.orderedShipping} orderedproducts = {Or.orderedproducts} totalPrice = {Or.totalPrice} orderID = {Or._id}/>))
            return orders
          })
          .catch(e => {
            console.log(e);
          });
      };
      console.log(orders);

    return(
        <div>
            <div className="row pt-3">
            { orders }
            </div>

            <div>
                {/* <PaginationComponent key={1} page={page}  setPage={setPage} num_of_pages={num_of_pages}/>               */}
            </div>
        </div>   
        
    )
}

export default Order;