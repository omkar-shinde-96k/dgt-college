import React from 'react' 
import { Link, NavLink, Route, Switch } from "react-router-dom";
import '../App.css';
const Navlinks = () => {
    return (
        <ul class="nav navbar-nav myDropdown " >

        <li class="/"> <NavLink class="dropbtn" to="/">Home</NavLink> </li>

        <li class="dropdown">
            <a class="dropbtn">About &nbsp;
                  <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">

                <NavLink to="/chemistry">About Sanstha</NavLink>
                <NavLink to="/bscit">Founder of MSPM</NavLink>
                <NavLink to="/BMS">Governing Body of MSPM</NavLink>
                <NavLink to="/Bcom">About College</NavLink>
                <NavLink to="/history">Founder of College</NavLink>
                <NavLink to="/hindi">President Of MSPM</NavLink>
                <NavLink to="/Geography">College Principal</NavLink>
                <NavLink to="/Geography">College CDC</NavLink>
                <NavLink to="/Geography">vision , mission Goals and Objective</NavLink>
                <NavLink to="/Geography">College Team/Teaching Non Teaching</NavLink>
                <NavLink to="/Geography"> college facilities  </NavLink>
                <NavLink to="/Geography"> college Commitiee </NavLink>

            </div>
        </li>

        <li class="dropdown">
            <a class="dropbtn">Courses &nbsp;
        <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content"> 
            
                <NavLink to="/chemistry">BA &nbsp;
        <i class="fa fa-caret-down"></i>
                    <ul class="subdrop">
                        <li>
                            <NavLink to="/history">History</NavLink>
                        </li>
                        <li>
                            <NavLink to="/marathi">Marathi</NavLink>
                        </li>
                        <li>
                            <NavLink to="/hindi">Hindi</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Geography">Geography</NavLink>
                        </li>

                    </ul>
                </NavLink>
                <NavLink to="/chemistry">BSc (Chemistry)</NavLink>
                <NavLink to="/bscit">Bsc IT</NavLink>
                <NavLink to="/BMS">B.M.S</NavLink>
                <NavLink to="/Bcom">B.com</NavLink>
            </div>
        </li>

        <li class="dropdown">
            <a class="dropbtn">Academics &nbsp;
        <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
                <NavLink to="/termwise-schedule">Termwise Schedule</NavLink>
                <NavLink to="/daywise-schedule">Daywise Schedule</NavLink>
                <NavLink to="/office-schedule"> Office Work Schedule</NavLink>
                <NavLink to="/library-schedule">Library Schedule </NavLink>
                <NavLink to="/examination-schedule">Examination Schedule </NavLink>
            </div>
        </li>

        <li class="dropdown">
            <a class="dropbtn">Co-curriculam   &nbsp;
        <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
                <NavLink to="/cultural">Cultural</NavLink>
                <NavLink to="/sport">Sport &nbsp;
        <i class="fa fa-caret-down"></i>
                    <ul class="subdrop">
                        <li>
                            <a href="../documents/dlle/project.pdf"  >Sport deparment </a>
                        </li>
                        <li>
                            <a href="../documents/dlle/enrollment-strength.jpg">Available Facilities</a>
                        </li>
                        <li>
                            <a href="../documents/dlle/enrollment-strength.jpg"  >Sport Schedule </a>
                        </li>
                        <li>
                            <a href="../documents/dlle/DLLE-event-report.pdf"  >Rules and Regulation </a>
                        </li>
                        <li>
                            <a href="../documents/dlle/DLLE-event-report.pdf"  >Activities Reports</a>
                        </li>
                        <li>
                            <a href="../documents/dlle/DLLE-event-report.pdf"  >Student Participation List</a>
                        </li>
                    </ul></NavLink>

                <NavLink to="/nss">NSS</NavLink>

                <a>DLLE &nbsp;
        <i class="fa fa-caret-down"></i>
                    <ul class="subdrop">
                        <li>
                            <a href="../documents/dlle/project.pdf"  >Departments rules & regulations</a>
                        </li>
                        <li>
                            <a href="/faculty-member">faculty mumbers and students</a>
                        </li>
                        <li>
                            <a href="../documents/dlle/enrollment-strength.jpg"  >Students inrollment strenth</a>
                        </li>
                        <li>
                            <a href="../documents/dlle/DLLE-event-report.pdf"  >Activities Reports</a>
                        </li>
                    </ul>
                </a>

                <NavLink to="/naac">NAAC/IQAC</NavLink>
                <NavLink to="/WDC">WDC</NavLink>
                <NavLink to="/student-council">student Council</NavLink>
                <NavLink to="/scholarship">special cell and scholarship</NavLink>
                <NavLink to="/placement-help">placement help - Committee</NavLink>
                <NavLink to="/marathi-vangmay">Marathi Vangmay</NavLink>
            </div>

        </li>

        <li class="dropdown">
            <a class="dropbtn">Staff &nbsp;
        <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
                <NavLink to="/teaching-staff">Teaching staff</NavLink>
                <NavLink to="/non-teach-staff">Non-teaching staff</NavLink>
            </div>
        </li>

        <li><NavLink class="dropbtn" to="/time-table">Timetable</NavLink></li>

        <li><NavLink class="dropbtn" to="/time-table">CGRC Committee</NavLink></li>

        <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
        </ul>
    </ul>
    )
}

export default Navlinks;
