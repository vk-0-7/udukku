import { Checkbox, Input, Radio } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { filterServiceProvider, getServiceProvider, searchUserByService } from "../Functions/user";
import card from "../Images/card-3.jpg";

const SearchedData = ({ match }) => {
  const [user, setUser] = useState();
  const [rating, setRating] = useState(1);
  const [title, setTitle] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [genre, setGenre] = useState("");
  const [query, setQuery] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    getServiceProvider(match.params.query)
      .then((res) => {
        if(res.data.length !== 0){
          setUser(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [match.params.query]);

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    const value = { userRating: e.target.value };
    setQuery(value);
    filterServiceProvider(value).then((res) => setUser(res.data)).catch((err) => console.log(err));

}
// const handleJobTitleChange = () => {
//     console.log(title);
//     const value = { jobTitle: title };
//     setQuery(value);
//     filterServiceProvider(value).then((res) => setUser(res.data)).catch((err) => console.log(err));
//     setTitle("");
// }

const handlePriceChange = () => {
    console.log(min);
    console.log(max);
    const one = parseInt(min);
    const two = parseInt(max);
    const value = { price: [one, two] };
    setQuery(value);
    filterServiceProvider(value).then((res) => setUser(res.data)).catch((err) => console.log(err));
}
const handleGenreChange = (e) => {
    setGenre(e.target.value);
    const value = { genere: e.target.value };
    setQuery(value);
    filterServiceProvider(value).then((res) => setUser(res.data)).catch((err) => console.log(err));
    console.log(e.target.value);
}
  return (
    <>
      <Header />
      <div
        className="container-fluid mb-5"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <div className="mt-5 text-center">
          <h1>Discover pro musicians in india</h1>
          <h6>
            Udukku offers the largest selection of music available in online
          </h6>
        </div>
      </div>
      <div
        className="container-fluid mt-5 mb-5"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <div className="dp-Auto">
          <p
            style={{
              marginRight: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "5px",
              fontSize: "20px",
              color: "#fff",
              backgroundColor: "#0070f3",
            }}
          >
            All
          </p>
          <div className="dropdown">
            <p
              style={{ marginRight: "10px", fontSize: "20px" }}
              id="ratingDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <b>Rating</b>
            </p>
            <div
              className="dropdown-menu"
              style={{
                marginTop: "-20px",
                borderRadius: "15px",
                padding: "15px",
              }}
              aria-labelledby="ratingDropdown"
            >
              <h4>Ratings</h4>
              <Radio.Group onChange={handleRatingChange}>
                <Radio value={1}>
                  <i className="fa fa-star"></i>
                </Radio>
                <br />
                <Radio value={2}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </Radio>
                <br />
                <Radio value={3}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </Radio>
                <br />
                <Radio value={4}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </Radio>
                <br />
                <Radio value={5}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </Radio>
              </Radio.Group>
            </div>
          </div>
          {/* <div className="dropdown">
            <p
              style={{ marginRight: "10px", fontSize: "20px" }}
              id="priceDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <b>Job title</b>
            </p>
            <div
              className="dropdown-menu"
              style={{
                marginTop: "-20px",
                borderRadius: "15px",
                padding: "15px",
              }}
              aria-labelledby="priceDropdown"
            >
              <h4>Search job title</h4>
              <div className="row">
                <div style={{ maxWidth: "80%" }}>
                  <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="form-control"
                    placeholder="Music producer in india..."
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
                    onClick={handleJobTitleChange}

                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          <div className="dropdown">
            <p
              style={{ marginRight: "10px", fontSize: "20px" }}
              id="priceDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <b>Price</b>
            </p>
            <div
              className="dropdown-menu"
              style={{ marginTop: "-20px", borderRadius: "15px" }}
              aria-labelledby="priceDropdown"
            >
              <h4 style={{ marginLeft: "15px" }}>All prices</h4>
              <div className="container-fluid">
                <div className="row">
                  <div style={{ maxWidth: "40%" }}>
                    <input className="form-control" placeholder="Min" onChange={e => setMin(e.target.value)} />
                  </div>
                  <div style={{ maxWidth: "40%" }}>
                    <input className="form-control" placeholder="Max" onChange={e => setMax(e.target.value)} />
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
                      onClick={handlePriceChange}
                    >
                      Go
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <p
              style={{ marginRight: "10px", fontSize: "20px" }}
              id="genreDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <b>Genre</b>
            </p>
            <div
              className="dropdown-menu"
              style={{
                marginTop: "-20px",
                borderRadius: "15px",
                padding: "15px",
              }}
              aria-labelledby="genreDropdown"
            >
              <h4>All genres</h4>
              <Radio.Group onChange={handleGenreChange}>
                <Radio value="Regional">Regional</Radio>
                <br />
                <Radio value="National/ Indian">National/ Indian</Radio>
                <br />
                <Radio value="International">International</Radio>
              </Radio.Group>
            </div>
          </div>
        </div>
        {/* Filters for mobile */}
        <div class="accordion dHIde  pb-5" id="accordionExample">
          <div class="card" style={{ flexDirection: 'column', border: 'none', backgroundColor: '#fff' }}>
            <h2 class="mb-0" style={{ paddingLeft: '1rem' }} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="fa fa-filter mr-4" aria-hidden="true"></i> Filters
            </h2>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                <div class="card" style={{ flexDirection: 'column' }}>
                  <p style={{
                    marginTop: '10px',
                    marginBottom: '0px',
                    paddingLeft: '1rem',
                    fontWeight: 'bold',
                    borderBottom: '1px solid '
                  }} data-toggle="collapse" data-target="#ratings" aria-expanded="false" aria-controls="ratings">
                    Ratings
                  </p>
                  <div id="ratings" class="collapse" aria-labelledby="headingTwo" >
                    <div class="card-body">
                      <Radio.Group onChange={handleRatingChange}>
                        <Radio value={1}>
                          <i className="fa fa-star"></i>
                        </Radio>
                        <br />
                        <Radio value={2}>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </Radio>
                        <br />
                        <Radio value={3}>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </Radio>
                        <br />
                        <Radio value={4}>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </Radio>
                        <br />
                        <Radio value={5}>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </Radio>
                      </Radio.Group>
                    </div>
                  </div>
                </div>
                {/* <div class="card" style={{ flexDirection: 'column' }}>
                  <p style={{
                    marginTop: '10px',
                    marginBottom: '0px',
                    paddingLeft: '1rem',
                    fontWeight: 'bold',
                    borderBottom: '1px solid '
                  }} data-toggle="collapse" data-target="#job-title" aria-expanded="false" aria-controls="job-title">
                    Job title
                  </p>
                  <div id="job-title" class="collapse" aria-labelledby="headingTwo">
                    <div className="card-body">
                      <h6>Search job title</h6>
                      <div className="row">
                        <div style={{ maxWidth: "80%" }}>
                          <input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="form-control"
                            placeholder="Music producer in india..."
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
                            onClick={handleJobTitleChange}

                          >
                            Go
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div class="card" style={{ flexDirection: 'column' }}>
                  <p style={{
                    marginTop: '10px',
                    marginBottom: '0px',
                    paddingLeft: '1rem',
                    fontWeight: 'bold',
                    borderBottom: '1px solid '
                  }} data-toggle="collapse" data-target="#price" aria-expanded="false" aria-controls="price">
                    Price
                  </p>
                  <div id="price" class="collapse" aria-labelledby="headingTwo">
                    <div className="card-body">
                      <h6 style={{ marginLeft: "15px" }}>All prices</h6>
                      <div className="container-fluid">
                        <div className="row">
                          <div style={{ maxWidth: "40%" }}>
                            <input className="form-control" placeholder="Min" onChange={e => setMin(e.target.value)} />
                          </div>
                          <div style={{ maxWidth: "40%" }}>
                            <input className="form-control" placeholder="Max" onChange={e => setMax(e.target.value)} />
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
                              onClick={handlePriceChange}
                            >
                              Go
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card" style={{ flexDirection: 'column' }}>
                  <p style={{
                    marginTop: '10px',
                    marginBottom: '0px',
                    paddingLeft: '1rem',
                    fontWeight: 'bold',
                    borderBottom: '1px solid '
                  }} data-toggle="collapse" data-target="#genre" aria-expanded="false" aria-controls="genre">
                    Genre
                  </p>
                  <div id="genre" class="collapse" aria-labelledby="headingTwo">
                    <div className="card-body">
                      <h4>All genres</h4>
                      <Radio.Group onChange={handleGenreChange}>
                        <Radio value="Regional">Regional</Radio>
                        <br />
                        <Radio value="National/ Indian">National/ Indian</Radio>
                        <br />
                        <Radio value="International">International</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {user !== undefined && user.length !== 0 ? (
            user.map((item, index) => (
              <>
                <div className="col-md-3 mt-5 mHide" key={index}>
                  <div className="card" style={{ flexDirection: "column" }}>
                    <img
                      src={item.avatar}
                      style={{ height: "180px" }}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <Link
                        to={`/user/preview-profile/${item._id}`}
                        className="card-title"
                        style={{ color: "#0070f3", fontSize: "20px" }}
                      >
                        Top Liner | Songwriter
                      </Link>
                      <br />
                      <p >
                        {item.name}, {item.state}
                      </p>
                      <p>
                        {/* <i
                        className="fas fa-star"
                        style={{ color: "#F5C625" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        style={{ color: "#F5C625" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        style={{ color: "#F5C625" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        style={{ color: "#F5C625" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        style={{ color: "#F5C625", marginRight: "12px" }}
                      ></i>
                      (438) */}
                        No ratings
                      </p>
                      <p style={{ height: '66px' }}>
                        {item.description.length > 90 ? `${item.description.substr(0, 90)}...` : item.description}
                      </p>
                      {/* <p>Credits:</p>
                    <p>The CW, Hbo, NBC</p> */}
                    </div>
                    <div
                      className="card-footer"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <span className="d-flex">
                        {item.workSample !== "" ? (
                          <i
                            className="fas fa-play"
                            style={{ color: "#0070f3", cursor: "pointer" }}
                          ></i>
                        ) : (
                          ""
                        )}
                        <p style={{ marginLeft: "auto", marginBottom: "0px" }}>
                          STARTING AT
                        </p>
                      </span>
                      <p style={{ float: "right", marginBottom: "0px" }}>
                        <i className="fa fa-rupee-sign"></i> {item.startingPrice}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 dHIde">
                  <div className="card mb-3 service-provider-card">
                    <div className="row">
                      <div className="col-4">
                        <img src={item.avatar} width="90px" alt="profile" className="spc-img" />
                      </div>
                      <div className="col-8 profile-card-width" style={{ paddingRight: '0px' }}>
                        <div className="card-header" style={{ backgroundColor: '#fff', border: 'none' }}>
                          <Link
                            to={`/user/preview-profile/${item._id}`}
                            className="card-title"
                            style={{ color: "#0070f3", fontSize: "15px" }}
                          >
                            Top Liner | Songwriter
                          </Link>
                          <br />
                          <p style={{ fontSize: '11px', marginBottom: '5px' }}>
                            {item.name}, {item.state}
                          </p>
                          <p style={{ fontSize: '11px', margin: '0px' }}>
                            No ratings
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p style={{ fontSize: '11px', marginBottom: '0px' }}>
                        {item.description.length > 90 ? `${item.description.substr(0, 90)}...` : `${item.description}`}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))
          ) : (
            <h1 className="text-center">No Service Providers Found</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchedData;
