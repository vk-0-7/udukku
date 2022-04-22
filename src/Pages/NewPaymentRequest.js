import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import card from "../Images/card-3.jpg";

const NewPaymentRequest = () => {
    return (
        <>
            <Header />
            <div className="container-fluid mt-5 mb-5" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            <h4>Invite a client to fund a job through SoundBetter</h4>
                            <p>Initiate a job easily</p>
                            <p>Earn verified reviews - Get higher visibility on SoundBetter</p>
                            <p>Offer trust &amp; assurance to your clients</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <div className="card" style={{ width: '60%' }}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        <img src={card} alt="user_name" width="20%" />
                                    </div>
                                    <br />
                                    <input className="form-control center" placeholder="PROJECT TITLE" />
                                    <br />
                                    <textarea className="form-control center" placeholder="WHAT YOU WILL DELIVER" style={{ resize: 'none' }} />
                                    <br />
                                    <div className="d-flex justify-content-center">
                                        <input style={{ width: '20%' }} placeholder="100" className="form-control" />
                                    </div>
                                    <br />
                                    <input className="form-control center" placeholder="NEW CLIENT NAME" />
                                    <br />
                                    <input className="form-control center" placeholder="NEW CLIENT EMAIL" />
                                    <div className="d-flex justify-content-center">
                                        <button className="btn-hover">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NewPaymentRequest;