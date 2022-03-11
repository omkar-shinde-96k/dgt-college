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

                            <a className="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfhjhigFxjr6PopU4-5hwmJO42BM0hMZZRqTkoMyc7rFcH6og/closedform" role="tab" aria-controls="home">Students Feedback Forms</a>
                            
                            <a className="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeY3smEjHDWtfDJ_nFWwCXOB6KHL4p5REuRosxTh_bSztGrcw/viewform?usp=sf_link" role="tab" aria-controls="messages">Alumni Feedback Forms</a>

                            <a className="list-group-item active list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfu1jCbhX5Llxfy0hCQYFzwVroeWsrPN4Hl9Jv9_XnRkJSoDg/viewform?usp=sf_link" role="tab" aria-controls="profile">Teachers Feedback Forms </a>
                            
                         
   
                        </div>
                    </div>
                </div>
            </div>

   
              
        </>
    );
}

export default Feedback;
