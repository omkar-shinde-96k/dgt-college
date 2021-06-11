import React from 'react' 
import { Link, NavLink, Route, Switch } from "react-router-dom";
import '../App.css';
const Navlinks = ({toggle}) => {
    return (
        <ul class="nav navbar-nav myDropdown " >

        <li class="dropdown"> <NavLink onClick={toggle} class="dropbtn" to="/">Home</NavLink> </li>

        <li class="dropdown">
            <a class="dropbtn">About &nbsp;
                  <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">

                <NavLink  onClick={toggle} to="/aboutsansta">About Institute </NavLink>
                <NavLink  onClick={toggle} to="/founderofmnsp">Founder of MSPM</NavLink>
                <NavLink  onClick={toggle} to="/governingbodyofmspm">Governing Body MSPM</NavLink> 
                <NavLink  onClick={toggle} to="/founderofdgtc">Founder of College</NavLink>
                <NavLink  onClick={toggle} to="/presidantofmspm">President Of MSPM</NavLink>
                <NavLink  onClick={toggle} to="/secretoryofmspm">Secretory Of MSPM</NavLink>
                <NavLink  onClick={toggle} to="/clgVisionMission">College CDC</NavLink>
                <NavLink  onClick={toggle} to="/Geography">vision,mission & Goals</NavLink>
                {/* <NavLink  onClick={toggle} to="/Geography">College Team/Teaching Non Teaching</NavLink> */}
                <NavLink  onClick={toggle} to="/facilities"> college facilities </NavLink>
                <NavLink  onClick={toggle} to="/Geography"> college Commitiee </NavLink>
            </div>
        </li>

        <li class="dropdown">
            <a class="dropbtn">Courses &nbsp;
        <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content"> 
            
                <a>BA &nbsp;
        <i class="fa fa-caret-down"></i>
                    <ul class="subdrop">
                        <li>
                            <NavLink  onClick={toggle} to="/history">History</NavLink>
                        </li>
                        <li>
                            <NavLink  onClick={toggle} to="/marathi">Marathi</NavLink>
                        </li>
                        <li>
                            <NavLink  onClick={toggle} to="/hindi">Hindi</NavLink>
                        </li>
                        <li>
                            <NavLink  onClick={toggle} to="/Geography">Geography</NavLink>
                        </li>

                    </ul>
                </a>
                <NavLink  onClick={toggle} to="/chemistry">BSc (Chemistry)</NavLink>
                <NavLink  onClick={toggle} to="/bscit">Bsc IT</NavLink>
                <NavLink  onClick={toggle} to="/BMS">B.M.S</NavLink>
                <NavLink  onClick={toggle} to="/Bcom">B.com</NavLink>
            </div>
        </li>

        <li class="dropdown">
            <a class="dropbtn">Academics &nbsp;
        <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
                <NavLink  onClick={toggle} to="/termwise-schedule">Termwise Schedule</NavLink>
                <NavLink  onClick={toggle} to="/daywise-schedule">Daywise Schedule</NavLink>
                <NavLink  onClick={toggle} to="/office-schedule"> OfficeWork Schedule</NavLink>
                <NavLink  onClick={toggle} to="/library-schedule">Library Schedule </NavLink>
                <NavLink  onClick={toggle} to="/examination-schedule">Exam Schedule </NavLink>
            </div>
        </li>

        <li class="dropdown">
            <a class="dropbtn">Co-curriculam   &nbsp;
        <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
                <NavLink  onClick={toggle} to="/cultural">Cultural</NavLink>
                <NavLink  onClick={toggle} to="/sport">Sport &nbsp;
        <i class="fa fa-caret-down"></i>
                    <ul class="subdrop">
                        <li>
                            <a onClick={toggle} href="../documents/dlle/project.pdf"  >Sport deparment </a>
                        </li>
                        <li>
                            <a onClick={toggle} href="../documents/dlle/enrollment-strength.jpg">Available Facilities</a>
                        </li>
                        <li>
                            <a onClick={toggle} href="../documents/dlle/enrollment-strength.jpg"  >Sport Schedule </a>
                        </li>
                        <li>
                            <a onClick={toggle} href="../documents/dlle/DLLE-event-report.pdf"  >Rules and Regulation </a>
                        </li>
                        <li>
                            <a onClick={toggle} href="../documents/dlle/DLLE-event-report.pdf"  >Activities Reports</a>
                        </li>
                        <li>
                            <a onClick={toggle} href="../documents/dlle/DLLE-event-report.pdf"  >Student Participation List</a>
                        </li>
                    </ul></NavLink>

                <NavLink  onClick={toggle} to="/nss">NSS</NavLink>

                <a>DLLE &nbsp;
        <i class="fa fa-caret-down"></i>
                    <ul class="subdrop">
                        <li>
                            <a onClick={toggle} href="../documents/dlle/project.pdf"  >Departments rules & regulations</a>
                        </li>
                        <li>
                            <a onClick={toggle} href="/faculty-member">faculty mumbers and students</a>
                        </li>
                        <li>
                            <a onClick={toggle} href="../documents/dlle/enrollment-strength.jpg"  >Students inrollment strenth</a>
                        </li>
                        <li>
                            <a onClick={toggle} href="../documents/dlle/DLLE-event-report.pdf"  >Activities Reports</a>
                        </li>
                    </ul>
                </a>

                
                <NavLink  onClick={toggle} to="/WDC">WDC</NavLink>
                <NavLink  onClick={toggle} to="/student-council">student Council</NavLink>
                <NavLink  onClick={toggle} to="/scholarship">special cell and scholarship</NavLink>
                <NavLink  onClick={toggle} to="/placement-help">placement help - Committee</NavLink>
                <NavLink  onClick={toggle} to="/marathi-vangmay">Marathi Vangmay</NavLink>
                <NavLink  onClick={toggle} to="/marathi-vangmay"> CGRC  </NavLink>
                <NavLink  onClick={toggle} to="/marathi-vangmay"> College Alumni  </NavLink>
            </div>

        </li>

        <li class="dropdown">
            <a class="dropbtn">Staff &nbsp;
        <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
                <NavLink  onClick={toggle} to="/teaching-staff">Teaching staff</NavLink>
                <NavLink  onClick={toggle} to="/non-teach-staff">Non-teaching staff</NavLink>
            </div>
        </li>

        <li className="dropdown"><NavLink class="dropbtn"  onClick={toggle} to="/naac">Library And 
        Exam</NavLink></li>
        <li className="dropdown"><NavLink class="dropbtn"  onClick={toggle} to="/naac">NAAC/IQAC</NavLink></li>
   
        <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
        </ul>
    </ul>
    )
}

export default Navlinks;
