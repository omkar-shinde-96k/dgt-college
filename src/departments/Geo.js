import Footer from '../components/Footer';
function Geo() {
    return (
        <>
            <br />
            <h1 align="center"><b>Geography Department</b> </h1>
            <br />

            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12  p-5 ">

                        <div class="team-w3l-grid" style={{ border: "1px solid black" }}>
                            <div class="  about-poleft t1">
                                <div class="about_img"><img src="images/t-staff/singare.jpg" height="100%" alt="" />
                                    <h5 style={{ lineHeight: "20px" }}> <span style={{ fontSize: "20px", marginTop: "10px" }}>Dr.Singare Baban kacharu</span><span style={{ fontSize: "15px" }}>HOD (Geography Dept)</span></h5>
                                    <div class="about_opa">
                                        <p>HOD Of Geography Deparment</p>
                                        <p> M.A, B.P.Ed, M.Phil, Ph.D. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                    </div>

                    <div class="col-xl-9 col-lg-9 col-md-4 col-sm-6 col-xs-12  p-5 ">

                        <div class="col-10 hod" style={{ marginTop: "15px" }}>
                            <p>
                                Name : Dr. Baban Kacharu Singare <br />
                                Subject : Head of Department Of Geography <br />
                                Destination : Assist Prof
                                Gender : Male<br />
                                Academic Qualification: M.A, B.P Ed, M.Phil, PHD<br />
                                E-mail : bksingare74@gmail.com<br />

                                workshop - 30 <br />
                                presentations - 22 (state ,National , International)<br />
                                publication - Research Journal - 16<br />
                                National Conference Organised - 03<br />

                                Department Of Geography.<br />

                                University Level workshops Organised - 03<br />
                                orientation - 01<br />
                                Refresher Cource - 03<br />
                                Short Term Cources - 03<br />

                                Committes :<br />
                                - Cultural Committe - Member<br />
                                - Ex W.S.S programme Officer - Incharge 7 years<br />
                                - library Committe - Member<br />
                                - Student Council And Student committe Member<br />
                                - Disipline committe - Member<br />
                                - Staff Committe  - Member<br />
                                - Kokan Geography Association  - Lifemember<br />
                                - Bombay geoghycal Association - Governing Body member<br />
                                - Sport Committee - Incharge<br />
                                - Alumus Committee - Member<br />
                                - LMC  - Member<br />
                                - CDC - Member<br />
                                - Unfair Means Committe - Member<br />
                                - Purchase Committe  - Member<br />
                                - CAP - Ex-incharge<br />
                                - Admission Committee - Member<br />
                                - Examinor F.Y. S.Y. T.Y. B.A. , Moderator - University of mumbai<br />
                                - Paper setter -  F.Y. S.Y. T.Y. B.A.<br />
                                - Syllabus commmittee - Member , F.Y. S.Y. T.Y. B.A.<br />
                                - Practical Exam Co-ordinator - T.Y B.A Raigad District best teachar award - 2014-15<br />
                            </p>
                        </div>

                        <div class="moreInfo">

                        </div>
                    </div>
                </div>
            </div>

            {/* {{!-- syllybus start --}} */}

            <div class="container" style={{ fontSize: " 1.5rem" }}>
                <div class="row">
                    <div class="col-4" style={{ height: "100%", minWidth: "90%!important" }}>

                        <div class="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            <h1 style={{ marginTop: "15px" }} class="text-center"> Geography Syllabus </h1>
                            <br />

                            <a class="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/geo/fy.pdf" role="tab" aria-controls="home">F.Y.B.A (Geo) Syllabus </a>

                            <a class="list-group-item  list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../documents/geo/sy.pdf" role="tab" aria-controls="profile">S.Y.B.A(Geo) Syllabus </a>

                            <a class="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/geo/ty.pdf" role="tab" aria-controls="messages"> T.Y.B.A (Geo) Syllabus</a>

                        </div>
                    </div>
                </div>
            </div>
            {/* {{!-- syllybus end --}} */}

            <div class="secoundnav">
                <div class="events">
                    <h3 class="events-title" align="center"> <span>eventName</span>- eventDate</h3> <br />
                    <p class="events-details">eventDescription</p>
                    <br />
                    <div class="row md-2 events-img">

                        <a class="col-sm-12 col-lg-6" href="../documents/geo/geo-events/.jpg"><img
                            src="../documents/geo/geo-events/.jpg" /></a>

                        <a class="col-sm-12 col-lg-6" href="../documents/geo/geo-events/.jpg"><img
                            src="../documents/geo/geo-events/.jpg" /></a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Geo;