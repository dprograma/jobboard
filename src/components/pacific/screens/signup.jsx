import React, { Component } from "react";
import { connect } from "react-redux";
import { userAction } from "../actions/authActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ApiUrl } from "../constants/siteroutes";
import { FormErrors } from "./formErrors";

class Signup extends Component {
  state = {
    user: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
      phone: "",
      profileImage: "",
      address: "",
      country: "",
      gender: "",
      dob: "",
    },
    formErrors: { username: "", email: "", password: "", confirm: "" },
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    confirmValid: false,
    formValid: false,
    submitted: false,
    signedin: false,
  };

  handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    const user = { ...this.state.user, [name]: value };
    this.setState({ user }, () => {
      this.props.dispatch(userAction.add_user(this.state.user));
    });
    this.validateField(name, value);
  };

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmValid = this.state.confirmValid;
    let formValid = this.state.formValid;

    switch (fieldName) {
      case "username":
        usernameValid = value.length >= 4 && isNaN(value);
        fieldValidationErrors.username = usernameValid
          ? ""
          : "Invalid username! (must be non numeric and at least 4 characters long.";
        break;
      case "email":
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(re)) {
          emailValid = true;
        } else {
          emailValid = false;
        }
        fieldValidationErrors.email = emailValid
          ? ""
          : "Invalid email address!";
        break;
      case "password":
        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "Invalid password. (must be at least 8 characters long.)";
        break;
      case "confirm":
        console.log("Fieldname", fieldName);
        if (value === this.state.user.password) {
          confirmValid = true;
        } else {
          confirmValid = false;
        }

        fieldValidationErrors.confirm = confirmValid
          ? ""
          : "Password mismatch!";
        break;
      default:
        break;
    }

    formValid =
          usernameValid && emailValid && passwordValid && confirmValid;

    this.setState(
      {
        formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
        confirmValid: confirmValid,
        formValid: formValid,
      },
      () => {
        const status = {
          fieldValidationErrors,
          usernameValid,
          emailValid,
          passwordValid,
          confirmValid,
          formValid,
        };
    
        this.props.dispatch(userAction.validate_form(status));
      }
    );
  };

  errorClass = (error) => {
    return error.length === 0 ? "" : "is-invalid";
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // if (this.props.user.user.user !== undefined) {
    const { email, username, password } = this.props.user.user.user;
    const { formValid } = this.props.user;
    console.log("handle Submit form valid", formValid)
    console.log("Gathering response...");
    const post = { email, username, password };
    if (formValid === true) {
      axios.post(ApiUrl.signup, post).then((response) => {
        if (response.data.errCode === 0) {
          const get_user = JSON.stringify(response.data.result);
          console.log("Get User: ", get_user);
          this.props.dispatch(userAction.formsubmission(true));
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
    }
    // }else{
    //   return false;
    // }
  };

  render() {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      confirm,
      phone,
      profileImage,
      address,
      country,
      gender,
      dob,
    } = this.state.user;
    console.log("State", this.state);
    console.log("Props", this.props.user);
    return (
      <div
        className="row justify-content-center p-4 p-md-0"
        style={{ height: "100vh" }}
      >
        <a name="top"></a>
        
        <form
          style={{ width: "450px" }}
          className="border align-self-md-center p-4"
          onSubmit={this.handleSubmit}
        >
          <div className="panel panel-default"><FormErrors formErrors={this.state.formErrors}/></div>
          <h3 className="text-center">User Account Creation</h3>
          <hr className="mb-5" />

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </span>
            </div>
            <input
              type="text"
              name="username"
              id="username"
              className={`form-control ${this.errorClass(
                this.state.formErrors.username
              )}`}
              placeholder="Username"
              value={username}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group mt-4">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </span>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className={`form-control ${this.errorClass(
                this.state.formErrors.email
              )}`}
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group mt-4">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
              </span>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className={`form-control ${this.errorClass(
                this.state.formErrors.password
              )}`}
              placeholder="**************"
              value={password}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group mt-4">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
              </span>
            </div>
            <input
              type="password"
              name="confirm"
              id="confirm"
              className={`form-control ${this.errorClass(
                this.state.formErrors.confirm
              )}`}
              placeholder="**************"
              value={confirm}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group mt-4">
            <input
              type="submit"
              name="submit"
              id="submit"
              className="btn btn-primary btn-lg btn-block"
              value="Sign Up
            "
            />
          </div>

          <div className="input-group mt-4">
            <p className="text-center">
              Already a member? <Link to="/signin">Login</Link>
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

export default connect(mapStateToProps)(Signup);
