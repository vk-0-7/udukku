import { Checkbox } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Navigation/Header";
import { updateProfile } from "../../Functions/user";
import data from "../../GearData.json";
import CategoryData from "../../CategoryData.json";
import GenereData from "../../GenreData.json";
import { toast } from "react-toastify";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import RegistrationNav from "../../Components/Navigation/RegistrationNav";
import ReactAudioPlayer from "react-audio-player";

const ProfessionalInfo = ({ history }) => {
  const [input1, setInput1] = useState("Laptop");
  const [input2, setInput2] = useState("");
  const [service, setService] = useState("VOCALISTS");
  const [subService, setSubService] = useState("Female Vocalist");
  const [subgeneres, setSubGeneres] = useState(GenereData[0].subGenere);
  const [genereList, setGenereList] = useState([]);
  const [gearHighLights, setGearHighLights] = useState([]);
  const [services, setServices] = useState([]);
  const [subCategories, setSubCategories] = useState([
    "Female Vocalist ",
    "Male Vocalist ",
    "Singer Male",
    "Singer Female",
  ]);
  const [genere, setGenere] = useState(GenereData[0].genere);
  const [subGenere, setSubGenere] = useState(GenereData[0].subGenere[0]);
  const [role, setRole] = useState("");
  const [workSample, setWorkSample] = useState("");
  const [terms, setTerms] = useState("");
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [startingPrice, setStartingPrice] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  const handleAdd = (input1, input2) => {
    console.log(input1, input2);
    setGearHighLights((oldArray) => [...oldArray, { input1, input2 }]);
    setInput1("");
    setInput2("");
  };

  const handleSizeRemove = (input1, input2) => {
    console.log(input1, input2);
    let filteredSize = gearHighLights.filter((Item) => {
      return Item.input2 !== input2;
    });
    setGearHighLights(filteredSize);
  };

  const handleAddService = (service, subService) => {
    console.log(service, subService);
    setServices((oldArray) => [...oldArray, { service, subService }]);
  };

  const handleServiceRemove = (service, subService) => {
    console.log(service, subService);
    let filteredSize = services.filter((Item) => {
      return Item.subService !== subService;
    });
    setServices(filteredSize);
  };

  const dispatch = useDispatch();
  const handleAddGenere = (genere, subGenere) => {
    console.log(genere, subGenere);
    setGenereList((oldArray) => [...oldArray, { genere, subGenere }]);
  };

  const handleGenereRemove = (genere, subGenere) => {
    console.log(genere, subGenere);
    let filteredSize = genereList.filter((Item) => {
      return Item.subGenere !== subGenere;
    });
    setGenereList(filteredSize);
  };

  const handleSubmit = () => {
    const item = gearHighLights;
    console.log(genereList);
    localStorage.setItem(
      "professionalInfo",
      JSON.stringify({
        genres: genereList,
        gearHighLights: item,
        services,
        role,
        workSample,
        terms,
        startingPrice: [parseInt(startingPrice)],
        isProfileCompleted: true,
      })
    );
    const professionalInfo = JSON.parse(
      localStorage.getItem("professionalInfo")
    );
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
    const isProfileCompleted = true;
    console.log({
      ...personalInfo,
      ...professionalInfo,
      isProfileCompleted,
    });
    console.log(
      gearHighLights.length,
      services.length,
      role,
      genereList.length
    );
    if (
      gearHighLights.length === 0 ||
      services.length === 0 ||
      role === "" ||
      genereList.length === 0 ||
      workSample === 0 ||
      terms === "" 
      || startingPrice === "" ||
      check === false
    ) {
      toast.warning("Please fill all the fields");
    } else {
      updateProfile(
        personalInfo,
        professionalInfo,
        isProfileCompleted,
        user.token
      )
        .then((res) => {
          toast.success("Profile has been updated");
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
          localStorage.setItem(
            "personalInfo", null);
          history.push(`/user/preview-profile/${user.userId}`);
        })
        .catch((err) => console.log(err));
    }
  };
  const handleChange = (e) => {
    setService(e.target.value);
    const sub = CategoryData.filter((item) => {
      return item.category === e.target.value;
    });
    console.log(sub[0].subCategory);
    setSubCategories(sub[0].subCategory);
  };

  const handleGenereChange = (e) => {
    console.log(e.target.value);
    setGenere(e.target.value);
    const sub = GenereData.filter((item) => {
      return item.genere === e.target.value;
    });
    setSubGeneres(sub[0].subGenere);
  };
  const handleMp3Change = (event) => {
    setLoading(true);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("https://udukku.herokuapp.com/api/upload_attachment", formData)
      .then((res) => {
        toast.success("your work sample has been uploaded");
        setWorkSample(res.data.url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <>
      <RegistrationNav />
      <div
        className="container-fluid mt-4 mb-4 pb-5"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <div
          style={{ display: "flex", borderBottom: "1px solid #000" }}
          className="mt-3"
        >
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
              1
            </p>
            <span
              style={{
                marginTop: "0.40rem",
                marginLeft: "0.25rem",
                color: "#000",
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
                color: "#fff",
                backgroundColor: "#0070F3",
                display: "flex",
                padding: "8px 17px",
                borderRadius: "25px",
              }}
            >
              2
            </p>
            <span
              style={{
                marginTop: "0.40rem",
                marginLeft: "0.25rem",
                color: "#0070F3",
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
          <h4>Professional Info</h4>
          <p>
            Fill out your professional details such as your genres, experience,
            rates, gear, and conditions. Provide high quality work samples so
            clients can learn more about your musical abilities.{" "}
          </p>
          <div className="col-md-2">
            <p>
              <b>Genres</b>
            </p>
          </div>
          <div className="col-md-5">
            {genereList.length != 0
              ? genereList.map((input1, index) => (
                <div className="row mb-3" key={index}>
                  <div className="col-md-4 col-4">
                    <input
                      className="form-control"
                      value={input1.genere}
                      disabled
                    />
                  </div>
                  <div className="col-md-7 d-flex col-7">
                    <p className="pr-2" style={{ width: "150px" }}>
                      Sub Genre:
                    </p>
                    <input
                      className="form-control"
                      value={input1.subGenere}
                      disabled
                    />
                  </div>
                  <div className="col-md-1 col-1">
                    <i
                      className="far fa-times-circle"
                      onClick={() =>
                        handleGenereRemove(input1.genere, input1.subGenere)
                      }
                      style={{
                        color: "red",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                </div>
              ))
              : ""}
            <div className="row">
              <div className="col-md-6 col-6">
                <select className="select" onChange={handleGenereChange}>
                  {GenereData.map((d, index) => (
                    <option value={d.genere} key={index}>
                      {d.genere}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-5 d-flex col-5">
                {/* <p className="pr-2" style={{ width: "100px" }}>
                  Quote: <i className="fas fa-rupee-sign"></i>
                </p>
                <input
                  className="form-control"
                  value={subService}
                  onChange={(e) => setSubService(e.target.value)}
                /> */}
                <select
                  className="select"
                  onChange={(e) => setSubGenere(e.target.value)}
                >
                  {subgeneres.length !== 0
                    ? subgeneres.map((subGenere, index) => (
                      <option value={subGenere} key={index}>
                        {subGenere}
                      </option>
                    ))
                    : ""}
                </select>
              </div>
              <div className="col-md-1 col-1">
                <i
                  className="fa fa-check"
                  onClick={() => handleAddGenere(genere, subGenere)}
                  style={{
                    border: "1px solid",
                    padding: "6px 7px",
                    borderRadius: "20px",
                    color: "#fff",
                    verticalAlign: "sub",
                    background: "#78bb07",
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <p>
              <b>Category</b>
            </p>
          </div>
          <div className="col-md-5">
            {services.length != 0
              ? services.map((input1, index) => (
                <div className="row mb-3" key={index}>
                  <div className="col-md-4 col-4">
                    <input
                      className="form-control"
                      value={input1.service}
                      disabled
                    />
                  </div>
                  <div className="col-md-7 d-flex col-7">
                    <p className="pr-2" style={{ width: "200px" }}>
                      Sub Category:
                    </p>
                    <input
                      className="form-control"
                      value={input1.subService}
                      disabled
                    />
                  </div>
                  <div className="col-md-1 col-1">
                    <i
                      className="far fa-times-circle"
                      onClick={() =>
                        handleServiceRemove(input1.service, input1.subService)
                      }
                      style={{
                        color: "red",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                </div>
              ))
              : ""}
            <div className="row">
              <div className="col-md-6 col-6">
                <select
                  value={service}
                  className="select"
                  onChange={handleChange}
                >
                  {CategoryData.map((d, index) => (
                    <option value={d.category} key={index}>
                      {d.category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-5 d-flex col-5">
                {/* <p className="pr-2" style={{ width: "100px" }}>
                  Quote: <i className="fas fa-rupee-sign"></i>
                </p>
                <input
                  className="form-control"
                  value={subService}
                  onChange={(e) => setSubService(e.target.value)}
                /> */}
                <select
                  className="select"
                  onChange={(e) => setSubService(e.target.value)}
                >
                  {subCategories.length !== 0
                    ? subCategories.map((subCategory, index) => (
                      <option value={subCategory} key={index}>
                        {subCategory}
                      </option>
                    ))
                    : ""}
                </select>
              </div>
              <div className="col-md-1 col-1">
                <i
                  className="fa fa-check"
                  onClick={() => handleAddService(service, subService)}
                  style={{
                    border: "1px solid",
                    padding: "6px 7px",
                    borderRadius: "20px",
                    color: "#fff",
                    verticalAlign: "sub",
                    background: "#78bb07",
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <p>
              <b>Gear Highlights</b>
            </p>
          </div>
          <div className="col-md-5">
            {gearHighLights.length != 0
              ? gearHighLights.map((input, index) => (
                <div key={index} className="row mb-3">
                  <div className="col-md-5 col-5">
                    <input
                      value={input.input1}
                      disabled
                      className="form-control"
                      onChange={(e) => setInput1(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 col-6">
                    <input
                      value={input.input2}
                      disabled
                      className="form-control"
                      onChange={(e) => setInput2(e.target.value)}
                    />
                  </div>
                  <div className="col-md-1 col-1">
                    <i
                      className="far fa-times-circle"
                      onClick={() =>
                        handleSizeRemove(input.input1, input.input2)
                      }
                      style={{
                        color: "red",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                </div>
              ))
              : ""}
            <div className="row">
              <div className="col-md-6 col-6">
                {/* <input
                  value={input1}
                  className="form-control"
                  onChange={(e) => setInput1(e.target.value)}
                /> */}
                <select
                  value={input1}
                  className="select"
                  onChange={(e) => setInput1(e.target.value)}
                >
                  {data.map((d, index) => (
                    <option value={d.service} key={index}>
                      {d.service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-5 col-5">
                <input
                  value={input2}
                  className="form-control"
                  onChange={(e) => setInput2(e.target.value)}
                />
              </div>
              <div className="col-md-1 col-1">
                <i
                  className="fa fa-check"
                  onClick={() => handleAdd(input1, input2)}
                  style={{
                    border: "1px solid",
                    padding: "6px 7px",
                    borderRadius: "20px",
                    color: "#fff",
                    verticalAlign: "sub",
                    background: "#78bb07",
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <p>
              <b>Your Work Sample</b>
            </p>
          </div>
          <br />
          <div className="col-md-5">
            {loading ? (
              <LoadingOutlined style={{ fontSize: "40px" }} />
            ) : (

              <>
                <>{workSample !== ""
                  ?
                  <ReactAudioPlayer src={workSample} controls style={{ width: '90%', height: "25px", marginBottom: '10px' }} />
                  :
                  ""}
                </>
                <label className="browse mb-2">
                  <i
                    className="fa fa-paperclip"
                    style={{ marginRight: ".75rem" }}
                    aria-hidden="true"
                  ></i>
                  <span>Attach files</span>
                  <input
                    className="form-control d-none"
                    type="file"
                    accept="audio/*"
                    onChange={handleMp3Change}
                  />
                </label>
              </>
            )}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <p>
              <b>Your role in attached music file</b>
            </p>
          </div>
          <div className="col-md-5">
            <input
              className="form-control"
              onChange={(e) => setRole(e.target.value)}
              placeholder="Singer/Songwriter, Guitar Player"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <p>
              <b>Service Starting Price</b>
            </p>
          </div>
          <div className="col-md-5">
            <input
              className="form-control"
              onChange={(e) => setStartingPrice(e.target.value)}
              placeholder="100,1000,10000"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <p>
              <b>Terms of service</b>
            </p>
          </div>
          <div className="col-md-5">
            <textarea
              rows="5"
              style={{ resize: "none" }}
              onChange={(e) => setTerms(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6 mt-3">
            <input type="checkbox" id="checkTerms" name="vehicle1" value="Bike"
            onClick={() => {
              console.log(document.getElementById('checkTerms').checked);
              setCheck(document.getElementById('checkTerms').checked);
            }
            }/>
              <label for="checkTerms" style={{ marginLeft: '5px' }}>By checking this box, you are agreeing to our terms of service.</label>
              </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-2">
              <button
                className="btn-hover"
                onClick={() => history.push("/user/complete-profile")}
              >
                Previous
              </button>
            </div>
            <div className="col-md-5">
              <button
                onClick={handleSubmit}
                className="btn-hover"
                style={{ float: "right" }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </>
      );
};

      export default ProfessionalInfo;
