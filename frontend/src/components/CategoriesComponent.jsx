import React, {Component} from "react";

class CategoriesComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <section className="section-main padding-y">
                <main className="card">
                    <div className="card-body">
                
                <div className="row">
                    <aside className="col-lg col-md-3 flex-lg-grow-0">
                        <nav className="nav-home-aside">
                            <h6 className="title-category">CATEGORIES <i className="d-md-none icon fa fa-chevron-down"></i></h6>
                            <ul className="menu-category">
                                <li><a href="#">Laundry and Home care</a></li>
                                <li><a href="#">Breakfast, Fruits and vegtabeles</a></li>
                                <li><a href="#">Skin and Body care</a></li>
                            </ul>
                        </nav>
                    </aside>
                    <div className="col-md-9 col-xl-7 col-lg-7">
                
            
                <div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel1_indicator" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                    <li data-target="#carousel1_indicator" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="assets/images/banners/slide1.jpg" alt="First slide" /> 
                    </div>
                    <div className="carousel-item">
                    <img src="assets/images/banners/slide2.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                    <img src="assets/images/banners/slide3.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div> 
            
                
                    </div> 
                    <div className="col-md d-none d-lg-block flex-grow-1">
                        <aside className="special-home-right">
                            <h6 className="bg-blue text-center text-white mb-0 p-2">Popular category</h6>
                            
                            <div className="card-banner border-bottom">
                            <div className="py-3" style={{width:80}}>
                                <h6 className="card-title">Skin and Body care</h6>
                                <a href="#" className="btn btn-secondary btn-sm"> Source now </a>
                            </div> 
                            <img src="https://cdn1.evitamins.com/images/products/Banana_Boat/351033/500/351033_front2020.jpg" height="80" className="img-bg" />
                            </div>
                
                            <div className="card-banner border-bottom">
                            <div className="py-3" style={{width:80}}>
                                <h6 className="card-title">Laundry and Home care </h6>
                                <a href="#" className="btn btn-secondary btn-sm"> Source now </a>
                            </div> 
                            <img src="https://happet.net/wp-content/uploads/2020/07/1_.jpg" height="80" className="img-bg" />
                            </div>
                
                            <div className="card-banner border-bottom">
                            <div className="py-3" style={{width:80}}>
                                <h6 className="card-title">Breakfast, Fruits and vegtabeles</h6>
                                <a href="#" className="btn btn-secondary btn-sm"> Source now </a>
                            </div> 
                            <img src="https://m.media-amazon.com/images/I/61go94NYFgL.jpg" height="80" className="img-bg" />
                            </div>
                
                        </aside>
                    </div>
                </div> 
                
                    </div> 
                </main> 
                
                </section>
        )
    }
}

export default CategoriesComponent;