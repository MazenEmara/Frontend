import React, {Component} from "react";
import RecommendedComponent from "./RecommendedComponent";
import CategoriesComponent from "./CategoriesComponent";
import ImageComponent from "./ImageComponent";

class HomeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
            <CategoriesComponent />
            <RecommendedComponent />
            <ImageComponent />
            </div> 
        )
    }
}

export default HomeComponent;