import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/logo.png';
const Footer = () => {
  return (
    <>
      <footer
        className="page-footer font-small blue pt-5 bg-color mt-5"
        style={{ width: "100%", position: "absolute" }}
      >
        <div
          className="container-fluid text-center text-md-left"
          style={{ paddingLeft: "4%", paddingRight: "4%" }}
        >
          <div className="row">
            <div className="col-md-4">
              <h2 className="text-light" style={{ textAlign: "left" }}>
                <img src={logo} alt="udukku" style={{ width: '140px' }} />
              </h2>
              <p className="text-light" style={{ textAlign: "left" }}>
                A one-of-its-kind destination for musicians to harness
                <br />their love of music and connect with each other.
              </p>
              <p className="text-light" style={{ textAlign: "left" }}>
                M-23 Income Tax Colony, Tonk Road, Durgapura, Jaipur - 302018
              </p>
              <p style={{ textAlign: "left" }}>
                <Link className="text-light" to="/contact-us">
                  Contact Us
                </Link>
              </p>
              <p style={{ textAlign: "left" }}><a className="text-light" href="mailto:info@udukku.com">info@udukku.com</a></p>
              <p>
                {/* © 2021 Copyright Developed By: <a href="https://cftlabs.org/" className="link" target="_blank"> CFT Labs</a> */}
                <span style={{ float: "left", marginRight: "20px" }}>
                  <a href="https://www.facebook.com/udukkumusic/" target="_blank">
                    <i
                      className="fab fa-facebook-f text-light "
                      style={{
                        fontSize: "20px",
                        padding: "10px 13px",
                        borderRadius: "35px",
                        background: "#696969",
                        margin: "12px",
                        marginLeft:'0px'
                      }}
                    ></i>
                  </a>
                  <a href="https://www.instagram.com/udukkumusic/" target="_blank">
                    <i
                      className="fab fa-instagram text-light "
                      style={{
                        fontSize: "20px",
                        padding: "10px 13px",
                        borderRadius: "35px",
                        background: "#696969",
                        margin: "12px",
                      }}
                    ></i>
                  </a>
                  <a href="https://twitter.com/udukkumusic" target="_blank">
                    <i
                      className="fab fa-twitter text-light "
                      style={{
                        fontSize: "20px",
                        padding: "10px 13px",
                        borderRadius: "35px",
                        background: "#696969",
                        margin: "12px",
                      }}
                    ></i>
                  </a>
                </span>
              </p>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase text-light text-left">Categories</h5>
              <ul className="list-unstyled">
                <li className="text-left">
                  <Link to="/search/Vocalists" className="text-light ">
                    Vocalists
                  </Link>
                </li>
                <li className="text-left">
                  <Link to="/search/Music Producer &amp; Engineers" className="text-light ">
                    Music Producer &amp; Engineers
                  </Link>
                </li>
                <li className="text-left">
                  <Link to="/search/Indian Instruments" className="text-light ">
                    Indian Instruments
                  </Link>
                </li>
                <li className="text-left" >
                  <Link to="/search/Indian Instruments" className="text-light ">
                    International Instruments
                  </Link>
                </li>
                <li className="text-left">
                  <Link to="/search/Songwriters &amp; Composers" className="text-light text-left">
                    Songwriters &amp; Composers
                  </Link>
                </li>
                <li className="text-left">
                  <Link to="/search/Djs" className="text-light ">
                    Djs
                  </Link>
                </li>
              </ul>
              <p className="mt-10" style={{textAlign:'left'}}>
                <span style={{ color: '#fff', fontSize: '18px', verticalAlign: "middle" }}>&copy;</span>
                <span
                  style={{ color: "#fff", fontSize: "15px", paddingRight: "10px",}}
                >
                  udukku 2020
                </span>
              </p>
            </div>
            <div className="col-md-2 mb-md-0 mb-3">
              <h5 className="text-uppercase text-light text-left">Genre</h5>
              <ul className="list-unstyled">
                <li className="text-left">
                  <Link to="/" className="text-light ">
                    National
                  </Link>
                </li>
                <li className="text-left">
                  <Link to="/" className="text-light ">
                    Regional
                  </Link>
                </li>
                <li className="text-left">
                  <Link to="/contact-us" className="text-light ">
                    International
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase text-light text-left">Support</h5>
              <ul className="list-unstyled">
                <li className="text-left">
                  <Link to="/" className="text-light ">
                    FAQs
                  </Link>
                </li>
                <li className="text-left">
                  <Link to="/privacy-policy" className="text-light ">
                    Privacy Policy
                  </Link>
                </li>
                <li className="text-left">
                  <Link to="/about" className="text-light ">
                    About
                  </Link>
                </li>
                <li className="text-left">
                  <Link to="/cancelation" className="text-light ">
                    Cancelation &amp; Refund Policy
                  </Link>
                </li>
                <li className="text-left">
                  <Link to="/terms" className="text-light ">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
              <p style={{textAlign:'center'}} className="dHIde mt-5">
                <span style={{ color: '#fff', fontSize: '18px', verticalAlign: "middle" }}>&copy;</span>
                <span
                  style={{ color: "#fff", fontSize: "15px", paddingRight: "10px",}}
                >
                  udukku 2020
                </span>
              </p>
            </div>
            {/* <div className="col-md-3 mb-md-0 mb-3">
              <p>
                <span style={{ float: "right", marginRight: "20px" }}>
                  <i
                    className="fab fa-facebook-f text-light "
                    style={{
                      fontSize: "20px",
                      padding: "10px 13px",
                      borderRadius: "35px",
                      background: "#696969",
                      margin: "12px",
                    }}
                  ></i>
                  <i
                    className="fab fa-instagram text-light "
                    style={{
                      fontSize: "20px",
                      padding: "10px 13px",
                      borderRadius: "35px",
                      background: "#696969",
                      margin: "12px",
                    }}
                  ></i>
                  <i
                    className="fab fa-twitter text-light "
                    style={{
                      fontSize: "20px",
                      padding: "10px 13px",
                      borderRadius: "35px",
                      background: "#696969",
                      margin: "12px",
                    }}
                  ></i>
                </span>
              </p>
            </div> */}
          </div>
        </div>
        {/* <div className="footer-copyright  py-3 text-center">
          <p>
            © 2021 Copyright Developed By: <a href="https://cftlabs.org/" className="link" target="_blank"> CFT Labs</a>
            <span style={{ float: "right", marginRight: "20px" }}>
              <i
                className="fab fa-facebook-f text-light"
                style={{
                  fontSize: "20px",
                  padding: "10px 13px",
                  borderRadius: "35px",
                  background: "#696969",
                  margin: "12px",
                }}
              ></i>
              <i
                className="fab fa-instagram text-light"
                style={{
                  fontSize: "20px",
                  padding: "10px 13px",
                  borderRadius: "35px",
                  background: "#696969",
                  margin: "12px",
                }}
              ></i>
              <i
                className="fab fa-twitter text-light"
                style={{
                  fontSize: "20px",
                  padding: "10px 13px",
                  borderRadius: "35px",
                  background: "#696969",
                  margin: "12px",
                }}
              ></i>
            </span>
          </p>
        </div> */}
      </footer>
    </>
  );
};
export default Footer;