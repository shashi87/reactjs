import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "../storybookcomponents/Header"
import Footer from '../storybookcomponents/Footer';

// Pages
import Home from "./home";
import Family from "./family";
import Search from "./search";
import PedigreeView from "./pedigreeView";
import StartTree from "./startTree";

export default function Main() {
    return (
        <div className="wrapper">
            <Router>
                <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/family" component={Family}/>
                        <Route exact path="/search" component={Search}/>
                        <Route exact path="/family/pedigree-view" component={PedigreeView}/>
                        <Route exact path="/family/start-tree" component={StartTree}/>
                    </Switch>
                <Footer/>
            </Router>
        </div>  
    );
  }

