import './Dept.css';
import { NavLink } from "react-router-dom";
function Marathi() {
    return (
        <>
            <br />
            <h1 align="center" ><b>  मराठी विभाग</b> </h1>
            <br />

            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="team-w3l-grid" style={{ border: "1px solid black" }}>
                            <div class="  about-poleft t1">
                                <div class="about_img"><img src="images/t-staff/acharya.jpg" height="100%" alt="prof.R.M. Acharya " />
                                    <h5 style={{ lineHeight: "20px" }}> <span style={{ fontSize: "20px", marginTop: "10px" }}>डॉ. राजेंद्र आचार्य </span><span style={{ fontSize: "15px" }}> सहयोगी प्राध्यापक</span></h5>
                                    <div class="about_opa">
                                        <p >सहयोगी प्राध्यापक</p>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-4 col-sm-6 col-xs-12 p-5 ">

                        <div class="col-10 hod" style={{ marginTop: "15px" }}>
                            <p>
                                माणगाव शिक्षण प्रसारक मंडळाचे द. ग. तटकरे महाविद्यालयाची स्थापना  दिनांक १४ जुलै १९९३ रोजी झाली. तेव्हापासून पदवी स्तरापर्यंतच्या मराठी विषयाच्या अध्यापन कार्यास प्रारंभ करण्यात आला. या मराठी विभागामध्ये प्रा.विजय चव्हाण प्रा. चंद्रशेखर भगत हे मराठी विषयाचे अध्यापक प्रारंभी अध्यापन  करीत होते .सन २०१०-२०११ या शैक्षणिक वर्षापासून तत्कालीन प्राचार्य डॉ. संतोष लीलाराम मोटवानी यांच्या प्रयत्नातून पदव्युत्तर स्तरावर मराठी विषयाच्या अध्ययन-अध्यापनाला सुरुवात झाली . सध्या पदवी आणि पदव्युत्तर  स्तरापर्यंत मराठी  विषयाचे अध्ययन - अध्यापनाची सुविधा उपलब्ध आहे. सन २००३ - २००४ या शैक्षणिक वर्षापासून  प्रा. डॉ. राजेंद्र महादु आचार्य मराठी विषयाचे अध्यापक म्हणून कार्यरत आहेत.
                                शैक्षणिक पात्रता : -  एम. ए. (मराठी ) नेट , पीएच.डी.
                                अनुभव :- १७ वर्षे
                                आतापर्यंत त्यांनी खालील उपक्रमांमध्ये सक्रिय सहभाग घेतला आहे.
                                <br /><br />
                                अ.क्र       कार्यक्रम                                सहभाग
                                १)   विद्यापीठ स्तरीय कार्यशाळा/चर्चासत्र :-२० <br />
                                २)   राज्यस्तरीय कार्यशाळा/चर्चासत्र :- १५<br />
                                ३)   राष्ट्रीय  कार्यशाळा/ चर्चासत्र :- ०७<br />
                                ४)   आंतरराष्ट्रीय कार्यशाळा/ चर्चासत्र :- ०३<br />
                                ५)   शोधनिबंध प्रकाशित :- १५<br />
                                ६)   मायनर रिसर्च प्रोजेक्ट :-  ०१<br />
                                ७)   अतिथी व्याख्यानास उपस्थिती :- १०<br />
                                ८)   अतिथी व्याख्यानाचे आयोजन :- १०<br />
                                ९)   विविध स्पर्धांचा परीक्षक :- १०<br />
                                १०)  रक्तदान शिबिरात रक्तदान :-०५<br />
                                ११)  सह संपादन :- ०५<br />
                                १२)   महाविद्यालय स्तरावर आदर्श शिक्षक पुरस्कार :- ०१<br />
                                १३)   पदवी आणि पदव्युत्तर अभ्यासक्रम महाविद्यालयीन व विद्यापीठीयपरीक्षाचामुख्यसमन्वयक ,परीक्षक , प्रश्नक  ,माॅडरेटर , भरारीपथकप्रमुख -सदस्य.<br />
                                १४)   महाविद्यालयाच्या स्थानिक व्यवस्थापन समितीचा  सदस्य .<br />
                                १५)   महाविद्यालयाचा प्रभारी प्राचार्य म्हणून जबाबदारी सांभाळली आहे .<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- {{!-- syllybus start  --}} --> */}

            <div class="container" style={{ fontSize: "1.5rem" }}>
                <div class="row">
                    <div class="col-4" style={{ height: "100%", minWidth: "90% !important" }}>

                        <div class="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            <h1 style={{ marginTop: "15px" }} class="text-center"> Marathi Syllabus </h1>
                            <br />

                            <a class="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/marathi/fyba.pdf" role="tab" aria-controls="home">F.Y.B.A
                                Syllabus </a>

                            <a class="list-group-item  list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../documents/marathi/syba.pdf" role="tab" aria-controls="profile">S.Y.B.A Syllabus </a>

                            <a class="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/marathi/tyba.pdf" role="tab" aria-controls="messages"> T.Y.B.A Syllabus</a>
<br/>
                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                                href="../documents/marathi/ma1.pdf" role="tab" aria-controls="settings">M.A. 1st Syllabus</a>

                            <a class="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/marathi/ma2.pdf" role="tab" aria-controls="home">M.A. 2nd Syllabus</a>

                            {/* <NavLink class="list-group-item list-group-item-action   .listclass" id="list-home-list"
                                data-toggle="list" to="/marathi-vangmay" role="tab" aria-controls="home">Marathi Vangmay Mandal</NavLink> */}

                        </div>
                    </div>
                </div>
            </div>

            <div class="secoundnav">
                <h1 class="event-heading" align="center"><a>Events Of Marathi Departments</a> </h1> <br />
                <div class="events" >
                    <h3 class="events-title" align="center"> <span> मराठी भाषा गौरव दिन   </span> </h3> <br />
                    <div class="row md-2 events-img">
                        <a class="col-sm-12 col-lg-6" href="../documents/marathi/events/8.jpg"><img src="../documents/marathi/events/8.jpg" /></a>
                        <a class="col-sm-12 col-lg-6" href="../documents/marathi/events/6.jpg"><img src="../documents/marathi/events/6.jpg" /></a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Marathi;