import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { ApiUrl } from "../constants/siteroutes";
import { profileAction } from "../actions/profileActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class Dashboard extends Component {
  state = {
    jobs: false,
    applications: false,
  }

  componentDidMount = () => {
    let user = sessionStorage.getItem("get_user");
    user = JSON.parse(user);
    let userid = user.userid;

    axios.get(ApiUrl.dashboard + `?userid=${userid}`).then((response) => {
      console.log(response.data);
      this.props.dispatch(profileAction.dashboard(response.data.user));
      this.props.dispatch(
        profileAction.job_applications(response.data.applications)
      );
      this.props.dispatch(profileAction.job_post(response.data.jobs));
    });
  };

  handleJobPost = () => {
    const jobs = this.props.profile.jobpost
    console.log("Dashboard jobs", jobs)
    const jobpost = jobs.length? (jobs.map((job) => {
      <div className="card bg-transparent">
        <div className="card-img-top"></div>
        <div className="card-title">{job.title}</div>
        <div className="card-body">
          <p className="card-text">Industry <span className="fa-pull-right">{job.industry}</span></p>
          <p className="card-text">Description <span className="fa-pull-right">{job.description}</span></p>
          <p className="card-text">Location <span className="fa-pull-right">{job.location}</span></p>
          <p className="card-text">Salary <span className="fa-pull-right">{job.salary}</span></p>
          <p className="card-text">Last updated <span className="fa-pull-right">{job.updated_at}</span></p>
        </div>
      </div>
    })) : ""
    this.setState({jobs:jobpost})
  }

  handleJobApplication = () => {
    const jobapplications = this.props.profile.jobapplication
    console.log("Dashboard applications", jobapplications)
    const applications = jobapplications.length? (jobapplications.map((appls) => {
      <div className="card bg-transparent">
        <div className="card-img-top"></div>
        <div className="card-title">{appls.title}</div>
        <div className="card-body">
          <p className="card-text">Industry <span className="fa-pull-right">{appls.industry}</span></p>
          <p className="card-text">Description <span className="fa-pull-right">{appls.description}</span></p>
          <p className="card-text">Location <span className="fa-pull-right">{appls.location}</span></p>
          <p className="card-text">Salary <span className="fa-pull-right">{appls.salary}</span></p>
          <p className="card-text">Last updated <span className="fa-pull-right">{appls.updated_at}</span></p>
        </div>
      </div>
    })) : ""
    this.setState({applications})
  }

  render() {
    console.log("Props", this.props);
    console.log("dashboard signedin check", this.props.user.signedin);
    let user = sessionStorage.getItem("get_user");
    user = JSON.parse(user);
    let userid = user.userid;
    console.log("Userid", userid);
    const username = user.username;
    if (!this.props.user.signedin && userid === "") {
      return <Redirect exact to="/signin" />;
    }

    const dashboard = this.state.jobs || this.state.applications ? (<div className="card w-100">
    <div className="card-body p-0">
      <div className="jumbotron pb-4 mb-0">{this.state.jobs}{this.state.applications}</div></div></div>) : (<div className="card w-100">
    <div className="card-body p-0">
      <div className="jumbotron pb-4 mb-0">
        <h3 className="display-6">Hello, {username}!</h3>
        <p className="lead">
          Let us help you get the job of your dreams. If you are an employer, you can get the best fit that job.
        </p>
        <hr className="my-4" />
        <p>
          Click <span className="badge badge-info m-2 p-2">Job Applicaions</span> button to view your job applications if your are an applicant.<br/>
          Click <span className="badge badge-info m-2 p-2">Jobs Posted</span> button to view the jobs you have posted if you are an employer.
        </p>
        <hr className="my-4"/>
        <div className="alert alert-success mb-0">
          <p>Here are your basic information</p>
          <hr />
          <p>First name <span className="text-primary">{user.firstname} <small><Link to="/profile"><FontAwesomeIcon icon={faEdit}/>Edit</Link></small></span></p>
          <p>Last name <span className="text-primary">{user.lastname} <small><Link  to="/profile"><FontAwesomeIcon icon={faEdit}/>Edit</Link></small></span></p>
          <p className="text-secondary">Username <span>{user.username} <small><Link className="btn disabled" to="/profile"><FontAwesomeIcon icon={faEdit}/>Edit</Link></small></span></p>
          <p>Email address <span className="text-primary">{user.email} <small><Link to="/profile"><FontAwesomeIcon icon={faEdit}/>Edit</Link></small></span></p>
          <p>Home address <span className="text-primary">{user.address} <small><Link to="/profile"><FontAwesomeIcon icon={faEdit}/>Edit</Link></small></span></p>
          <p>Mobile phone <span className="text-primary">{user.phone} <small><Link to="/profile"><FontAwesomeIcon icon={faEdit}/>Edit</Link></small></span></p>
        </div>
      </div>
    </div>
  </div>)

    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <button className="btn btn-primary btn-lg btn-block text-white mt-4">
                  User Information
                </button>
                <button className="btn btn-primary btn-lg btn-block text-white mt-4" onClick={this.handleJobApplication}>
                  Job Applications
                </button>
                <button className="btn btn-primary btn-lg btn-block text-white mt-4" onClick={this.handleJobPost}>
                  Jobs Posted
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {dashboard}
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

export default connect(mapStateToProps)(Dashboard);
