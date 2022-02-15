import React from 'react'
import { NavLink } from "react-router-dom";
import '../App.css';
const Navlinks = ({ toggle }) => {
    return (
        <ul className="nav navbar-nav myDropdown" id="top" >

            <li className="dropdown"> <NavLink onClick={toggle} className="dropbtn" to="/">Home</NavLink> </li>

            <li className="dropdown">
                <a className="dropbtn">About &nbsp;
                    <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content">
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

            <li className="dropdown">
                <a className="dropbtn">Courses &nbsp;
                    <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content">

                    <a>BA &nbsp;
                        <i className="fa fa-caret-down"></i>
                        <ul className="subdrop">
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
                    <NavLink onClick={toggle} to="/chemistry">B.Sc (Chemistry)</NavLink>
                    <NavLink onClick={toggle} to="/bscit#top">B.Sc IT</NavLink>
                    <NavLink onClick={toggle} to="/BMS">B.M.S</NavLink> 
                    <a>Commerce &nbsp;
                        <i className="fa fa-caret-down"></i>
                        <ul className="subdrop">
                            <li>
                                <NavLink onClick={toggle} to="/Bcom">B.Com</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={toggle} to="/baf">BAF</NavLink>
                            </li> 
                        </ul>
                    </a>

                    <a>PG &nbsp;
                        <i className="fa fa-caret-down"></i>
                        <ul className="subdrop">
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
                                <NavLink onClick={toggle} to="/bscit#top">M.Sc I.T</NavLink>
                            </li> 
                            <li>
                                <NavLink onClick={toggle} to="/Bcom">M.Com</NavLink>
                            </li> 
                        </ul>
                    </a> 
                </div>
            </li>

            <li className="dropdown">
                <a className="dropbtn">Academics &nbsp;
                    <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content">
                    <NavLink onClick={toggle} to="/adacmiccal">Academic Calender</NavLink>
                    <NavLink onClick={toggle} to="/termwise-schedule">Termwise Schedule</NavLink>
                    <NavLink onClick={toggle} to="/daywise-schedule">Daywise Schedule</NavLink>
                    <NavLink onClick={toggle} to="/office-schedule"> OfficeWork Schedule</NavLink>
                    <NavLink onClick={toggle} to="/library-schedule">Library Schedule </NavLink>
                </div>
            </li>

            <li className="dropdown">
                <a className="dropbtn">Co-curriculam   &nbsp;
                    <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content"> 

                    <a>Cultural &nbsp;
                        <i className="fa fa-caret-down"></i>
                        <ul className="subdrop">
                            <li>
                                <a onClick={toggle} href="../documents/culture/cul-member.pdf"  >Cultural Commitiee Member</a>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/culture/rules.pdf">Rules & Regulations</a>
                            </li> 
                            <li>
                                <a onClick={toggle} href="../documents/culture/">Cultural Report</a>
                            </li> 
                        
                            <li>
                                <a onClick={toggle} href="../documents/culture/stud-parti-report.pdf"  >Student Participation Report</a>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/culture/great-achivments.pdf">Great Achivements </a>
                            </li> 
                            <li>
                                <a onClick={toggle} href="../documents/culture/mega-event-report.pdf">Mega Events Report</a>
                            </li> 
                        </ul></a>

 

                        <a>Sport &nbsp;
                        <i className="fa fa-caret-down"></i>
                        <ul className="subdrop">
                            <li>
                                <a onClick={toggle} href="../documents/"  >Sport deparment profile</a>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/">Available Facilities</a>
                            </li> 
                            <li>
                                <a onClick={toggle} href="https://mu.ac.in/wp-content/uploads/2021/02/Draft-University-Ghatna-_After-webinar-correction.pdf"  >Rules and Regulation </a>
                            </li> 
                            <li>
                                <a onClick={toggle} href="../documents/"  >Student Participation Number</a>
                            </li>
                        </ul></a>

                    <NavLink onClick={toggle} to="/nss">NSS</NavLink>

                    <a>DLLE &nbsp;
                        <i className="fa fa-caret-down"></i>
                        <ul className="subdrop">
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
                        <i className="fa fa-caret-down"></i>
                        <ul className="subdrop">
                            <li>
                                <a onClick={toggle} href="../documents/WDC/WDC vison mission.pdf">WDC Vision,Mission </a>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/WDC/WDC Committee Report.pdf">WDC Commitiee </a>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/WDC/WDC EVENT REPORT.pdf">WDC Event Report</a>
                            </li> 
                        </ul></a>
                    <NavLink onClick={toggle} to="/student-council">Student Council</NavLink>
                    <a onClick={toggle} href="../documents/stud corner/Scholarship.jpg"  >Special cell and scholarship</a>
                    <NavLink onClick={toggle} to="/placement-help">Placement help - Committee</NavLink>
                    <NavLink onClick={toggle} to="/marathi-vangmay"> CGRC  </NavLink>
                    <NavLink onClick={toggle} to="/CollegeAlumi"> College Alumni  </NavLink>
                </div> 
            </li>
            <li className="dropdown">
                <a className="dropbtn">Staff &nbsp;
                    <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content">
                    <NavLink onClick={toggle} to="/teaching-staff">Teaching staff</NavLink>
                    <NavLink onClick={toggle} to="/non-teach-staff">Non-teaching staff</NavLink>
                </div>
            </li>

                {/* <li className="dropdown"><NavLink className="dropbtn" onClick={toggle} to="/library">Library</NavLink></li> */}
                <li className="dropdown">
                <a className="dropbtn">Library &nbsp;
                    <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content">
                    <NavLink onClick={toggle} to="/library">Library Profile</NavLink>
                    <NavLink onClick={toggle} to="/libraryEvent">Library Events</NavLink>
                </div>
            </li>
 

            <li className="dropdown">
                <a className="dropbtn">Student Corner &nbsp;
                    <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content">

                    <a>Admission &nbsp;
                        <i className="fa fa-caret-down"></i>
                        <ul className="subdrop">
                            <li>
                                <NavLink onClick={toggle} to="/addmissionSchedule">Addmission Schedule</NavLink>
                            </li>
                            <li>
                                <a onClick={toggle} href="../documents/stud corner/eligibility criteria.pdf"  >Eligibility Criteria</a> 
                            </li>
                        </ul>
                    </a>
                    <li>
                        <NavLink onClick={toggle} to="/anti-ragging"> Anti-Raggging</NavLink>
                    </li>
                    <li>
                    <a onClick={toggle} href="../documents/stud corner/Scholarship.jpg"  >Scholarship</a> 
                        {/* <NavLink onClick={toggle} to="/notfound"> Scholarship</NavLink> */}
                    </li>
                    <li>
                        <NavLink onClick={toggle} to="/Notice"> Notice</NavLink>
                    </li> 
                </div>
            </li> 

            <li className="dropdown">
                <a className="dropbtn">NAAC &nbsp;
                    <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content">
                    <NavLink onClick={toggle} to="/naac">IQAC</NavLink>
                    <NavLink onClick={toggle} to="/naacssr">SSR</NavLink>
                </div>
            </li>

            <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
            </ul>
        </ul>
    )
}

export default Navlinks;
