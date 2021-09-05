import { NavLink } from "react-router-dom";
import Navlinks from './Navlinks';
function Navbar({toggle}) { 
    return (
        <>
            <div class="main_section_agile" id="home" style={{ position: "sticky", top: "0px", zIndex: "100", background: "linear-gradient(150deg, blue , rgb(174, 0, 255))" }}>
                <div class="agileits_w3layouts_banner_nav" id="top" style={{ margin:"0px", padding: "0px 5px 0 30px", width: "100%" }}>
                    <nav class="navbar navbar-default">
                        <div class="navbar-header navbar-left">
                            <button type="button" onClick={toggle} class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <h1> 
                           <NavLink  class="navbar-brand" to="/"><i class="fa fa-leanpub" aria-hidden="true"></i> DGTC</NavLink>  
                            </h1>
                        </div>
                        <div class="collapse navbar-collapse navbar-right">
                            <nav class="link-effect-2" id="link-effect-2 " style={{ margin: "5px 30px", display: "flex" }}>
                                      <Navlinks/>  
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
