import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userAction } from "../actions/authActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { ApiUrl } from "../constants/siteroutes";

class Signin extends Component {
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
    formErrors: { username: "", email: "", password: "", confirm: "" },
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    confirmValid: false,
    formValid: false,
    submitted: false,
    signedin: false,
    emailConfirm: "",
  };

  componentDidMount = () => {
    if (this.props.user.emailConfirm) {
      const status = this.props.user.emailConfirm.status;
      if (status === "Email confirmed successfully.") {
        Swal.fire({
          title: "Success!",
          text: status,
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: status,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
  };

  handleChange = (e) => {
    const input = e.target;
    const user = { ...this.state.user, [input.name]: input.value };
    this.setState({ user }, () => {
      console.log("State Email", this.state.user.email);
      console.log("State Password", this.state.user.password);
      this.props.dispatch(userAction.login_user(this.state.user));
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.user.user !== undefined) {
      const { email, password } = this.props.user.user.user;
      console.log("email", email);
      console.log("password", password);
      const post = { email, password };
      console.log("Gathering response...");
      axios.post(ApiUrl.signin, post).then((response) => {
        if (response.data.errCode === 0) {
          const get_user = JSON.stringify(response.data.result);
          console.log("get user: ", get_user);
          sessionStorage.setItem("get_user", get_user);
          this.props.dispatch(userAction.formsubmission(true));
          this.props.dispatch(userAction.signedin(true));
          this.props.history.push("/dashboard");
        } else {
          Swal.fire({
            title: "Error!",
            text: response.data.msg,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      });
    } else {
      return false;
    }
  };

  render() {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      phone,
      profileImage,
      address,
      country,
      gender,
      dob,
    } = this.state.user;
    console.log("Props", this.props);
    return (
      <div
        className="row justify-content-center p-4 p-md-0"
        style={{ height: "100vh" }}
      >
        <form
          style={{ width: "450px" }}
          className="border p-4 align-self-md-center"
          onSubmit={this.handleSubmit}
        >
          <h3 className="text-center">User Login</h3>
          <hr className="mb-5" />
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <input
              type="email"
              name="email"
              className="form-control pl-2"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group mt-4">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <input
              type="password"
              name="password"
              className="form-control pl-2"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group mt-4">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary btn-lg btn-block"
            />
          </div>
          <div className="input-group mt-4">
            <p className="text-left">
              Forgot <Link to="/forgotpassword">password?</Link>
            </p>
            <p className="text-center">
              Not registered? Click <Link to="/signup">Sign Up</Link> to create
              a free acount.
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};

export default connect(mapStateToProps)(withRouter(Signin));
