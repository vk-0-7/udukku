import { ConsoleSqlOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { deleteJobById, getPostedJobs } from "../Functions/job";

const ClientJobs = ({ history }) => {
    const { user } = useSelector((state) => ({ ...state }));
    const [allJobs, setAllJobs] = useState([]);

    useEffect(() => {
        if (user != null) {
            console.log(user);
            loadAllJobs(user.token);
        }
    }, [user]);
    const loadAllJobs = (token) => {
        getPostedJobs(token).then((res) => {
            console.log(res);
            setAllJobs(res.data.job);
        }).catch((err) => console.log(err));
    }
    const handleDeleteJob = (id) => {
        deleteJobById(id).then((res) => {
            console.log(res);
            toast.success("Job has been deleted");
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <>
            <Header />
            <div className="container-fluid" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                {
                    allJobs.length != 0 ? (
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
                                                onClick={() => handleDeleteJob(job._id)}
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
                                                Delete Job
                                            </span>
                                            <span
                                                onClick={() => history.push(`/update-job/${job._id}`)}
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
                                                Update Job
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
            <Footer />
        </>
    );
}

export default ClientJobs;