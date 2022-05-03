import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Navigation/Header";
import { getCity, uploadImage } from "../../Functions/user";
import { toast } from "react-toastify";
import { getStates } from "../../Functions/user";
import {updateProfile} from '../../Functions/user';
import RegistrationNav from "../../Components/Navigation/RegistrationNav";
const CompleteYourProfile = ({ history }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [state, setState] = useState("");
  const [states, setStates] = useState([]);
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [description, setDesc] = useState("");
  const [textVal, setTextValue] = useState(0);
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  useEffect(() => {
    loadAllStates();
  }, [user]);
  const handleSubmit = () => {
    if (
      name === "" ||
      state === "" ||
      city === "" ||
      description === "" ||
      avatar === ""
    ) {
      toast.warning("Please Fill all the fields");
    } else {
      const personalInfo = {name,state,city,description,avatar};
      console.log(personalInfo);
      //sending personalInfo,professionalInfo,isProfileCompeleted and auth token in the body
      updateProfile(personalInfo,{},true,user.token).then((res)=>{
        console.log(res);
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            userId: user.userId,
            name: user.name,
            email: user.email,
            token: user.token,
            isMusician: user.isMusician,
            isProfileCompleted: true,
          },
        });
        toast.success("Profile has been updated");
        history.push("/");
      }).catch((err)=>{
        console.log(err);
      })
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
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    uploadImage(user.token, formData)
      .then((res) => {
        setAvatar(res.data.url);
      })
      .catch((err) => toast.error(err));
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
    } 
  };
  return (
    <>
      <RegistrationNav />
      <div
        className="container-fluid mt-4 mb-4"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <div className="row mt-4">
          <h2 style={{fontWeight:'bold'}}>Personal Info</h2>
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
            {avatar != "" ? (
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
                  accept=".png,.jpeg,.jpg"
                  onChange={changeAvatar}
                />
              </label>
            )}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <h6>
              <b>City,State</b>
            </h6>
          </div>
          <div className="col-md-3 col-6">
            <select
              className="select"
              onChange={(e) => handleStateChange(e.target.value)}
            >
              <option value="">State</option>
              {states.length != 0
                ? states.map((state, i) => (
                    <option key={i}>{state.name}</option>
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
              <option>City</option>
              {cities.map((city, index) => (
                <option key={index}>{city}</option>
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
              maxlength="499"
              className="form-control"
              style={{ resize: "none" }}
              rows="4"
              onChange={(e) => countChar(e.target.value)}
              placeholder="Mention the details about your requirement"
            />
            <span style={{ float: "right" }}>{textVal} / 499</span>
            <span>Min 150 Characters</span>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <button
              className="btn btn-primary"
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

export default CompleteYourProfile;
