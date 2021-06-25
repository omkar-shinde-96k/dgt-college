import React from 'react'
import { NavLink } from "react-router-dom";
import '../App.css';
const Navlinks = ({ toggle }) => {
    return (
        <ul class="nav navbar-nav myDropdown" id="top" >

            <li class="dropdown"> <NavLink onClick={toggle} class="dropbtn" to="/">Home</NavLink> </li>

            <li class="dropdown">
                <a class="dropbtn">About &nbsp;
                    <i class="fa fa-caret-down"></i>
                </a>
                <div class="dropdown-content">
                    <NavLink onClick={toggle} to="/aboutsansta">About Institute </NavLink>
                    <NavLink onClick={toggle} to="/founderofmnsp">Founder of MSPM</NavLink>
                    <NavLink onClick={toggle} to="/governingbodyofmspm">Governing Body MSPM</NavLink>
                    <NavLink onClick={toggle} to="/founderofdgtc">Founder of College</NavLink>
                    <NavLink onClick={toggle} to="/presidantofmspm">President Of MSPM</NavLink>
                    <NavLink onClick={toggle} to="/secretoryofmspm">Secretary Of MSPM</NavLink>
                    <NavLink onClick={toggle} to="/college-cdc">College CDC</NavLink>
                    <NavLink onClick={toggle} to="/clgVisionMission">Vision,Mission & Objectives</NavLink>
                    <NavLink onClick={toggle} to="/facilities"> college facilities </NavLink>
                    <a href="../documents/clg committiee/Clg-Committees.pdf"> college Commitiee </a>
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
                                <NavLink onClick={toggle} to="/history">History</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={toggle} to="/marathi">Marathi</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={toggle} to="/hindi">Hindi</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={toggle} to="/Geography">Geography</NavLink>
                            </li>

                        </ul>
                    </a>
                    <NavLink onClick={toggle} to="/chemistry">BSc (Chemistry)</NavLink>
                    <NavLink onClick={toggle} to="/bscit">Bsc IT</NavLink>
                    <NavLink onClick={toggle} to="/BMS">B.M.S</NavLink>
                    <NavLink onClick={toggle} to="/Bcom">B.com</NavLink>

                    <a>PG &nbsp;
                        <i class="fa fa-caret-down"></i>
                        <ul class="subdrop">
                            <li>
                                <NavLink onClick={toggle} to="/history">M.A. History</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={toggle} to="/marathi">M.A. Marathi</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={toggle} to="/hindi">M.A. Hindi</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={toggle} to="/chemistry">M.Sc(Organic Chemistry)</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={toggle} to="/bscit">M.Sc I.T</NavLink>
                            </li> 
                        </ul>
                    </a> 
                </div>
            </li>

            <li class="dropdown">
                <a class="dropbtn">Academics &nbsp;
                    <i class="fa fa-caret-down"></i>
                </a>
                <div class="dropdown-content">
                    <NavLink onClick={toggle} to="/termwise-schedule">Termwise Schedule</NavLink>
                    <NavLink onClick={toggle} to="/daywise-schedule">Daywise Schedule</NavLink>
                    <NavLink onClick={toggle} to="/office-schedule"> OfficeWork Schedule</NavLink>
                    <NavLink onClick={toggle} to="/library-schedule">Library Schedule </NavLink>
                    <NavLink onClick={toggle} to="/examination-schedule">Exam Schedule </NavLink>
                </div>
            </li>

            <li class="dropdown">
                <a class="dropbtn">Co-curriculam   &nbsp;
                    <i class="fa fa-caret-down"></i>
                </a>
                <div class="dropdown-content">
                    <NavLink onClick={toggle} to="/cultural">Cultural</NavLink>

                        <a>Sport &nbsp;
                        <i class="fa fa-caret-down"></i>
                        <ul class="subdrop">
                            <li>
                                <a onClick={toggle} href="../documents/dlle/project.pdf"  >Sport deparment profile</a>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/dlle/enrollment-strength.jpg">Available Facilities</a>
                            </li> 
                            <li>
                                <a onClick={toggle} href="https://mu.ac.in/wp-content/uploads/2021/02/Draft-University-Ghatna-_After-webinar-correction.pdf"  >Rules and Regulation </a>
                            </li> 
                            <li>
                                <a onClick={toggle} href="../documents/dlle/DLLE-event-report.pdf"  >Student Participation Number</a>
                            </li>
                        </ul></a>

                    <NavLink onClick={toggle} to="/nss">NSS</NavLink>

                    <a>DLLE &nbsp;
                        <i class="fa fa-caret-down"></i>
                        <ul class="subdrop">
                            <li>
                                <a onClick={toggle} href="../documents/dlle/project.pdf"  >Departments Rules & Regulations</a>
                            </li>
                            <li>
                                <a onClick={toggle} href="/DlleFacultyMember">Faculty mumbers and students</a>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/dlle/enrollment-strength.jpg"  >Students inrollment strenth</a>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/dlle/DLLE-event-report.pdf"  >Activities Reports</a>
                            </li>
                        </ul>
                    </a>

                    <a>WDC &nbsp;
                        <i class="fa fa-caret-down"></i>
                        <ul class="subdrop">
                            <li>
                                <a onClick={toggle} href="../documents/WDC/WDC vison mission.pdf"  >WDC Vision,Mission </a>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/WDC/WDC Committee Report.pdf"  >WDC Commitiee </a>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/WDC/WDC EVENT REPORT.pdf">WDC Event Report</a>
                            </li> 
                        </ul></a>
                    <NavLink onClick={toggle} to="/student-council">student Council</NavLink>
                    <NavLink onClick={toggle} to="/scholarship">special cell and scholarship</NavLink>
                    <NavLink onClick={toggle} to="/placement-help">placement help - Committee</NavLink>
                    <NavLink onClick={toggle} to="/marathi-vangmay"> CGRC  </NavLink>
                    <NavLink onClick={toggle} to="/marathi-vangmay"> College Alumni  </NavLink>
                </div> 
            </li>

            <li class="dropdown">
                <a class="dropbtn">Staff &nbsp;
                    <i class="fa fa-caret-down"></i>
                </a>
                <div class="dropdown-content">
                    <NavLink onClick={toggle} to="/teaching-staff">Teaching staff</NavLink>
                    <NavLink onClick={toggle} to="/non-teach-staff">Non-teaching staff</NavLink>
                </div>
            </li>

            <li className="dropdown"><NavLink class="dropbtn" onClick={toggle} to="/library">Library</NavLink></li>
 

            <li class="dropdown">
                <a class="dropbtn">Student Corner &nbsp;
                    <i class="fa fa-caret-down"></i>
                </a>
                <div class="dropdown-content">

                    <a>Admission &nbsp;
                        <i class="fa fa-caret-down"></i>
                        <ul class="subdrop">
                            <li>
                                <NavLink onClick={toggle} to="/history">Addmission Schedule</NavLink>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/stud corner/eligibility criteria.pdf"  >Eligibility
                                    Criteria</a> 
                            </li>
                        </ul>
                    </a>
                    <li>
                        <NavLink onClick={toggle} to="/marathi"> Scholarship   </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggle} to="/marathi"> Notice   </NavLink>
                    </li> 
                </div>
            </li> 

            <li className="dropdown"><NavLink class="dropbtn" onClick={toggle} to="/naac">NAAC/IQAC</NavLink></li>

            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
            </ul>
        </ul>
    )
}

export default Navlinks;
