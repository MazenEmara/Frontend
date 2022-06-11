import React, { useState } from "react";
import { ObjectID } from 'bson';

function Cart(props) {

    const [message, setMessage] = useState('');



    const postOrder = (e) => {
        e.preventDefault();
        var products = [];
        const shipid = new ObjectID();
        console.log(shipid.toString());
        for (let index = 0; index < (props.items).length; index++) {
            products.push(props.items[index].id);
        }
        console.log(products);
        if (document.getElementById("email").value == "") {
            alert("Please enter your email");
            return;
        }
        fetch('http://localhost:3000/orders/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Email: document.getElementById("email").value,
                address : document.getElementById("address").value,
                orderedproducts: products,
                Status: 'CREATED',
                orderedShipping: shipid,
                totalPrice: totalprice()
            })
        })
        alert("Order placed successfully");
    }
    function totalprice() {
        var total = 0;
        for (let index = 0; index < (props.items).length; index++) {
            total += (props.items[index].price);
        }
        return total;
    }
    function handleChange2 (event) {
        setMessage(event.target.value);
        if(event.target.value == "AmrD50"){
             totalprice = totalprice-2;
        }
    
        //console.log('value is:', event.target.value);
      };

    function removeelement(name2) {
        document.getElementById(name2).remove();
        for (let index = 0; index < (props.items).length; index++) {
            if (props.items[index].name == name2) {
                (props.items).splice(index, 1);
            }
        }
        //totalprice = totalprice- name2.Price;
    }
    
    const listItems = props.items.map((link) =>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div id={link.name} className="card card-sm card-product-grid">
                <a className="img-wrap"> <img key={link.image} src={`${link.image}`} /></a>
                <figcaption className="info-wrap">
                    <a key={link.name} className="title">{link.name}</a>
                    <a key={link.description} className="title text-info"> Description: {link.description}</a>
                    <div key={link.price} id="pricee" className="price mt-1">{link.price} EGP</div>
                    <div className="col-x2-2">
                        <div className="input-group">
                            <button id={link.name} className="btn btn-outline-danger" type="button" onClick={() => removeelement(link.name)} class2="btn btn-success">Remove</button>
                        </div>
                    </div>
                </figcaption>
            </div>
        </div>
    );
    
    return (
        <div onLoad={() => document.getElementById("totalprice").value = totalprice()} id="test">
            <section className="container">
                <div className="judul">
                    <h4>Shopping Cart</h4>
                    {listItems}
                </div>
                <div className="row justify-content-center">
                    <div className="row">
                        <div >
                            <div className="card shadow p-3 mb-5 bg-body rounded">
                                <h5>Cart</h5>
                            </div>
                        </div>
                        <div>
                            <div className="card shadow p-3 mb-5 bg-body rounded">
                                <hr></hr>
                                <div className="row">
                                    <div className="col-8">
                                        <h6> The total amount is<br></br> </h6>
                                    </div>
                                    <div className="col-8">
                                        <input className="col-4" id="totalprice" type="text" value="0" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <br></br>
                                    <h6>Email</h6>
                                    <input id="email" placeholder="Enter Your Email" required />
                                    <br></br>
                                    <h6>Address</h6>
                                    <input id="address" placeholder="Enter Your Address" required />
                                    <h6>Add promo code(optional)</h6>
                                    <input type="text" placeholder="Enter Promo Code" id="message" name="message" onChange={handleChange2} value={message}/>
                                    <button type="button" onclick={""} className="btn btn-success check btn-sm">ADD</button>
                                    <br></br>
                                    <button onClick={postOrder} type="button" className="btn btn-primary check">GO TO CHECKOUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )

}

export default Cart;