import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import loadable from 'react-loadable';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import Drawer from './components/Drawer';
import { Loadingtwo } from './components/Loading';
import Home from './components/Home';

const Bscit = loadable({
  loader: () => import("./departments/Bscit"),
  loading: () => <> <Loadingtwo /> </>
})
const Chemistry = loadable({
  loader: () => import("./departments/Chemistry"),
  loading: () => <> <Loadingtwo /> </>
})
const BMS = loadable({
  loader: () => import("./departments/BMS"),
  loading: () => <> <Loadingtwo /> </>
})
const Baf = loadable({
  loader: () => import("./departments/Baf"),
  loading: () => <> <Loadingtwo /> </>
})
const Bcom = loadable({
  loader: () => import("./departments/Bcom"),
  loading: () => <> <Loadingtwo /> </>
})
const Marathi = loadable({
  loader: () => import("./departments/Marathi"),
  loading: () => <> <Loadingtwo /> </>
})
const Hindi = loadable({
  loader: () => import("./departments/Hindi"),
  loading: () => <> <Loadingtwo /> </>
})
const Geo = loadable({
  loader: () => import("./departments/Geo"),
  loading: () => <> <Loadingtwo /> </>
})
const History = loadable({
  loader: () => import("./departments/History"),
  loading: () => <> <Loadingtwo /> </>
})
const Tstaff = loadable({
  loader: () => import("./staff/T-staff"),
  loading: () => <> <Loadingtwo /> </>
})
const Nstaff = loadable({
  loader: () => import("./staff/N-staff"),
  loading: () => <> <Loadingtwo /> </>
}) 
const welshe = loadable({
  loader: () => import("./staff/welshe"),
  loading: () => <> <Loadingtwo /> </>
}) 

const TimeTable = loadable({
  loader: () => import("./other-compo/TimeTables"),
  loading: () => <> <Loadingtwo /> </>
}) 
const ssr = loadable({
  loader: () => import("./naac/ssr"),
  loading: () => <> <Loadingtwo /> </>
})
const Naac = loadable({
  loader: () => import("./other-compo/Naac"),
  loading: () => <> <Loadingtwo /> </>
})
const Bestp = loadable({
  loader: () => import("./other-compo/Bestp"),
  loading: () => <> <Loadingtwo /> </>
})
const Researchpaper = loadable({
  loader: () => import("./other-compo/Researchpaper"),
  loading: () => <> <Loadingtwo /> </>
})
const Nss = loadable({
  loader: () => import("./other-compo/Nss"),
  loading: () => <> <Loadingtwo /> </>
})
const Error = loadable({
  loader: () => import("./components/Error"),
  loading: () => <> <Loadingtwo /> </>
})
const AboutSansta = loadable({
  loader: () => import("./other-compo/AboutSansta"),
  loading: () => <> <Loadingtwo /> </>
})
const MspmFounder = loadable({
  loader: () => import("./other-compo/MspmFounder"),
  loading: () => <> <Loadingtwo /> </>
})
const GovBodyMnsp = loadable({
  loader: () => import("./other-compo/GovBodyMnsp"),
  loading: () => <> <Loadingtwo /> </>
})
const Founderofdgtc = loadable({
  loader: () => import("./other-compo/Founderofdgtc"),
  loading: () => <> <Loadingtwo /> </>
})
const Presidantofmspm = loadable({
  loader: () => import("./other-compo/Presidantofmspm"),
  loading: () => <> <Loadingtwo /> </>
})
const Secretoryofmspm = loadable({
  loader: () => import("./other-compo/Secretoryofmspm"),
  loading: () => <> <Loadingtwo /> </>
})
const ClgVisionMission = loadable({
  loader: () => import("./other-compo/ClgVisionMission"),
  loading: () => <> <Loadingtwo /> </>
})
const ClgCDC = loadable({
  loader: () => import("./other-compo/ClgCDC"),
  loading: () => <> <Loadingtwo /> </>
}) 
const DlleFacultyMember = loadable({
  loader: () => import("./other-compo/DlleFacultyMember"),
  loading: () => <> <Loadingtwo /> </>
})
const Vangmay = loadable({
  loader: () => import("./other-compo/Vangmay"),
  loading: () => <> <Vangmay /> </>
}) 
const Library = loadable({
  loader: () => import("./other-compo/Library"),
  loading: () => <> <Loadingtwo /> </>
})
const libraryEvent = loadable({
  loader:() => import("./other-compo/libraryEvent"),
  loading:() => <> <Loadingtwo /> </>
})
const Antiragging = loadable({
  loader: () => import("./other-compo/anti-ragging"),
  loading: () => <> <Loadingtwo /> </>
})
const Facilities = loadable({
  loader: () => import("./other-compo/Facilities"),
  loading: () => <> <Loadingtwo /> </>
})
const Notice = loadable({
  loader: () => import("./other-compo/Notice"),
  loading: () => <> <Loadingtwo /> </>
})
const eNotice = loadable({
  loader: () => import("./other-compo/eNotice"),
  loading: () => <> <Loadingtwo /> </>
})
const aqar = loadable({
  loader: () => import("./other-compo/AQAR"),
  loading: () => <> <Loadingtwo /> </>
})
const Feedback = loadable({
  loader: () => import("./other-compo/Feedback"),
  loading: () => <> <Loadingtwo /> </>
})
const addmissionSchedule = loadable({
  loader: () => import("./other-compo/addmissionSchedule"),
  loading: () => <> <Loadingtwo /> </>
})
const CollegeAlumi = loadable({
  loader: () => import("./other-compo/CollegeAlumi"),
  loading: () => <> <Loadingtwo /> </>
})
const Adacal = loadable({
  loader: () => import("./other-compo/Adacal"),
  loading: () => <> <Loadingtwo /> </>
})
const Greencampus = loadable({
  loader: () => import("./other-compo/Greencampus"),
  loading: () => <> <Loadingtwo /> </>
})
function App() {
  const [DrawerToggle, setDrawerToggle] = useState(false) 
const ToggleHandler=()=>{
  setDrawerToggle(!DrawerToggle)
}  
  return (
    <> 
      <Router>
       {DrawerToggle?<Drawer  toggle={ToggleHandler} />:""}    
        <Navbar toggle={ToggleHandler} /> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/bscit' component={Bscit} />
          <Route path='/chemistry' component={Chemistry} />
          <Route path='/BMS' component={BMS} />
          <Route path='/Bcom' component={Bcom} />
          <Route path='/baf' component={Baf} />
          <Route path='/marathi' component={Marathi} />
          <Route path='/hindi' component={Hindi} />
          <Route path='/history' component={History} />
          <Route path='/geography' component={Geo} />

         <Route path='/teaching-staff' component={Tstaff} />
          <Route path='/non-teach-staff' component={Nstaff} />
          <Route path='/welfareschemes' component={welshe} />

          <Route path='/termwise-schedule' component={TimeTable} />
          <Route path='/daywise-schedule' component={TimeTable} />
          <Route path='/office-schedule' component={TimeTable} />
          <Route path='/library-schedule' component={TimeTable} />
          <Route path='/adacmiccal' component={Adacal} /> 
          <Route path='/naac' component={Naac} />
          <Route path='/bestpractice' component={Bestp} />
          <Route path='/researchpaper' component={Researchpaper} />
          
          <Route path='/ssr' component={ssr} />
          <Route path='/nss' component={Nss} />
          <Route path='/feedback' component={Feedback} />


          <Route path='/aboutsansta' component={AboutSansta} />
          <Route path='/founderofmnsp' component={MspmFounder} />
          <Route path='/governingbodyofmspm' component={GovBodyMnsp} />
          <Route path='/founderofdgtc' component={Founderofdgtc} />
          <Route path='/presidantofmspm' component={Presidantofmspm} />
          <Route path='/college-cdc' component={ClgCDC} />
          <Route path='/secretoryofmspm' component={Secretoryofmspm} />
          <Route path='/clgVisionMission' component={ClgVisionMission} />
          <Route path='/facilities' component={Facilities} /> 
          <Route path='/DlleFacultyMember' component={DlleFacultyMember} /> 
          <Route path='/marathi-vangmay' component={Vangmay} /> 
          <Route path='/library' component={Library} /> 
          <Route path='/libraryEvent' component={libraryEvent} />
          <Route path='/anti-ragging' component={Antiragging} /> 
          <Route path='/Notice' component={Notice} /> 
          <Route path='/eNotice' component={eNotice} /> 
          <Route path='/aqar' component={aqar} />
          <Route path='/addmissionSchedule' component={addmissionSchedule} /> 
          <Route path='/CollegeAlumi' component={CollegeAlumi} /> 
          <Route path='/Greencampus' component={Greencampus} /> 
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </> 
  );
}

export default App;
