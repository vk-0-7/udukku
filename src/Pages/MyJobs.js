import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
const MyJobs = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid mt-5 mb-5" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div className="row">
                    <div className="col-md-3">
                        <h5>Filters</h5>
                        <p>Open</p>
                        <p>Not Yet funded</p>
                        <p>Active</p>
                        <p>Completed</p>
                        <h5>Cancelled</h5>
                        <h5>Archived</h5>
                    </div>
                    <div className="col-md-9">
                        <p className="mt-3">No jobs here.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyJobs;