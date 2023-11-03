import { Link } from "react-router-dom";
import "./Services.css";
import servers1 from "../../imgs/servers-1.jpg";
import servers2 from "../../imgs/servers-2.jpg";
import servers3 from "../../imgs/servers-3.jpg";
import f from "../../imgs/F.svg";
import g from "../../imgs/G.svg";
import c from "../../imgs/C.svg";
import Button from "../botton/Button";
import { backToTop } from "../../App";
import NavBar from "../NavBar/NavBar";



const Services = (props) => {
  const { darkMode = false ,showNavbar} = props;
  return (
    <>
     {showNavbar==="true"?<NavBar/>:<></>}

      <div
        className={`container ${
          darkMode ? "text-black" : "text-white"
        } mb-5 pt-5 `}
      >
        <h1 style={{ color: "#198754", textTransform: "uppercase" }}>
          Our services
        </h1>
        <div className="row mt-5 pt-5">
          <div className="col-4 serverCol">
            <div
              className="card bg-success position-relative serverCard pb-2"
              style={{ width: "" }}
            >
              <img
                src={servers1}
                className="card-img-top position-absolute "
                alt="..."
              />
              <img src={f} className=" p-5 pb-0 letterImg" alt="..." />
              <div className="card-body text-start">
                <div className="card-text">
                  <h5 className="card-title">Consulting</h5>
                  <p className="card-text">
                    At First Gulf Consulting, we understand that each
                    individual's career journey is unique. Our experienced
                    career counsellors work closely with clients to assess their
                    strengths, passions, and goals, creating personalized
                    roadmaps for success. Whether you're a recent graduate
                    exploring career options or a professional seeking a change,
                    our guidance will empower you to make informed decisions and
                    achieve your aspirations
                  </p>
                </div>
                <Link
                  to="/services"
                  onClick={() => backToTop()}
                  className={`btn btn-warning ${
                    darkMode ? "button-green" : "text-white"
                  } mt-5`}
                >
                  cybersecurity
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4 serverCol">
            <div
              className="card bg-success position-relative serverCard pb-2"
              style={{ width: "" }}
            >
              <img
                src={servers2}
                className="card-img-top position-absolute "
                alt="..."
              />
              <img
                src={g}
                className=" p-5 pb-0 letterImg"
                alt="..."
                style={{ maxWidth: "100%" }}
              />
              <div className="card-body text-start">
                <div className="card-text">
                  <h5 className="card-title">Business </h5>
                  <p className="card-text">
                    Our expertise extends to the corporate realm, where we offer
                    meticulous business audits to help organizations thrive in
                    competitive markets. Our skilled consultants delve into
                    every facet of your business operations, identifying
                    strengths, weaknesses, and untapped opportunities. With our
                    comprehensive audit reports, you can make data-driven
                    decisions to optimize efficiency, reduce costs, and enhance
                    overall performance.
                  </p>
                </div>
                <Link
                  to="/services"
                  onClick={() => backToTop()}
                  className={`btn btn-warning ${
                    darkMode ? "button-green" : "text-white"
                  } mt-5`}
                >
                  cybersecurity
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4 serverCol">
            <div
              className="card bg-success position-relative serverCard pb-2"
              style={{ width: "" }}
            >
              <img
                src={servers3}
                className="card-img-top position-absolute "
                alt="..."
              />
              <img src={c} className=" p-5 pb-0 letterImg" alt="..." />
              <div className="card-body text-start">
                <div className="card-text">
                  <h5 className="card-title">cybersecurity </h5>
                  <p className="card-text">
                    In the digital age, cybersecurity is paramount. Our
                    dedicated cybersecurity team can help you to comply with NCA
                    regulations and stays ahead of the latest threats and
                    vulnerabilities to safeguard your sensitive information.
                    From risk assessments to implementing robust security
                    measures, we provide end-to-end solutions that protect your
                    digital assets and ensure compliance with industry
                    standards.
                  </p>
                </div>
                <Link
                  to="/services"
                  onClick={() => backToTop()}
                  className={`btn btn-warning ${
                    darkMode ? "button-green" : "text-white"
                  } mt-5`}
                >
                  cybersecurity
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/services" onClick={() => backToTop()}>
          <Button
            title="OUR CUSTOMERS"
            className="mt-5 fs-3 rounded-pill ps-3 pe-3"
          />
        </Link>
      </div>
    </>
  );
};

export default Services;
