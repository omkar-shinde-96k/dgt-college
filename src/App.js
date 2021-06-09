 
import React from "react"; 
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";

import loadable from 'react-loadable';

import './App.css'; 
// import Home from "./components/Home";
import Navbar from './components/Navbar.js';
import Slider from './components/Slider.js';
import About from './components/About.js';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';
import Drawer from './components/Drawer';

import{ Loading,Loadingtwo } from './components/Loading'; 

const Home = () => {
  return ( 
  <>
    <Slider />
    <About />
    <Services />
    <Gallery />
    <Team />
    <Footer />
  </> 
  )
}

// const Home = loadable({
//   loader: () => import("./components/Home"),
//   loading: () => <><Loading/></> 
// })
 


// import Bscit from './departments/Bscit'; 
// import Chemistry from './departments/Chemistry';
// import BMS from './departments/BMS';
// import Bcom from './departments/Bcom';
// import Marathi from './departments/Marathi';
// import Hindi from './departments/Hindi';
// import Geo from './departments/Geo';
// import History from './departments/History';

// import Tstaff from './staff/T-staff';
// import Nstaff from './staff/N-staff';

// import Daywise from './academics/Daywise';
// import Examination from './academics/Examination';
// import Library from './academics/Library';
// import Office from './academics/Office';
// import Termwise from './academics/Termwise';

// import Timetable from './other-compo/Timetable';
// import Vangmay from './other-compo/Vangmay';
// import Naac from './other-compo/Naac';
// import Nss from './other-compo/Nss';
// import Error from './components/Error';
  
const Bscit = loadable({
  loader: () => import("./departments/Bscit"),
  loading: () => <> <Loadingtwo/> </>
}) 
const Chemistry = loadable({
  loader: () => import("./departments/Chemistry"),
  loading: () => <> <Loadingtwo/> </>
})
const BMS = loadable({
  loader: () => import("./departments/BMS"),
  loading: () => <> <Loadingtwo/> </>
})
const Bcom = loadable({
  loader: () => import("./departments/Bcom"),
  loading: () => <> <Loadingtwo/> </>
})
const Marathi = loadable({
  loader: () => import("./departments/Marathi"),
  loading: () => <> <Loadingtwo/> </>
})
const Hindi = loadable({
  loader: () => import("./departments/Hindi"),
  loading: () => <> <Loadingtwo/> </>
})
const Geo = loadable({
  loader: () => import("./departments/Geo"),
  loading: () => <> <Loadingtwo/> </>
})
const History = loadable({
  loader: () => import("./departments/History"),
  loading: () => <> <Loadingtwo/> </>
})

const Tstaff = loadable({
  loader: () => import("./staff/T-staff"),
  loading: () => <> <Loadingtwo/> </>
})
const Nstaff = loadable({
  loader: () => import("./staff/N-staff"),
  loading: () => <> <Loadingtwo/> </>
})
const Daywise = loadable({
  loader: () => import("./academics/Daywise"),
  loading: () => <> <Loadingtwo/> </>
})
const Examination = loadable({
  loader: () => import("./academics/Examination"),
  loading: () => <> <Loadingtwo/> </>
})
const Library = loadable({
  loader: () => import("./academics/Library"),
  loading: () => <> <Loadingtwo/> </>
})
const Office = loadable({
  loader: () => import("./academics/Office"),
  loading: () => <> <Loadingtwo/> </>
})
const Termwise = loadable({
  loader: () => import("./academics/Termwise"),
  loading: () => <> <Loadingtwo/> </>
})


const Timetable = loadable({
  loader: () => import("./other-compo/Timetable"),
  loading: () => <> <Loadingtwo/> </>
})
const Vangmay = loadable({
  loader: () => import("./other-compo/Vangmay"),
  loading: () => <> <Loadingtwo/> </>
})
const Naac = loadable({
  loader: () => import("./other-compo/Naac"),
  loading: () => <> <Loadingtwo/> </>
})
const Nss = loadable({
  loader: () => import("./other-compo/Nss"),
  loading: () => <> <Loadingtwo/> </>
})
const Error = loadable({
  loader: () => import("./components/Error"),
  loading: () => <> <Loadingtwo/> </>
})

  
// function Home() {
//   return (
//     <>
//       <Slider />
//       <About />
//       <Services />
//       <Gallery />
//       <Team />
//       <Footer />
//     </>
//   );
// }




// const Home = loadable({
//   loader: () => import("./components/Home"),
//   loading: () => <> <Loadingtwo/> </>
// })

function App() {
  return (
    <>
      <Router>
        <Drawer />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/bscit' component={Bscit} />
          <Route path='/chemistry' component={Chemistry} />
          <Route path='/BMS' component={BMS} />
          <Route path='/Bcom' component={Bcom} />
          <Route path='/marathi' component={Marathi} />
          <Route path='/hindi' component={Hindi} />
          <Route path='/history' component={History} />
          <Route path='/geography' component={Geo} />

          <Route path='/teaching-staff' component={Tstaff} />
          <Route path='/non-teach-staff' component={Nstaff} />

          <Route path='/termwise-schedule' component={Termwise} />
          <Route path='/daywise-schedule' component={Daywise} />
          <Route path='/office-schedule' component={Office} />
          <Route path='/library-schedule' component={Library} />
          <Route path='/examination-schedule' component={Examination} />

          <Route path='/time-table' component={Timetable} />
          <Route path='/marathi-vangmay' component={Vangmay} />
          <Route path='/naac' component={Naac} />
          <Route path='/nss' component={Nss} />

          <Route component={Error} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
