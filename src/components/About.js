
function About() {

    return (
        <>
            <div class="container">
                <h3 class="w3l-title">
                    <x-sign class="style5">
                        -About Us-
				    </x-sign>
                </h3>

                <div class="w3layouts_header">
                    <p><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                </div>

                <div class="col-md-6 w3l_about_bottom_left"  >
                    <div class="video-grid-single-page-agileits">
                        <div data-video="kmKlYMBiwXk" allowfullscreen id="video"> <img
                            src="images/clg-front-view/dgtc3.png" alt="" class="img-responsive"
                            style={{ width: "100%", height: "100%" }} /> </div>
                    </div>
                    <div class="w3l_about_bottom_left_video">
                        <h4> </h4>
                    </div>
                </div>

                <div class="col-md-5 wthree-about-grids" style={{ padding: "35px 0px 0px 20px" }}>
                    <h3 class="text-warning">Welcome to Our College</h3>

                    <p> Mangaon Shikshan Prasarak Mandal, Mangaon and its President Adv. Rajivji Sable laid a
                    foundation stone of higher education in Mangaon on 1993. It is that time known as Arts’
					Senior College. Later It is named as D.G.Tatkare College on 10th January 2010.</p>

                    <div class="container-fluid" style={{ display: "flex", marginTop: "50px" }}>
                        <a href="#" class="trend-w3l" id="namastey-btn" data-toggle="modal" data-target="#myModal"><span>Read More</span></a>  &nbsp; &nbsp; &nbsp; &nbsp;
                        <a href="#mail" class="trend-w3l scroll" id="namastey-btn"><span >Contact Us</span></a>
                    </div>
                </div>

                <div class="clearfix"> </div>
            </div>




<br></br><br></br><br></br>




            <div class="stats" id="stats">
			<div class="container">
				<div class="stats-info">
					<div class="col-md-3 col-xs-3 stats-grid slideanim">
						<i class="fa fa-users" aria-hidden="true"></i>
						<div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0'
							data-max='12760' data-delay='0.1' data-increment="5">12760</div>

						<h4 class="stats-info">STUDENTS</h4>
					</div>
					<div class="col-md-3 col-xs-3 stats-grid slideanim">
						<i class="fa fa-book" aria-hidden="true"></i>
						<div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0'
							data-max='5' data-delay='4' data-increment="1">5</div>

						<h4 class="stats-info"> FACULTIES</h4>
					</div>
					<div class="col-md-3 col-xs-3 stats-grid slideanim">
						<i class="fa fa-trophy" aria-hidden="true"></i>
						<div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0'
							data-max='79000' data-delay='.5' data-increment="10">79000</div>

						<h4 class="stats-info">EX-STUDENTS </h4>
					</div>
					<div class="col-md-3 col-xs-3 stats-grid slideanim">
						<i class="fa fa-user" aria-hidden="true"></i>
						<div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0'
							data-max='60' data-delay='3' data-increment="1">60</div>

						<h4 class="stats-info"> TEACHERS</h4>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
        </>
    );
}

export default About;
