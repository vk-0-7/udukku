import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import { Select, Radio } from "antd";
import { createJob, getJobById, updateJobById, updateJobPostedByUser } from "./Functions/job";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Header from "./Components/Navigation/Header";
import GenereData from "./GenreData.json";
import CategoryData from "./CategoryData.json";
import axios from "axios";

const { Option } = Select;

const UpdateJob = ({ history, match }) => {


    const [title, setTitle] = useState();
    const [genereList, setGenereList] = useState([]);
    const [description, setDescription] = useState();
    const [refrel, setRefrel] = useState("");
    const [budget, setBudget] = useState("");
    const [minBudget, setMinBudget] = useState("");
    const [maxBudget, setMaxBudget] = useState("");
    const [budgetType, setBudgetType] = useState("Flexible");
    const [mp3, setMP3] = useState();
    const [deadline, setDeadline] = useState("0-7 Days");
    const [subService, setSubService] = useState(CategoryData[0].subCategory[0]);
    const [subgeneres, setSubGeneres] = useState(GenereData[0].subGenere);
    const [genere, setGenere] = useState(GenereData[0].genere);
    const [subGenere, setSubGenere] = useState(GenereData[0].subGenere[0]);
    const [services, setServices] = useState([]);
    const [service, setService] = useState("VOCALISTS");
    const [subCategories, setSubCategories] = useState([
        "Female Vocalist ",
        "Male Vocalist ",
        "Singer Male",
        "Singer Female",
    ]);
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        getJobById(match.params.id).then((res) => {
            console.log(res);
            setTitle(res.data.jobTitle);
            setGenereList(res.data.genres);
            setServices(res.data.category);
            setDescription(res.data.description);
            setRefrel(res.data.referenceLinks);
            if (res.data.budget[0] === res.data.budget[1]) {
                setBudgetType("Fixed");
                setBudget(res.data.budget[0]);
            } else {
                setMinBudget(res.data.budget[0]);
                setMaxBudget(res.data.budget[1]);
            }
            setDeadline(res.data.deadLine);
        })
    }, [match]);

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

    const handleChange = (e) => {
        setService(e.target.value);
        const sub = CategoryData.filter((item) => {
            return item.category === e.target.value;
        });
        console.log(sub[0].subCategory);
        setSubCategories(sub[0].subCategory);
    };

    const handleSubmit = (id) => {
        // console.log(title, services, description, refrel, deadline);
        var Budget = {};
        if (minBudget === "") {
            Budget = [parseInt(budget), parseInt(budget)];
        } else {
            Budget = [parseInt(minBudget), parseInt(maxBudget)];
        }
        if (
            (title === "" || genereList.length === 0,
                description === "" ||
                services.length === 0 ||
                (budgetType === "Flexible" && (minBudget === "" || maxBudget === "")) ||
                (budgetType === "Fixed" && budget === ""))
        ) {
            toast.warning("Please fill all the fields");
        } else {
            updateJobById(id,title,services,deadline,genereList,refrel,Budget,mp3).then((res)=>{
                toast.success("job has been updated");
            }).catch((err)=>{
                console.log(err);
            })
            // createJob(
            //     title,
            //     genereList,
            //     description,
            //     refrel,
            //     deadline,
            //     Budget,
            //     services,
            //     mp3,
            //     user.token
            // )
            //     .then((res) => {
            //         updateJobPostedByUser(res.data.newJob._id, user.token)
            //             .then((res) => {
            //                 console.log(res);
            //             })
            //             .catch((err) => {
            //                 console.log(err);
            //             });
            //         toast.success(res.data.message);
            //         history.push("/jobs");
            //     })
            //     .catch((err) => console.log(err));
        }
    };

    const handleMp3Change = (event) => {
        toast.warning("Please wait your file is being uploaded");
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        axios
            .post("https://udukku.herokuapp.com/api/upload_attachment", formData)
            .then((res) => {
                toast.success("your file has been uploaded");
                setMP3(res.data.url);
            })
            .catch((err) => console.log(err));
    };

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

    const handleGenereChange = (e) => {
        console.log(e.target.value);
        setGenere(e.target.value);
        const sub = GenereData.filter((item) => {
            return item.genere === e.target.value;
        });
        setSubGeneres(sub[0].subGenere);
    };
    return (
        <>
            <Header />
            <div
                className="container-fluid mt-5 mb-5"
                style={{ paddingLeft: "10%", paddingRight: "10%" }}
            >
                <div className="row">
                    <div className="col-md-6">
                        <h2 style={{ color: "#0070f3", fontWeight: "bold" }}>Post a Job</h2>
                        <p>
                            To post a job, enter the following details for the applicants. The
                            clearer you are, the higher are your chances of finding the
                            perfect musician for your job.
                        </p>
                        <label>
                            <b>Job Title</b>
                        </label>
                        <input
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="What are you looking for? For eg - Need vocals for a semi-classical song"
                        />
                        <div className="row mt-3">
                            <div className="col-md-2">
                                <label>
                                    <b>Genres</b>
                                </label>
                            </div>
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
                                        <div className="col-md-7 col-7 d-flex">
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
                                    <select
                                        className="select"
                                        onChange={handleGenereChange}
                                    >
                                        {GenereData.map((d, index) => (
                                            <option value={d.genere} key={index}>
                                                {d.genere}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-5 col-5 d-flex">
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
                                        className="fas fa-plus"
                                        onClick={() => handleAddGenere(genere, subGenere)}
                                        style={{
                                            border: "1px solid",
                                            padding: "6px 7px",
                                            borderRadius: "20px",
                                            color: "#fff",
                                            verticalAlign: "sub",
                                            background: "#0070F3",
                                        }}
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-2">
                                <label>
                                    <b>Category</b>
                                </label>
                            </div>
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
                                        <div className="col-md-7 col-7 d-flex">
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
                                                    handleServiceRemove(
                                                        input1.service,
                                                        input1.subService
                                                    )
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
                                <div className="col-md-5 col-5 d-flex">
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
                                        className="fas fa-plus"
                                        onClick={() => handleAddService(service, subService)}
                                        style={{
                                            border: "1px solid",
                                            padding: "6px 7px",
                                            borderRadius: "20px",
                                            color: "#fff",
                                            verticalAlign: "sub",
                                            background: "#0070F3",
                                        }}
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <label className="mt-3">
                            <b>Description</b>
                        </label>
                        <textarea
                            rows="5"
                            value={description}
                            style={{ resize: "none" }}
                            className="form-control mb-2"
                            placeholder="eg: I need a female singer to sing and record the vocals (verses, choruses and bridge) on a semi-classical song track (Sample attached). The song is produced and the melody has been written, so no more writing needs to be done. I am looking for vocals in the style of Monali Thakur in “Moh Moh Ke Dhaage” or Neeti Mohan in “Jiya Re”. I am attaching a sample to get an idea about the requirement. I also expect the vocalist to record some harmonies and adlibs for effect. We can discuss the deliverables and royalties as this will be a commercial release.
              "
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <label className="mt-3">
                            <b>Reference link (Optional)</b>
                        </label>
                        <input
                            value={refrel}
                            className="form-control mb-2"
                            onChange={(e) => setRefrel(e.target.value)}
                        />
                        <label className="mt-3">
                            <b>Budget</b>
                        </label>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <select
                                value={budgetType}
                                    onChange={(e) => setBudgetType(e.target.value)}
                                    className="select"
                                >
                                    <option value="Flexible">Flexible</option>
                                    <option value="Fixed">Fixed</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                {budgetType === "Flexible" ? (
                                    <div className="cantainer-fluid">
                                        <div className="row">
                                            <div
                                                className="col-md-1"
                                                style={{ padding: "0px", marginTop: "12px" }}
                                            >
                                                <i
                                                    className="fa fa-rupee-sign mHide"
                                                    style={{ float: "right" }}
                                                ></i>
                                            </div>
                                            <div className="col-md-5">
                                                <input
                                                    className="form-control"
                                                    placeholder="Min"
                                                    value={minBudget}
                                                    onChange={(e) => setMinBudget(e.target.value)}
                                                />
                                            </div>
                                            <div
                                                className="col-md-1"
                                                style={{
                                                    paddingLeft: "0px",
                                                    paddingRight: "0px",
                                                    marginTop: "12px",
                                                }}
                                            >
                                                <i
                                                    className="fa fa-minus mHide"
                                                    style={{ float: "left" }}
                                                ></i>
                                                <i
                                                    className="fa fa-rupee-sign mHide"
                                                    style={{ float: "right" }}
                                                ></i>
                                            </div>
                                            <div className="col-md-5">
                                                <input
                                                    className="form-control"
                                                    placeholder="Max"
                                                    value={maxBudget}
                                                    onChange={(e) => setMaxBudget(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <input
                                        className="form-control mts-3"
                                        placeholder="5000"
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                    />
                                )}
                            </div>
                        </div>
                        <label className="mt-3">
                            <b>Upload MP3(optional)</b>
                        </label>
                        <br />
                        <label className="browse mb-2">
                            <i
                                className="fa fa-paperclip"
                                style={{ color: "#0070f3", marginRight: ".75rem" }}
                                aria-hidden="true"
                            ></i>
                            <span>Browse to add attachments</span>
                            <input
                                className="form-control d-none"
                                type="file"
                                accept="audio/*"
                                onChange={handleMp3Change}
                            />
                        </label>
                        <label className="mt-3">
                            <b>
                                Deadline
                            </b>
                        </label>
                        <select
                            className="form-control mb-2"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                        >
                            <option value="0-7 days">0-7 days</option>
                            <option value="8-14 days">8-14 days</option>
                            <option value="15-21 days">15-21 days</option>
                            <option value="22-30 days">22-30 days</option>
                            <option value="31-40 days">31-40 days</option>
                            <option value="41-60 days">41-60 days</option>
                            <option value="more than 60 days">more than 60 days</option>
                        </select>
                        <button className="btn-hover" onClick={() => handleSubmit(match.params.id)}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UpdateJob;
