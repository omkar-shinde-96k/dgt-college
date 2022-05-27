import React from "react";
import { 
    NavLink
} from "react-router-dom";
function Footer() {
    return (
        <>
            <hr/> 
            <div className="footer"  >
                <div className="container">
                    <div className=" footer_grid_left">
                        <div className="col-md-3 col-xs-3  footer_grid_left1">
                            <h4>About Us</h4>
                            <p>Mangaon Shikshan Prasarak Mandal, Mangaon and its President Adv. Rajivji Sable laid a foundation stone of higher education in Mangaon on 1993. It is that time known as Arts’ Senior College. Later It is named as D.G.Tatkare College on 10th January 2010.
							</p>
                        </div>
                        <div className="col-md-3 col-xs-3  footer_grid_left1">
                            <h4>Navigation</h4>
                            <ul>
                                <li><i className="fa fa-angle-double-right primary" aria-hidden="true"></i><a href="/"><NavLink to="/greencampus">Green audit</NavLink></a></li>
                                <li><i className="fa fa-angle-double-right primary" aria-hidden="true"></i><a href="../documents/naac/Insfrastruture.pdf"><NavLink to="../documents/naac/Insfrastruture.pdf">Infrastructure</NavLink></a></li>
                                {/* <li><i className="fa fa-angle-double-right" aria-hidden="true"></i><a  href="/"> <NavLink to="/chemistry">Bsc Chemistry</NavLink></a></li>
                                <li><i className="fa fa-angle-double-right" aria-hidden="true"></i><a href="/"><NavLink to="/bscit/temp">Bsc IT</NavLink></a></li>
                                <li><i className="fa fa-angle-double-right" aria-hidden="true"></i><a href="/"><NavLink to="/BMS">B.M.S</NavLink></a></li>
                                <li><i className="fa fa-angle-double-right" aria-hidden="true"></i><a href="/"><NavLink to="/Bcom">B.com</NavLink></a></li>

                                <li><i className="fa fa-angle-double-right" aria-hidden="true"></i><a href="/t" ><NavLink to="/history">History</NavLink></a></li>

                                <li><i className="fa fa-angle-double-right" aria-hidden="true"></i><a href="/" ><NavLink to="/marathi">Marathi</NavLink></a></li>

                                <li><i className="fa fa-angle-double-right" aria-hidden="true"></i><a href="/"><NavLink to="/hindi">Hindi</NavLink></a></li>

                                <li><i className="fa fa-angle-double-right" aria-hidden="true"></i><a href="/" ><NavLink to="/Geography">Geography</NavLink></a></li> */}
                            </ul>
                        </div>
                            <div className="col-md-3 col-xs-3  footer_grid_left1 a3">
                                <h4>Others</h4>
                                <ul>
                                    <li><i className="fa fa-angle-double-right" aria-hidden="true"></i><a href="/">Media</a>
                                    </li>
                                    <li><i className="fa fa-angle-double-right" aria-hidden="true"></i><a href="/">Mobile
										Apps</a></li>
                                    <li><i className="fa fa-angle-double-right" aria-hidden="true"></i><a href="/">Privacy
										Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-xs-3  footer_grid_left1  footer_grid_right1">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a
                                        href="mailto:mspmmangaonseniorcollege@gmail.com" style={{fontSize:"10px"}}>mspmmangaonseniorcollege@gmail.com </a></li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>02140-263928</li>
                                    <li><i className="fa fa-fax" aria-hidden="true"></i><a href="http://mangaonseniorcollege.com">mangaonseniorcollege.com</a></li>
                                </ul>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <div className="copy_right">
                    <div className="container-fluid">
                        <p>© 2021 DGTC. All rights reserved | Design by <a target="_blank"  rel="noreferrer" href="https://hanzalakathewadi.herokuapp.com/"><b style={{color:"blue"}}>Hanzala Kathewadi</b></a></p>
                    </div>
                </div>
                <a href="#" style={{position:"fixed",bottom:"30px",right:"30px",color:"blue",fontSize:"43px",textDecoration:"none"}} className="fa fa-arrow-up"></a>
        </>
    );
}

export default Footer;
