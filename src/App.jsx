import React from 'react';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Services from './Services';
import { Switch, Route, Redirect } from "react-router-dom";
const App = () => {
     return (
          <>
               <Navbar></Navbar>
               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/contact" component={Contact} />

                    <Redirect to="/"></Redirect>
               </Switch>
               <Footer></Footer>
          </>
     );
};
export default App;