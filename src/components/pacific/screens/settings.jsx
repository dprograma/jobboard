import React, { Component } from "react";
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";

class Settings extends Component {
  state = {};
  render() {
    console.log("Props", this.props);
    console.log("dashboard signedin check", this.props.user.signedin);
    let user = sessionStorage.getItem("get_user");
    user = JSON.parse(user);
    let userid = user.userid;
    console.log("Userid", userid);
    if (!this.props.user.signedin && userid === "") {
      return <Redirect exact to="/signin" />;
    }
    return (
      <React.Fragment>
        <h3>Settings Page</h3>
        <hr />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    ...state
  }
}

export default connect(mapStateToProps)(Settings);
