import './Dept.css';
function Hindi() {
    return (
        <>
            <br />
            <h1 align="center" ><b>हिंदी विभाग</b> </h1>
            <br />
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12   ">
                        <div class="team-w3l-grid" style={{ border: "1px solid black" }}>
                            <div class="  about-poleft t1">
                                <div class="about_img"><img src="images/t-staff/Pandey.jpg" height="100%" alt="" />
                                    <h5 style={{ lineHeight: "20px" }}> <span style={{ fontSize: "20px", marginTop: "10px" }}>पाण्डेय जे.आर. </span><span style={{ fontSize: "15px" }}>हिन्दी विभागाध्यक्ष</span></h5>
                                    <div class="about_opa">
                                        <p > HOD of Hindi Department</p>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-4 col-sm-6 col-xs-12 p-5 ">

                        <div class="col-10 hod" style={{ marginTop: "15px" }}>
                            <p><b>
                                महाविद्यालय की स्थापना दिवस ( १४ जुलाई १९९३) से ही हिन्दी विषय स्नातक के छात्रों के लिए उपलब्ध
                                है| सन्
                                २०१०-११ से परास्नातक छात्रों के लिए भी हिन्दी विषय तात्कालीन प्राचार्य डॉ. संतोष एल. मोटवानी के
                                प्रयासों
                                से उपलब्ध हो गया था । आज महाविध्यालय मे स्नातक तथा परास्नातक छात्रों के लिए हिन्दी विषय सहज
                                उपलब्ध है।</b>
                                <br /><br /> <b>

                                    इस विभाग के प्रमुख के रूप मे प्रा. पाण्डेय जे. आर. २००४ से ही शिक्षण प्रदान कर रहे है। <br /><br />

                                    प्रा. पाण्डेय जे. आर. (M.A , SET ) अनुभव = १७ वर्ष है ।
                                    अब तक इन्होंने निम्नलिखित कार्यक्रमों मे सक्रिय सहभाग लिया है।<br /> <br />
                                    वर्कशॉप - २०<br />
                                    अतिथि व्याख्यान - १०<br />
                                    अंतरराष्ट्रीय सेमीनार - १०<br />
                                    राष्ट्रीय सेमीनार - १०<br />
                                    रिसर्च पेपर प्रकाशित - २४<br />
                                    लघु शोध प्रबंध - ०२<br />
                                    राज्यस्तरीय कार्यक्रम - ०१<br /> </b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container" style={{ fontSize: "1.5rem" }}>
                <div class="row">
                    <div class="col-4" style={{ height: "100%", minWidth: "90% !important" }}>

                        <div class="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            <h1 style={{ marginTop: "15px" }} class="text-center"> Hindi Syllabus </h1>
                            <br />

                            <a class="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/hindi/fyba.pdf" role="tab" aria-controls="home">F.Y.B.A
                                Syllabus </a>

                            <a class="list-group-item  list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../documents/hindi/syba.pdf" role="tab" aria-controls="profile">S.Y.B.A Syllabus </a>

                            <a class="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/hindi/tyba.pdf" role="tab" aria-controls="messages"> T.Y.B.A Syllabus</a>

                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                                href="../documents/hindi/ma1.pdf" role="tab" aria-controls="settings">M.A. 1st Syllabus</a>

                            <a class="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/hindi/ma2.pdf" role="tab" aria-controls="home">M.A. 2nd Syllabus</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            {/* <div class="container" style={{ fontSize: "2rem", display: "flex", justifyContent: "center" }}>
                <a href="">Results and Achievement </a>
            </div>
            <br />  */}

            <div class="secoundnav">
                <h1 class="event-heading" align="center"><a>Events Of 2020-21</a> </h1> <br />
                <br />
                <div class="events" >
                    <h3 class="events-title" align="center"> <span>Educational tour </span>- 07-03-2020 </h3> <br />
                    <p class="events-details">Organize educational tour at murud-janjira for TY BA students on 07-03-2020 </p>
                    <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/trip.jpg"><img src="../documents/hindi/hindi-events/trip.jpg" /></a>
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/trip2.jpg"><img src="../documents/hindi/hindi-events/trip2.jpg" /></a>
                    </div>
                </div>
                <div class="events"  >
                    <h3 class="events-title" align="center"> <span> Hindi translation and employment</span> 22-08-2019</h3> <br />
                    <p class="events-details">Organize guest lecture on ‘Hindi translation and employment’ for FY,SY,TY  BA students chief guest is Prof. Bamane D. K.  , Bhausaheb Nene College Pen on 22-08-2019</p>
                    <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/22-08-2019.jpg"><img src="../documents/hindi/hindi-events/22-08-2019.jpg" /></a>
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/22-08-2019.jpg"><img src="../documents/hindi/hindi-events/22-08-2019-1.jpg" /></a>
                    </div>
                </div>
                <div class="events"  >
                    <h3 class="events-title" align="center"> <span>guest lecture</span> 25-06-2019 </h3> <br />
                    <p class="events-details">Organize guest lecture for TY BA student chief guest is Dr. Narayan Bagul , V.N College murud-janjira on 25-06-2019</p>
                    <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/25-06-2019.jpg"><img
                            src="../documents/hindi/hindi-events/25-06-2019.jpg" /></a>
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/25-06-2019.jpg"><img src="../documents/hindi/hindi-events/25-06-2019-1.jpg" /></a>
                    </div>
                </div>
                <div class="events"  >
                    <h3 class="events-title" align="center"> <span> guest lecture</span> 22-02-2019</h3> <br />
                    <p class="events-details">Organize guest lecture for SY BA student chief guest is Prof. Amalpure Suryakant , Dr. Nanasaheb dharmadhikari College Kolad , Raigad on 22-02-2019</p>
                    <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/ .jpg"><img src="../documents/hindi/hindi-events/22-02-2019.jpg" /></a>
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/22-02-2019-1.jpg"><img src="../documents/hindi/hindi-events/22-02-2019-1.jpg" /></a>
                    </div>
                </div>
                <div class="events"  >
                    <h3 class="events-title" align="center"> <span> guest lecture</span> 23-03-2018</h3> <br />
                    <p class="events-details">Organize guest lecture for TY  BA student chief guest is Dr. Anil Singh S.B. College Sahapur, Thane on 23-03-2018</p>
                    <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/23-03-2018.jpg"><img src="../documents/hindi/hindi-events/23-03-2018.jpg" /> </a>
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/23-03-2018.jpg"><img src="../documents/hindi/hindi-events/23-03-2018-1.jpg" /></a>
                    </div>
                </div>
                <div class="events"  >
                    <h3 class="events-title" align="center"> <span> guest lecture</span>    23-03-20-18   </h3> <br />
                    <p class="events-details">   Organize guest lecture for FY BA student chief guest is Dr. Pradip Singh , Sathye College vile parle, Mumbai on 23-03-2018  </p>
                    <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/25-06-2019.jpg"><img src="../documents/hindi/hindi-events/23-03-2018-3.jpg" /> </a>
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/23-03-2018.jpg"><img src="../documents/hindi/hindi-events/23-03-2018-4.jpg" /></a>
                    </div>
                </div>
                <div class="events"  >
                    <h3 class="events-title" align="center"> <span> Guest lecture</span> -21-09-2016  </h3> <br />
                    <p class="events-details">  Organize guest lecture for TY  B.A students chief guest is Dr. Narayan Bagul V. N . College murud-janjira , Raigad on 21-09-2016   </p>
                    <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/25-06-2019.jpg"><img src="../documents/hindi/hindi-events/21-09-2016.jpg" /> </a>
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/23-03-2018.jpg"><img src="../documents/hindi/hindi-events/21-09-2016-1.jpg" /></a>
                    </div>
                </div>
                <div class="events"  >
                    <h3 class="events-title" align="center"> <span>  guest lecture</span>- 29-02-2016    </h3> <br />
                    <p class="events-details">  Organize guest lecture for FY BA student chief guest is Dr. Santosh L. Motwani , R. K. T. College Ulhasnagar thane on 29-02-2016   </p>
                    <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/25-06-2019.jpg"><img src="../documents/hindi/hindi-events/29-02-2016.jpg" /> </a>
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/23-03-2018.jpg"><img src="../documents/hindi/hindi-events/29-02-2016-1.jpg" /></a>
                    </div>
                </div>
                <div class="events"  >
                    <h3 class="events-title" align="center"> <span> guest lecture</span>  26-09-2015  </h3> <br />
                    <p class="events-details">   Organize guest lecture for SY BA student chief guest is Prof. Balasaheb Gunjal N. K Waradkar college Dapoli Ratnagiri  on 26-09-2015   </p>
                    <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/26-09-2015.jpg"><img src="../documents/hindi/hindi-events/26-09-2015.jpg" /> </a>
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/26-09-2015-1.jpg"><img src="../documents/hindi/hindi-events/26-09-2015-1.jpg" /></a>
                    </div>
                </div>
                <div class="events"  >
                    <h3 class="events-title" align="center"> <span> guest lecture</span>  02-09-2015  </h3> <br />
                    <p class="events-details"> Organize guest lecture for TY  B.A students chief guest is Prof. Bamane D. K , bhausaheb nene college pen , Raigad on 02-09-2015    </p>
                    <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/26-09-2015.jpg"><img src="../documents/hindi/hindi-events/02-09-2015.jpg" /> </a>
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/26-09-2015-1.jpg"><img src="../documents/hindi/hindi-events/02-09-2015-1.jpg" /></a>
                    </div>
                </div>
                <div class="events"  >
                    <h3 class="events-title" align="center"> <span> guest lecture</span> on 01-08-15 & 08-08-2015  </h3> <br />
                    <p class="events-details">   Organize educational tour at Samarth ramdas swami ashram shivthargad mahad on 01-08-2015 & 08-08-2015   </p>
                    <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/01-08-2015 .jpg"><img src="../documents/hindi/hindi-events/01-08-2015 .jpg" /></a>
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/08-08-2015.jpg"><img src="../documents/hindi/hindi-events/08-08-2015.jpg" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hindi;