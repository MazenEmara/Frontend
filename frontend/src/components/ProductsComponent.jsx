import React, {Component, useState, useEffect} from "react";
import { useSearchParams } from 'react-router-dom';
import { useCart } from "react-use-cart";


const CardComponent = (props) => { 
    

    const {onClick, ...item} = props;
    return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
        <div className="card card-sm card-product-grid">
            <a className="img-wrap"> <img src={props.image} /> </a>
            <figcaption className="info-wrap">
                { !props.quantity && <div className="badge bg-danger ms-2 w-40"><small className="text-white">Out Of Stock </small> </div>}
                
                <a className="title">{props.name}</a>
                <a className="title text-info"> Description: {props.description}</a>
                <div className="price mt-1">{props.price} EGP</div>
                <div className="description"></div>
                {/* <IncDecCounter />  */}
            <button className="btn btn-outline-success" type="button" onClick={e =>onClick({...item,quantity:1})} > Add to Cart </button>
            </figcaption>
        </div>
    </div>
)
}

function PaginationComponent(props) {
    
    

    var [page,setPage,num_of_pages] = [props.page ,props.setPage , props.num_of_pages]
    function chagepage(event){
        var id = event.target.id
        setPage(parseInt(id))
    }
    var pagination = []
    var class_ = page===1? "page-item disabled": "page-item"
    var element = <li className={class_}><button className="page-link" onClick={function (){
        setPage(page-1)
    }}>Previous</button></li>
    pagination.push(element)
    var start = page<=num_of_pages-2? page:num_of_pages-2
    for (var i=start;i<=start+2;i++){  
        element = <li className="page-item"><button className="page-link" id={i} onClick={chagepage} >{i}</button></li>
        pagination.push(element)
    }
    class_ = page===num_of_pages? "page-item disabled": "page-item"
    element = <li className={class_}><button className="page-link" onClick={function (){
        setPage(page+1)
    }}>Next</button></li>
    pagination.push(element)
    
    return (
        <ul className="pagination justify-content-center">
            {pagination}
        </ul>        
    )
}

function ProductsComponent(props) {
    let [Products, setProducts] = useState([]);
    let [page,setPage] = useState(1);
    let [paginationlist,setPaginationlist] = useState([]);
    let [ids_cart,setID] = useState([]);
    let num_of_pages = props.pages
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(props.match.params.name)
    // console.log("rerendered")
    const cards_per_page =12
    var search = window.location.href.split('/').at(-1)
    //console.log(search)
    function add_to_cart(item){
        let uniqueitems = [...new Set(props.get_items().concat(item))];
        props.change_item(uniqueitems)
        console.log(props.get_items().concat(item));
        return uniqueitems;
    }

    // useEffect( () => {add_to_cart()},[]);

    
    useEffect( () => {
        // item.quantity
        // const name = searchParams.get('name')
        // const src = searchParams.get('src')
        var url = search === "products"? `http://localhost:3000/products?page=${page}` :`http://localhost:3000/product/${search}?page=${page}` 
        fetch(url, {
        "method": "GET"
        })
        .then(response => response.json())
        .then(response => {
            setProducts(response.slice((page-1)*cards_per_page,page*cards_per_page).map((item)=> <CardComponent onClick={add_to_cart} description={item.description} quantity={item.quantity} id={item._id}  name={item.Product_name} price={item.Price} image={item.image}/>))
            return Products
        }).then(data => {
            // console.log(data)               
        }).catch(err => { console.log(err); 
        }
        ) }
        , [page,search]
    
    );

    

    //  console.log(Products)
    return (
        <div className="Container">
            <div className="row pt-3">
            { Products }
            </div>
            <div>
                <PaginationComponent key={1} page={page}  setPage={setPage} num_of_pages={num_of_pages}/>              
            </div>
        </div>
    )
}


export default ProductsComponent;