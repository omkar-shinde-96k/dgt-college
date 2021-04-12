import { Link,Route,NavLink, Switch } from "react-router-dom";

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
                            <h1 ><a class="navbar-brand" href="/"><i class="fa fa-leanpub" aria-hidden="true"></i> DGTC
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
                            <nav class="link-effect-2" id="link-effect-2   " style={{ margin: "5px 30px", display: "flex" }}>
                       
                                    <Switch>
                                        <ul class="nav navbar-nav myDropdown " >

                                            <li class=" "> <NavLink to="/">Home</NavLink> </li>

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

                                            <li><NavLink to="/time-table">Timetable</NavLink></li>

                                            <li><NavLink to="/time-table">CGRC Committee</NavLink></li>

                                            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                                            </ul>
                                        </ul>
                                    </Switch>
                          
                            </nav>
                        </div>

                    </nav>
                    <div class="clearfix"> </div>
                </div>
            </div>
            {/* <script>
                $(document).ready(function () {
                    $('#appnavbtn').click(function () {
                        $("#appnav").toggleClass("shows");
                    });
                });

                $(document).ready(function () {
                    $('.main,a,.secoundnav').click(function () {
                        $("#appnav").addClass("shows");

                    });
                });
            </script> */}















        </>
    );
}

export default Navbar;
