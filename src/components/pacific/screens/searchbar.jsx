import React, { Component } from "react";
import "../../../index.css";

class Searchbar extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <form className="searchbar">
        <div className="form-row">
          <div className="col-5">
            <input type="text" className="form-control" placeholder="job type or keywords" />
          </div>
          <div className="col-5">
            <input type="text" className="form-control" placeholder="location" />
          </div>
          <div className="col-2">
            <input type="submit" className="btn btn-primary" value="Search" />
          </div>
        </div>
      </form>
      </div>
      
    );
  }
}

export default Searchbar;
