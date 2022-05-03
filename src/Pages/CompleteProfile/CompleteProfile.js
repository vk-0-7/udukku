import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Navigation/Header";
import { getCity, uploadImage } from "../../Functions/user";
import { toast } from "react-toastify";
import { getStates } from "../../Functions/user";
import {LoadingOutlined} from '@ant-design/icons';
import RegistrationNav from "../../Components/Navigation/RegistrationNav";
const CompleteProfile = ({ history }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [tag, setTag] = useState("");
  const [state, setState] = useState("");
  const [states, setStates] = useState([]);
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [description, setDesc] = useState("");
  const [textVal, setTextValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  useEffect(() => {
    loadAllStates();
    if(localStorage.getItem("personalInfo") != null && localStorage.getItem("personalInfo") != 'null'){
      const personal =JSON.parse(localStorage.getItem("personalInfo"));
      setName(personal.name);
      setAvatar(personal.avatar);
      setTag(personal.tag);
      setState(personal.state);
      setCity(personal.city);
      setDesc(personal.description);
    }
  }, [user]);
  const handleSubmit = () => {
    if (
      name === "" ||
      tag === "" ||
      state === "" ||
      city === "" ||
      description === "" ||
      avatar === ""
    ) {
      toast.warning("Please Fill all the fields");
    } else if (description.length < 150) {
      toast.warning("Description is short");
    } else {
      dispatch({
        type: "ADD_PERSONAL",
        payload: {
          name,
          avatar,
          tag,
          city,
          state,
          description,
        },
      });
      localStorage.setItem(
        "personalInfo",
        JSON.stringify({
          name,
          avatar,
          tag,
          city,
          state,
          description,
        })
      );
      history.push("/user/complete-profile/professional-info");
    }
  };
  const loadAllStates = () => {
    getStates("india")
      .then((res) => {
        console.log(res.data.data.states);
        setStates(res.data.data.states);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changeAvatar = (e) => {
    e.preventDefault();
    setLoading(true);
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    uploadImage(user.token, formData)
      .then((res) => {
        setAvatar(res.data.url);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err);
        setLoading(false);
      });
  };

  const handleStateChange = (value) => {
    setState(value);
    getCity("india", value)
      .then((res) => {
        console.log(res.data.data);
        setCities(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const countChar = (val) => {
    setDesc(val);
    var len = val.length;
    setTextValue(len);
    if (len >= 500) {
      val.value = val.value.substring(0, 500);
    } else {
      // console.log(500 - len);
    }
  };

  return (
    <>
      <RegistrationNav />
      <div
        className="container-fluid mt-4 mb-4"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <div
          style={{ display: "flex", borderBottom: "1px solid #000" }}
          className="mt-3"
        >
          <div style={{ marginRight: "10px", display: "flex" }}>
            <p
              style={{
                color: "#fff",
                backgroundColor: "#0070F3",
                display: "flex",
                padding: "8px 17px",
                borderRadius: "25px",
              }}
            >
              1
            </p>
            <span
              style={{
                marginTop: "0.40rem",
                marginLeft: "0.25rem",
                color: "#0070F3",
              }}
            >
              Personal Info
            </span>
          </div>
          <i
            style={{ marginTop: "0.80rem", marginRight: "0.40rem" }}
            className="fa fa-angle-right"
            aria-hidden="true"
          ></i>
          <div style={{ marginRight: "10px", display: "flex" }}>
            <p
              style={{
                color: "#000",
                border: "1px solid",
                backgroundColor: "transparent",
                display: "flex",
                padding: "8px 16px",
                borderRadius: "25px",
              }}
            >
              2
            </p>
            <span
              style={{
                marginTop: "0.40rem",
                marginLeft: "0.25rem",
                color: "#000",
              }}
            >
              Professional Info
            </span>
          </div>
          <i
            style={{ marginTop: "0.80rem", marginRight: "0.40rem" }}
            className="fa fa-angle-right"
            aria-hidden="true"
          ></i>
          <div style={{ marginRight: "10px", display: "flex" }}>
            <p
              style={{
                color: "#000",
                border: "1px solid",
                backgroundColor: "transparent",
                display: "flex",
                padding: "8px 16px",
                borderRadius: "25px",
              }}
            >
              3
            </p>
            <span
              style={{
                marginTop: "0.40rem",
                marginLeft: "0.25rem",
                color: "#000",
              }}
            >
              Published Profile
            </span>
          </div>
        </div>
        <div className="row mt-4">
          <h2 style={{ fontWeight: "bold" }}>Personal Info</h2>
          <p>
            Let people get to know you better through your artist profile. Be
            clear, detailed, and authentic!
          </p>
          <div className="col-md-2">
            <h6>
              <b>Full Name</b>
            </h6>
          </div>
          <div className="col-md-6">
            <input
            value= {name}
              className="form-control"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <h6>
              <b>Profile Picture</b>
            </h6>
          </div>
          <div className="col-md-6">
            {loading ?
            <LoadingOutlined  style={{fontSize:'22px', textAlign:'center'}}/>
            :
            avatar != "" ? (
              <div class="profile-pic">
                  <label class="-label" for="file">
                    <span class="glyphicon glyphicon-camera"></span>
                    <span>Change Image</span>
                  </label>
                  <input id="file" type="file" onChange={changeAvatar} />
                  <img src={avatar} id="output" width="200" />
                </div>
            ) : (
              <label className="upload">
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={changeAvatar}
                />
              </label>
            )}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <h6>
              <b>Tag Line</b>
            </h6>
          </div>
          <div className="col-md-6">
            <input
            value={tag}
              className="form-control"
              placeholder="Mention the services you offer - Singer | Music Producer | Guitar Player"
              onChange={(e) => setTag(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <h6>
              <b>City,State</b>
            </h6>
          </div>
          <div className="col-md-3 mb-3 col-6">
            <select
              className="select"
              onChange={(e) => handleStateChange(e.target.value)}
            >
              <option value="">State</option>
              {states.length != 0
                ? states.map((s, i) => (
                    <option key={i} selected={s.name === state}>{s.name}</option>
                  ))
                : ""}
            </select>
          </div>
          <div className="col-md-3 col-6">
            <select
              className="select"
              disabled={state === "" ? true : false}
              onChange={(e) => setCity(e.target.value)}
            >
              {city !== "" ? <option>{city}</option> : ""}
              <option>City</option>
              {cities.map((c, index) => (
                <option key={index}>{c}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <h6>
              <b>Description</b>
            </h6>
          </div>
          <div className="col-md-6">
            <textarea
            value={description}
              maxlength="499"
              className="form-control"
              style={{ resize: "none" }}
              rows="4"
              onChange={(e) => countChar(e.target.value)}
              placeholder="Tell clients about yourself - Mention your musical style, experience, achievements, influences, inspirations, working style and anyone influential you’ve worked with in the past."
            />
            <span style={{ float: "right" }}>{textVal} / 499</span>
            <span>Min 150 Characters</span>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <button
              className="btn btn-primary mb-5"
              style={{ float: "right" }}
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile;
