import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";

const Blog = () => {
    return (
        <>
            <Header />
            <div className="container-fluid" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <div style={{ marginTop: '15%' }}>
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Udukku is a place to connect to Hole new music word</h1>
                            <h6>It's easy to post your thinking on any topic and connect with millions of readers.</h6>
                            <button className="btn-hover">Start Writing</button>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <h6>Trending on uddukku</h6>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>Blogger Name</h6>
                                <p>Blog Description.........</p>
                                <p>12 Sept. 10 min read</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>Blogger Name</h6>
                                <p>Blog Description.........</p>
                                <p>12 Sept. 10 min read</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>Blogger Name</h6>
                                <p>Blog Description.........</p>
                                <p>12 Sept. 10 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>Blogger Name</h6>
                                <p>Blog Description.........</p>
                                <p>12 Sept. 10 min read</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>Blogger Name</h6>
                                <p>Blog Description.........</p>
                                <p>12 Sept. 10 min read</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>Blogger Name</h6>
                                <p>Blog Description.........</p>
                                <p>12 Sept. 10 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Blog;