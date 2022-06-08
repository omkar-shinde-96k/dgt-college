import { NavLink } from "react-router-dom";
import Navlinks from './Navlinks';
function Navbar({toggle}) { 
    return (
        <>
            <div className="main_section_agile" id="home" style={{ position: "sticky", top: "0px", zIndex: "100", background: "linear-gradient(150deg, blue , rgb(174, 0, 255))" }}>
                <div className="agileits_w3layouts_banner_nav" id="top" style={{ margin:"0px", padding: "0px 5px 0 30px", width: "100%" }}>
                    <nav className="navbar navbar-default">
                        <div className="navbar-header navbar-left">
                            <button type="button" onClick={toggle} className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <h1> 
                           <NavLink  className="navbar-brand" to="/"><i className="fa fa-leanpub" aria-hidden="true"></i> D.G. Tatkare Mahavidyalay (Arts,Science,Commerce)</NavLink>  
                            </h1>
                        </div>
                        <div className="collapse navbar-collapse navbar-right">
                            <nav className="link-effect-2" id="link-effect-2 " style={{ margin: "5px 30px", display: "flex" }}>
                                      <Navlinks/>  
                            </nav>
                        </div> 
                    </nav>
                    <div className="clearfix"> </div>
                </div>
            </div>
           
 
        </>
    );
}

export default Navbar;
