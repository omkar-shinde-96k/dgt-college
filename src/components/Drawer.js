
import { Link, NavLink, Route, Switch } from "react-router-dom";
import Navlinks from './Navlinks';
function Drawer() {
    return (
        <>
            <div id="appnav" class="Drawer">
                <div id="appnavbtn" style={{ color: "black" ,width:"100%" , display:"flex", borderBottom:"1px solid black",padding:"10px" }}>
                    <p style={{width:"85%"}}> </p>
                    <i class="fa fa-reorder" style={{ fontSize: "35px", color: "black" , width:"15px", color:"orange"}}></i>
                </div> 
                <Navlinks/> 
            </div>

        </>
    );
}

export default Drawer;