import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ApiUrl } from "../constants/siteroutes";
import axios from "axios";

class Profile extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    gender: "",
    dob: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    zip: "",
    profile: null,
  };

  handleProfileChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.setState({profile: e.target.files[0]})
      console.log("State details", this.state);
    });
  };

  handleProfileSubmit = (e) => {
    e.preventDefault();
    var user = sessionStorage.getItem("get_user");
    user = JSON.parse(user);
    const email = user.email;
    const userid = user.userid;
    const formdata = new FormData();
    formdata.append("firstname", this.state.firstname);
    formdata.append("lastname", this.state.lastname);
    formdata.append("username", this.state.username);
    formdata.append("gender", this.state.gender);
    formdata.append("dob", this.state.dob);
    formdata.append("email", this.state.email);
    formdata.append("password", this.state.password);
    formdata.append("phone", this.state.phone);
    formdata.append("address", this.state.address);
    formdata.append("country", this.state.country);
    formdata.append("state", this.state.state);
    formdata.append("zip", this.state.zip);
    formdata.append("profile", this.state.profile);
    formdata.append("loggedin_email", email);
    formdata.append("userid", userid);

    const headers = {'Content-Type':'multipart/form-data'}
    axios.post(ApiUrl.profile, formdata, {headers}).then((response) => {
      console.log(response.data);
      sessionStorage.setItem("get_user", response.data.result)
    });
  };

  render() {
    console.log("Props", this.props);
    var user = sessionStorage.getItem("get_user");
    user = JSON.parse(user);
    const userid = user.userid;
    console.log("dashboard signedin check", this.props.user.signedin);
    if (!this.props.user.signedin && userid === "") {
      return <Redirect exact to="/signin" />;
    }

    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h4 className="mt-4">Update Profile</h4>
        </div>
        <hr className="my-3" />
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <img
              src={user.image ? user.image : "images/avater.png"}
              alt="profile"
              style={{ width: "120px", height: "120px" }}
            />
            <input
              type="file"
              htmlFor="profile_form"
              name="profile"
              id="profile"
              className="form-control mt-2"
              onChange={this.handleProfileChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <form
              id="profile_form"
              className="border p-3 mt-5 mb-5"
              onSubmit={this.handleProfileSubmit}
            >
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="firstname" className="col-form-label">
                    Firstname
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form-control form-control-sm rounded-0"
                    onChange={this.handleProfileChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastname" className="col-form-label">
                    Lastname
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="form-control form-control-sm rounded-0"
                    onChange={this.handleProfileChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-8">
                  <label htmlFor="username" className="col-form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={user.username}
                    className="form-control form-control-sm rounded-0"
                    onChange={this.handleProfileChange}
                    disabled
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="gender" className="col-form-label">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className="form-control form-control-sm rounded-0"
                    onChange={this.handleProfileChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="email" className="col-form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control form-control-sm rounded-0"
                    onChange={this.handleProfileChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="col-form-label">
                    Phone
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <select name="phone" id="phone" className="">
                        <option value=""></option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="form-control form-control-sm rounded-0"
                      onChange={this.handleProfileChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="password" className="col-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control form-control-sm rounded-0"
                    onChange={this.handleProfileChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="confirm" className="col-form-label">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm"
                    id="confirm"
                    className="form-control form-control-sm rounded-0"
                    onChange={this.handleProfileChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-8">
                  <label htmlFor="address" className="col-form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="form-control form-control-sm rounded-0"
                    onChange={this.handleProfileChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="state" className="col-form-label">
                    State
                  </label>
                  <select
                    name="state"
                    id="state"
                    className="form-control form-control-sm rounded-0"
                  >
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="country" className="col-form-label">
                    Country
                  </label>
                  <select
                    name="country"
                    id="country"
                    className="form-control form-control-sm rounded-0"
                    onChange={this.handleProfileChange}
                  >
                    <option value=""></option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="zip" className="col-form-label">
                    Zip code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    className="form-control form-control-sm rounded-0"
                    onChange={this.handleProfileChange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group row">
                  <input
                    type="submit"
                    value="Update Profile"
                    className="btn btn-primary btn-lg btn-block rounded-0"
                    style={{
                      backgroundColor: "rgb(77, 104, 194)",
                      fontWeight: "bold",
                      border: "0px  !important",
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Profile);
