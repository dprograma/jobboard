import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPage } from "../actions/homeactions";


class Home extends Component {
  componentWillMount() {
    console.log("Props", this.props);
    this.props.loadPage();
  }

  render() {
    let postList = this.props.post.length ? (
      this.props.post.map((p) => {
        return (
          <div key={p.id} className="card mb-4">
            <h3 className="card-title text-center">{p.title}</h3>
            <div className="card-body">{p.body}</div>
          </div>
        );
      })
    ) : (
      <div className="text-center">No post yet</div>
    );
    return (
      <React.Fragment>
        <Navbar />
        <div className="row">
          <div className="col-md-8 offset-2 text-justify">{postList}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { myhome } = state;
  return { post: myhome.post };
};
export default connect(mapStateToProps, { loadPage })(Home);
