import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            {/* slider */} 
                    <div  id="myCarousel" className="carousel slide" data-ride="carousel">

                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                        </ol>


                        <div class="carousel-inner">
                            <div className="item active">
                                <img src="images/clg-front-view/2.jpg" alt="Los Angeles" style={{width:"100%",height:"100%",filter:" brightness(50%)"}} />
                            </div>

                            <div className="item">
                                <img src="images/clg-front-view/4.jpg" alt="New york"style={{width:"100%",height:"100%",filter:" brightness(50%)"}}/>
                            </div>

                            <div className="item">
                                <img src="images/clg-front-view/College Building 3.jpg" alt="Chicago"style={{width:"100%",height:"100%",filter:" brightness(50%)"}}/>
                            </div>

                            <div className="item">
                                <img src="images/clg-front-view/College Building 2.jpg" alt="Chicago"style={{width:"100%",height:"100%",filter:" brightness(50%)"}}/>
                            </div>

                           
                        </div>

                        {/* <a class="left carousel-control" style={{zIndex:"2"}} href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a> */}
                        <a class="right carousel-control" style={{zIndex:"2"}} href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
           
            <div className="main">

  
                <h1  >Welcome to our college</h1>
                <p >
                    Mangaon Shikshan Prasarak Mandal, Mangaon and its President Adv. Rajivji Sable laid the foundation stone of higher education in Mangaon on 1993. It was that time known as Arts’ Senior College. Later It was named as D.G.Tatkare College on 10th January 2010.
                </p>
                <div className="social-icons">
                    <a href="tel:02140-263928" style={{ color: "sky" }} class="fa fa-phone"></a>
                    <a href="#" style={{ color: "blue" }} class="fa fa-facebook-square"></a>
                    <a href="#" style={{ color: "red" }} class="fa fa-envelope"></a>
                </div>

                <div style={{ display: "flex", color: "white" }}>
                    <a style={{ color: "white", border: "1px solid white" }} href="#contact" className="mybtn text-center">Contact Us</a>
                </div>

            </div>
            {/* //slider */}
            <br />
            {/* About */}
            <div class="container-fluid" data-aos="fade-right">
                <h3 class="title" >
                    Principal message
                </h3>
                <div class="header">
                    <p><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                </div>
                <div class="col-md-3 w3l_about_bottom_left"  >
                    <div class="team-grid" style={{ border: "1px solid black" }}>
                        <div class="  about-poleft t1">
                            <div class="about_img"><img src="images/t-staff/khamkar.jpg" height="100%" alt="" />
                                <h5 style={{ lineHeight: "20px" }}> <span style={{ fontSize: "20px", marginTop: "10px" }}>Dr. B.M Khamkar </span><span style={{ fontSize: "15px" }}>Principal</span></h5>
                                <div class="about_opa">
                                    <p >Principal</p>lege Office:02140-263928
                                    Principal :+91 9423203745/+91 9075610653
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="col-md-9 " style={{ padding: "auto auto auto 20px", display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}>
                    <p >
                        Man is not born, man is made. Making of the man is education. Higher education is third level education. Higher education is higher making of the man. Mangaon Shikshan Prasarak Mandal, Mangaon and its President Adv. Rajivji Sable laid a foundation stone of higher education in Mangaon on 1993. It is that time known as Arts’ Senior College. Later It is named as D.G.Tatkare College on 10th January 2010. At present the college caters Arts, Science, Commerce, Information Technology(IT) and Management  Course. The college is affiliated to University of Mumbai.
                        The college putting every effort to provide value based, quality based and activity oriented education. The qualified teaching staff and academic syllabus of University of Mumbai provides quality based education. National Social Services and Life Long Learning and extension like activities are for value based education. The Sport activity, Practicals, Computer courses, Vermicomposting, Dance & Drama like cultural activities orient the activity based education to students.
                        Nurturing the students to create a competent role models for the society by college organize essay, elocution, debate like activities. Seminars, Presentation, Viva-voce as regular part of higher education makes the student resourceful for facing the challenges of ever changing society. Malhar and Anand-Tarang are the great events to infuse versatility in the personality of the students. College honoured over one thousand trophies, mementoes to students ranked in academic and co- curricular activities. It motivates the Students to undertake responsibility connected to the chosen field. College organized four national seminars in Arts, Science, Commerce, IT, Management and Library sciences, students presented over hundred research papers in National Seminar. Research-innovation like activities offer intellectually stimulating environment in the campus.
                    </p>
                </div>
                <div class="clearfix"> </div>
            </div>
            <br />
            <hr />
            <div class="container" data-aos="fade-up-right" >
                <h3 class="title">
                    -About Us-
                </h3>
                <div class="header">
                    <p><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                </div>
                <div class="col-md-6 w3l_about_bottom_left"  >
                    <div class="video-grid-single-page-agileits">
                        <div data-video="kmKlYMBiwXk" allowfullscreen id="video"> <img
                            src="images/clg-front-view/4.jpg" alt="" class="img-responsive"
                            style={{ width: "100%", height: "100%" }} /> </div>
                    </div>
                </div>
                <div class="col-md-5 " style={{ padding: "35px 0px 0px 20px" }}>
                    <h3 class="text-warning">Welcome to Our College</h3>
                    <p> Mangaon Shikshan Prasarak Mandal, Mangaon and its President Adv. Rajivji Sable laid a
                        foundation stone of higher education in Mangaon on 1993. It was that time known as Arts’
                        Senior College. Later It is named as D.G.Tatkare College on 10th January 2010.</p>
                    <div class="container-fluid" style={{ display: "flex", marginTop: "50px" }}>
                        <a href="#" class="mybtn " ><span><NavLink to="/aboutsansta">Read More </NavLink></span></a>  &nbsp; &nbsp; &nbsp; &nbsp;
                        <a href="#contact" class="mybtn scroll" ><span >Contact Us</span></a>
                    </div>
                </div>
                <div class="clearfix"> </div>
            </div>
            <div class="services" id="services">
                <div class="container">
                    <div class="modal about-modal agileits fade" id="facilitymodal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">close</button>
                                </div>
                                <div class="modal-body">
                                    <img src="images/dgtc.PNG"></img>
                                    <p>
                                        Comming soon...|Comming soon...|Comming soon...|Comming
                                        soon...|Comming
                                        soon...|Comming soon...|Comming soon...|Comming
                                        soon...|Comming
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            {/* //About */}
            {/* Services */}
            <hr />
            <div class="container-fluid" >
                <div class="row">
                    <h3 class="title">  Our Facilities </h3>
                </div>
                <br></br>
                <div class="Facility-row row" data-aos="zoom-in" >
                    <div class="facility col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"    >
                        <div className="sub-facility">
                            <h2 align="center">Library</h2>
                            <div class="header">
                                <p ><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                            </div>
                            <p className="facility-p"> It is enriched with books over 10,000; periodical over 17; daily news papers over 13. Library is with daily book issuing counter and reading room. In near future, the library will be equipped with e-issuing counter computers.
                            </p>
                            <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                                <NavLink to="library" className="mybtn" id="mybtn" >Learn More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div class="facility col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"   >
                        <div className="sub-facility">
                            <h2 align="center">Reading Room</h2>
                            <div class="header">
                                <p ><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                            </div>
                            <p className="facility-p">
                                Separate reading room is there at Terace. It is of about 150 student's capacity. Cool breeze of nature with natural light enhances environment for study. Reading room provides place to learn for students. It is added advantage to students for working hard to gain more in examinations.
                            </p>
                            <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                                <button className="mybtn" id="mybtn">Learn More</button>
                            </div>
                        </div>
                    </div>

                    <div class="facility col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"   >
                        <div className="sub-facility">
                            <h2 align="center">Student Corner</h2>
                            <div class="header">
                                <p ><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                            </div>
                            <p className="facility-p" >It is natural venue for students. Inside the college campus students can enjoy natural joy. It is 'SPACE' for students. The place is for dine, chit-chat, write the applications, to wait for friends, share the feelings, help to each other to build bond of friendship. It has lawn, natural roof, Drinking water facilities with water purifier.
                            </p>
                            <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                                <button className="mybtn" id="mybtn">Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>
                <br></br><br></br>
                <div class="Facility-row row" data-aos="zoom-in" >
                    <div class="facility col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"   >
                        <div className="sub-facility">
                            <h2 align="center">Gymkhana</h2>
                            <div class="header">
                                <p ><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                            </div>
                            <p className="facility-p">Gymnasium - Carrom board, Chess boards, Table tennis, Volley ball, badminton, physical exercise equipment are well maintained. Bat, balls, stumps, net and mat are for student to play cricket. On play ground, special grounds are maintained for kho-kho, kabbadi, volley ball, cricket pitch facilities are available.
                            </p>
                            <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                                <button className="mybtn" id="mybtn" >Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="facility col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"  >
                        <div className="sub-facility">
                            <h2 align="center">Reading room</h2>
                            <div class="header">
                                <p ><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                            </div>
                            <p className="facility-p">
                                Separate reading room is there at Terace. It is of about 150 student's capacity. Cool breeze of nature with natural light enhances environment for study. Reading room provides place to learn for students. It is added advantage to students for working hard to gain more in examinations.
                            </p>
                            <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                                <button className="mybtn" id="mybtn">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="facility col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"  >
                        <div className="sub-facility">
                            <h2 align="center">Multipurpose Hall</h2>
                            <div class="header">
                                <p ><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                            </div>
                            <p className="facility-p">It has over 250 sitting capacity Hall. It is airy with ample windows and fans. The decoraive backdrop, dice, podium are added advantage. It has LCD projector as added advantage. It has LCD projector as advanced teaching aids for students. Built in sound and light system, POP designed ceilling make elligant look of multipurpose hall.
                            </p>
                            <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                                <button className="mybtn" id="mybtn">Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* //services  */}
            {/* Gallery  */}
            <hr />

            <section class="portfolio-w3ls" id="gallery" data-aos="zoom-in">
                <h3 class="title">
                    Our Gallery
                </h3>
                <div class="header">
                    <p><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                </div>
                <div class="col-md-3 col-xs-3 gallery-grid gallery1" >
                    <a href="images/tour/Readingroom.jpg" class="swipebox"><img src="images/tour/Readingroom.jpg"
                        class="img-responsive" alt="/"></img>
                        <div class="textbox">
                            <h4>DGTC</h4>
                            <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 col-xs-3 gallery-grid gallery1" >
                    <a href="images/tour/sports.jpg" class="swipebox"><img src="images/tour/sports.jpg"
                        class="img-responsive" alt="/"></img>
                        <div class="textbox">
                            <h4>DGTC</h4>
                            <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 col-xs-3 gallery-grid gallery1" >
                    <a href="images/tour/garden.jpg" class="swipebox"><img src="images/tour/garden.jpg"
                        class="img-responsive" alt="/"></img>
                        <div class="textbox">
                            <h4>DGTC</h4>
                            <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 col-xs-3 gallery-grid gallery1" >
                    <a href="images/tour/ground.jpg" class="swipebox"><img src="images/tour/ground.jpg"
                        class="img-responsive" alt="/"></img>
                        <div class="textbox">
                            <h4>DGTC</h4>
                            <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 col-xs-3 gallery-grid gallery1" >
                    <a href="images/tour/multipurpose.jpg" class="swipebox"><img src="images/tour/Greendgt.jpg"
                        class="img-responsive" alt="/"></img>
                        <div class="textbox">
                            <h4>DGTC</h4>
                            <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 col-xs-3 gallery-grid gallery1" >
                    <a href="images/tour/scorner1.jpg" class="swipebox"><img src="images/tour/scorner1.jpg"
                        class="img-responsive" alt="/"></img>
                        <div class="textbox">
                            <h4>DGTC</h4>
                            <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 col-xs-3 gallery-grid gallery1" >
                    <a href="images/tour/physics.jpg" class="swipebox"><img src="images/tour/physics.jpg"
                        class="img-responsive" alt="/"></img>
                        <div class="textbox">
                            <h4>DGTC</h4>
                            <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                        </div>
                    </a>
                </div>
                <div id="contact" class="col-md-3 col-xs-3 gallery-grid gallery1" >
                    <a href="images/tour/scorner.jpg" class="swipebox"><img src="images/tour/scorner.jpg"></img>
                        <div class="textbox">
                            <h4>DGTC</h4>
                            <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                        </div>
                    </a>
                </div>
                <div class="clearfix"> </div>
            </section>

            {/* //gallery */}
            <hr />
            {/* // contact  */}
            <br /> <br />

            <div class="Facility-row " data-aos="zoom-in" >
                <div class="facility col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"  >
                    <div className="sub-facility" style={{ display: "grid", placeItems: "center" }}>
                        <br />
                        <h2 align="center"><i style={{ fontSize: "40px", color: "red" }} class="fa fa-map-marker" aria-hidden="true"></i></h2>
                        <br />
                        <p style={{ display: "flex", flexDirection: "column", height: "150px", placeItems: "center" }}>
                            <h3>Address</h3>
                            <br />
                            <p>Near District Cort, </p>
                            <p>Old Mangaon,Raidad Maharastra 402104,</p>
                        </p>
                    </div>
                </div>
                <div class="facility col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                    <div className="sub-facility" style={{ display: "grid", placeItems: "center" }}>
                        <br />
                        <h2 align="center">	<i style={{ fontSize: "40px" }} class="fa fa-mobile" aria-hidden="true"></i></h2>
                        <br />
                        <p style={{ display: "flex", flexDirection: "column", height: "150px", placeItems: "center" }}>
                            <h3>Phone</h3>
                            <br />
                            <p>College Office:02140-263928  <br /> <span>Principal :
                                +91 9423203745/+91 9075610653</span></p>
                        </p>
                    </div>
                </div>
                <div class="facility col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                    <div className="sub-facility" style={{ display: "grid", placeItems: "center" }}>
                        <br />
                        <h2 align="center"> <i style={{ fontSize: "40px", color: "red" }} class="fa fa-envelope-o" aria-hidden="true"></i></h2>
                        <br />
                        <p style={{ display: "flex", flexDirection: "column", height: "150px", placeItems: "center" }}>
                            <h3>Email</h3>
                            <br />
                            <p>
                            College : <a href="mailto:mspmmangaonseniorcollege@gmail.com"> mspmmangaonseniorcollege@gmail.com</a>
                                <br />
                                <span>Principal :<a href="mailto:khamkarbm@gmail.com"> khamkarbm@gmail.com</a></span>
                            </p>
                        </p>
                    </div>
                </div>

            </div>


            <br /> <br />  <br /> <br /><br /> <br />  <br /> <br /><br /> <br />  <br /> <br /><br /><br />

        </>
    )
}

export default Home
