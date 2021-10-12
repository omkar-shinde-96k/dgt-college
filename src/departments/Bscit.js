import './Dept.css';
function Bscit() {
    return (
        <>
        <br/>
            <h1 id="top" align="center"><b>Department Of Information technology</b> </h1>
            <br />
            <div class="container">
                <p>
                    The IT department has been successfully functionning since 2008.IT offers UG and PG programme in (I.T)
                    with an intake 131 students.
                    The objective of the department to make students thechnology and carrier oriented.
                </p>
            </div>

            {/* {{!-- syllybus start --}} */}

            <div className="container" style={{ fontSize: " 1.5rem" }}>
                <div className="row">
                    <div className="col-4" style={{ height: "100%", minWidth: "90%!important" }}>

                        <div className="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            <h1 style={{ marginTop: "15px" }} className="text-center"> IT Syllabus </h1>
                            <br />

                            <a className="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" download="fy-it-syllabus" href="./documents/it/fyit.pdf" role="tab" aria-controls="home">F.Y.BSc IT Syllabus </a>

                            <a className="list-group-item  list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="./documents/it/syit.pdf" role="tab" aria-controls="profile">S.Y.BSc IT Syllabus </a>

                            <a className="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="./documents/it/tyit.pdf" role="tab" aria-controls="messages"> T.Y.BSc IT Syllabus</a>

                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                                href="./documents/it/mscit1.pdf" role="tab" aria-controls="settings">MSc IT part-1 Syllabus</a>

                            <a className="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="./documents/it/mscit2.pdf" role="tab" aria-controls="home">MSc IT
                                part-2 Syllabus</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* {{!-- syllybus end --}} */}

            <div className="secoundnav" >

                {/* {{!-- our skilled teachers --}} */}

                <div className="team-w3l" id="team">
                    <div className="container">
                        <h3 className="title">Our Skilled Lecturers</h3>
                        <div className="header">
                            <p><i className="fa fa-graduation-cap" aria-hidden="true"></i></p>
                        </div>
                        <div className="team-w3l-grid">
                            <div className="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div className="about_img"><img src="../images/t-staff/Bhanu.jpg" alt="" />
                                    <h5 style={{ fontSize: "2.2rem", lineHeight: "25px" }}> Asst.Prof.Bhanuprasad Vishwakarma(HOD)</h5>
                                    <div className="about_opa">
                                        <p>HOD</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div className="about_img"><img src="../images/t-staff/amina.jpg" alt="" />
                                    <h5>Asst.Prof. Rawoot Amina</h5>
                                    <div className="about_opa">
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div className="about_img"><img src="../images/t-staff/harsha salvi.jpg" alt="img" />
                                    <h5>Asst.Prof. Harsha Salvi</h5>
                                    <div className="about_opa">

                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <br/>
                        <div className="team-w3l-grid grid-2-team">
                            <div className="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div className="about_img"><img src="../images/t-staff/rashmi.jpg" alt="" />
                                    <h5>Asst.Prof. Dharse Rashmi</h5>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div className="about_img"><img src="../images/t-staff/nadiya.jpg" alt="" />
                                    <h5>Asst.Prof. Bandarkar Nadiya</h5>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div className="about_img"><img src="../images/t-staff/snehal.jpg" alt="" />
                                    <h5> Asst.Prof. Ghone Snehal </h5>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <br />
                </div>

                {/* {{!-- our skilled teachers end --}} */}

                <h1 className="event-heading" align="center"><a>Events Of IT Department</a> </h1> <br />
                <br />
                    <div className="events">
                    <h3 className="events-title" align="center"> <span> National Level Webnair on Research Methodology </span>- 07-10-2021</h3> <br />
                    
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-10-06-1.jpg"><img
                            src="../documents/it/event/2021-10-06-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-10-06.jpg"><img
                            src="../documents/it/event/2021-10-06.jpg" /></a>
                    </div>
                </div>
                
                <div className="events">
                    <h3 className="events-title" align="center"> <span> National Level Webnair on Intellactural Property Rights </span>- 06-10-2021</h3> <br />
                    
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-10-07-1.jpg"><img
                            src="../documents/it/event/2021-10-07-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-10-07.jpg"><img
                            src="../documents/it/event/2021-10-07.jpg" /></a>
                    </div>
                </div>
                
                <div className="events">
                    <h3 className="events-title" align="center"> <span> Guest Lecture For Next Genaration technology Pratical of TY.BSC.IT Sem V</span>- 30-09-2021</h3> <br />
                    
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-09-30-1.jpg"><img
                            src="../documents/it/event/2021-09-30-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-09-30.jpg"><img
                            src="../documents/it/event/2021-09-30.jpg" /></a>
                    </div>
                </div>
                <div className="events">
                    <h3 className="events-title" align="center"> <span>Guest Lecture For Next Genaration technology of TY.BSC.IT Sem V </span>- 06-09-2021 </h3> <br />
                    
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-09-06-1.jpg"><img
                            src="../documents/it/event/2021-09-06-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-09-06.jpg"><img
                            src="../documents/it/event/2021-09-06.jpg" /></a>
                    </div>
                </div>
                <div className="events">
                    <h3 className="events-title" align="center"> <span>Guest Lecture For Computer Network of SY.BSC.IT sem III </span>- 04-09-2021 </h3> <br />
                    
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-09-04-1.jpg"><img
                            src="../documents/it/event/2021-09-04-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-09-04.jpg"><img
                            src="../documents/it/event/2021-09-04.jpg" /></a>
                    </div>
                </div>
                <div className="events">
                    <h3 className="events-title" align="center"> <span>Guest Lecture For Internet of things of TY.BSC.IT Sem V </span>- 29-07-2021 </h3> <br />
                    
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-07-29.jpg"><img
                            src="../documents/it/event/2021-07-29.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2021-07-29-1.jpg"><img
                            src="../documents/it/event/2021-07-29-1.jpg" /></a>
                    </div>
                </div>
               

                <div className="events">
                    <h3 className="events-title" align="center"> <span>Educational Tour </span>- 27/02/2020 To 29/02/2020 </h3> <br />
                    <p className="events-details">Organized acadmeic tour at Malvan on 27/02/2020 to 29/02/2020 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/trip1.jpg"><img
                            src="../documents/it/event/malvan1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/malvan2.jpg"><img
                            src="../documents/it/event/malvan2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span>Guest Lecture </span>- 14/12/2019 </h3> <br />
                    <p className="events-details" align="center">Guest Lecture On Internet security By Mr. Abhishek More on 14/12/2019 </p>
                    <br />
                    <div className="row md-2 events-img" style={{display:"flex",justifyContent:"center"}}>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/abhishek-sir.jpg"><img
                            src="../documents/it/event/abhishek-sir.jpg" /></a>

                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Freshers Party </span>-10/08/2019 </h3>
                    <p className="events-details">Organized freshers party for F.Y.IT Students on 10/08/2019</p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/f-party-2019-1.jpg"><img
                            src="../documents/it/event/f-party-2019-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/f-party-2019-2.jpg"><img
                            src="../documents/it/event/f-party-2019-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Guest Lecture </span>- 22/09/2019  </h3>
                    <p  align="center" className="events-details"> Guest Lecture On Internet of Things By Mrs. Nikam Madam on 22/09/2019 </p>
                    <br />
                    <div className="row md-2 events-img"  style={{display:"flex",justifyContent:"center"}}>

                        <a   className="col-sm-12 col-lg-6" href="../documents/it/event/nikam-mam.jpg"><img
                            src="../documents/it/event/nikam-mam.jpg" /></a>
                    </div>
                </div>
                <div className="events">
                    <h3 className="events-title" align="center"> <span> Guest Lecture </span>- 22/09/2019 </h3>
                    <p className="events-details"> 3)Workshop of IOT by Dr.Hiren Dand </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/iot1.jpg"><img
                            src="../documents/it/event/iot1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/iot2.jpg"><img
                            src="../documents/it/event/iot2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Guest Lecture </span> 21/08/2019</h3>
                    <p className="events-details"> Guest Lecture On Software Project Management By Miss. Niharika Adulkar Madam on 21/08/2019 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/Niharika1.jpg"><img
                            src="../documents/it/event/Niharika1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/Niharika2.jpg"><img
                            src="../documents/it/event/Niharika2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Educational tour </span>- 25/02/2019 </h3>
                    <p align="center" className="events-details"> Organized trip to Mahableshewar on 25/02/2019 </p>
                    <br />
                    <div className="row md-2 events-img"  style={{display:"flex",justifyContent:"center"}}>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/trip1.jpg"><img
                            src="../documents/it/event/trip1.jpg" /></a>
 
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Social Activity </span>- 02/04/2019 </h3>
                    <p className="events-details"> Social Help To the Dnyanganga Bahuviklang Sanstha,Prerana Matimand Mulanchi Shala Roha, on 02/04/2019 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/social1.jpg"><img
                            src="../documents/it/event/social1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/social2.jpg"><img
                            src="../documents/it/event/social2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span>Guest Lecture </span>- 22/03/2019 </h3>
                    <p className="events-details"> Organized guest lecture by Dr. Vinayak Pujari IT department on 22/03/2019 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/22.3.19-1.jpg"><img
                            src="../documents/it/event/22.3.19-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/22.3.19-2.jpg"><img
                            src="../documents/it/event/22.3.19-2.jpg" /></a>
                    </div>
                </div>
 
                <div className="events">
                    <h3 className="events-title" align="center"> <span> Guest lecture </span> 10/04/2019 </h3>
                    <p className="events-details"> Organized guest lecture of Asst. Professor Mamane from G.M.Vedak Tala College by IT department on 10/04/2019 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/mamane-sir.jpg"><img
                            src="../documents/it/event/mamane-sir.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/10.4.19-2.jpg"><img
                            src="../documents/it/event/10.4.19-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> guest lecture </span>- 09/04/2019 </h3>
                    <p className="events-details"> Organized guest lecture of from by Satyajit G. Tulpule IT department on 09/04/2019 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/9.4.19-1.jpg"><img
                            src="../documents/it/event/9.4.19-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/9.4.19-2.jpg"><img
                            src="../documents/it/event/9.4.19-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Fresher’s Party </span>- 2018-19 </h3>
                    <p className="events-details"> Organized fresher’s party 2018-19 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/freshers2018-19-1.jpg"><img
                            src="../documents/it/event/freshers2018-19-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/freshers2018-19-2.jpg"><img
                            src="../documents/it/event/freshers2018-19-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> farewell party </span>- 26/03/2018 </h3>
                    <p className="events-details"> Organized farewell party for T.Y.B.Sc IT students on 26/03/2018 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/26032018-1.jpg"><img
                            src="../documents/it/event/26032018-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/26032018-2.jpg"><img
                            src="../documents/it/event/26032018-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Social Activity </span>- 26/01/2018 </h3>
                    <p className="events-details"> Frlicitation of IT students for Social help to families of Martyrs to Police station, Mangaon on 26/01/2018 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/26012018-1.jpg"><img
                            src="../documents/it/event/26012018-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/26012018-2.jpg"><img
                            src="../documents/it/event/26012018-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Job Fair </span>- 08/02/2018 </h3>
                    <p className="events-details"> Organized job fair for T.Y.B.Sc it students by seed info Vashi, on 08/02/2018 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/08022018-1.jpg"><img
                            src="../documents/it/event/08022018-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/08022018-2.jpg"><img
                            src="../documents/it/event/08022018-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> IT fest </span>- 19/03/2018 </h3>
                    <p className="events-details"> Organized IT fest by I.T students which included poster and ppt presentation on 19/03/2018 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20180319-1.jpg"><img
                            src="../documents/it/event/20180319-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20180319-2.jpg"><img
                            src="../documents/it/event/20180319-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Academic Tour</span>- 08/02/2018 </h3>
                    <p className="events-details">Organized Academic tour to Raigad Fort on 08/02/2018 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20180311-1.jpg"><img
                            src="../documents/it/event/20180311-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20180311-2.jpg"><img
                            src="../documents/it/event/20180311-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Academic Tour</span>- 12/10/2017 </h3>
                    <p align="center" className="events-details">Organized child welfare program at Raigad Z.P. semi english urdu school at Old Mangaon on 12/10/2017</p>
                    <br />
                    <div className="row md-2 events-img" style={{display:"flex",justifyContent:"center"}}>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/child.jpg"><img
                            src="../documents/it/event/child.jpg" /></a>

                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Fresher’s party </span>- 03/08/2017 </h3>
                    <p className="events-details"> Fresher’s party organize on 03/08/2017 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20170803-1.jpg"><img
                            src="../documents/it/event/20170803-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20170803-2.jpg"><img
                            src="../documents/it/event/20170803-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Farewell Party </span>- 06/03/2017 </h3>
                    <br/>
                    <p align="center" className="events-details"> Organized farewell party for T.Y.IT students on 06/03/2017 </p>
                    <br />
                    <div className="row md-2 events-img" style={{display:"flex",justifyContent:"center"}}>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/f-party-17.jpg"><img
                            src="../documents/it/event/f-party-17.jpg" /></a>

                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Hacking Training </span>- 28/07/2016 </h3>
                    <p className="events-details"> Hacking training for IT students on 28/07/2016 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20160728.jpg"><img
                            src="../documents/it/event/20160728.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20160728.jpg"><img
                            src="../documents/it/event/20160728.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Z.P.School Rile- Pachole </span>- 11/03/2017 </h3>
                    <p className="events-details"> Bsc IT students along with teacher visited to raigad Z.P. school Rile- Pachole on the occasion of Holi and distributed stationary & sweets to students on 11/03/2017 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/rile-pachole-1.jpg"><img
                            src="../documents/it/event/rile-pachole-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/rile-pachole-2.jpg"><img
                            src="../documents/it/event/rile-pachole-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Educational tour </span>- 14/01/2017 </h3>
                    <p className="events-details"> Organized educational tour for B.Sc IT students to esselworld on 14/01/2017 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/14012017-1.jpg"><img
                            src="../documents/it/event/14012017-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/14012017-2.jpg"><img
                            src="../documents/it/event/14012017-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Graphics Design Competition </span>- 17/09/2016 </h3>
                    <p className="events-details"> Organized graphics design competition for S.Y IT students  on 17/09/2016 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20170316-1.jpg"><img
                            src="../documents/it/event/20170316-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20170316-2.jpg"><img
                            src="../documents/it/event/20170316-2.jpg" /></a>
                    </div>
                </div>


                <div className="events">
                    <h3 className="events-title" align="center"> <span> Fresher’s party </span>- 27/07/2016 </h3>
                    <p className="events-details"> Fresher’s party organize on 27/07/2016 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20160727-1.jpg"><img
                            src="../documents/it/event/20160727-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/20160727-2.jpg"><img
                            src="../documents/it/event/20160727-2.jpg" /></a>
                    </div>
                </div>
                <div className="events">
                    <h3  className="events-title" align="center"> <span> Farewell Party </span>- 30/03/2016  </h3>
                    <br/>
                    <p align="center" className="events-details" > organized farewell party for T.Y IT on 30/03/2016 </p>
                    <br />
                    <div className="row md-2 events-img"  style={{display:"flex",justifyContent:"center"}}>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/f-party-2016-1.jpg"><img
                            src="../documents/it/event/f-party-2016-1.jpg" /></a>

                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Farewell Party </span>- 05/03/2016 </h3>
                    <p align="center" className="events-details"> Organized university level workshop on Datawarehousing by Hiren Dand sir on 05/03/2016 </p>
                    <br />
                    <div className="row md-2 events-img"  style={{display:"flex",justifyContent:"center"}}>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/hiran-dand-sir-2016.jpg"><img
                            src="../documents/it/event/hiran-dand-sir-2016.jpg" /></a>

                    </div>
                </div>


                <div className="events">
                    <h3 className="events-title" align="center"> <span> campus interview </span>- 01/03/2016 </h3>
                    <br/>
                    <p align="center" className="events-details"> Organized campus interview of cms, it services pvt. Ltd. , Mumbai for T.Y.BSc IT on 01/03/2016</p>
                    <br />
                    <div className="row md-2 events-img"  style={{display:"flex",justifyContent:"center"}}>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/campus-interview-2016.jpg"><img
                            src="../documents/it/event/campus-interview-2016.jpg" /></a>

                    </div>
                </div>


                <div className="events">
                    <h3 className="events-title" align="center"> <span> ERRP training </span>-  25/01/2016 </h3>
                    <p className="events-details"> Conduct ERRP training for all faculty by Guruji learning, Pune on 25/01/2016  to 30/01/2016 </p>
                    <b />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/30012016-1 (1).jpg"><img
                            src="../documents/it/event/30012016-1 (1).jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/ERRP.jpg"><img
                            src="../documents/it/event/ERRP.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> career guidance lecture  </span>- 14/01/2016 </h3>
                    <p className="events-details"> Organize career guidance lecture by zeal institute pune,  on 14/01/2016  </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/career-guid-2016-1.jpg"><img
                            src="../documents/it/event/career-guid-2016-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/career-guid-2016-2.jpg"><img
                            src="../documents/it/event/career-guid-2016-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span>  Mansoon excursion tour </span>- 20/08/2015</h3>
                    <p className="events-details">organizing mansoon excursion tour of B.Sc IT students to Mandla on 20/08/2015 </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/mansoon-tour-1.jpg"><img
                            src="../documents/it/event/mansoon-tour-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/mansoon-tour-2.jpg"><img
                            src="../documents/it/event/mansoon-tour-2.jpg" /></a>
                    </div>
                </div>

                <div className="events">
                    <h3 className="events-title" align="center"> <span> Fresher’s party </span>- 1/08/2015 </h3>
                    <p className="events-details"> Organized Fresher’s party on 1/08/2015  </p>
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2015-freshers-1.jpg"><img
                            src="../documents/it/event/2015-freshers-1.jpg" /></a>

                        <a className="col-sm-12 col-lg-6" href="../documents/it/event/2015-freshers-2.jpg"><img
                            src="../documents/it/event/2015-freshers-2.jpg" /></a>
                    </div>
                </div>

            </div> {/*   secound nav end  */}

        </>
    );
}

export default Bscit;
