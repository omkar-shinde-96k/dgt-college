import Footer from '../components/Footer';
import '../departments/Dept.css';

function Feedback() {
    return (
        <>
            <div className="container">
                <div className=" row text-center" >
                    <div className="col-4" style={{ height: "100%", minWidth: "90%!important" }}>
                        <div className="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            <h1 style={{ marginTop: "15px", color: "tomato", textShadow: "3px 3px 5px blue;" }} className="text-center">Feedback Forms
                            </h1>
                            <br />
                            <a className="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                             href="https://forms.gle/ohXgBHF79CU4YFap6" role="tab" aria-controls="messages">Employer Feedback 2021-2022</a>
                            <a className="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="https://forms.gle/oUvVNWanz5ErEdkc8" role="tab" aria-controls="home">Alumni Feedback 2021-2022</a>
                            
                            <a className="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                             href="https://forms.gle/p1LgWJSafE4m14XA7" role="tab" aria-controls="messages">Students Feedback 2021-2022</a>
                            <a className="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="https://forms.gle/R3ks1dSn1Es1r5Nh6" role="tab" aria-controls="home">Teachers Feedback 2021-2022</a>
                                
                            <a className="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                            href="https://forms.gle/HDEWHUyH9bgH4pFy5" role="tab" aria-controls="messages">Parents Feedback 2021-2022</a>    
                            <a className="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="https://docs.google.com/forms/d/e/1FAIpQLSfYTN_IKX9p5F38S7pnLW2h55YkeDPOQBd2_qtA0kHeZ3_oqA/viewform" role="tab" aria-controls="home">Anti Ragging Application Form</a>
                            
                            <a className="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="https://docs.google.com/forms/d/e/1FAIpQLScKLWcSB2KkH2Wi_2SdA6xieobzuTeyS40cCCso5Lv6ax03yg/viewform" role="tab" aria-controls="messages">INTERNAL COMPLIANCE (WDC) Application Form</a>

                            <a className="list-group-item active list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeQ08csTX3eRglHMlPI0KByTmMkSM8C8GbNHJu40LgPxk0pwA/viewform" role="tab" aria-controls="profile">Students Grievance Application Form </a>
                            
                         
   
                        </div>



                        <div className="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            <h1 style={{ marginTop: "15px", color: "tomato", textShadow: "3px 3px 5px blue;" }} className="text-center">Feedback Report 20-21
                            </h1>
                            <br />

                            <a className="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/feedback/student 20-21.pdf" role="tab" aria-controls="home">Students Feedback Report</a>
                            
                            <a className="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/feedback/alumni 20 - 21.pdf" role="tab" aria-controls="messages">Alumni Feedback  Report</a>

                            <a className="list-group-item active list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../documents/feedback/teachers 20 - 21.pdf" role="tab" aria-controls="profile">Teachers Feedback  Report </a>
                            
                         
   
                        </div>
                    </div>
                </div>
            </div>

   
              
        </>
    );
}

export default Feedback;
