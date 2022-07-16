import Footer from '../components/Footer';
import '../departments/Dept.css';

function Naac() {
    return (
        <>
            <div className="container">
                <div className=" row text-center" >
                    <div className="col-4" style={{ height: "100%", minWidth: "90%!important" }}>
                        <div className="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            <h1 style={{ marginTop: "15px", color: "tomato", textShadow: "3px 3px 5px blue;" }} className="text-center">NAAC/IQAC
                            </h1>
                            <br />

                            <a className="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="#list-home" role="tab" aria-controls="home">Introduction</a>
                            
                            <a className="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/iqac.pdf" role="tab" aria-controls="messages">IQAC Committee</a>

                            <a className="list-group-item active list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../documents/naac/pear-team.pdf" role="tab" aria-controls="profile">PEER TEAM REPORT </a>
                            
                            <a className="list-group-item    list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/atr.pdf" role="tab" aria-controls="messages">IQAC Meeting Minutes</a>

                            <a className="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../aqar" role="tab" aria-controls="messages">AQAR</a>

                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                                href="#list" role="tab" aria-controls="settings">perspective plan </a>

                            <a className="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/naac/2.7.1 – Student Satisfaction Survey (SSS) on overall institutional performance 2019-20.pdf" role="tab" aria-controls="home">Students satisfaction survey
                                </a>

                            <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../Bestpractice" role="tab" aria-controls="profile">Best Practices</a>

                            <a className="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/Program Outcomes.pdf" role="tab" aria-controls="messages">Program outcome & course outcome</a>

                            <a className="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/Institutional Distinctiveness.pdf" role="tab" aria-controls="messages">Institutional Distinctiveness</a>

                            <a className="list-group-item  active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="#list" role="tab" aria-controls="messages">NIRF</a>

                           

                            

                            <a className="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/iqac.png" role="tab" aria-controls="messages">Events</a>
   
                        </div>
                    </div>
                </div>
            </div>
{/* EVENTS code start */}
<h1 className="event-heading" align="center"><a>Events Of Naac</a> </h1> <br />
                <br />
   
                <div className="events">
                    <h3 className="events-title" align="center"> <span>Webinar on clean Energy sources and solid waste Management by Dr.Nitin Lingayat</span>- 11/08/2021  </h3> <br />
                  
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/naac/Events/11-08-21.jpg"><img
                            src="../documents/naac/Events/11-08-21.jpg" /></a>

<a className="col-sm-12 col-lg-6" href="../documents/naac/Events/11-08-21-1.jpg"><img
                            src="../documents/naac/Events/11-08-21-1.jpg" /></a>
                            
                    </div>
                </div>
                <div className="events">
                    <h3 className="events-title" align="center"> <span>Guest Lecture</span>- 09/04/2021  </h3> <br />
                  
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/naac/Events/9-4-21.jpg"><img
                            src="../documents/naac/Events/9-4-21.jpg" /></a>

<a className="col-sm-12 col-lg-6" href="../documents/naac/Events/9-4-21-1.jpg"><img
                            src="../documents/naac/Events/9-4-21-1.jpg" /></a>
                            
                    </div>
                </div>
                <div className="events">
                    <h3 className="events-title" align="center"> <span>Join Director Vist</span>- 27/06/2020  </h3> <br />
                  
                    <br />
                    <div className="row md-2 events-img">

                        <a className="col-sm-12 col-lg-6" href="../documents/naac/Events/join-dir.jpg"><img
                            src="../documents/naac/Events/join-dir.jpg" /></a>

<a className="col-sm-12 col-lg-6" href="../documents/naac/Events/join-dir-1.jpg"><img
                            src="../documents/naac/Events/join-dir-1.jpg" /></a>
                            
                    </div>
                </div>
        </>
    );
}

export default Naac;
