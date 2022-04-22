import { Checkbox, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { getChatroomsById } from "../Functions/job";

const Payment = ({match}) => {
  const [chatroom, setChatroom] = useState();
  useEffect(()=>{
    getChatroomsById(match.params.id).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  },[]);

  // Razorpay
  const componentDidMount = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };
  componentDidMount();

  const openPayModal = () => {
    const amt = 100;
      var amount = amt;
      var options = {
        "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
  };

  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <h2 className="mt-5 mb-5">
          <b>Payment Page</b>
        </h2>
        <div
          className="card"
          style={{ flexDirection: "column", borderRadius: "15px" }}
        >
          <div
            className="card-header"
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
          >
            <div className="row">
              <div className="col-md-6 col-4">
                <h5 style={{ paddingLeft: "10%" }}>
                  <b>Items</b>
                </h5>
              </div>
              <div className="col-md-2 col-4">
                <h5>
                  <b>Quantity</b>
                </h5>
              </div>
              <div className="col-md-2 col-4">
                <h5>
                  <b>Duration</b>
                </h5>
              </div>
              <div className="col-md-2">
                <h5>
                  <b>Quotes</b>
                </h5>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <p style={{ paddingLeft: "10%" }}>
                  <b>I Need a song produced and writer</b>
                </p>
                <p style={{ paddingLeft: "10%" }}>
                  <i
                    className="fa fa-check"
                    style={{ color: "lightgreen" }}
                  ></i>
                  <b> Full Song produced</b>
                </p>
                <p style={{ paddingLeft: "10%" }}>
                  <i
                    className="fa fa-check"
                    style={{ color: "lightgreen" }}
                  ></i>
                  <b> Mix &amp; master</b>
                </p>
                <p style={{ paddingLeft: "10%" }}>
                  <i
                    className="fa fa-check"
                    style={{ color: "lightgreen" }}
                  ></i>
                  <b> Services: Source file, with mix</b>
                </p>
              </div>
              <div className="col-md-2">
                <p>
                  <b>1</b>
                </p>
              </div>
              <div className="col-md-2">
                <p>
                  <b>1 days</b>
                </p>
              </div>
              <div className="col-md-2">
                <p>
                  <b>
                    <i className="fa fa-rupee-sign"></i>100
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div
            className="card-footer"
            style={{
              backgroundColor: "#fff",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            <div className="row">
              <div className="col-md-6">
                <h5 style={{ paddingLeft: "10%" }}>
                  <b>Total</b>
                </h5>
              </div>
              <div className="col-md-2">
                <p>
                  <b></b>
                </p>
              </div>
              <div className="col-md-2">
                <p>
                  <b></b>
                </p>
              </div>
              <div className="col-md-2">
                <h5>
                  <b>
                    <i className="fa fa-rupee-sign"></i>100
                  </b>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          {/* <h5>
            <b>Payment Method</b>
          </h5>
          <Radio className="payment-method">Credit Card</Radio>
          <br />
          <Radio className="payment-method">PayPal</Radio>
          <br /> */}
          <Checkbox className="mt-5" style={{fontSize:'1.25rem'}}>
            <b>I agreed the terms and conditions</b>
          </Checkbox>
          <br />
          <button className="mt-5 btn-hover" style={{fontSize:'18px'}} onClick={openPayModal}>
            Pay <i className="fa fa-rupee-sign" style={{fontSize:'14px'}}></i><span className="ml-3">100</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
