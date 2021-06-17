import React from 'react'

export const HomeThree = () => {
    return (
        <div className="wrapper">
            <div className="preloader"></div>

            {/* {<!-- Main Header Nav -->} */}
            <header className="header-nav menu_style_home_one style2 home3 navbar-scrolltofixed stricky main-menu">
                <div className="container-fluid p0">
                    {/* { <!-- Ace Responsive Menu -->} */}
                    <nav>
                        {/* {<!-- Menu Toggle btn-->} */}
                        <div className="menu-toggle">
                            <img className="nav_logo_img img-fluid" src="assets/images/header-logo.png"
                                 alt="header-logo.png"/>
                            <button type="button" id="menu-btn">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <a href="#" className="navbar_brand float-left dn-smd">
                            <img className="logo1 img-fluid" src="assets/images/header-logo2.png"
                                 alt="header-logo.png"/>
                            <img className="logo2 img-fluid" src="assets/images/header-logo2.png"
                                 alt="header-logo2.png"/>
                            <span>FindHouse</span>
                        </a>

                        <ul id="respMenu" className="ace-responsive-menu text-right" data-menu-style="horizontal">
                            <li>
                                <a href="#"><span className="title">Home</span></a>

                                <ul>
                                    <li><a href="index.html">Home 1</a></li>
                                    <li><a href="index2.html">Home 2</a></li>
                                    <li><a href="index3.html">Home 3</a></li>
                                    <li><a href="index4.html">Home 4</a></li>
                                    <li><a href="index5.html">Home 5</a></li>
                                    <li><a href="index6.html">Home 6</a></li>
                                    <li><a href="index7.html">Home 7</a></li>
                                    <li><a href="index8.html">Home 8</a></li>
                                    <li><a href="index9.html">Home 9</a></li>
                                    <li><a href="index10.html">Home 10</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><span className="title">Listing</span></a>
                                {/* {<!-- Level Two-->} */}
                                <ul>
                                    <li>
                                        <a href="#">Listing Grid</a>
                                        {/* {<!-- Level Three-->} */}
                                        <ul>
                                            <li><a href="page-listing-grid-v1.html">Grid v1</a></li>
                                            <li><a href="page-listing-grid-v2.html">Grid v2</a></li>
                                            <li><a href="page-listing-grid-v3.html">Grid v3</a></li>
                                            <li><a href="page-listing-grid-v4.html">Grid v4</a></li>
                                            <li><a href="page-listing-grid-v5.html">Grid v5</a></li>
                                            <li><a href="page-listing-full-width-grid.html">Grid Fullwidth</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Listing List</a>
                                        {/* <!-- Level Three--> */}
                                        <ul>
                                            <li><a href="page-listing-list.html">List V1</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Listing Style</a>
                                        {/* <!-- Level Three--> */}
                                        <ul>
                                            <li><a href="page-listing-parallax.html">Parallax Style</a></li>
                                            <li><a href="page-listing-slider.html">Slider Style</a></li>
                                            <li><a href="page-listing-map.html">Map Header</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Listing Half</a>
                                        {/* <!-- Level Three--> */}
                                        <ul>
                                            <li><a href="page-listing-half-map-v1.html">Map V1</a></li>
                                            <li><a href="page-listing-half-map-v2.html">Map V2</a></li>
                                            <li><a href="page-listing-half-map-v3.html">Map V3</a></li>
                                            <li><a href="page-listing-half-map-v4.html">Map V4</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Agent View</a>
                                        {/* <!-- Level Three--> */}
                                        <ul>
                                            <li><a href="page-listing-agent-v1.html">Agent V1</a></li>
                                            <li><a href="page-listing-agent-v2.html">Agent V2</a></li>
                                            <li><a href="page-listing-agent-v3.html">Agent Details</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Agencies View</a>
                                        {/* <!-- Level Three--> */}
                                        <ul>
                                            <li><a href="page-listing-agencies-v1.html">Agencies V1</a></li>
                                            <li><a href="page-listing-agencies-v2.html">Agencies V2</a></li>
                                            <li><a href="page-listing-agencies-v3.html">Agencies Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="page-add-new-property.html">Create Listing</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><span className="title">Property</span></a>
                                <ul>
                                    <li>
                                        <a href="#">User Admin</a>
                                        <ul>
                                            <li><a href="page-dashboard.html">Dashboard</a></li>
                                            <li><a href="page-my-properties.html">My Properties</a></li>
                                            <li><a href="page-message.html">My Message</a></li>
                                            <li><a href="page-my-review.html">My Review</a></li>
                                            <li><a href="page-my-favorites.html">My Favorites</a></li>
                                            <li><a href="page-add-new-property.html">Add Property</a></li>
                                            <li><a href="page-my-profile.html">My Profile</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Listing Single</a>
                                        {/* <!-- Level Three--> */}
                                        <ul>
                                            <li><a href="page-listing-single-v1.html">Single V1</a></li>
                                            <li><a href="page-listing-single-v2.html">Single V2</a></li>
                                            <li><a href="page-listing-single-v3.html">Single V3</a></li>
                                            <li><a href="page-listing-single-v4.html">Single V4</a></li>
                                            <li><a href="page-listing-single-v5.html">Single V5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="page-add-new-property.html">Create Listing</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><span className="title">Pages</span></a>
                                <ul>
                                    <li>
                                        <a href="#"><span className="title">Pages</span></a>
                                        <ul>
                                            <li><a href="page-shop.html">Shop</a></li>
                                            <li><a href="page-shop-single.html">Shop Single</a></li>
                                            <li><a href="page-shop-cart.html">Cart</a></li>
                                            <li><a href="page-shop-checkout.html">Checkout</a></li>
                                            <li><a href="page-shop-order.html">Order</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="page-about.html">About Us</a></li>
                                    <li><a href="page-gallery.html">Gallery</a></li>
                                    <li><a href="page-faq.html">Faq</a></li>
                                    <li><a href="page-login.html">LogIn</a></li>
                                    <li><a href="page-compare.html">Membership</a></li>
                                    <li><a href="page-compare2.html">Membership 2</a></li>
                                    <li><a href="page-register.html">Register</a></li>
                                    <li><a href="page-service.html">Service</a></li>
                                    <li><a href="page-error.html">404 Page</a></li>
                                    <li><a href="page-terms.html">Terms and Conditions</a></li>
                                    <li><a href="page-ui-element.html">UI Elements</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><span className="title">Blog</span></a>
                                <ul>
                                    <li><a href="page-blog-v1.html">Blog List 1</a></li>
                                    <li><a href="page-blog-grid.html">Blog List 2</a></li>
                                    <li><a href="page-blog-single.html">Single Post</a></li>
                                </ul>
                            </li>
                            <li className="last">
                                <a href="page-contact.html"><span className="title">Contact</span></a>
                            </li>
                            <li className="list-inline-item list_s"><a href="#" className="btn flaticon-user"
                                                                       data-toggle="modal"
                                                                       data-target=".bd-example-modal-lg"> <span
                                className="dn-lg text-thm3">Login/Register</span></a></li>
                            <li className="list-inline-item add_listing home2"><a href="#"><span
                                className="flaticon-plus"></span><span className="dn-lg"> Create Listing</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="sign_up_modal modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body container pb20">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                                               role="tab" aria-controls="home" aria-selected="true">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
                                               role="tab" aria-controls="profile" aria-selected="false">Register</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-content container" id="myTabContent">
                                <div className="row mt25 tab-pane fade show active" id="home" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <div className="col-lg-6 col-xl-6">
                                        <div className="login_thumb">
                                            <img className="img-fluid w100" src="assets/images/resource/login.jpg"
                                                 alt="login.jpg"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-6">
                                        <div className="login_form">
                                            <form action="#">
                                                <div className="heading">
                                                    <h4>Login</h4>
                                                </div>
                                                <div className="row mt25">
                                                    <div className="col-lg-12">
                                                        <button type="submit" className="btn btn-fb btn-block"><i
                                                            className="fa fa-facebook float-left mt5"></i> Login with
                                                            Facebook
                                                        </button>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button type="submit" className="btn btn-googl btn-block"><i
                                                            className="fa fa-google float-left mt5"></i> Login with
                                                            Google
                                                        </button>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="input-group mb-2 mr-sm-2">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroupUsername2"
                                                           placeholder="User Name Or Email"/>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i
                                                            className="flaticon-user"></i></div>
                                                    </div>
                                                </div>
                                                <div className="input-group form-group">
                                                    <input type="password" className="form-control"
                                                           id="exampleInputPassword1" placeholder="Password"/>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i
                                                            className="flaticon-password"></i></div>
                                                    </div>
                                                </div>
                                                <div className="form-group custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="exampleCheck1"/>
                                                    <label className="custom-control-label" htmlFor="exampleCheck1">Remember
                                                        me</label>
                                                    <a className="btn-fpswd float-right" href="#">Lost your
                                                        password?</a>
                                                </div>
                                                <button type="submit" className="btn btn-log btn-block btn-thm">Log In
                                                </button>
                                                <p className="text-center">Don't have an account? <a
                                                    className="text-thm" href="#">Register</a></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt25 tab-pane fade" id="profile" role="tabpanel"
                                     aria-labelledby="profile-tab">
                                    <div className="col-lg-6 col-xl-6">
                                        <div className="regstr_thumb">
                                            <img className="img-fluid w100" src="assets/images/resource/regstr.jpg"
                                                 alt="regstr.jpg"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-6">
                                        <div className="sign_up_form">
                                            <div className="heading">
                                                <h4>Register</h4>
                                            </div>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <button type="submit" className="btn btn-block btn-fb"><i
                                                            className="fa fa-facebook float-left mt5"></i> Login with
                                                            Facebook
                                                        </button>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button type="submit" className="btn btn-block btn-googl"><i
                                                            className="fa fa-google float-left mt5"></i> Login with
                                                            Google
                                                        </button>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="form-group input-group">
                                                    <input type="text" className="form-control" id="exampleInputName"
                                                           placeholder="User Name"/>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i
                                                            className="flaticon-user"></i></div>
                                                    </div>
                                                </div>
                                                <div className="form-group input-group">
                                                    <input type="email" className="form-control" id="exampleInputEmail2"
                                                           placeholder="Email"/>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i
                                                            className="fa fa-envelope-o"></i></div>
                                                    </div>
                                                </div>
                                                <div className="form-group input-group">
                                                    <input type="password" className="form-control"
                                                           id="exampleInputPassword2" placeholder="Password"/>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i
                                                            className="flaticon-password"></i></div>
                                                    </div>
                                                </div>
                                                <div className="form-group input-group">
                                                    <input type="password" className="form-control"
                                                           id="exampleInputPassword3" placeholder="Re-enter password"/>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i
                                                            className="flaticon-password"></i></div>
                                                    </div>
                                                </div>
                                                <div className="form-group ui_kit_select_search mb0">
                                                    <select className="selectpicker" data-live-search="true"
                                                            data-width="100%">
                                                        <option data-tokens="SelectRole">Single User</option>
                                                        <option data-tokens="Agent/Agency">Agent</option>
                                                        <option data-tokens="SingleUser">Multi User</option>
                                                    </select>
                                                </div>
                                                <div className="form-group custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="exampleCheck2"/>
                                                    <label className="custom-control-label" htmlFor="exampleCheck2">I
                                                        have read and accept the Terms and Privacy Policy?</label>
                                                </div>
                                                <button type="submit" className="btn btn-log btn-block btn-thm">Sign
                                                    Up
                                                </button>
                                                <p className="text-center">Already have an account? <a
                                                    className="text-thm" href="#">Log In</a></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Main Header Nav For Mobile --> */}
            <div id="page" className="stylehome1 h0">
                <div className="mobile-menu">
                    <div className="header stylehome1">
                        <div className="main_logo_home2 text-center">
                            <img className="nav_logo_img img-fluid mt20" src="assets/images/header-logo2.png"
                                 alt="header-logo2.png"/>
                            <span className="mt20">FindHouse</span>
                        </div>
                        <ul className="menu_bar_home2">
                            <li className="list-inline-item list_s"><a href="page-register.html"><span
                                className="flaticon-user"></span></a></li>
                            <li className="list-inline-item"><a href="#menu"><span></span></a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- /.mobile-menu --> */}
                <nav id="menu" className="stylehome1">
                    <ul>
                        <li><span>Home</span>
                            <ul>
                                <li><a href="index.html">Home 1</a></li>
                                <li><a href="index2.html">Home 2</a></li>
                                <li><a href="index3.html">Home 3</a></li>
                                <li><a href="index4.html">Home 4</a></li>
                                <li><a href="index5.html">Home 5</a></li>
                                <li><a href="index6.html">Home 6</a></li>
                                <li><a href="index7.html">Home 7</a></li>
                                <li><a href="index8.html">Home 8</a></li>
                                <li><a href="index9.html">Home 9</a></li>
                                <li><a href="index10.html">Home 10</a></li>
                            </ul>
                        </li>
                        <li><span>Listing</span>
                            <ul>
                                <li><span>Listing Grid</span>
                                    <ul>
                                        <li><a href="page-listing-grid-v1.html">Grid v1</a></li>
                                        <li><a href="page-listing-grid-v2.html">Grid v2</a></li>
                                        <li><a href="page-listing-grid-v3.html">Grid v3</a></li>
                                        <li><a href="page-listing-grid-v4.html">Grid v4</a></li>
                                        <li><a href="page-listing-grid-v5.html">Grid v5</a></li>
                                        <li><a href="page-listing-full-width-grid.html">Grid Fullwidth</a></li>
                                    </ul>
                                </li>
                                <li><span>Listing Style</span>
                                    <ul>
                                        <li><a href="page-listing-parallax.html">Parallax Style</a></li>
                                        <li><a href="page-listing-slider.html">Slider Style</a></li>
                                        <li><a href="page-listing-map.html">Map Header</a></li>
                                    </ul>
                                </li>
                                <li><span>Listing Half</span>
                                    <ul>
                                        <li><a href="page-listing-half-map-v1.html">Map V1</a></li>
                                        <li><a href="page-listing-half-map-v2.html">Map V2</a></li>
                                        <li><a href="page-listing-half-map-v3.html">Map V3</a></li>
                                        <li><a href="page-listing-half-map-v4.html">Map V4</a></li>
                                    </ul>
                                </li>
                                <li><span>Agent View</span>
                                    <ul>
                                        <li><a href="page-listing-agent-v1.html">Agent V1</a></li>
                                        <li><a href="page-listing-agent-v2.html">Agent V2</a></li>
                                        <li><a href="page-listing-agent-v3.html">Agent Details</a></li>
                                    </ul>
                                </li>
                                <li><span>Agencies View</span>
                                    <ul>
                                        <li><a href="page-agencies-list-v1.html">Agencies V1</a></li>
                                        <li><a href="page-agencies-list-v2.html">Agencies V2</a></li>
                                        <li><a href="page-agencies-list-v3.html">Agencies Details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span>Property</span>
                            <ul>
                                <li><span>Property</span>
                                    <ul>
                                        <li><a href="page-dashboard.html">Dashboard</a></li>
                                        <li><a href="page-my-properties.html">My Properties</a></li>
                                        <li><a href="page-add-new-property.html">Add New Property</a></li>
                                    </ul>
                                </li>
                                <li><span>Listing Single</span>
                                    <ul>
                                        <li><a href="page-listing-single-v1.html">Single V1</a></li>
                                        <li><a href="page-listing-single-v2.html">Single V2</a></li>
                                        <li><a href="page-listing-single-v3.html">Single V3</a></li>
                                        <li><a href="page-listing-single-v4.html">Single V4</a></li>
                                        <li><a href="page-listing-single-v5.html">Single V5</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span>Blog</span>
                            <ul>
                                <li><a href="page-blog-v1.html">Blog List 1</a></li>
                                <li><a href="page-blog-grid.html">Blog List 2</a></li>
                                <li><a href="page-blog-single.html">Single Post</a></li>
                            </ul>
                        </li>
                        <li><span>Pages</span>
                            <ul>
                                <li><span>Shop</span>
                                    <ul>
                                        <li><a href="page-shop.html">Shop</a></li>
                                        <li><a href="page-shop-single.html">Shop Single</a></li>
                                        <li><a href="page-shop-cart.html">Cart</a></li>
                                        <li><a href="page-shop-checkout.html">Checkout</a></li>
                                        <li><a href="page-shop-order.html">Order</a></li>
                                    </ul>
                                </li>
                                <li><a href="page-about.html">About Us</a></li>
                                <li><a href="page-gallery.html">Gallery</a></li>
                                <li><a href="page-faq.html">Faq</a></li>
                                <li><a href="page-login.html">LogIn</a></li>
                                <li><a href="page-compare.html">Membership</a></li>
                                <li><a href="page-compare2.html">Membership 2</a></li>
                                <li><a href="page-register.html">Register</a></li>
                                <li><a href="page-service.html">Service</a></li>
                                <li><a href="page-error.html">404 Page</a></li>
                                <li><a href="page-terms.html">Terms and Conditions</a></li>
                                <li><a href="page-ui-element.html">UI Elements</a></li>
                            </ul>
                        </li>
                        <li><a href="page-contact.html">Contact</a></li>
                        <li><a href="page-login.html"><span className="flaticon-user"></span> Login</a></li>
                        <li><a href="page-register.html"><span className="flaticon-edit"></span> Register</a></li>
                        <li className="cl_btn"><a className="btn btn-block btn-lg btn-thm circle" href="#"><span
                            className="flaticon-plus"></span> Create Listing</a></li>
                    </ul>
                </nav>
            </div>

            {/* <!-- Home Design --> */}
            <section className="home-three bg-img3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="home3_home_content">
                                <h1>Your Property, Our Priority.</h1>
                                <h4>From as low as $10 per day with limited time offer discounts</h4>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home3_home_content">
                                <a className="popup_video_btn popup-iframe popup-youtube"
                                   href="https://www.youtube.com/watch?v=R7xbhKIiw4Y"><i className="flaticon-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="home_adv_srch_opt home3">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill"
                                           href="#pills-home" role="tab" aria-controls="pills-home"
                                           aria-selected="true">Buy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill"
                                           href="#pills-profile" role="tab" aria-controls="pills-profile"
                                           aria-selected="false">Rent</a>
                                    </li>
                                </ul>
                                <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                         aria-labelledby="pills-home-tab">
                                        <div className="home1-advnc-search home3">
                                            <ul className="h1ads_1st_list mb0">
                                                <li className="list-inline-item">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               id="exampleInputName1" placeholder="Enter keyword..."/>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="search_option_two">
                                                        <div className="candidate_revew_select">
                                                            <select className="selectpicker w100 show-tick">
                                                                <option>Property Type</option>
                                                                <option>Apartment</option>
                                                                <option>Bungalow</option>
                                                                <option>Condo</option>
                                                                <option>House</option>
                                                                <option>Land</option>
                                                                <option>Single Family</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               id="exampleInputEmail" placeholder="Location"/>
                                                        <label htmlFor="exampleInputEmail"><span
                                                            className="flaticon-maps-and-flags"></span></label>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="small_dropdown2 home3">
                                                        <div id="prncgs" className="btn dd_btn">
                                                            <span>Price</span>
                                                            <label htmlFor="exampleInputEmail2"><span
                                                                className="fa fa-angle-down"></span></label>
                                                        </div>
                                                        <div className="dd_content2">
                                                            <div className="pricing_acontent">
                                                                <span id="slider-range-value1"></span>
                                                                <span id="slider-range-value2"></span>
                                                                <div id="slider"></div>
                                                                {/* <!-- <input type="text" class="amount" placeholder="$52,239">
														<input type="text" class="amount2" placeholder="$985,14">
														<div class="slider-range"></div> --> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="custome_fields_520 list-inline-item">
                                                    <div className="navbered">
                                                        <div className="mega-dropdown home3">
                                                            <span id="show_advbtn" className="dropbtn">Advanced <i
                                                                className="flaticon-more pl10 flr-520"></i></span>
                                                            <div className="dropdown-content">
                                                                <div className="row p15">
                                                                    <div className="col-lg-12">
                                                                        <h4 className="text-thm3">Amenities</h4>
                                                                    </div>
                                                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                                                        <ul className="ui_kit_checkbox selectable-list">
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck1"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck1">Air
                                                                                        Conditioning</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck2"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck2">Lawn</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck3"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck3">Swimming
                                                                                        Pool</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                                                        <ul className="ui_kit_checkbox selectable-list">
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck4"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck4">Barbeque</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck5"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck5">Microwave</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck6"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck6">TV
                                                                                        Cable</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                                                        <ul className="ui_kit_checkbox selectable-list">
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck7"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck7">Dryer</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck8"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck8">Outdoor
                                                                                        Shower</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck9"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck9">Washer</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                                                        <ul className="ui_kit_checkbox selectable-list">
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck10"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck10">Gym</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck11"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck11">Refrigerator</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck12"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck12">WiFi</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                                                        <ul className="ui_kit_checkbox selectable-list">
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck13"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck13">Laundry</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck14"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck14">Sauna</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck15"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck15">Window
                                                                                        Coverings</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="row p15 pt0-xsd">
                                                                    <div className="col-lg-11 col-xl-10">
                                                                        <ul className="apeartment_area_list mb0">
                                                                            <li className="list-inline-item">
                                                                                <div className="candidate_revew_select">
                                                                                    <select
                                                                                        className="selectpicker w100 show-tick">
                                                                                        <option>Bathrooms</option>
                                                                                        <option>1</option>
                                                                                        <option>2</option>
                                                                                        <option>3</option>
                                                                                        <option>4</option>
                                                                                        <option>5</option>
                                                                                        <option>6</option>
                                                                                        <option>7</option>
                                                                                        <option>8</option>
                                                                                    </select>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <div className="candidate_revew_select">
                                                                                    <select
                                                                                        className="selectpicker w100 show-tick">
                                                                                        <option>Bedrooms</option>
                                                                                        <option>1</option>
                                                                                        <option>2</option>
                                                                                        <option>3</option>
                                                                                        <option>4</option>
                                                                                        <option>5</option>
                                                                                        <option>6</option>
                                                                                        <option>7</option>
                                                                                        <option>8</option>
                                                                                    </select>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <div className="candidate_revew_select">
                                                                                    <select
                                                                                        className="selectpicker w100 show-tick">
                                                                                        <option>Year built</option>
                                                                                        <option>2013</option>
                                                                                        <option>2014</option>
                                                                                        <option>2015</option>
                                                                                        <option>2016</option>
                                                                                        <option>2017</option>
                                                                                        <option>2018</option>
                                                                                        <option>2019</option>
                                                                                        <option>2020</option>
                                                                                    </select>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <div className="candidate_revew_select">
                                                                                    <select
                                                                                        className="selectpicker w100 show-tick">
                                                                                        <option>Built-up Area</option>
                                                                                        <option>Adana</option>
                                                                                        <option>Ankara</option>
                                                                                        <option>Antalya</option>
                                                                                        <option>Bursa</option>
                                                                                        <option>Bodrum</option>
                                                                                        <option>Gaziantep</option>
                                                                                        <option>İstanbul</option>
                                                                                        <option>İzmir</option>
                                                                                        <option>Konya</option>
                                                                                    </select>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-1 col-xl-2">
                                                                        <div className="mega_dropdown_content_closer">
                                                                            <h5 className="text-thm text-right mt15">
                                                                                <span id="hide_advbtn"
                                                                                      className="curp">Hide</span></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="search_option_button">
                                                        <button type="submit" className="btn btn-thm3">Search</button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                         aria-labelledby="pills-profile-tab">
                                        <div className="home1-advnc-search home3">
                                            <ul className="h1ads_1st_list mb0">
                                                <li className="list-inline-item">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               id="exampleInputName2" placeholder="Enter keyword..."/>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="search_option_two">
                                                        <div className="candidate_revew_select">
                                                            <select className="selectpicker w100 show-tick">
                                                                <option>Property Type</option>
                                                                <option>Apartment</option>
                                                                <option>Bungalow</option>
                                                                <option>Condo</option>
                                                                <option>House</option>
                                                                <option>Land</option>
                                                                <option>Single Family</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               id="exampleInputEmail3" placeholder="Location"/>
                                                        <label htmlFor="exampleInputEmail3"><span
                                                            className="flaticon-maps-and-flags"></span></label>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="small_dropdown2 home3">
                                                        <div id="prncgs2" className="btn dd_btn">
                                                            <span>Price</span>
                                                            <label><span className="fa fa-angle-down"></span></label>
                                                        </div>
                                                        <div className="dd_content2">
                                                            <div className="pricing_acontent">
                                                                <input type="text" className="amount"
                                                                       placeholder="$52,239"/>
                                                                <input type="text" className="amount2"
                                                                       placeholder="$985,14"/>
                                                                <div className="slider-range"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="custome_fields_520 list-inline-item">
                                                    <div className="navbered">
                                                        <div className="mega-dropdown home3">
                                                            <span id="show_advbtn2" className="dropbtn">Advanced <i
                                                                className="flaticon-more pl10 flr-520"></i></span>
                                                            <div className="dropdown-content">
                                                                <div className="row p15">
                                                                    <div className="col-lg-12">
                                                                        <h4 className="text-thm3">Amenities</h4>
                                                                    </div>
                                                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                                                        <ul className="ui_kit_checkbox selectable-list">
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck16"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck16">Air
                                                                                        Conditioning</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck17"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck17">Lawn</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck18"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck18">Swimming
                                                                                        Pool</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                                                        <ul className="ui_kit_checkbox selectable-list">
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck19"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck19">Barbeque</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck20"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck20">Microwave</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck21"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck21">TV
                                                                                        Cable</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                                                        <ul className="ui_kit_checkbox selectable-list">
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck22"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck22">Dryer</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck23"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck23">Outdoor
                                                                                        Shower</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck24"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck24">Washer</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                                                        <ul className="ui_kit_checkbox selectable-list">
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck25"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck25">Gym</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck26"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck26">Refrigerator</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck27"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck27">WiFi</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                                                        <ul className="ui_kit_checkbox selectable-list">
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck28"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck28">Laundry</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck29"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck29">Sauna</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    className="custom-control custom-checkbox">
                                                                                    <input type="checkbox"
                                                                                           className="custom-control-input"
                                                                                           id="customCheck30"/>
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor="customCheck30">Window
                                                                                        Coverings</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="row p15 pt0-xsd">
                                                                    <div className="col-lg-11 col-xl-10">
                                                                        <ul className="apeartment_area_list mb0">
                                                                            <li className="list-inline-item">
                                                                                <div className="candidate_revew_select">
                                                                                    <select
                                                                                        className="selectpicker w100 show-tick">
                                                                                        <option>Bathrooms</option>
                                                                                        <option>1</option>
                                                                                        <option>2</option>
                                                                                        <option>3</option>
                                                                                        <option>4</option>
                                                                                        <option>5</option>
                                                                                        <option>6</option>
                                                                                        <option>7</option>
                                                                                        <option>8</option>
                                                                                    </select>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <div className="candidate_revew_select">
                                                                                    <select
                                                                                        className="selectpicker w100 show-tick">
                                                                                        <option>Bedrooms</option>
                                                                                        <option>1</option>
                                                                                        <option>2</option>
                                                                                        <option>3</option>
                                                                                        <option>4</option>
                                                                                        <option>5</option>
                                                                                        <option>6</option>
                                                                                        <option>7</option>
                                                                                        <option>8</option>
                                                                                    </select>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <div className="candidate_revew_select">
                                                                                    <select
                                                                                        className="selectpicker w100 show-tick">
                                                                                        <option>Year built</option>
                                                                                        <option>2013</option>
                                                                                        <option>2014</option>
                                                                                        <option>2015</option>
                                                                                        <option>2016</option>
                                                                                        <option>2017</option>
                                                                                        <option>2018</option>
                                                                                        <option>2019</option>
                                                                                        <option>2020</option>
                                                                                    </select>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <div className="candidate_revew_select">
                                                                                    <select
                                                                                        className="selectpicker w100 show-tick">
                                                                                        <option>Built-up Area</option>
                                                                                        <option>Adana</option>
                                                                                        <option>Ankara</option>
                                                                                        <option>Antalya</option>
                                                                                        <option>Bursa</option>
                                                                                        <option>Bodrum</option>
                                                                                        <option>Gaziantep</option>
                                                                                        <option>İstanbul</option>
                                                                                        <option>İzmir</option>
                                                                                        <option>Konya</option>
                                                                                    </select>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-1 col-xl-2">
                                                                        <div className="mega_dropdown_content_closer">
                                                                            <h5 className="text-thm text-right mt15">
                                                                                <span id="hide_advbtn2"
                                                                                      className="curp">Hide</span></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="search_option_button">
                                                        <button type="submit" className="btn btn-thm3">Search</button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Feature Properties --> */}
            <section id="feature-property" className="feature-property mt80 pb50">
                <div className="container-fluid ovh">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-title mb40">
                                <h2>Featured Properties</h2>
                                <p>Handpicked properties by our team. <a className="float-right" href="#">View All <span
                                    className="flaticon-next"></span></a></p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="feature_property_home3_slider">
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp1.jpg"
                                                 alt="fp1.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Rent</a></li>
                                                    <li className="list-inline-item"><a href="#">Featured</a></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Apartment</p>
                                                <h4>Renovated Apartment</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp2.jpg"
                                                 alt="fp2.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Rent</a></li>
                                                    <li className="list-inline-item dn"></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Villa</p>
                                                <h4>Gorgeous Villa Bay View</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp3.jpg"
                                                 alt="fp3.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Sale</a></li>
                                                    <li className="list-inline-item dn"></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Single Family Home</p>
                                                <h4>Luxury Family Home</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp1.jpg"
                                                 alt="fp1.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Rent</a></li>
                                                    <li className="list-inline-item dn"></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Apartment</p>
                                                <h4>Luxury Family Home</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp1.jpg"
                                                 alt="fp1.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Rent</a></li>
                                                    <li className="list-inline-item"><a href="#">Featured</a></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Apartment</p>
                                                <h4>Renovated Apartment</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp2.jpg"
                                                 alt="fp2.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Rent</a></li>
                                                    <li className="list-inline-item dn"></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Villa</p>
                                                <h4>Gorgeous Villa Bay View</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp3.jpg"
                                                 alt="fp3.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Sale</a></li>
                                                    <li className="list-inline-item dn"></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Single Family Home</p>
                                                <h4>Luxury Family Home</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp1.jpg"
                                                 alt="fp1.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Rent</a></li>
                                                    <li className="list-inline-item dn"></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Apartment</p>
                                                <h4>Luxury Family Home</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp1.jpg"
                                                 alt="fp1.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Rent</a></li>
                                                    <li className="list-inline-item"><a href="#">Featured</a></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Apartment</p>
                                                <h4>Renovated Apartment</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp2.jpg"
                                                 alt="fp2.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Rent</a></li>
                                                    <li className="list-inline-item dn"></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Villa</p>
                                                <h4>Gorgeous Villa Bay View</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp3.jpg"
                                                 alt="fp3.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Sale</a></li>
                                                    <li className="list-inline-item dn"></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Single Family Home</p>
                                                <h4>Luxury Family Home</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="feat_property home3">
                                        <div className="thumb">
                                            <img className="img-whp" src="assets/images/property/fp1.jpg"
                                                 alt="fp1.jpg"/>
                                            <div className="thmb_cntnt">
                                                <ul className="tag mb0">
                                                    <li className="list-inline-item"><a href="#">For Rent</a></li>
                                                    <li className="list-inline-item dn"></li>
                                                </ul>
                                                <ul className="icon mb0">
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-transfer-1"></span></a></li>
                                                    <li className="list-inline-item"><a href="#"><span
                                                        className="flaticon-heart"></span></a></li>
                                                </ul>
                                                <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="tc_content">
                                                <p className="text-thm">Apartment</p>
                                                <h4>Luxury Family Home</h4>
                                                <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                                    Angeles, CA 90015</p>
                                                <ul className="prop_details mb0">
                                                    <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                                    <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                                    <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Property Cities --> */}
            <section id="property-city" className="property-city pt0 pb30">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-title">
                                <h2>Find Properties in These Cities</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a className="float-right"
                                                                                               href="#">View All <span
                                    className="flaticon-next"></span></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl">
                            <div className="properti_city">
                                <div className="thumb">
                                    <img className="img-fluid w100" src="assets/images/property/pc7.jpg" alt="pc7.jpg"/>
                                </div>
                                <div className="overlay">
                                    <div className="details">
                                        <h4>Miami</h4>
                                        <p>24 Properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl">
                            <div className="properti_city">
                                <div className="thumb">
                                    <img className="img-fluid w100" src="assets/images/property/pc8.jpg" alt="pc8.jpg"/>
                                </div>
                                <div className="overlay">
                                    <div className="details">
                                        <h4>Los Angeles</h4>
                                        <p>18 Properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl">
                            <div className="properti_city">
                                <div className="thumb">
                                    <img className="img-fluid w100" src="assets/images/property/pc9.jpg" alt="pc9.jpg"/>
                                </div>
                                <div className="overlay">
                                    <div className="details">
                                        <h4>New York</h4>
                                        <p>89 Properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl">
                            <div className="properti_city">
                                <div className="thumb">
                                    <img className="img-fluid w100" src="assets/images/property/pc10.jpg"
                                         alt="pc10.jpg"/>
                                </div>
                                <div className="overlay">
                                    <div className="details">
                                        <h4>Florida</h4>
                                        <p>47 Properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl">
                            <div className="properti_city">
                                <div className="thumb">
                                    <img className="img-fluid w100" src="assets/images/property/pc11.jpg"
                                         alt="pc11.jpg"/>
                                </div>
                                <div className="overlay">
                                    <div className="details">
                                        <h4>Orlando</h4>
                                        <p>89 Properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Property Search --> */}
            <section id="property-search" className="property-search bg-img4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="search_smart_property text-center">
                                <h2>Search Smarter, From Anywhere</h2>
                                <p>Power your search with our Resideo real estate platform, for timely listings and a
                                    seamless experience.</p>
                                <button className="btn ssp_btn">Search Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Property Cities --> */}
            <section id="best-property" className="best-property pt100 pb0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-title">
                                <h2>Best Property Value</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a className="float-right"
                                                                                               href="#">View All <span
                                    className="flaticon-next"></span></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="feat_property home3">
                                <div className="thumb">
                                    <img className="img-whp" src="assets/images/property/fp4.jpg" alt="fp4.jpg"/>
                                    <div className="thmb_cntnt">
                                        <ul className="tag mb0">
                                            <li className="list-inline-item"><a href="#">For Rent</a></li>
                                            <li className="list-inline-item dn"></li>
                                        </ul>
                                        <ul className="icon mb0">
                                            <li className="list-inline-item"><a href="#"><span
                                                className="flaticon-transfer-1"></span></a></li>
                                            <li className="list-inline-item"><a href="#"><span
                                                className="flaticon-heart"></span></a></li>
                                        </ul>
                                        <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="tc_content">
                                        <p className="text-thm">Villa</p>
                                        <h4>Gorgeous Villa Bay View</h4>
                                        <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                            Angeles, CA 90015</p>
                                        <ul className="prop_details mb0">
                                            <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                            <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                            <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="feat_property home3">
                                <div className="thumb">
                                    <img className="img-whp" src="assets/images/property/fp5.jpg" alt="fp5.jpg"/>
                                    <div className="thmb_cntnt">
                                        <ul className="tag mb0">
                                            <li className="list-inline-item"><a href="#">For Rent</a></li>
                                            <li className="list-inline-item"><a href="#">Featured</a></li>
                                        </ul>
                                        <ul className="icon mb0">
                                            <li className="list-inline-item"><a href="#"><span
                                                className="flaticon-transfer-1"></span></a></li>
                                            <li className="list-inline-item"><a href="#"><span
                                                className="flaticon-heart"></span></a></li>
                                        </ul>
                                        <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="tc_content">
                                        <p className="text-thm">Villa</p>
                                        <h4>Gorgeous Villa Bay View</h4>
                                        <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                            Angeles, CA 90015</p>
                                        <ul className="prop_details mb0">
                                            <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                            <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                            <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="feat_property home3">
                                <div className="thumb">
                                    <img className="img-whp" src="assets/images/property/fp6.jpg" alt="fp6.jpg"/>
                                    <div className="thmb_cntnt">
                                        <ul className="tag mb0">
                                            <li className="list-inline-item"><a href="#">For Rent</a></li>
                                            <li className="list-inline-item dn"></li>
                                        </ul>
                                        <ul className="icon mb0">
                                            <li className="list-inline-item"><a href="#"><span
                                                className="flaticon-transfer-1"></span></a></li>
                                            <li className="list-inline-item"><a href="#"><span
                                                className="flaticon-heart"></span></a></li>
                                        </ul>
                                        <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="tc_content">
                                        <p className="text-thm">Villa</p>
                                        <h4>Luxury Family Home</h4>
                                        <p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los
                                            Angeles, CA 90015</p>
                                        <ul className="prop_details mb0">
                                            <li className="list-inline-item"><a href="#">Beds: 4</a></li>
                                            <li className="list-inline-item"><a href="#">Baths: 2</a></li>
                                            <li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Our Agents --> */}
            <section id="our-agents" className="our-agents pt40 pb30">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-title">
                                <h2>Our Agents</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a className="float-right"
                                                                                               href="#">View All <span
                                    className="flaticon-next"></span></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="our_agent">
                                <div className="thumb">
                                    <img className="img-fluid w100" src="assets/images/team/5.jpg" alt="5.jpg"/>
                                    <div className="overylay">
                                        <ul className="social_icon">
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-pinterest"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-dribbble"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="details">
                                    <h4>Jennifer Barton</h4>
                                    <p>Broker <a className="float-right" href="#">4.5 <i
                                        className="fa fa-star color-golden"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="our_agent">
                                <div className="thumb">
                                    <img className="img-fluid w100" src="assets/images/team/6.jpg" alt="6.jpg"/>
                                    <div className="overylay">
                                        <ul className="social_icon">
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-pinterest"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-dribbble"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="details">
                                    <h4>Kathleen Myers</h4>
                                    <p>Agent <a className="float-right" href="#">5 <i
                                        className="fa fa-star color-golden"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="our_agent">
                                <div className="thumb">
                                    <img className="img-fluid w100" src="assets/images/team/7.jpg" alt="7.jpg"/>
                                    <div className="overylay">
                                        <ul className="social_icon">
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-pinterest"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-dribbble"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="details">
                                    <h4>Mariusz Ciesla</h4>
                                    <p>Broker <a className="float-right" href="#">3.5 <i
                                        className="fa fa-star color-golden"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="our_agent">
                                <div className="thumb">
                                    <img className="img-fluid w100" src="assets/images/team/8.jpg" alt="8.jpg"/>
                                    <div className="overylay">
                                        <ul className="social_icon">
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-pinterest"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-dribbble"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="details">
                                    <h4>Helene Powers</h4>
                                    <p>Broker <a className="float-right" href="#">4.5 <i
                                        className="fa fa-star color-golden"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="our_agent">
                                <div className="thumb">
                                    <img className="img-fluid w100" src="assets/images/team/9.jpg" alt="9.jpg"/>
                                    <div className="overylay">
                                        <ul className="social_icon">
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-pinterest"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-dribbble"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="details">
                                    <h4>Jade Northon</h4>
                                    <p>Agent <a className="float-right" href="#">1.5 <i
                                        className="fa fa-star color-golden"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="our_agent">
                                <div className="thumb">
                                    <img className="img-fluid w100" src="assets/images/team/10.jpg" alt="10.jpg"/>
                                    <div className="overylay">
                                        <ul className="social_icon">
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-pinterest"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-dribbble"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fa fa-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="details">
                                    <h4>Kevin Harris</h4>
                                    <p>Agent <a className="float-right" href="#">3.5 <i
                                        className="fa fa-star color-golden"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Our Footer --> */}
            <section className="footer_one home3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg col-xl">
                            <div className="footer_about_widget home3">
                                <h4>About Site</h4>
                                <p>We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you
                                    love. So let’s do this, together.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg col-xl">
                            <div className="footer_qlink_widget home3">
                                <h4>Quick Links</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">User’s Guide</a></li>
                                    <li><a href="#">Support Center</a></li>
                                    <li><a href="#">Press Info</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg col-xl">
                            <div className="footer_contact_widget home3">
                                <h4>Contact Us</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#">info@findhouse.com</a></li>
                                    <li><a href="#">Collins Street West, Victoria</a></li>
                                    <li><a href="#">8007, Australia.</a></li>
                                    <li><a href="#">+1 246-345-0699</a></li>
                                    <li><a href="#">+1 246-345-0695</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg col-xl">
                            <div className="footer_social_widget home3">
                                <h4>Follow us</h4>
                                <ul className="mb30">
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-dribbble"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-google"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg col-xl">
                            <div className="footer_social_widget home3">
                                <h4>Subscribe</h4>
                                <form className="footer_mailchimp_form home3">
                                    <div className="form-row align-items-center">
                                        <div className="col-auto">
                                            <input type="email" className="form-control mb-2" id="inlineFormInput"
                                                   placeholder="Your email"/>
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-primary mb-2"><i
                                                className="fa fa-angle-right"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Our Footer Bottom Area --> */}
            <section className="footer_middle_area home3 pt30 pb30">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <div className="footer_menu_widget home3">
                                <ul>
                                    <li className="list-inline-item"><a href="#">Home</a></li>
                                    <li className="list-inline-item"><a href="#">Listing</a></li>
                                    <li className="list-inline-item"><a href="#">Property</a></li>
                                    <li className="list-inline-item"><a href="#">Pages</a></li>
                                    <li className="list-inline-item"><a href="#">Blog</a></li>
                                    <li className="list-inline-item"><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="copyright-widget home3 text-right">
                                <p>© 2020 Find House. Made with love.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <a className="scrollToHome text-thm3" href="#"><i className="flaticon-arrows"></i></a>
        </div>
    )
}