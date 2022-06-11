import React, {Component} from "react";

class FooterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <footer className="section-footer bg-secondary">
                    <div className="container">
                        <section className="footer-top padding-y-lg text-white">
                            <div className="row">
                                <aside className="col-md col-6">
                                    <h6 className="title">Company</h6>
                                    <ul className="list-unstyled">
                                        <li> <a href="https://www.rabbitmart.com/rabbit-values/">About us</a></li>
                                        <li> <a href="https://www.rabbitmart.com/rabbit-values/">Career</a></li>
                                        <li> <a href="https://www.rabbitmart.com/privacy-policy/">Privacy Policy</a></li>
                                    </ul>
                                </aside>
                                <aside className="col-md col-6">
                                    <h6 className="title">Help</h6>
                                    <ul className="list-unstyled">
                                        <li> <a href="https://www.rabbitmart.com/contact-us/">Contact us</a></li>
                                    </ul>
                                </aside>
                                <aside className="col-md col-6">
                                    <h6 className="title">Account</h6>
                                    <ul className="list-unstyled">
                                        <li> <a href="/order"> My Orders </a></li>
                                    </ul>
                                </aside>
                                <aside className="col-md">
                                    <h6 className="title">Social</h6>
                                    <ul className="list-unstyled">
                                        <li><a href="https://www.facebook.com/rabbitmart.eg"> <i className="fab fa-facebook"></i> Facebook </a></li>
                                        <li><a href="https://twitter.com/rabbitmart_eg"> <i className="fab fa-twitter"></i> Twitter </a></li>
                                        <li><a href="https://www.instagram.com/rabbitmart.eg/?hl=en"> <i className="fab fa-instagram"></i> Instagram </a></li>
                                        <li><a href="https://www.youtube.com/channel/UC2QLHGGeoRuhrH_1rDSyAMg"> <i className="fab fa-youtube"></i> Youtube </a></li>
                                    </ul>
                                </aside>
                            </div> 
                        </section>  
                
                        <section className="footer-bottom text-center">
                        
                            
                                <p className="text-muted"> &copy; 2022 Rabbit, All rights reserved </p>
                                <br />
                        </section>
                    </div>
                </footer>
        )
    }
}

export default FooterComponent;