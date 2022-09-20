import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./navbar";
import Signup from "./signup";
import Signin from "./signin";
import Home1 from "./home1";
import Dashboard from "./dashboard";
import Createcv from "./createcv";
import PostJob from "./postjob";
import Footer from "./footer";
import ForgotPassword from "./forgotpassword"
import ResetPassword from "./resetpassword"
import Confirm from "./confirm"
import Profile from "./profile"
import Settings from "./settings"

class Pacific extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home1} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/createcv" component={Createcv} />
          <Route path="/postjob" component={PostJob} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/confirm/:userid" component={Confirm} />
          <Route path="/profile" component={Profile}/>
          <Route path="/settings" component={Settings}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Pacific;
