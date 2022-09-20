import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

class Main extends Component {
  ads = {
    title: [
      "Senior PHP Developer",
      "Software Developer (mid-level)",
      "Python Developer",
      "Senior Nodejs Developer",
      "Junior Frontend Developer",
      "Backend Engineer",
      "ICT Instructor",
      "Software Instructor (Remote, Lagos)",
      "Django Developer (Calaber, Abuja)",
      "IT Officer",
    ],
    style: { fontSize: "72px", color: "#aaa", wordWrap: "break-word" },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptas omnis necessitatibus consequuntur iure veniam iste autem? Commodi aliquid incidunt assumenda, eveniet officia id nulla soluta accusantium neque harum quo.",
  };

  handleAds = () => {
    const titles = this.ads.title;
    console.log(titles);
    const advert = titles.map((title) => {
      return (
        <div key={title} className="col mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><NavLink to="/">{title}</NavLink></h5>
              <p className="card-text">
                <FontAwesomeIcon icon={faBriefcase} style={this.ads.style} />
              </p>
              <p className="card-text text-justify">{this.ads.text}</p>
            </div>
          </div>
        </div>
      );
    });
    return advert;
  };
  render() {
    return (
      //   carousel section
      <React.Fragment>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade order-1"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/tech1.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img src="images/tech2.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img src="images/tech3.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
        {/* job ads title */}
        <div className="row justify-content-center m-4 bg-light order-3">
          <h2 className="text-center text-secondary">LATEST JOBS</h2>
        </div>
        {/* job ads */}
        <div className="row row-cols-1 row-cols-md-3 m-3">
          {this.handleAds()}
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
