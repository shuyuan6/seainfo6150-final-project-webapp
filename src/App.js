import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import {useEffect} from "react"

import Home from "./Home/Home.jsx";
import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import Faqs from "./faqs.jsx"
import About from "./about.jsx"
import Browse from "./browse.jsx"
import SignUp from "./signup.jsx"
import Medication from "./medication.jsx"
import treefrog from "./images/treefrog.jpg";
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
       document.title = "Subscribe"
     } else if (location.pathname === ("/browse")) {
       document.title = "All Systems"
     } else if (location.pathname === ("/faqs")) {
       document.title = "FAQs"
     } else if (location.pathname === ("/about")) {
       document.title = "About Us"
     } else if (location.pathname === ("/all")) {
       document.title = "All Medications"
     } else if (location.pathname === ("/")) {
       document.title = "Medications Dictionary"
     } else if (location.pathname === "/PrivacyPolicy") {
       document.title = "Privacy Policy"
     } else if (location.pathname === "/ContactInfo") {
       document.title = "Contact Us"
     } else if (location.pathname === "/WhoWeAre") {
       document.title = "About Us"
     } else if (location.pathname === "/Certifications") {
       document.title = "Certifications"
     }
     else if (location.pathname.includes("/browse/")) {
     } else {
       document.title = "Error"
     }
     
  }, [location]);

  console.log("css:", styles)

  return (
    <>
      <header>
        <a className = {styles.navigation} href="/"><img src={logo} alt="Logo" /></a>
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
      
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/seainfo6150-final-project-webapp" exact component={Home}/> 
        <Route path="/all" exact component={All} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/about" exact component={About} />
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
        {/*<Route path="/skin_drugs" exact component={SkinDrugs} />*/}
        {/* passing parameters via a route path */}
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Bar
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
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