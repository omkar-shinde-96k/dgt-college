
import Navlinks from './Navlinks';
function Drawer({ toggle }) {
    return (
        <div class="Drawer shows" >
            <div onClick={toggle} style={{color:"black",height:"67px",display:"flex",borderBottom:"1px solid blue",padding:"10px"}}>
                <p style={{ width: "85%" }}> </p>
                <i class="fa fa-reorder" style={{ fontSize: "35px", color: "black", width: "15px", color: "orange" }}></i>
            </div>
            <Navlinks toggle={toggle} />
        </div>
    );
}

export default Drawer;