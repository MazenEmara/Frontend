
import './App.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import RecommendedComponent from './components/RecommendedComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import ProductsComponent from './components/ProductsComponent';
import Order from './components/OrderComponent';
import Cart from './components/CartComponent';
import StripeContainer from './components/StripeContainer';
import React, {Component, useState, useEffect} from "react";
import Shipping from './components/shippingComponent';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
      cart : [],
    }
    
    this.create = this.create.bind(this);
  }
    

    create(e) {
      e.preventDefault();
      fetch("http://localhost:3000/products/add", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          Product_name: this.state.Product_name,
          Price: this.state.Price,
          weight: this.state.weight,
          description: this.state.description,
          quantity: this.state.quantity,
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
    }



    changeNameHandler = (event) => {
      this.setState({Product_name: event.target.value});
    }
    changePriceHandler = (event) => {
      this.setState({Price: event.target.value});
    }
    changeWeightHandler = (event) => {
      this.setState({weight: event.target.value});
    }
    changeDescriptionHandler = (event) => {
      this.setState({description: event.target.value});
    }

    change = (new_cart) => {
      this.setState({
        cart: new_cart 
      })
    }

    get_items = () => {
      return this.state.cart
    }

  render() {
  return (
    <>
    
      <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path='/order'><Order orders={this.state.order} /></Route>
        <Route exact path='/products/:parm1'><ProductsComponent pages = {6} /></Route>
        <Route exact path='/products'><ProductsComponent pages = {10} get_items={this.get_items} change_item={this.change} /></Route>
        <Route exact path='/' component={HomeComponent}></Route>
        <Route exact path='/cart' render={(props)=> (<Cart {...props} order={Order}/>)}><Cart items={this.state.cart} /></Route>
        <Route exact path='/checkout'><StripeContainer /></Route>
        <Route path='/shipping'><Shipping/></Route>
      </Switch>
      </Router>
    <FooterComponent />
    </>
    
  )
}
}
export default App;
