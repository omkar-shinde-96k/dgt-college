import Footer from '../components/Footer';
import '../departments/Dept.css';

function Researchpaper() {
    return (
        <>
           <div className="container">
                <div className=" row text-center" >
                    <div className="col-4" style={{ height: "100%", minWidth: "90%!important" }}>
                        <div className="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            <h1 style={{ marginTop: "15px", color: "tomato", textShadow: "3px 3px 5px blue;" }} className="text-center"> Research papers
                            </h1>
                            <br />

                            <a className="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/Reasearch Paper/2016-17.pdf" role="tab" aria-controls="home">2016-17</a>
                            
                            <a className="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/Reasearch Paper/2017-18.pdf" role="tab" aria-controls="messages">2017-18</a>

                            <a className="list-group-item active list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../documents/Reasearch Paper/2018-19.pdf" role="tab" aria-controls="profile">2018-19</a>
                            
                            <a className="list-group-item    list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/Reasearch Paper/2019-20.pdf" role="tab" aria-controls="messages">2019-20</a>

                            <a className="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/Reasearch Paper/2020-21.pdf" role="tab" aria-controls="messages">2020-21</a>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Researchpaper;
