import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserEdit,
  faFacebook,
  faTwitter,
  faGooglePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    let today = new Date();
    let year = today.getFullYear();

    return (
      <React.Fragment>
        <footer className="page-footer font-small text-white bg-dark pt-4">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  About NHS
                </h5>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <hr className="clearfix w-100 d-md-none" />

              <div className="col-md-2 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  Company Return Policy
                </h5>

                <ul className="list-unstyled">
                  <li>
                    <Link to="#!">Link to company policy</Link>
                  </li>
                  <li>
                    <Link to="#!">Link to company return policy</Link>
                  </li>
                  <li>
                    <Link to="#!">Link to company cookie policy</Link>
                  </li>
                  <li>
                    <Link to="#!">Link to company Terms and Conditions</Link>
                  </li>
                </ul>
              </div>

              <hr className="clearfix w-100 d-md-none" />

              <div className="col-md-2 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  Terms and Conditions
                </h5>

                <ul className="list-unstyled">
                  <li>
                    <Link to="#!">Link to company policy</Link>
                  </li>
                  <li>
                    <Link to="#!">Link to company return policy</Link>
                  </li>
                  <li>
                    <Link to="#!">Link to company cookie policy</Link>
                  </li>
                  <li>
                    <Link to="#!">Link to company Terms and Conditions</Link>
                  </li>
                </ul>
              </div>

              <hr className="clearfix w-100 d-md-none" />

              <div className="col-md-2 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  Do you need help?
                </h5>

                <ul className="list-unstyled">
                  <li>
                    <Link to="#!">Link to company policy</Link>
                  </li>
                  <li>
                    <Link to="#!">Link to company return policy</Link>
                  </li>
                  <li>
                    <Link to="#!">Link to company cookie policy</Link>
                  </li>
                  <li>
                    <Link to="#!">Link to company Terms and Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr />
          <ul className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item">
              <h5 className="mb-1">Register for free</h5>
            </li>
            <li className="list-inline-item">
              <a href="/signup#top" className="btn btn-danger btn-rounded">
                Sign up!
              </a>
            </li>
          </ul>

          <hr />
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <Link to="#" className="btn-floating btn-fb mx-1"></Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn-floating btn-tw mx-1"></Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn-floating btn-gplus mx-1"></Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn-floating btn-li mx-1"></Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn-floating btn-dribbble mx-1"></Link>
            </li>
          </ul>
          <div className="footer-copyright text-center py-3">
            © {year} Copyright:
            <Link to="https://nhsjobboard.com/"> NHS Job Board</Link>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
