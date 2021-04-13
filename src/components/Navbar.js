import { Link,Route,NavLink, Switch } from "react-router-dom";
import Navlinks from './Navlinks';
function Navbar() { 
    return (
        <>
            <div class="main_section_agile" id="home" style={{ position: "sticky", top: "0px", zIndex: "100", background: "linear-gradient(150deg, blue , rgb(174, 0, 255))" }}>
                <div class="agileits_w3layouts_banner_nav" style={{ margin: "0px", padding: "0px 5px 0 30px", width: "100%" }}>
                    <nav class="navbar navbar-default" >
                        <div class="navbar-header navbar-left">
                            <button type="button" id="appnavbtn" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <h1><a class="navbar-brand" href="/"><i class="fa fa-leanpub" aria-hidden="true"></i> DGTC
					        </a></h1>
                        </div>

                        <ul class="agile_forms" style={{ margin: "0 0 10px 0px" }} >
                            {/* {{#if user}} */}
                            {/* <li><a class="active" href="/chat" data-target=""><i class="fa fa-sign-in" aria-hidden="true"></i>  Chat</a> </li> */}

                            {/* <li><a href="/logout" data-target="#myModal3"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Log Out</a> </li>  */}

                            {/* {{else}} */}
                            {/* <li><a class="active" href="/login" data-toggle="modal" data-target=""><i class="fa fa-sign-in" aria-hidden="true"></i> log in</a> </li> */}

                            {/* <li><a href="/register" data-toggle="modal" data-target=""><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Register</a> </li> */}
                            {/* {{/if}} */}
                        </ul>
                        {/* {{!-- #myModal3 --}} */}

                        <div class="collapse navbar-collapse navbar-right">
                            <nav class="link-effect-2" id="link-effect-2 " style={{ margin: "5px 30px", display: "flex" }}>
                       
                                    <Switch>
                                      <Navlinks/>
                                    </Switch>
                          
                            </nav>
                        </div>

                    </nav>
                    <div class="clearfix"> </div>
                </div>
            </div>
           















        </>
    );
}

export default Navbar;
