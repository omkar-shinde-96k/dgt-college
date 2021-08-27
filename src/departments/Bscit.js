import './Dept.css';
function Bscit() {
    return (
        <>
            <h1 align="center"><b>IT DEPARTMENT</b> </h1>
            <br />
            <div class="container">
                <p>
                    The IT department has been successfully functionning since 2008.IT offers UG and PG programme in (I.T)
                    with an intake 131 students.
                    The objective of the department to make students thechnology and carrier oriented.
		        </p>
            </div>

            {/* {{!-- syllybus start --}} */}

            <div class="container" style={{ fontSize: " 1.5rem" }}>
                <div class="row">
                    <div class="col-4" style={{ height: "100%", minWidth: "90%!important" }}>

                        <div class="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            <h1 style={{ marginTop: "15px" }} class="text-center"> IT Syllabus </h1>
                            <br />

                            <a class="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/it/fyit.pdf" role="tab" aria-controls="home">F.Y.BSc IT Syllabus </a>

                            <a class="list-group-item  list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../documents/it/syit.pdf" role="tab" aria-controls="profile">S.Y.BSc IT Syllabus </a>

                            <a class="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/it/tyit.pdf" role="tab" aria-controls="messages"> T.Y.BSc IT Syllabus</a>

                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                                href="../documents/it/mscit1.pdf" role="tab" aria-controls="settings">MSc IT part-1 Syllabus</a>

                            <a class="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/it/mscit2.pdf" role="tab" aria-controls="home">MSc IT
                                part-2 Syllabus</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* {{!-- syllybus end --}} */}

            <div class="secoundnav" >

                {/* {{!-- our skilled teachers --}} */}

                <div class="team-w3l" id="team">
                    <div class="container">
                        <h3 class="title">Our Skilled Lecturers</h3>
                        <div class="header">
                            <p><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                        </div>
                        <div class="team-w3l-grid">
                            <div class="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div class="about_img"><img src="../images/t-staff/Bhanu.jpg" alt="" />
                                    <h5 style={{ fontSize: "2.2rem", lineHeight: "25px" }}> Asst.Prof.Bhanuprasad Vishwakarma(HOD)</h5>
                                    <div class="about_opa">
                                        <p>HOD</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div class="about_img"><img src="../images/t-staff/amina.jpg" alt="" />
                                    <h5>Asst.Prof. Rawoot Amina</h5>
                                    <div class="about_opa">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div class="about_img"><img src="../images/t-staff/harsha salvi.jpg" alt="img" />
                                    <h5>Asst.Prof. Harsha Salvi</h5>
                                    <div class="about_opa">

                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="team-w3l-grid grid-2-team">
                            <div class="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div class="about_img"><img src="../images/t-staff/rashmi.jpg" alt="" />
                                    <h5>Asst.Prof. Dharse Rashmi</h5>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div class="about_img"><img src="../images/t-staff/nadiya.jpg" alt="" />
                                    <h5>Asst.Prof. Bandarkar Nadiya</h5>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-4 about-poleft t1">
                                <div class="about_img"><img src="../images/t-staff/snehal.jpg" alt="" />
                                    <h5> Asst.Prof. Ghone Snehal </h5>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <br/>
                </div>

                {/* {{!-- our skilled teachers end --}} */}

                <h1 class="event-heading" align="center"><a>Events Of IT Department</a> </h1> <br />
                <br />

                <div class="events">
                    <h3 class="events-title" align="center"> <span>Educational tour </span>- 27/02/2020 To 29/02/2020 </h3> <br />
                    <p class="events-details">Organized acadmeic tour at Malvan on 27/02/2020 to 29/02/2020 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/trip1.jpg"><img
                            src="../documents/it/event/trip1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/trip.jpg"><img
                            src="../documents/it/event/trip2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Guest Lecture </span>- 22/09/2019 </h3>  
                    <p class="events-details"> 3)Workshop of IoT by Dr. Hiren Dand </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/iot1.jpg"><img
                            src="../documents/it/event/iot1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/iot2.jpg"><img
                            src="../documents/it/event/iot2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Guest Lecture </span> 21/08/2019</h3>  
                    <p class="events-details"> Guest Lecture On Software Project Management By Miss. Niharika Adulkar Madam on
				21/08/2019 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/Niharika1.jpg"><img
                            src="../documents/it/event/Niharika1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/Niharika2.jpg"><img
                            src="../documents/it/event/Niharika2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Educational tour </span>- 25/02/2019 </h3>  
                    <p class="events-details"> Organized trip to Mahableshewar on 25/02/2019 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/trip1.jpg"><img
                            src="../documents/it/event/trip1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/trip1.jpg"><img
                            src="../documents/it/event/trip1.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Social Activity </span>- 02/04/2019 </h3>  
                    <p class="events-details"> Social Help To the Dnyanganga Bahuviklang Sanstha,Prerana Matimand Mulanchi Shala
				Roha, on 02/04/2019 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/social1.jpg"><img
                            src="../documents/it/event/social1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/social2.jpg"><img
                            src="../documents/it/event/social2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span>guest lecture </span>- 22/03/2019 </h3> 
                    <p class="events-details"> Organized guest lecture by Dr. Vinayak Pujari IT department ON 22/03/2019 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/22.3.19-1.jpg"><img
                            src="../documents/it/event/22.3.19-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/22.3.19-2.jpg"><img
                            src="../documents/it/event/22.3.19-2.jpg" /></a>
                    </div>
                </div>



                <div class="events">
                    <h3 class="events-title" align="center"> <span> Guest lecture </span> 10/04/2019 </h3>  
                    <p class="events-details"> Organized guest lecture of Asst. Professor Mamane from G.M.Vedak Tala College by
				IT department ON 10/04/2019 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/10.4.19-1.jpg"><img
                            src="../documents/it/event/10.4.19-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/10.4.19-2.jpg"><img
                            src="../documents/it/event/10.4.19-2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> guest lecture </span>- 09/04/2019 </h3> 
                    <p class="events-details"> Organized guest lecture of from by  IT department ON 09/04/2019 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/9.4.19-1.jpg"><img
                            src="../documents/it/event/9.4.19-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/9.4.19-2.jpg"><img
                            src="../documents/it/event/9.4.19-2.jpg" /></a>
                    </div>
                </div> 

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Fresher’s party </span>- 2018-19 </h3> 
                    <p class="events-details"> Organized Fresher’s party 2018-19 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/freshers2018-19-1.jpg"><img
                            src="../documents/it/event/freshers2018-19-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/freshers2018-19-2.jpg"><img
                            src="../documents/it/event/freshers2018-19-2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> farewell party </span>- 26/03/2018 </h3>  
                    <p class="events-details"> Organized farewell party for t.y.bsc it students on 26/03/2018 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/26032018-1.jpg"><img
                            src="../documents/it/event/26032018-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/26032018-2.jpg"><img
                            src="../documents/it/event/26032018-2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Social Activity </span>- 26/01/2018 </h3>  
                    <p class="events-details"> Frlicitation of IT students for Social help to families of Martyrs to police
				station, mangaon on 26/01/2018 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/26012018-1.jpg"><img
                            src="../documents/it/event/26012018-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/26012018-2.jpg"><img
                            src="../documents/it/event/26012018-2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Job Fair </span>- 08/02/2018 </h3> 
                    <p class="events-details"> Organized job fair for t.y.bsc it students by seed info vashi, on 08/02/2018 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/08022018-1.jpg"><img
                            src="../documents/it/event/08022018-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/08022018-2.jpg"><img
                            src="../documents/it/event/08022018-2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> IT fest </span>- 19/03/2018 </h3>  
                    <p class="events-details"> Organized IT fest by it students which included poster and ppt presentation on
				19/03/2018 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20180319-1.jpg"><img
                            src="../documents/it/event/20180319-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20180319-2.jpg"><img
                            src="../documents/it/event/20180319-2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Academic Tour</span>- 08/02/2018 </h3>  
                    <p class="events-details">organized Academic tour to Raigad Fort on 08/02/2018 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20180311-1.jpg"><img
                            src="../documents/it/event/20180311-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20180311-2.jpg"><img
                            src="../documents/it/event/20180311-2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Fresher’s party </span>- 03/08/2017 </h3> 
                    <p class="events-details"> Fresher’s party organize on 03/08/2017 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20170803-1.jpg"><img
                            src="../documents/it/event/20170803-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20170803-2.jpg"><img
                            src="../documents/it/event/20170803-2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Hacking training </span>- 28/07/2016 </h3>  
                    <p class="events-details"> Hacking training for IT students         on 28/07/2016 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20160728.jpg"><img
                            src="../documents/it/event/20160728.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20160728.jpg"><img
                            src="../documents/it/event/20160728.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Educational tour </span>- 14/01/2017 </h3>  
                    <p class="events-details"> Organized educational tour for BSc it students to esselworld on 14/01/2017 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/14012017-1.jpg"><img
                            src="../documents/it/event/14012017-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/14012017-2.jpg"><img
                            src="../documents/it/event/14012017-2.jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> graphics design competition </span>- 17/09/2016 </h3>  
                    <p class="events-details"> Organized graphics design competition  for SY IT students  on 17/09/2016 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20170316-1.jpg"><img
                            src="../documents/it/event/20170316-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20170316-2.jpg"><img
                            src="../documents/it/event/20170316-2.jpg" /></a>
                    </div>
                </div>


                <div class="events">
                    <h3 class="events-title" align="center"> <span> Fresher’s party </span>- 27/07/2016 </h3> 
                    <p class="events-details"> Fresher’s party organize on 27/07/2016 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20160727-1.jpg"><img
                            src="../documents/it/event/20160727-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/20160727-2.jpg"><img
                            src="../documents/it/event/20160727-2.jpg" /></a>
                    </div>
                </div>


                {/* <div class="events">
                    <h3 class="events-title" align="center"> <span> campus interview </span>- 01/03/2016 </h3> 
                    <p class="events-details"> organized campus interview of cms, it services pvt. Ltd. , mumbai for t.y.bsc.it on 01/03/2016 </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/.jpg"><img
                            src="../documents/it/event/.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/.jpg"><img
                            src="../documents/it/event/.jpg" /></a>
                    </div>
                </div> */}


                <div class="events">
                    <h3 class="events-title" align="center"> <span> ERRP training </span>-  25/01/2016 </h3> 
                    <p class="events-details"> Conduct ERRP training for all faculty by Guruji learning, pune on 25/01/2016  to 30/01/2016 </p>
                    <b />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/30012016-1 (1).jpg"><img
                            src="../documents/it/event/30012016-1 (1).jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/30012016-1 (2).jpg"><img
                            src="../documents/it/event/30012016-1 (2).jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> career guidance lecture  </span>- 14/01/2016 </h3> 
                    <p class="events-details"> Organize career guidance lecture by zeal institute pune,  on           14/01/2016  </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/30012016-1 (1).jpg"><img
                            src="../documents/it/event/30012016-1 (1).jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/30012016-1 (2).jpg"><img
                            src="../documents/it/event/30012016-1 (2).jpg" /></a>
                    </div>
                </div>

                <div class="events">
                    <h3 class="events-title" align="center"> <span> Fresher’s party </span>- 1/08/2015 </h3> 
                    <p class="events-details"> Organized Fresher’s party on 1/08/2015  </p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/2015-freshers-1.jpg"><img
                            src="../documents/it/event/2015-freshers-1.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/it/event/2015-freshers-2.jpg"><img
                            src="../documents/it/event/2015-freshers-2.jpg" /></a>
                    </div>
                </div>

            </div> {/*   secound nav end  */}
      
        </>
    );
}

export default Bscit;