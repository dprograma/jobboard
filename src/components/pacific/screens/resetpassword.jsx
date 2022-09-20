import React, { Component } from "react";
import { connect } from "react-redux";
import { userAction } from "../actions/authActions";
import axios from "axios";
import Swal from "sweetalert2";
import {ApiUrl} from "../constants/siteroutes"

class ResetPassword extends Component {
  state = {
    user: {
      firstname: null,
      lastname: null,
      username: null,
      email: null,
      password: null,
      phone: null,
      profileImage: null,
      address: null,
      country: null,
      gender: null,
      dob: null,
    },
    submitted: false,
    signedin: false,
  };

  handleChange = (e) => {
    const input = e.target;
    const user = { ...this.state.user, [input.name]: input.value };
    this.setState({ user }, () => {
      console.log("Forgot Password Email: ", this.state.user.resetpassword);
      this.props.dispatch(userAction.reset_password(this.state.user));
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { resetpassword, confirmreset } = this.props.user.user.user;
    console.log("reset password", resetpassword);
    console.log("confirm reset", confirmreset);
    const forgotpass = localStorage.getItem("forgotpass")
    console.log("forgot password", forgotpass);
    const post = { resetpassword, confirmreset, forgotpass}; 
    console.log("post", post)
    console.log("Gathering response...");
    axios
      .post(ApiUrl.resetpassword, post)
      .then((response) => {
        console.log("response from server", response.data)
        if (response.data.errCode === 0) {
          this.props.dispatch(userAction.formsubmission(true));
          localStorage.removeItem("forgotpass")
          Swal.fire({
            title: "Success!",
            text: response.data.msg,
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: response.data.msg,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  render() {
    return (
      <div className="row justify-content-center" style={{height: "100vh"}}>
        <form id="forgotform" className="align-self-center border p-5" onSubmit={this.handleSubmit}>
          <h4 className="text-center">Reset Your Password</h4>
          <hr />
          <input
            type="password"
            name="resetpassword"
            id="resetpassword"
            className="form-control mb-3" placeholder="Password"
          onChange={this.handleChange}/>
          <input
            type="password"
            name="confirmreset"
            id="confirmreset"
            className="form-control mb-3" placeholder="Confirm Password"
          onChange={this.handleChange}/>
          <input
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(ResetPassword);
