import React, { Component } from "react";
import {Redirect} from 'react-router-dom'

class PostJob extends Component {
  render() {
    if (sessionStorage.getItem("get_user") !== null) {
        var user = sessionStorage.getItem("get_user");
        user = JSON.parse(user);
        const userid = user.userid;
        if (userid === undefined) {
          return <Redirect exact to="/signin" />;
        }
      }else{
        return <Redirect exact to="/signin" />;
      }
    return (
      <React.Fragment>
        <div className="row mt-5 p-4 p-md-0">
            <div className="col-md-3 d-none d-md-block"><p>&nbsp;</p></div>
            <div className="col-md-6">
                <div className="card">
                    <form action="" className="form-group p-4">
                        <h5 className="text-center">Please, Upload a new Job</h5>
                        <hr />
                        <div className="input-group mt-5">
                            <div className="input-group-prepend"><span className="input-group-text">Job Title</span></div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="input-group mt-5">
                            <div className="input-group-prepend"><span className="input-group-text">Industry</span></div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="input-group mt-5">
                            <div className="input-group-prepend"><span className="input-group-text">Job Description</span></div>
                            <textarea name="jobdescription" id="" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                        <div className="input-group mt-5">
                            <div className="input-group-prepend"><span className="input-group-text">Expected Salary (N)</span></div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="input-group mt-5">
                            <button type="submit" className="btn btn-block btn-outline-secondary rounded-pill">Upload Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PostJob;
