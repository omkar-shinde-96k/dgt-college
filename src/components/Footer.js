import React from "react";
import {
    BrowserRouter as Router, 
    NavLink
} from "react-router-dom";
function Footer() {
    return (
        <>
            <hr/> 
            <div class="footer"  >
                <div class="container">
                    <div class=" footer_grid_left">
                        <div class="col-md-3 col-xs-3  footer_grid_left1">
                            <h4>About Us</h4>
                            <p>Mangaon Shikshan Prasarak Mandal, Mangaon and its President Adv. Rajivji Sable laid a foundation stone of higher education in Mangaon on 1993. It is that time known as Arts’ Senior College. Later It is named as D.G.Tatkare College on 10th January 2010.
							</p>
                        </div>
                        <div class="col-md-3 col-xs-3  footer_grid_left1">
                            <h4>Navigation</h4>
                            <ul>
                                <li><i class="fa fa-angle-double-right primary" aria-hidden="true"></i><a><NavLink to="/">Home</NavLink></a></li>
 
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a><NavLink to="/chemistry">Bsc Chemistry</NavLink></a></li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a><NavLink to="/bscit#">Bsc IT</NavLink></a></li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a><NavLink to="/BMS">B.M.S</NavLink></a></li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a ><NavLink to="/Bcom">B.com</NavLink></a></li>

                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a ><NavLink to="/history">History</NavLink></a></li>

                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a ><NavLink to="/marathi">Marathi</NavLink></a></li>

                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a ><NavLink to="/hindi">Hindi</NavLink></a></li>

                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a ><NavLink to="/Geography">Geography</NavLink></a></li>
                            </ul>
                        </div>
                            <div class="col-md-3 col-xs-3  footer_grid_left1 a3">
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
                            <div class="col-md-3 col-xs-3  footer_grid_left1  footer_grid_right1">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li><i class="fa fa-envelope-o" aria-hidden="true"></i><a
                                        href="mailto:mspmmangaonseniorcollege@gmail.com" style={{fontSize:"10px"}}>mspmmangaonseniorcollege@gmail.com </a></li>
                                    <li><i class="fa fa-phone" aria-hidden="true"></i>02140-263928</li>
                                    <li><i class="fa fa-fax" aria-hidden="true"></i><a href="http://mangaonseniorcollege.com">mangaonseniorcollege.com</a></li>
                                </ul>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <div class="copy_right">
                    <div class="container-fluid">
                        <p>© 2021 DGTC. All rights reserved | Design by <a target="_blank" href="https://hanzalakathewadi.herokuapp.com/"><b style={{color:"blue"}}>Hanzala Kathewadi</b></a></p>
                    </div>
                </div>
                <a href="#" style={{position:"fixed",bottom:"30px",right:"30px",color:"blue",fontSize:"43px",textDecoration:"none"}} class="fa fa-arrow-up"></a>
        </>
    );
}

export default Footer;
