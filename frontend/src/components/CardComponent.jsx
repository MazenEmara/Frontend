import React, {Component} from "react";


class CardComponent extends Component {

    constructor(props) {
        super(props)
        // console.log(props)
        this.state = {

        }
    }
    
    render() {
        return (<div classNameName="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div className="card card-sm card-product-grid">
                        <a href="#" className="img-wrap"> <img src="assets/images/items/2.jpg" /> </a>
                        <figcaption className="info-wrap">
                            <a href="#" className="title">Strawberry</a>
                            <div className="price mt-1">$17.00</div> 
                        </figcaption>
                    </div>
                </div>
        )
    }
}