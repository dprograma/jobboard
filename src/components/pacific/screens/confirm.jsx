import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { ApiUrl } from "../constants/siteroutes";
import { userAction } from "../actions/authActions";

class Confirm extends Component {
  componentDidMount = () => {
    const userid = this.props.userid;
    axios.post(ApiUrl.confirm, userid).then((response) => {
      console.log(response.data);
      const status = response.data.msg;
      if (response.data.errCode === 0) {
        this.props.dispatch(userAction.confirm_email(status));
        this.props.history.push("/signin");
      } else {
        this.props.dispatch(userAction.confirm_email(status));
        this.props.history.push("/signin");
      }
    });
  };

  render() {
    console.log("Props", this.props);
    return <div></div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  var id = ownProps.match.params.userid;
  return {
    userid: id,
  };
};

export default connect(mapStateToProps)(withRouter(Confirm));
