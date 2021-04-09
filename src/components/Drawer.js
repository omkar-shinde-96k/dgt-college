// import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

function Drawer() {
    return (
        <>

            <div id="appnav" class="Drawer">
                <Router>
                    <Switch>
                        <ul class="nav navbar-nav myDropdown " >

                            <li class=" "> <NavLink to="/">Home</NavLink> </li>
                            <br></br>

                            <li class="dropdown">
                                <a class="dropbtn" >Courses &nbsp;
                              < i class="fa fa-caret-down"></i>
                                </a>
                                <div class="dropdown-content">
                                    {/* <NavLink className="remove" to="/chemistry">Bsc Chemistry</NavLink>
                                    <NavLink className="remove" to="/bscit">Bsc IT</NavLink>
                                    <NavLink className="remove" to="/BMS">B.M.S</NavLink>
                                    <NavLink className="remove" to="/Bcom">B.com</NavLink>
                                    <NavLink className="remove" to="/history">History</NavLink>
                                    <NavLink className="remove" to="/marathi">Marathi</NavLink>
                                    <NavLink className="remove" to="/hindi">Hindi</NavLink>
                                    <NavLink className="remove" to="/Geography">Geography</NavLink> */}

                                    <a href="/chemistry" className="remove" >chemistry</a>
                                    <a href="/bscit" className="remove" >Bsc IT</a>
                                    <a href="/BMS" className="remove" >B.M.S</a>
                                    <a href="/Bcom" className="remove" >History</a>
                                    <a href="/marathi" className="remove" >Marathi</a>
                                    <a href="/marathi" className="remove" >Hindi</a>
                                    <a href="/Geography" className="remove" >Geography</a>

                                </div>
                            </li>className="remove"
                            <br></br>
                            <li class="dropdown">
                                <a class="dropbtn">Academics &nbsp;
                                 <i class="fa fa-caret-down"></i>
                                </a>
                                <div class="dropdown-content">
                                    {/* <NavLink className="remove" to="/termwise-schedule">Termwise Schedule</NavLink>
                                    <NavLink className="remove" to="/daywise-schedule">Daywise Schedule</NavLink>
                                    <NavLink className="remove" to="/office-schedule"> Office Work Schedule</NavLink>
                                    <NavLink className="remove" to="/library-schedule">Library Schedule </NavLink>
                                    <NavLink className="remove" to="/examination-schedule">Examination Schedule </NavLink> */}

                                    <a href="/termwise-schedule" className="remove" >chemistry</a>
                                    <a href="/daywise-schedule" className="remove" >Bsc IT</a>
                                    <a href="/office-schedule" className="remove" >B.M.S</a>
                                    <a href="/library-schedule" className="remove" >History</a>
                                    <a href="/examination-schedule" className="remove" >Marathi</a>
                                </div>
                            </li>
                            <br></br>
                            <li class="dropdown">
                                <a class="dropbtn">Co-curriculam   &nbsp;
                                <i class="fa fa-caret-down"></i>
                                </a>
                                <div class="dropdown-content">
                                    <NavLink className="remove" to="/cultural">Cultural</NavLink>
                                    <NavLink className="remove" to="/sport">Sport &nbsp;
                                    <i class="fa fa-caret-down"></i>
                                        <ul class="subdrop">
                                            <li>
                                                <a className="remove" href="../documents/dlle/project.pdf"  >Sport deparment </a>
                                            </li>
                                            <li>
                                                <a className="remove" href="../documents/dlle/enrollment-strength.jpg">Available Facilities</a>
                                            </li>
                                            <li>
                                                <a className="remove" href="../documents/dlle/enrollment-strength.jpg"  >Sport Schedule </a>
                                            </li>
                                            <li>
                                                <a className="remove" href="../documents/dlle/DLLE-event-report.pdf"  >Rules and Regulation </a>
                                            </li>
                                            <li>
                                                <a className="remove" href="../documents/dlle/DLLE-event-report.pdf"  >Activities Reports</a>
                                            </li>
                                            <li>
                                                <a className="remove" href="../documents/dlle/DLLE-event-report.pdf"  >Student Participation List</a>
                                            </li>
                                        </ul></NavLink>

                                    <NavLink className="remove" to="/nss">NSS</NavLink>

                                    <a>DLLE &nbsp;
                                    <i class="fa fa-caret-down"></i>
                                        <ul class="subdrop">
                                            <li>
                                                <a className="remove" href="../documents/dlle/project.pdf"  >Departments rules & regulations</a>
                                            </li>
                                            <li>
                                                <a className="remove" href="/faculty-member">faculty mumbers and students</a>
                                            </li>
                                            <li>
                                                <a className="remove" href="../documents/dlle/enrollment-strength.jpg"  >Students inrollment strenth</a>
                                            </li>
                                            <li>
                                                <a className="remove" href="../documents/dlle/DLLE-event-report.pdf"  >Activities Reports</a>
                                            </li>
                                        </ul>
                                    </a>
                                    <a href="/naac" className="remove" >NAAC/IQAC</a>
                                    {/* <NavLink className="remove" to="/naac">NAAC/IQAC</NavLink> */}
                                    <NavLink className="remove" className="remove" to="/WDC">WDC</NavLink>
                                    <NavLink className="remove" to="/student-council">student Council</NavLink>
                                    <NavLink className="remove" to="/scholarship">special cell and scholarship</NavLink>
                                    <NavLink className="remove" to="/placement-help">placement help - Committee</NavLink>
                                    <NavLink className="remove" to="/Vangmay">Marathi Vangmay</NavLink>
                                </div>

                            </li>
                            <br></br>
                            <li class="dropdown">
                                <a class="dropbtn">Staff &nbsp;
                                 <i class="fa fa-caret-down"></i>
                                </a>
                                <div class="dropdown-content">
                                    <NavLink className="remove" to="/teaching-staff">Teaching staff</NavLink>
                                    <NavLink className="remove" to="/non-teach-staff">Non-teaching staff</NavLink>
                                </div>
                            </li>



                        </ul>

                    </Switch>
                </Router>
            </div>

        </>
    );
}

export default Drawer;