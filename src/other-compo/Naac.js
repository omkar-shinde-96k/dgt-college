import Footer from '../components/Footer';
function Naac() {
    return (
        <>
            <div class="container">
                <div class=" row text-center" >
                    <div class="col-4" style={{ height: "100%", minWidth: "90%!important" }}>
                        <div class="list-group" id="list-tab" role="tablist" style={{ height: "100%", width: "100%" }}>
                            <h1 style={{ marginTop: "15px", color: "tomato", textShadow: "3px 3px 5px blue;" }} class="text-center">NACC/IQAC
                </h1>
                            <br />

                            <a class="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="#list-home" role="tab" aria-controls="home">Introduction</a>

                            <a class="list-group-item  list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../documents/naac/pear-team.pdf" role="tab" aria-controls="profile">PEER TEAM REPORT </a>

                            <a class="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/grade-sheet.jpg" role="tab" aria-controls="messages"> Grade Sheet</a>

                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                                href="../documents/naac/AQAR 2015-16.pdf" role="tab" aria-controls="settings"> AQAR 2015-16</a>

                            <a class="list-group-item list-group-item-action active .listclass" id="list-home-list"
                                data-toggle="list" href="../documents/naac/AQAR 2016-17.pdf" role="tab" aria-controls="home">AQAR
                    2016-17</a>

                            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                                href="../documents/naac/AQAR 2017-18.pdf" role="tab" aria-controls="profile">AQAR 2017-18</a>

                            <a class="list-group-item active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/AQAR 2018-19.pdf" role="tab" aria-controls="messages">AQAR 2018-19</a>

                            <a class="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/AQAR 2018-19.pdf" role="tab" aria-controls="messages">AQAR 2019-20</a>

                            <a class="list-group-item  active list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/others.pdf" role="tab" aria-controls="messages">Other important links</a>

                            <a class="list-group-item   list-group-item-action" id="list-messages-list" data-toggle="list"
                                href="../documents/naac/iqac.png" role="tab" aria-controls="messages">IQAC Committee</a>

                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default Naac;