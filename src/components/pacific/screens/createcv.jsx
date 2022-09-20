import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faPencilAlt,
  faTrash,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";

class Creatcv extends Component {
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
        <div className="row m-4">
          <div className="col-md-1 d-none d-md-block">
            <p>&nbsp;</p>
          </div>
          <div className="col-12 col-md-7">
            <div
              className="card"
              style={{ width: "100%", boxShadow: "0 0 10px rgba(0, 0, 0, .3)" }}
            >
              <div className="card-header">
                James Daramola
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="fa-pull-right"
                  style={{ color: "#aaa", marginLeft: "30px" }}
                />
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <p>PERSONAL DETAILS</p>
                  <p>Nigeria</p>
                  <p>jamesdara@gmail.com</p>
                  <p>+234 989 736 8376</p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati provident voluptatibus tenetur eveniet vero,
                    necessitatibus, reiciendis id voluptate tempore consectetur
                    eum incidunt in. Nisi dolor, vitae harum modi minima quam!
                  </p>
                </li>
                <li className="list-group-item">
                  <p>
                    WORK EXPERIENCE
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      className="fa-pull-right"
                      style={{ color: "#aaa", marginLeft: "30px" }}
                    />
                  </p>
                  <p>GreenField Associate</p>
                  <p>2009 - 2014</p>
                  <p>Responsibilties</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    doloremque nisi dolor excepturi a, voluptates autem deleniti
                    cupiditate nesciunt similique commodi rem id omnis eaque
                    voluptatibus sunt necessitatibus provident magnam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Asperiores recusandae fuga quam laboriosam voluptate ex
                    reprehenderit quae numquam cupiditate, et fugit molestiae
                    consequatur odio facere ad dolor iusto quisquam nesciunt.
                  </p>
                  <p>&nbsp;</p>
                  <p>TechNo Systems Limited</p>
                  <p>2014 till date</p>
                  <p>Responsibilties</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    doloremque nisi dolor excepturi a, voluptates autem deleniti
                    cupiditate nesciunt similique commodi rem id omnis eaque
                    voluptatibus sunt necessitatibus provident magnam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Asperiores recusandae fuga quam laboriosam voluptate ex
                    reprehenderit quae numquam cupiditate, et fugit molestiae
                    consequatur odio facere ad dolor iusto quisquam nesciunt.
                  </p>
                </li>
                <li className="list-group-item">
                  <p>
                    ACADEMIC BACKGROUND{" "}
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      className="fa-pull-right"
                      style={{ color: "#aaa", marginLeft: "30px" }}
                    />
                  </p>
                  <p>Babcook University, Ogun State</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis minima a veniam ea repudiandae. Ad itaque culpa
                    dolorem hic facere, soluta adipisci aliquam eligendi eaque
                    dolores autem atque nulla omnis!
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 mt-4  mt-md-0 order-first mb-4 mb-md-0">
            <div className="card" style={{ width: "100%" }}>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/createcv">Delete Resume</Link>
                  <FontAwesomeIcon icon={faTrash} className="fa-pull-right" />
                </li>
                <li className="list-group-item">
                  <Link to="/createcv">Download Resume</Link>
                  <FontAwesomeIcon
                    icon={faArrowCircleDown}
                    className="fa-pull-right"
                  />
                </li>
                <li className="list-group-item">
                  <button
                    type="submit"
                    className="btn btn-block rounded-pill btn-outline-secondary"
                  >
                    <FontAwesomeIcon icon={faUpload} className="mr-3" />
                    Upload a New Resume
                  </button>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit explicabo illum hic, dolorum quisquam eos ut ipsam.
                    Suscipit labore voluptates officia, vel culpa debitis fuga.
                    Facilis deleniti maiores ab quisquam.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Creatcv;
