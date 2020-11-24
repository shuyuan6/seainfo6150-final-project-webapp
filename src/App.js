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
import styles from "./homepage.module.css";

function App() {
  let location = useLocation()
  console.log(location.pathname)

  useEffect(() => {
     if (location.pathname.includes("signup")) {
       document.title = "Sign Up"
     } else {
       document.title = "Medical Dict"
     }
     
  }, [location]);

  console.log("css:", styles)

  return (
    <>
      <header>
        <a href="/"><img src={treefrog} alt="tree frog" /></a>
        <nav>
          <ul className = {styles.list}>
            <li className = {styles.listItem}>
              <Link to="/browse">Browse medications by system</Link>
            </li >
            <li className = {styles.listItem}>
              <Link to="/all">Browse all medications from A to Z</Link>
            </li>
            <li className = {styles.listItem}>
              <Link to="/signup">Sign up for newsletter</Link>
            </li>
          </ul>
        </nav>
        <Weather />

      </header>
      
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/all" exact component={All} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/about" exact component={About} />
        <Route path="/faqs" exact component={Faqs} />
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
        <nav>
          <ul>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
             <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </footer>

    </>
  );
}

export default App;