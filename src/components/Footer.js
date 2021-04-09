import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
function Footer() {
    return (
        <>
            <hr />

            <div class="footer" >
                <div class="container">
                    <div class="wthree_footer_grid_left">
                        <div class="col-md-3 col-xs-3 wthree_footer_grid_left1">
                            <h4>About Us</h4>
                            <p>Mangaon Shikshan Prasarak Mandal, Mangaon and its President Adv. Rajivji Sable laid a foundation stone of higher education in Mangaon on 1993. It is that time known as Arts’ Senior College. Later It is named as D.G.Tatkare College on 10th January 2010.
							</p>
                        </div>
                        <div class="col-md-3 col-xs-3 wthree_footer_grid_left1">
                            <h4>Navigation</h4>
                            <ul>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a><NavLink to="/">Home</NavLink></a></li>
 
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a><NavLink to="/chemistry">Bsc Chemistry</NavLink></a></li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a><NavLink to="/bscit">Bsc IT</NavLink></a></li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a><NavLink to="/BMS">B.M.S</NavLink></a></li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a ><NavLink to="/Bcom">B.com</NavLink></a></li>

                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a ><NavLink to="/history">History</NavLink></a></li>

                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a ><NavLink to="/marathi">Marathi</NavLink></a></li>

                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a ><NavLink to="/hindi">Hindi</NavLink></a></li>

                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a ><NavLink to="/Geography">Geography</NavLink></a></li>
                            </ul>
                        </div>
                            <div class="col-md-3 col-xs-3 wthree_footer_grid_left1 w3l-3">
                                <h4>Others</h4>
                                <ul>
                                    <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a href="#">Media</a>
                                    </li>
                                    <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a href="#">Mobile
										Apps</a></li>
                                    <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a href="#">Privacy
										Policy</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-xs-3 wthree_footer_grid_left1 wthree_footer_grid_right1">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li><i class="fa fa-envelope-o" aria-hidden="true"></i><a
                                        href="mailto:mspmmangaonseniorcollege@gmail.com"> mspmmangaonseniorcollege@gmail.com </a></li>
                                    <li><i class="fa fa-phone" aria-hidden="true"></i>02140-263928</li>
                                    <li><i class="fa fa-fax" aria-hidden="true"></i><a href="http://mangaonseniorcollege.com"> mangaonseniorcollege.com</a></li>
                                </ul>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <div class="w3layouts_copy_right">
                    <div class="container">
                        <p>© 2021 DGTC. All rights reserved | Design by <a href="http://instagram.com/learn_web_development"><b>@learn_web_development</b></a></p>
                    </div>
                </div>
        </>
    );
}

export default Footer;
