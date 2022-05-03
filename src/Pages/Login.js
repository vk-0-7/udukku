<<<<<<< HEAD
import React, { useEffect, useState } from "react";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../Components/Navigation/Header";
import Footer from "../Components/Footer/Footer";
import $ from 'jquery';

import {
  createProfileURL,
  facebookSignIn,
  googleSignIn,
  signIn,
  updateUserRole,
} from "../Functions/user";
import { LoadingOutlined } from "@ant-design/icons/lib/icons";
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  let dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  // useEffect(() => {
  //   if (user && user.token &) {
  //     history.push("/user/dashboard");
  //   }
  // }, [user, history]);
  const handleSiginIn = () => {
    console.log(email, pwd);
    setLoading(true);
    signIn(email, pwd)
      .then((res) => {
        console.log(res);
        createProfileURL(res.data.user._id).then((res)=>{
          console.log(res);
        }).catch(eer => console.log(eer));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            userId: res.data.user._id,
            name: res.data.user.name,
            email: res.data.user.email,
            token: res.data.refresh_token,
            isMusician: res.data.user.isMusician,
            isProfileCompleted: res.data.user.isProfileCompleted,
            jobsCompleted:res.data.user.jobsCompleted,
            totalEarn:res.data.user.totalEarn,
            repeatedBuyer:res.data.user.repeatedBuyer
          },
        });
        if (res.data.user.isMusician === "") {
          window.$("#staticBackdrop").modal("show");
        } else {
          if (res.data.user.isProfileCompleted) {
            history.push("/");
          } else {
            if (res.data.user.isMusician === "Musician") {
              history.push("/user/complete-profile");
            } else {
              history.push("/user/complete-your-profile");
            }
          }
        }
        setLoading(false);
        localStorage.setItem("token", res.data.refresh_token);
        toast.success(res.data.msg);
        // if (res.data.user.isProfileCompleted) {
        //   history.push("/user/dashboard");
        // } else {
        //   history.push("/user/complete-profile");
        // }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleGoogleSignUp = (data) => {
    console.log(data);
    setLoading(true);
    googleSignIn(data.tokenId)
      .then((res) => {
        console.log(res);
        createProfileURL(res.data.user._id).then((res)=>{
          console.log(res);
        }).catch(eer => console.log(eer));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            userId: res.data.user._id,
            name: res.data.user.name,
            email: res.data.user.email,
            token: res.data.refresh_token,
            isMusician: res.data.user.isMusician,
            isProfileCompleted: res.data.user.isProfileCompleted,
            jobsCompleted:res.data.user.jobsCompleted,
            totalEarn:res.data.user.totalEarn,
            repeatedBuyer:res.data.user.repeatedBuyer
          },
        });
        setLoading(false);
        localStorage.setItem("token", res.data.refresh_token);
        if (res.data.user.isMusician === "") {
          window.$("#staticBackdrop").modal("show");
        } else {
          if (res.data.user.isProfileCompleted) {
            history.push("/");
          } else {
            if (res.data.user.isMusician === "Musician") {
              history.push("/user/complete-profile");
            } else {
              history.push("/user/complete-your-profile");
            }
          }
        }
        // if (res.data.user.isProfileCompleted) {
        //   history.push("/user/dashboard");
        // } else {
        //   history.push("/user/complete-profile");
        // }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleFacebookSignUp = (res) => {
    console.log(res);
    setLoading(true);
    facebookSignIn(res.accessToken, res.userID)
      .then((response) => {
        console.log(response);
        createProfileURL(res.data.user._id).then((res)=>{
          console.log(res);
        }).catch(eer => console.log(eer));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            userId: res.data.user._id,
            name: response.name,
            email: response.email,
            token: response.refresh_token,
            isMusician: response.data.user.isMusician,
            isProfileCompleted: response.data.user.isProfileCompleted,
            jobsCompleted:response.data.user.jobsCompleted,
            totalEarn:response.data.user.totalEarn,
            repeatedBuyer:response.data.user.repeatedBuyer
          },
        });
        setLoading(false);
        if (res.data.user.isMusician === "") {
          window.$("#staticBackdrop").modal("show");
        } else {
          if (res.data.user.isProfileCompleted) {
            history.push("/");
          } else {
            if (res.data.user.isMusician === "Musician") {
              history.push("/user/complete-profile");
            } else {
              history.push("/user/complete-your-profile");
            }
          }
        }
        // if (res.data.user.isProfileCompleted) {
        //   history.push("/user/dashboard");
        // } else {
        //   history.push("/user/complete-profile");
        // }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const componentClicked = (value) => {
    console.log(value);
    updateUserRole(value, user.token)
      .then((res) => {
        console.log(res);
        window.$("#staticBackdrop").modal("hide");
        if (user.isProfileCompleted) {
          history.push("/");
        } else {
          if (value === "Musician") {
            history.push("/user/complete-profile");
          } else {
            history.push("/user/complete-your-profile");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = () => {
    if ($('#accpwd').get(0).type === "password") {
      $('#accpwd').get(0).type = 'text';
    } else {
      $('#accpwd').get(0).type = 'password';
    }
  }
  return (
    <div>
      <Header />
      <div className="auth-wrapper mb-3">
        {loading ? (
          <h2 className="text-center" style={{ color: '#0070f3' }}>
            <LoadingOutlined />
          </h2>
        ) : (
          <div className="auth-inner">
            <h3>Udukku</h3>
            <p className="text-center">
              Join India's First Music Marketplace
            </p>
            <div className="d-flex justify-content-center">
              <div>
                <GoogleLogin
                  clientId="268210576018-mlvmmnn1ll18rjatc0k2r5ldgvsmkjjr.apps.googleusercontent.com"
                  buttonText=""
                  autoLoad={false}
                  onSuccess={handleGoogleSignUp}
                  onFailure={handleGoogleSignUp}
                  cookiePolicy={"single_host_origin"}
                  render={(renderProps) => (
                    <em
                      onClick={renderProps.onClick}
                      style={{
                        color: "#DB4437",
                        fontSize: "20px",
                        cursor: "pointer",
                        marginRight: "10px",
                      }}
                      className="fab fa-google"
                    ></em>
                  )}
                />
                {/* <FacebookLogin
                  appId="887211411966726"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={handleFacebookSignUp}
                  render={(renderProps) => (
                    <i
                      onClick={renderProps.onClick}
                      className="fab fa-facebook-f"
                      style={{
                        color: "blue",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                    ></i>
                  )}
                /> */}
              </div>
            </div>
            <div className="or">Or</div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="User ID"
              />
            </div>
            {/* <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                id="accpwd"
                className="form-control"
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Password"
              />
              <i
                onClick={handleChange}
                className="fa fa-eye pwd-Field"
                style={{ display: pwd.length !== 0 ? "block" : "none",marginLeft:'-30px' }}
                aria-hidden="true"
              ></i>
            </div> */}
            <p>
              <label for="password">Password:</label>
              <br/>
              <input type="password"
                id="accpwd"
                className="custom-input"
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Password" />
              <i 
              onClick={handleChange}
              class="fa fa-eye" id="togglePassword" style={{ visibility: pwd.length !== 0 ? "visible" : "hidden",marginLeft:'-30px',cursor:'pointer' }}></i>
            </p>
            <div className="form-group d-flex mt-2">
              {/* <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label
                  className="custom-control-label"
                  style={{ cursor: "pointer", marginLeft: '10px' }}
                  htmlFor="customCheck1"
                >
                  Remember me
                </label>
              </div> */}
              <p style={{ marginLeft: "auto" }}>
                <Link to="/user/forgot-password">Forgot password?</Link>
              </p>
            </div>
            <button
              onClick={handleSiginIn}
              className="btn btn-login btn-block w-100"
            >
              Login
            </button>
          </div>
        )}
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content w-115 user-type-card-margin mt-45">
            <div className="modal-body PY-5">
              <div className="d-flex">
                <button
                  className="btn-hover mw-50 fp-14"
                  style={{ marginRight: "15px" }}
                  onClick={() => componentClicked("Musician")}
                >
                  I am a musician
                </button>
                <button
                  className="mw-50 hirebtn fp-14"
                  onClick={() => componentClicked("Recruter")}
                >
                  I want to hire a musician
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
=======
import React, { useEffect, useState } from "react";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../Components/Navigation/Header";
import Footer from "../Components/Footer/Footer";
import $ from 'jquery';

import {
  createProfileURL,
  facebookSignIn,
  googleSignIn,
  signIn,
  updateUserRole,
} from "../Functions/user";
import { LoadingOutlined } from "@ant-design/icons/lib/icons";
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  let dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  // useEffect(() => {
  //   if (user && user.token &) {
  //     history.push("/user/dashboard");
  //   }
  // }, [user, history]);
  const handleSiginIn = () => {
    console.log(email, pwd);
    setLoading(true);
    signIn(email, pwd)
      .then((res) => {
        console.log(res);
        createProfileURL(res.data.user._id).then((res) => {
          console.log(res);
        }).catch(eer => console.log(eer));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            userId: res.data.user._id,
            name: res.data.user.name,
            email: res.data.user.email,
            token: res.data.refresh_token,
            isMusician: res.data.user.isMusician,
            isProfileCompleted: res.data.user.isProfileCompleted,
            jobsCompleted: res.data.user.jobsCompleted,
            totalEarn: res.data.user.totalEarn,
            repeatedBuyer: res.data.user.repeatedBuyer
          },
        });
        if (res.data.user.isMusician === "") {
          window.$("#staticBackdrop").modal("show");
        } else {
          if (res.data.user.isProfileCompleted) {
            history.push("/");
          } else {
            if (res.data.user.isMusician === "Musician") {
              history.push("/user/complete-profile");
            } else {
              history.push("/user/complete-your-profile");
            }
          }
        }
        setLoading(false);
        localStorage.setItem("token", res.data.refresh_token);
        toast.success(res.data.msg);
        // if (res.data.user.isProfileCompleted) {
        //   history.push("/user/dashboard");
        // } else {
        //   history.push("/user/complete-profile");
        // }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleGoogleSignUp = (data) => {
    console.log(data);
    setLoading(true);
    googleSignIn(data.tokenId)
      .then((res) => {
        console.log(res);
        createProfileURL(res.data.user._id).then((res) => {
          console.log(res);
        }).catch(eer => console.log(eer));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            userId: res.data.user._id,
            name: res.data.user.name,
            email: res.data.user.email,
            token: res.data.refresh_token,
            isMusician: res.data.user.isMusician,
            isProfileCompleted: res.data.user.isProfileCompleted,
            jobsCompleted: res.data.user.jobsCompleted,
            totalEarn: res.data.user.totalEarn,
            repeatedBuyer: res.data.user.repeatedBuyer
          },
        });
        setLoading(false);
        localStorage.setItem("token", res.data.refresh_token);
        if (res.data.user.isMusician === "") {
          window.$("#staticBackdrop").modal("show");
        } else {
          if (res.data.user.isProfileCompleted) {
            history.push("/");
          } else {
            if (res.data.user.isMusician === "Musician") {
              history.push("/user/complete-profile");
            } else {
              history.push("/user/complete-your-profile");
            }
          }
        }
        // if (res.data.user.isProfileCompleted) {
        //   history.push("/user/dashboard");
        // } else {
        //   history.push("/user/complete-profile");
        // }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleFacebookSignUp = (res) => {
    console.log(res);
    setLoading(true);
    facebookSignIn(res.accessToken, res.userID)
      .then((response) => {
        console.log(response);
        createProfileURL(res.data.user._id).then((res) => {
          console.log(res);
        }).catch(eer => console.log(eer));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            userId: res.data.user._id,
            name: response.name,
            email: response.email,
            token: response.refresh_token,
            isMusician: response.data.user.isMusician,
            isProfileCompleted: response.data.user.isProfileCompleted,
            jobsCompleted: response.data.user.jobsCompleted,
            totalEarn: response.data.user.totalEarn,
            repeatedBuyer: response.data.user.repeatedBuyer
          },
        });
        setLoading(false);
        if (res.data.user.isMusician === "") {
          window.$("#staticBackdrop").modal("show");
        } else {
          if (res.data.user.isProfileCompleted) {
            history.push("/");
          } else {
            if (res.data.user.isMusician === "Musician") {
              history.push("/user/complete-profile");
            } else {
              history.push("/user/complete-your-profile");
            }
          }
        }
        // if (res.data.user.isProfileCompleted) {
        //   history.push("/user/dashboard");
        // } else {
        //   history.push("/user/complete-profile");
        // }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const componentClicked = (value) => {
    console.log(value);
    updateUserRole(value, user.token)
      .then((res) => {
        console.log(res);
        window.$("#staticBackdrop").modal("hide");
        if (user.isProfileCompleted) {
          history.push("/");
        } else {
          if (value === "Musician") {
            history.push("/user/complete-profile");
          } else {
            history.push("/user/complete-your-profile");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = () => {
    if ($('#accpwd').get(0).type === "password") {
      $('#accpwd').get(0).type = 'text';
    } else {
      $('#accpwd').get(0).type = 'password';
    }
  }
  return (
    <div>
      <Header />
      <div className="auth-wrapper mb-3">
        {loading ? (
          <h2 className="text-center" style={{ color: '#0070f3' }}>
            <LoadingOutlined />
          </h2>
        ) : (
          <div className="auth-inner">
            <h3>Udukku</h3>
            <p className="text-center">
              Join India's First Music Marketplace
            </p>
            <GoogleLogin
              clientId="268210576018-mlvmmnn1ll18rjatc0k2r5ldgvsmkjjr.apps.googleusercontent.com"
              buttonText=""
              autoLoad={false}
              onSuccess={handleGoogleSignUp}
              onFailure={handleGoogleSignUp}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  style={{
                    backgroundColor: "#DB4437",
                    fontSize: "20px",
                    cursor: "pointer",
                    marginRight: "10px",
                    border: 'none',
                    borderRadius: '5px',
                    paddingBottom: '5px'
                  }}
                  className="w-100"
                >
                  <span style={{ color: '#fff' }}>Sign in with
                    <em
                      style={{ verticalAlign: 'baseline' }}
                      className="fab fa-google ml-3"
                    ></em>
                  </span>
                </button>
              )}
            />
            {/* <FacebookLogin
                  appId="887211411966726"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={handleFacebookSignUp}
                  render={(renderProps) => (
                    <i
                      onClick={renderProps.onClick}
                      className="fab fa-facebook-f"
                      style={{
                        color: "blue",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                    ></i>
                  )}
                /> */}
            <div className="or">Or</div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="User ID"
              />
            </div>
            {/* <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                id="accpwd"
                className="form-control"
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Password"
              />
              <i
                onClick={handleChange}
                className="fa fa-eye pwd-Field"
                style={{ display: pwd.length !== 0 ? "block" : "none",marginLeft:'-30px' }}
                aria-hidden="true"
              ></i>
            </div> */}
            <p>
              <label for="password">Password:</label>
              <br />
              <input type="password"
                id="accpwd"
                className="custom-input"
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Password" />
              <i
                onClick={handleChange}
                class="fa fa-eye" id="togglePassword" style={{
                  visibility: pwd.length !== 0 ? "visible" : "hidden",
                  marginLeft: '-30px', cursor: 'pointer'
                }}>
              </i>
            </p>
            <div className="form-group d-flex mt-2">
              {/* <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label
                  className="custom-control-label"
                  style={{ cursor: "pointer", marginLeft: '10px' }}
                  htmlFor="customCheck1"
                >
                  Remember me
                </label>
              </div> */}
              <p style={{ marginLeft: "auto" }}>
                <Link to="/user/forgot-password">Forgot password?</Link>
              </p>
            </div>
            <button
              onClick={handleSiginIn}
              className="btn btn-login btn-block w-100"
            >
              Login
            </button>
          </div>
        )}
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content w-115 user-type-card-margin mt-45">
            <div className="modal-body PY-5">
              <div className="d-flex">
                <button
                  className="btn-hover mw-50 fp-14"
                  style={{ marginRight: "15px" }}
                  onClick={() => componentClicked("Musician")}
                >
                  I am a musician
                </button>
                <button
                  className="mw-50 hirebtn fp-14"
                  onClick={() => componentClicked("Recruter")}
                >
                  I want to hire a musician
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
>>>>>>> e8c0c9e3713f110986b8c4f46e2bf6552517c2a8
