import Footer from '../components/Footer';
import '../departments/Dept.css';

function Naac() {
    return (
        <>
            <div className="container">
                <div className=" row text-center" >
                    <div className="col-4" style={{ height: "100%", minWidth: "90%!important" }}>
                        <div className="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            
                        <a className="list-group-item "  
                                href="../naac" role="tab" aria-controls="settings">Back to IQAC</a>
                                <br/>
                            <h1 className="text-center">AQAR
                            </h1>
                            <br />


                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                                href="../documents/naac/AQAR 2015-16.pdf" role="tab" aria-controls="settings"> AQAR 2015-16</a>

                            <a className="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/naac/AQAR 2016-17.pdf" role="tab" aria-controls="home">AQAR
                                2016-17</a>

                            <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../documents/naac/AQAR 2017-18.pdf" role="tab" aria-controls="profile">AQAR 2017-18</a>

                            <a className="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/AQAR 2018-19.pdf" role="tab" aria-controls="messages">AQAR 2018-19</a>

                            <a className="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/AQAR 2019-20.pdf" role="tab" aria-controls="messages">AQAR 2019-20</a>

                          
   
                        </div>
                    </div>
                </div>
            </div>
{/* EVENTS code start */}

               
        </>
    );
}

export default Naac;
