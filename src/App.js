import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import {useEffect} from "react"

import Home from "./Home/Home.jsx";
import Error from "./Error/Error.jsx";
import Faqs from "./faqs.jsx"
import Browse from "./browse.jsx"
import SignUp from "./signup.jsx"
import Medication from "./medication.jsx"
import All from "./All.jsx"
import Weather from "./Weather.jsx"
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import ContactInfo from "./ContactInfo.jsx";
import WhoWeAre from "./WhoWeAre.jsx";
import Certifications from "./Certifications.jsx";
import logo from "./images/logo.png";
import styles from "./App.module.css";

function App() {
  let location = useLocation()
  console.log(location.pathname)

  useEffect(() => {
     if (location.pathname === ("/signup")) {
       document.title = "Subscribe | Medicaitons Dictionary"
     } else if (location.pathname === ("/browse")) {
       document.title = "All Systems | Medicaitons Dictionary"
     } else if (location.pathname === ("/faqs")) {
       document.title = "FAQs | Medicaitons Dictionary"
     } else if (location.pathname === ("/all")) {
       document.title = "All Medications | Medicaitons Dictionary"
     } else if (location.pathname === ("/")) {
       document.title = "Medications Dictionary"
     } else if (location.pathname === "/PrivacyPolicy") {
       document.title = "Privacy Policy | Medicaitons Dictionary"
     } else if (location.pathname === "/ContactInfo") {
       document.title = "Contact Us | Medicaitons Dictionary"
     } else if (location.pathname === "/WhoWeAre") {
       document.title = "About Us | Medicaitons Dictionary"
     } else if (location.pathname === "/Certifications") {
       document.title = "Certifications | Medicaitons Dictionary"
     } else if (location.pathname === "/seainfo6150-final-project-webapp") {
       document.title = "Medications Dictionary"
     }
     else if (location.pathname.includes("/browse/")) {
     } else {
       document.title = "404 Error | Medicaitons Dictionary"
     }
     
  }, [location]);

  return (
    <>
      <header>
        <Link to="/" className = {styles.navigation} ><img src={logo} alt="Logo" /></Link>
        <nav className = {styles.navigation}>
          <ul className = {styles.list}>
            <li className = {styles.listItem}>
              <Link to="/browse">Browse medications by system</Link>
            </li >
            <li className = {styles.listItem}>
              <Link to="/all">Browse all medications from A to Z</Link>
            </li>
            <li className = {styles.listItem}>
              <Link to="/signup">Subscribe for newsletter</Link>
            </li>
          </ul>
        </nav>
        <Weather />

      </header>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/seainfo6150-final-project-webapp" exact component={Home}/> 
        <Route path="/all" exact component={All} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/faqs" exact component={Faqs} />
        <Route path="/PrivacyPolicy" exact component={PrivacyPolicy} />
        <Route path="/ContactInfo" exact component={ContactInfo} />
        <Route path="/WhoWeAre" exact component={WhoWeAre} />
        <Route path="/Certifications" exact component={Certifications} />


        <Route path="/browse/:id"
          exact
          render={({ match }) => (
            <Medication id={match.params.id} />  
          )}
        />
        <Route component={Error} />
      </Switch>

      <footer>
        <nav className = {styles.navigation}>
          <ul className = {styles.list}>
          <li className = {styles.listItem}>
              <Link to="/WhoWeAre">About Us</Link>
            </li>
            <li className = {styles.listItem}>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li className = {styles.listItem}>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
            </li>
            <li className = {styles.listItem}>
              <Link to="/ContactInfo">Contact Us</Link>
            </li>
            <li className = {styles.listItem}>
              <Link to="/Certifications">Certifications</Link>
            </li>
          </ul>
        </nav>
      </footer>

    </>
  );
}

export default App;