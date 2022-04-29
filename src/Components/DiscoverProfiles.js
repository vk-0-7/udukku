import React from "react";
import card1 from "../Images/this.jpg";
import card2 from "../Images/dj.webp";
import card3 from "../Images/vocalist.webp";
import card4 from "../Images/composer.webp";
import card5 from "../Images/songwriter.webp";
import { Link } from "react-router-dom";
import singers from "../Images/a1.png";
import producers from "../Images/a2.png";
import Engineer from "../Images/a3.png";
import { useHistory } from "react-router-dom";
const DiscoverProfiles = () => {
  const history = useHistory();
  return (
    <div
      className="container-fluid mt-5 mb-5 pb-5"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <div className="row">
        <div className="col-md-9">
          <h1 style={{ fontWeight: "bold" }}>
            Singers, music producers,mixing
            <br />
            engineers &amp; more!
          </h1>
          <p style={{fontSize: "20px"}}>
            A whole world of musical talent at your service - browse through our
            list of musicians to find the one perfect for your job
          </p>
        </div>
        <div className="col-md-3">
          <button
            style={{
              float: "right",
              color: "#fff",
              backgroundColor: "#0070f3",
              padding: "4px 12px",
              border: "none",
              borderRadius: "5px",
              marginTop: '20px',
              fontSize: '20px'
            }}
            className="w-m-100"
            onClick={() => {
              history.push("/explore");
            }}
          >
            See all categories
          </button>
        </div>
      </div>
      <div className="mb-3 pb-5">
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center">
            <div className="container-d mt-5">
              <div
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "15%",
                  color: "#fff",
                }}
              >
                {/* <img src={singers} alt="singers" style={{ width: "50%" }} /> */}
                <h5 className="text-white text-lg" style={{ height: '80px' }}>Vocalists</h5>
                <p className="text-white" style={{height:'90px',width:'220px'}}>
                  Browse through a variety of female, male, regional and western singers who suit your project
                </p>
                <Link
                  className="text-light"
                  to="/search/vocalists"
                  style={{ fontSize: "20px" }}
                >
                  Find out more <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
              <img
                src={card3}
                alt="Avatar"
                className="image"
                style={{ borderRadius: "15px" }}
              />
              <div className="overlay">
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "15%",
                    color: "#fff",
                  }}
                >
                  {/* <img src={singers} alt="singers" style={{ width: "50%" }} /> */}
                  <h5 className="text-white text-lg" style={{ height: '80px' }}>Vocalists</h5>
                  <p className="text-white" style={{height:'90px',width:'220px'}}>
                    Browse through a variety of female, male, regional and western singers who suit your project
                  </p>
                  <Link
                    className="text-light"
                    to="/search/vocalists"
                    style={{ fontSize: "20px" }}
                  >
                    Find out more <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <div className="container-d mt-5">
              <div
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "15%",
                  color: "#fff",
                }}
              >
                {/* <img src={producers} alt="singers" style={{ width: "50%" }} /> */}
                <h5 className="text-white text-lg" style={{ height: '80px' }}>Music Producers</h5>
                <p className="text-white" style={{height:'90px',width:'220px'}}>
                  Get your songs written and composed by talented and experienced musicians who understand your vision
                </p>
                <Link
                  className="text-light"
                  to="/search/MusicProducers  &amp; Engineers"
                  style={{ fontSize: "20px" }}
                >
                  Find out more <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
              <img
                src={card4}
                alt="Avatar"
                className="image"
                style={{ borderRadius: "15px",objectFit:'cover' }}
              />
              <div className="overlay">
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "15%",
                    color: "#fff",
                  }}
                >
                  {/* <img src={producers} alt="singers" style={{ width: "50%" }} /> */}
                  <h5 className="text-white text-lg" style={{ height: '80px' }}>Music Producers</h5>
                  <p className="text-white" style={{height:'90px',width:'220px'}}>
                    Get your songs written and composed by talented and experienced musicians who understand your vision
                  </p>
                  <Link
                    className="text-light"
                    to="/search/MusicProducers  &amp; Engineers"
                    style={{ fontSize: "20px" }}
                  >
                    Find out more <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <div className="container-d mt-5">
              <div
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "15%",
                  color: "#fff",
                }}
              >
                {/* <img src={Engineer} alt="singers" style={{ width: "50%" }} /> */}
                <h5 className="text-white text-lg" style={{ height: '80px' }}>DJ</h5>
                <p className="text-white" style={{height:'90px',width:'220px'}}>
                  Look through a wide range of DJs that you can hire for events, shows, and more
                </p>
                <Link
                  to="/search/DJ"
                  className="text-light"
                  style={{ fontSize: "20px" }}
                >
                  Find out more <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
              <img
                src={card2}
                alt="Avatar"
                className="image"
                style={{ borderRadius: "15px" }}
              />
              <div className="overlay">
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "15%",
                    color: "#fff",
                  }}
                >
                  {/* <img src={Engineer} alt="singers" style={{ width: "50%" }} /> */}
                  <h5 className="text-white text-lg" style={{ height: '80px' }}>DJ</h5>
                  <p className="text-white" style={{height:'90px',width:'220px'}}>
                    Look through a wide range of DJs that you can hire for events, shows, and more
                  </p>
                  <Link
                    to="/search/DJ"
                    className="text-light"
                    style={{ fontSize: "20px" }}
                  >
                    Find out more <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <div className="container-d mt-5">
              <div
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "15%",
                  color: "#fff",
                }}
              >
                {/* <img src={Engineer} alt="singers" style={{ width: "50%" }} /> */}
                <h5 className="text-white text-lg" style={{ height: '80px' }}>Songwriters &amp; Composers</h5>
                <p className="text-white" style={{height:'90px',width:'220px'}}>
                  Take your song from vision to reality by hiring a music producer who fits and understands your requirements
                </p>
                <Link
                  to="/search/SONGWRITERS &amp; COMPOSERS"
                  className="text-light"
                  style={{ fontSize: "20px" }}
                >
                  Find out more <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
              <img
                src={card5}
                alt="Avatar"
                className="image"
                style={{ borderRadius: "15px" }}
              />
              <div className="overlay">
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "15%",
                    color: "#fff",
                  }}
                >
                  {/* <img src={Engineer} alt="singers" style={{ width: "50%" }} /> */}
                  <h5 className="text-white text-lg" style={{ height: '80px' }}>Songwriters &amp; Composers</h5>
                  <p className="text-white" style={{height:'90px',width:'220px'}}>
                    Take your song from vision to reality by hiring a music producer who fits and understands your requirements
                  </p>
                  <Link
                    to="/search/SONGWRITERS &amp; COMPOSERS"
                    className="text-light"
                    style={{ fontSize: "20px" }}
                  >
                    Find out more <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverProfiles;
