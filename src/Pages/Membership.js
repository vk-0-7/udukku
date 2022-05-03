import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import card from "../Images/card-8.jpg";
const Membership = () => {
    return (
        <>
            <Header />
            <div className="container-fluid mt-5 mb-5" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <h3><b>Member Benefits</b></h3>
                <h5 className="mb-5">Discounts on the industry's best music creation tools - only for SoundBetter members</h5>
                <div className="row">
                    <div className="col-md-4 mt-2 mb-2">
                        <div style={{ boxShadow:'3px 2px 11px 2px', padding:'10px' }}>
                            <img src={card} alt="producer" width="100%" height="200px" />
                            <h6>Lorem Ipsum</h6>
                            <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.
                            </p>
                            <button className="btn-hover">Get code</button>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2 mb-2">
                        <div style={{ boxShadow:'3px 2px 11px 2px', padding:'10px' }}>
                            <img src={card} alt="producer" width="100%" height="200px" />
                            <h6>Lorem Ipsum</h6>
                            <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.
                            </p>
                            <button className="btn-hover">Get code</button>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2 mb-2">
                        <div style={{ boxShadow:'3px 2px 11px 2px', padding:'10px' }}>
                            <img src={card} alt="producer" width="100%" height="200px" />
                            <h6>Lorem Ipsum</h6>
                            <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.
                            </p>
                            <button className="btn-hover">Get code</button>
                        </div>
                    </div>
                </div>
                <p className="mt-5 mb-5" style={{textAlign:'justify'}}>
                The offers displayed on this Member Benefits Page are offered to SoundBetter users by third-party partners.SoundBetter 
                is not responsible for the offers or for the products or services offered. For any product or service support relating 
                to these offers or offer redemption support, please contact the responsible third-party partner directly. Offers may 
                expire or be removed from this page at any time. While supplies last.
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default Membership;