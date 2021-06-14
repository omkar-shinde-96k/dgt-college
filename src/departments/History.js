 
function History() {
    return (
        <>
            <br />
            <h1 align="center" ><b> इतिहास विभाग</b> </h1>
            <br /> 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12   "> 
                            <div class="team-w3l-grid" style={{border:"1px solid black"}}>
                                <div class="  about-poleft t1">
                                    <div class="about_img"><img src="images/t-staff/TSLokhande.jpg" height="100%" alt="" />
                                        <h5 style={{lineHeight:"20px"}}> <span style={{fontSize:"20px",marginTop:"10px"}}>Dr.Tanaji Shivaji Lokhande </span><span style={{fontSize:"15px"}}>Asst.Professor</span></h5>
                                        <div class="about_opa">
                                            <p >Asst.Professor</p>
                                        </div>
                                    </div>
                                </div> 
                                <div class="clearfix"></div>
                            </div> 
                    </div> 
                    <div class="col-xl-9 col-lg-9 col-md-4 col-sm-6 col-xs-12 p-5 ">

                        <div class="col-10 hod" style={{ marginTop: "15px" }}>
                            <p> 
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="container" style={{ fontSize: "1.5rem" }}>
                <div class="row">
                    <div class="col-4" style={{ height: "100%", minWidth: "90% !important" }}>

                        <div class="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            <h1 style={{ marginTop: "15px" }} class="text-center"> History Syllabus </h1>
                            <br />

                            <a class="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/hindi/fyba.pdf" role="tab" aria-controls="home">F.Y.B.A
                    Syllabus </a>

                            <a class="list-group-item  list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../documents/hindi/syba.pdf" role="tab" aria-controls="profile">S.Y.B.A Syllabus </a>

                            <a class="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/hindi/tyba.pdf" role="tab" aria-controls="messages"> T.Y.B.A Syllabus</a>

                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                                href="../documents/history/MA.pdf" role="tab" aria-controls="settings">M.A. 1st & 2nd Year All Semister Syllabus</a>

                        
                        </div>
                    </div>
                </div>
            </div> 
            <br />
            {/* <div class="container" style={{ fontSize: "2rem", display: "flex", justifyContent: "center" }}>
                <a href="">Results and Achievement </a>
            </div> */}
            <br /> 
            {/* <div class="secoundnav"> 
                <div class="events"  >
                    <h3 class="events-title" align="center"> <span> guest lecture</span> on 01-08-15 & 08-08-2015  </h3> <br />
                    <p class="events-details">   Organize educational tour at Samarth ramdas swami ashram shivthargad mahad on 01-08-2015 & 08-08-2015   </p>
                    <br />
                    <div class="row md-2 events-img"> 
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/01-08-2015 .jpg"><img src="../documents/hindi/hindi-events/01-08-2015 .jpg" /></a> 
                        <a class="col-sm-12 col-lg-6" href="../documents/hindi/hindi-events/08-08-2015.jpg"><img src="../documents/hindi/hindi-events/08-08-2015.jpg" /></a> 
                    </div>
                </div> 
            </div>  */}
        </>
    );
}

export default History;