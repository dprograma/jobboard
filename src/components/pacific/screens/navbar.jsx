import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Swal from 'sweetalert2'

class Navbar extends Component {


  signOutUser = () => {
    Swal.fire({
      icon: "question",
      title: "Do you want to logout?",
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("get_user")
        this.props.history.push("/")
      }
    })
  }


  render() {
    let get_user = sessionStorage.getItem("get_user");
    let user = JSON.parse(get_user);
    const userid = user !== null ? user.userid : null;

    const auth =
      userid === "" || userid === null ? (
        <React.Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/signin">
              Sign In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
            <a name="top"></a>
          </li>
        </React.Fragment>
      ) : (
        <li className="nav-item dropdown ml-auto list">
          <Link
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            to="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >Account</Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/profile">
              <p className="ml-4">
                <small> 
                  <em>Your profile.</em>
                  Your profile
                </small>
              </p>
            </Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/settings">
              <i className="fas fa-cog mr-2"></i> Settings<p></p>
            </Link>
            <Link className="dropdown-item" to="#" onClick={this.signOutUser}>
              <i className="fas fa-sign-out-alt mr-2"></i> Logout<p></p>
            </Link>
          </div>
        </li>
      );

    console.log("Props", this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand" to="/">
            <span style={{ color: "red", fontWeight: "bolder" }}>NHS </span>
            <span style={{ color: "black", fontWeight: "bolder" }}>
              JOB BOARD
            </span>
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            {auth}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/createcv"
                >
                  Create CV
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link btn  text-white rounded-0"
                  to="/postjob"
                  style={{
                    backgroundColor: "rgb(77, 104, 194)",
                    fontWeight: "bold",
                    border: "0px  !important",
                  }}
                >
                  POST A JOB
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(withRouter(Navbar));
