<<<<<<< HEAD
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../Functions/user";
import NeedYourSongCompleted from "../NeedYourSongCompleted";
import ShowCaseSkills from "../ShowCaseSkills";
import { toast } from "react-toastify";
import logo from '../../Images/logo.png';
const Header = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    logout()
      .then((res) => {
        console.log(res);
        dispatch({
          type: "LOGOUT",
          payload: null,
        });
        localStorage.setItem("token", null);
        history.push("/user/login");
      })
      .catch((err) => console.log(err));
  };
  const handleCheckProfile = () => {
    if (user.isProfileCompleted === true) {
      history.push(`/user/preview-profile/${user.userId}`);
    } else {
      toast.warning("Please complete your profile to access it");
      if (user.isMusician === "Musician") {
        history.push("/user/complete-profile");
      } else {
        history.push("/user/complete-your-profile");
      }
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-color"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <Link
        className="navbar-brand text-light"
        to="/"
        style={{ fontSize: "30px", fontWeight: "bold" }}
      >
        <img src={logo} alt="udukku" style={{ width: '90px' }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars" style={{ color: '#fff', fontSize: '20px' }}></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle"  id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                            <div style={{ padding: '30px' }}>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>How to sell music <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Have been creating music but don't know how to get it across? Here are...
                                    </p>
                                    <Link to="/blog">Read more</Link>
                                </div>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Everything you need to know about royalities <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        A number of technicalities are involved
                                    </p>
                                    <Link to="/blog">Read more</Link>
                                </div>
                                <div>
                                    <h5>Top Music Skills of 2022 <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Want to know what people are looking for 2022? Here are some most...</p>
                                    <Link to="/blog">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </li> */}
          {/* <li className="nav-item dropdown">
                        <Link to="/soundbank" className="nav-link dropdown-toggle"  id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sound Track
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                            <div style={{ padding: '30px' }}>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Browse through sounds <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Scroll through sounds uploaded by different artists
                                        and purchase the license to use them in your songs.
                                    </p>
                                    <Link to="/soundbank">Learn more</Link>
                                </div>
                                <div>
                                    <h5>Upload your own sounds <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Earn By selling licenses to your previously created music.
                                    </p>
                                    <Link to="/soundbank">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </li> */}
        </ul>
        <ul
          className="navbar-nav"
          style={{ marginLeft: "auto", marginRight: "20px" }}
        >
          <li className="nav-item dropdown">
            <Link
              to="/explore"
              className="nav-link dropdown-toggle text-light"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Explore
            </Link>
            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div style={{ padding: '30px' }}>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Post a job &amp; Hire a pro <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>Browse through the Udukku profiles and hire pros to complete your project</p>
                                    <Link to="/">Learn How</Link>
                                </div>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Explore jobs &amp; Get hired <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>Browse through the Udukku profiles and hire pros to complete your project</p>
                                    <Link to="/">Learn How</Link>
                                </div>
                                <div>
                                    <h5>Post your own gig <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>Browse through the Udukku profiles and hire pros to complete your project</p>
                                    <Link to="/">Learn How</Link>
                                </div>
                            </div>
                        </div>  */}
          </li>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h4
                    className="modal-title"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontWeight: "bold",
                    }}
                    id="exampleModalLabel"
                  >
                    How It Works
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <NeedYourSongCompleted />
                  <ShowCaseSkills />
                </div>
              </div>
            </div>
          </div>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/jobs">
              Jobs
            </Link>
          </li>
          <li className="nav-item">
            {window.location.pathname === "/" ? (
              ""
            ) : (
              <p
                className="nav-link text-light"
                data-toggle="modal"
                data-target="#exampleModal"
                style={{
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "500",
                  marginBottom: "0px",
                  fontWeight: "bold",
                }}
              >
                How It works
              </p>
            )}
          </li>
          {user != null ? (
            <>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/user/messages">
                  Messages
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle text-light"
                  id="navbarDropdown1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user.name} <i className="fas fa-caret-down"></i>
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown1"
                  style={{ minWidth: "10rem" }}
                >
                  <div>
                    {user.isMusician !== "Musician" ? (
                      ""
                    ) : (
                      <Link className="dropdown-item" to="/user/dashboard">
                        Dashboard
                      </Link>
                    )}
                    <Link className="dropdown-item" to="/user/your-jobs">
                      Jobs
                    </Link>
                    {user.isMusician !== "Musician" ? (
                      <Link to="/user/post-a-job" className="dropdown-item">
                        Post A Job
                      </Link>
                    ) : (
                      <Link to="/user/post-a-job" className="dropdown-item">
                        Post A Job
                      </Link>
                    )}
                    {user.isMusician === "Musician" ? (
                      <p
                        className="nav-link text-dark"
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          fontWeight: "500",
                          marginBottom: "0px",
                          padding: '0.25rem 1rem'
                        }}
                        onClick={handleCheckProfile}
                      >
                        My Profile
                      </p>
                    ) : (
                      ""
                    )}
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={handleLogout}
                      className="dropdown-item"
                      to="/user/jobs"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link text-light border-left"
                  to="/user/login"
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link sign-up text-light"
                  to="/user/signup"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
=======
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../Functions/user";
import NeedYourSongCompleted from "../NeedYourSongCompleted";
import ShowCaseSkills from "../ShowCaseSkills";
import { toast } from "react-toastify";
import logo from '../../Images/logo.png';
const Header = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    logout()
      .then((res) => {
        console.log(res);
        dispatch({
          type: "LOGOUT",
          payload: null,
        });
        localStorage.setItem("token", null);
        history.push("/user/login");
      })
      .catch((err) => console.log(err));
  };
  const handleCheckProfile = () => {
    if (user.isProfileCompleted === true) {
      history.push(`/user/preview-profile/${user.userId}`);
    } else {
      toast.warning("Please complete your profile to access it");
      if (user.isMusician === "Musician") {
        history.push("/user/complete-profile");
      } else {
        history.push("/user/complete-your-profile");
      }
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-color"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <Link
        className="navbar-brand text-light"
        to="/"
        style={{ fontSize: "30px", fontWeight: "bold" }}
      >
        <img src={logo} alt="udukku" style={{ width: '90px' }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars" style={{ color: '#fff', fontSize: '20px' }}></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle"  id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                            <div style={{ padding: '30px' }}>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>How to sell music <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Have been creating music but don't know how to get it across? Here are...
                                    </p>
                                    <Link to="/blog">Read more</Link>
                                </div>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Everything you need to know about royalities <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        A number of technicalities are involved
                                    </p>
                                    <Link to="/blog">Read more</Link>
                                </div>
                                <div>
                                    <h5>Top Music Skills of 2022 <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Want to know what people are looking for 2022? Here are some most...</p>
                                    <Link to="/blog">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </li> */}
          {/* <li className="nav-item dropdown">
                        <Link to="/soundbank" className="nav-link dropdown-toggle"  id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sound Track
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                            <div style={{ padding: '30px' }}>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Browse through sounds <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Scroll through sounds uploaded by different artists
                                        and purchase the license to use them in your songs.
                                    </p>
                                    <Link to="/soundbank">Learn more</Link>
                                </div>
                                <div>
                                    <h5>Upload your own sounds <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Earn By selling licenses to your previously created music.
                                    </p>
                                    <Link to="/soundbank">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </li> */}
        </ul>
        <ul
          className="navbar-nav"
          style={{ marginLeft: "auto", marginRight: "20px" }}
        >
          <li className="nav-item dropdown">
            <Link
              to="/explore"
              className="nav-link dropdown-toggle text-light"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Explore
            </Link>
            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div style={{ padding: '30px' }}>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Post a job &amp; Hire a pro <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>Browse through the Udukku profiles and hire pros to complete your project</p>
                                    <Link to="/">Learn How</Link>
                                </div>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Explore jobs &amp; Get hired <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>Browse through the Udukku profiles and hire pros to complete your project</p>
                                    <Link to="/">Learn How</Link>
                                </div>
                                <div>
                                    <h5>Post your own gig <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>Browse through the Udukku profiles and hire pros to complete your project</p>
                                    <Link to="/">Learn How</Link>
                                </div>
                            </div>
                        </div>  */}
          </li>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h4
                    className="modal-title"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontWeight: "bold",
                    }}
                    id="exampleModalLabel"
                  >
                    How It Works
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <NeedYourSongCompleted />
                  <ShowCaseSkills />
                </div>
              </div>
            </div>
          </div>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/jobs">
              Jobs
            </Link>
          </li>
          <li className="nav-item">
            {window.location.pathname === "/" ? (
              ""
            ) : (
              <p
                className="nav-link text-light"
                data-toggle="modal"
                data-target="#exampleModal"
                style={{
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "500",
                  marginBottom: "0px",
                  fontWeight: "bold",
                }}
              >
                How It works
              </p>
            )}
          </li>
          {user != null ? (
            <>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/user/messages">
                  Messages
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle text-light"
                  id="navbarDropdown1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user.name} <i className="fas fa-caret-down"></i>
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown1"
                  style={{ minWidth: "10rem" }}
                >
                  <div>
                    {user.isMusician !== "Musician" ? (
                      ""
                    ) : (
                      <Link className="dropdown-item" to="/user/dashboard">
                        Dashboard
                      </Link>
                    )}
                    <Link className="dropdown-item" to="/user/your-jobs">
                      Jobs
                    </Link>
                    {user.isMusician !== "Musician" ? (
                      <Link to="/user/post-a-job" className="dropdown-item">
                        Post A Job
                      </Link>
                    ) : (
                      <Link to="/user/post-a-job" className="dropdown-item">
                        Post A Job
                      </Link>
                    )}
                    {user.isMusician === "Musician" ? (
                      <p
                        className="nav-link text-dark"
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          fontWeight: "500",
                          marginBottom: "0px",
                          padding: '0.25rem 1rem'
                        }}
                        onClick={handleCheckProfile}
                      >
                        My Profile
                      </p>
                    ) : (
                      <Link to={`/user/edit-your-profile/${user.userId}`} className="dropdown-item">
                        Edit Profile
                      </Link>
                    )}
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={handleLogout}
                      className="dropdown-item"
                      to="/user/jobs"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link text-light border-left"
                  to="/user/login"
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link sign-up text-light"
                  to="/user/signup"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
>>>>>>> e8c0c9e3713f110986b8c4f46e2bf6552517c2a8
