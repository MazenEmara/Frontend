import React, {Component} from "react";

class ImageComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <article className="my-4">
                <img src="assets/images/banners/ad-sm.png" className="w-100" />
            </article>
        )
    }
}

export default ImageComponent;