import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar.js';
import Slider from './components/Slider.js';
import About from './components/About.js';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';
import Drawer from './components/Drawer';

import Bscit from './departments/Bscit';
import Chemistry from './departments/Chemistry';
import BMS from './departments/BMS';
import Bcom from './departments/Bcom';
import Marathi from './departments/Marathi';
import Hindi from './departments/Hindi';
import Geo from './departments/Geo';
import History from './departments/History';

import Tstaff from './staff/T-staff';
import Nstaff from './staff/N-staff';

import Daywise from './academics/Daywise';
import Examination from './academics/Examination';
import Library from './academics/Library';
import Office from './academics/Office';
import Termwise from './academics/Termwise';

import Timetable from './other-compo/Timetable';
import Vangmay from './other-compo/Vangmay';
import Naac from './other-compo/Naac';
import Nss from './other-compo/Nss';

function Home() {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <Gallery />
      <Team />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Drawer />

      <Router>
        <Navbar />

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

 
      </Router>
    </>
  );
}

export default App;
