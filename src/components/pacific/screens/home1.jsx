import React, { Component } from "react";
import Main from "./main";
import Searchbar from "./searchbar";

class Home1 extends Component {
  render() {
    return (
      <div className="container-fluid no-gutters pr-0 pl-0">
        <Searchbar />
        <Main />
      </div>
    );
  }
}

export default Home1;
