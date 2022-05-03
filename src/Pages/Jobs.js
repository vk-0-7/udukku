import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { filterJobs, getJobs } from "../Functions/job";
import card from "../Images/card-3.jpg";
import { Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons/lib/icons";
import ReactAudioPlayer from "react-audio-player";
import StarRatings from "react-star-ratings";
const Jobs = ({ history }) => {
  const [allJobs, setJobs] = useState([]);
  const [category, setCategory] = useState("VOCALISTS");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [budget, setBudget] = useState({});
  const [deadline, setDeadLine] = useState("0-7 Days");
  const [genere, setGenere] = useState("National/ Indian");
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(5);
  const [query, setQuery] = useState({});
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllJobs();
  }, []);
  const loadAllJobs = () => {
    setLoading(true);
    getJobs()
      .then((res) => {
        console.log(res);
        setJobs(res.data);
        setLoading(false);
        dispatch({
          type: "ADD_JOBS",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const onCategoryChange = (e) => {
    setLoading(true);
    const filter = query;
    filter.category = e.target.value;
    setQuery(filter);
    setCategory(e.target.value);
    console.log(e.target.value);
    filterJobs({category : e.target.value})
      .then((res) => {
        console.log(res);
        if (res.data !== '') {
          setJobs(res.data);
        }else{
          setJobs([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const onBudgetChange = (min, max) => {
    setLoading(true);
    setMin(min);
    console.log(min);
    setMax(max);
    console.log(max);
    var data = { min, max };
    const filter = query;
    filter.budget = [parseInt(min), parseInt(max)];
    setQuery(filter);
    setBudget({ ...budget, data });
    filterJobs({budget : [parseInt(min), parseInt(max)]})
      .then((res) => {
        if (res.data !== '') {
          setJobs(res.data);
        }else{
          setJobs([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    setMin("");
    setMax("");
  };
  const onDeadlineChange = (e) => {
    setLoading(true);
    const filter = query;
    filter.deadLine = e.target.value;
    setQuery(filter);
    setDeadLine(e.target.value);
    console.log(e.target.value);
    filterJobs({deadLine : e.target.value})
      .then((res) => {
        if (res.data !== '') {
          setJobs(res.data);
        }else{
          setJobs([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const onGenereChange = (e) => {
    setLoading(true);
    setGenere(e.target.value);
    console.log(e.target.value);
    const filter = query;
    filter.generes = e.target.value;
    setQuery(filter);
    filterJobs({generes : e.target.value})
      .then((res) => {
        if (res.data !== '') {
          setJobs(res.data);
        }else{
          setJobs([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleSubmit = () => {
    console.log(budget);
  };

  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        {/* <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#reviewModal"
        >
          Give Review
        </button> */}
        <h3 className="text-center mt-5">Find your next projects</h3>
        <div className="row mt-5">
          <div className="col-md-3">
            <h3 onClick={handleSubmit} className="mHide">Filter by</h3>
            <div class="accordion dHIde" id="accordionExample2">
              <i data-toggle="collapse" data-target="#collapseBig" aria-expanded="false" aria-controls="collapseBig" className="fa fa-filter dHIde" style={{ float: 'right' }}></i>
              <div id="collapseBig" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample2">

                <div class="accordion dHIde" id="accordionExample">
                  <h5 class="mb-0">
                    <span className="filter d-block" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                      Category
                    </span>
                  </h5>
                  <div id="collapse2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                      <Radio.Group onChange={onCategoryChange} value={category}>
                        <Radio value="VOCALISTS">VOCALISTS</Radio>
                        <br />
                        <Radio value="MUSIC PRODUCERS &amp; ENGINEERS">
                          MUSIC PRODUCERS &amp; ENGINEERS
                        </Radio>
                        <br />
                        <Radio value="Mixing Engineers">Mixing Engineers</Radio>
                        <br />
                        <Radio value="DJ">DJs</Radio>
                        <br />
                        <Radio value="SONGWRITERS &amp; COMPOSERS">
                          SONGWRITERS &amp; COMPOSERS
                        </Radio>
                        <br />
                        <Radio value="INSTRUMENTS">INSTRUMENTS</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                  <h5 class="mb-0">
                    <span className="filter d-block" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Budget
                    </span>
                  </h5>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body">
                      <div className="row">
                        <div style={{ maxWidth: "40%" }}>
                          <input
                            className="form-control"
                            placeholder="Min"
                            value={min}
                            onChange={(e) => setMin(e.target.value)}
                          />
                        </div>
                        <div style={{ maxWidth: "40%" }}>
                          <input
                            className="form-control"
                            placeholder="Max"
                            value={max}
                            onChange={(e) => setMax(e.target.value)}
                          />
                        </div>
                        <div style={{ maxWidth: "20%" }}>
                          <button
                            style={{
                              marginTop: "5px",
                              color: "#fff",
                              backgroundColor: "#0070f3",
                              borderRadius: "50px",
                              border: "transparent",
                            }}
                            onClick={() => onBudgetChange(min, max)}
                          >
                            Go
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5 class="mb-0">
                    <span className="filter d-block" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Deadline
                    </span>
                  </h5>
                  <div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body">
                      <Radio.Group onChange={onDeadlineChange} value={deadline}>
                        <Radio value="0-7 Days">0-7 Days</Radio>
                        <br />
                        <Radio value="8-14 Days">8-14 Days</Radio>
                        <br />
                        <Radio value="15-21 Days">15-21 Days</Radio>
                        <br />
                        <Radio value="22-30 Days">22-30 Days</Radio>
                        <br />
                        <Radio value="31-40 Days">31-40 Days</Radio>
                        <br />
                        <Radio value="41-60 Days">41-60 Days</Radio>
                        <br />
                        <Radio value="more than 60 Days">more than 60 Days</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                  <h5 class="mb-0">
                    <span className="filter d-block" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Genre
                    </span>
                  </h5>
                  <div id="collapseFive" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body">
                      <Radio.Group onChange={onGenereChange} value={genere}>
                        <Radio value="National/ Indian">National/Indian</Radio>
                        <br />
                        <Radio value="Regional">Regional</Radio>
                        <br />
                        <Radio value="International">International</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Filters */}
            <div class="accordion mHide" id="accordionExample1">
              <h5 class="mb-0">
                <span className="filter d-block" data-toggle="collapse" data-target="#category" aria-expanded="false" aria-controls="category">
                  Category
                </span>
              </h5>
              <div id="category" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample1">
                <div class="card-body">
                  <Radio.Group onChange={onCategoryChange} value={category}>
                    <Radio value="VOCALISTS">VOCALISTS</Radio>
                    <br />
                    <Radio value="MUSIC PRODUCERS &amp; ENGINEERS">
                      MUSIC PRODUCERS &amp; ENGINEERS
                    </Radio>
                    <br />
                    <Radio value="Mixing Engineers">Mixing Engineers</Radio>
                    <br />
                    <Radio value="DJ">DJs</Radio>
                    <br />
                    <Radio value="SONGWRITERS &amp; COMPOSERS">
                      SONGWRITERS &amp; COMPOSERS
                    </Radio>
                    <br />
                    <Radio value="INSTRUMENTS">INSTRUMENTS</Radio>
                  </Radio.Group>
                </div>
              </div>
              <h5 class="mb-0">
                <span className="filter d-block" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  Budget
                </span>
              </h5>
              <div id="collapse3" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample1">
                <div class="card-body">
                  <div className="row">
                    <div style={{ maxWidth: "40%" }}>
                      <input
                        className="form-control"
                        placeholder="Min"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                      />
                    </div>
                    <div style={{ maxWidth: "40%" }}>
                      <input
                        className="form-control"
                        placeholder="Max"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                      />
                    </div>
                    <div style={{ maxWidth: "20%" }}>
                      <button
                        style={{
                          marginTop: "5px",
                          color: "#fff",
                          backgroundColor: "#0070f3",
                          borderRadius: "50px",
                          border: "transparent",
                        }}
                        onClick={() => onBudgetChange(min, max)}
                      >
                        Go
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="mb-0">
                <span className="filter d-block" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  Deadline
                </span>
              </h5>
              <div id="collapse4" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample1">
                <div class="card-body">
                  <Radio.Group onChange={onDeadlineChange} value={deadline}>
                    <Radio value="0-7 Days">0-7 Days</Radio>
                    <br />
                    <Radio value="8-14 Days">8-14 Days</Radio>
                    <br />
                    <Radio value="15-21 Days">15-21 Days</Radio>
                    <br />
                    <Radio value="22-30 Days">22-30 Days</Radio>
                    <br />
                    <Radio value="31-40 Days">31-40 Days</Radio>
                    <br />
                    <Radio value="41-60 Days">41-60 Days</Radio>
                    <br />
                    <Radio value="more than 60 Days">more than 60 Days</Radio>
                  </Radio.Group>
                </div>
              </div>
              <h5 class="mb-0">
                <span className="filter d-block" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  Genre
                </span>
              </h5>
              <div id="collapse5" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample1">
                <div class="card-body">
                  <Radio.Group onChange={onGenereChange} value={genere}>
                    <Radio value="National/ Indian">National/Indian</Radio>
                    <br />
                    <Radio value="Regional">Regional</Radio>
                    <br />
                    <Radio value="International">International</Radio>
                  </Radio.Group>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {loading ? (
              <div className="d-flex justify-content-center">
                <span className="text-center" style={{ fontSize: "20px" }}>
                  <LoadingOutlined />
                  Loading
                </span>
              </div>
            ) : allJobs.length != 0 ? (
              allJobs.map((job, index) => (
                <div
                  key={index}
                  className="card mt-3 flex-d-column"
                  style={{ borderRadius: "12px" }}
                >
                  <div className="w-15">
                    <div className="d-flex justify-content-center">
                      <img
                        src={job.jobPostedBy.avatar}
                        alt="musician card"
                        width="90px"
                        height="90px"
                        className="mt-3"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <p className="text-center">{job.jobPostedBy.name}</p>
                  </div>
                  <div className="card-body" style={{ width: "85%" }}>
                    <p className="card-title" style={{ fontWeight: "bold" }}>
                      {job.jobTitle}
                    </p>
                    <div className="d-flex">
                      {job.category !== undefined
                        ? job.category.map((c, index) => (
                          <p
                            key={index}
                            className="tag-line text-center"
                            style={{
                              marginTop: "4px",
                              padding: "2px 10px",
                              marginRight: "10px",
                            }}
                          >
                            {c.subService}
                          </p>
                        ))
                        : ""}
                      {job.genres.map((genre) => (
                        <p
                          className="tag-line text-center"
                          style={{
                            marginTop: "4px",
                            padding: "2px 10px",
                            marginRight: "10px",
                            backgroundColor: "#ff6575",
                          }}
                        >
                          {genre.subGenere}
                        </p>
                      ))}
                    </div>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Deadline:</span>{" "}
                      {job.deadLine}
                    </p>
                    <div className="row">
                      <div
                        className="col-md-9 b-solid"
                      >
                        <p className="card-text">{job.description}</p>
                      </div>
                      <div className="col-md-3">
                        <div className="dHIde mt-3">
                          <p style={{ fontSize: "14px" }}>
                            <b>Quote</b>
                            <i className="fas fa-rupee-sign ml-3"></i>
                            {job.budget[0] === job.budget[1]
                              ? job.budget[1]
                              : ` ${job.budget[0]}- ${job.budget[1]}`}
                          </p>
                        </div>
                        <div className="mHide">
                          <p className="text-center" style={{ fontSize: "18px" }}>
                            <b>Quote</b>
                          </p>
                          <p className="text-center">
                            <i className="fas fa-rupee-sign"></i>
                            {job.budget[0] === job.budget[1]
                              ? job.budget[1]
                              : ` ${job.budget[0]}- ${job.budget[1]}`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        {job.uploadMp3 != undefined ? (
                          // <i
                          //   className="fas fa-play"
                          //   style={{
                          //     color: "#0070f3",
                          //     cursor: "pointer",
                          //     marginRight: "10px",
                          //   }}
                          // ></i>
                          <ReactAudioPlayer src={job.uploadMp3} controls className="w-audio" />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-md-6">
                        {job.referenceLinks != "" ? (
                          <i
                            className="fas fa-link"
                            style={{
                              color: "#0070f3",
                              cursor: "pointer",
                              marginRight: "10px",
                            }}
                          ></i>
                        ) : (
                          ""
                        )}
                        <span
                          onClick={() => history.push(`/job/${job._id}`)}
                          className="float-right mr-30"
                          style={{
                            float: "right",
                            cursor: "pointer",
                            backgroundColor: "#0070f3",
                            color: "#fff",
                            padding: "2px 15px",
                            borderRadius: "4px",
                          }}
                        >
                          Read more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h4 className="text-center">No Jobs Found</h4>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
