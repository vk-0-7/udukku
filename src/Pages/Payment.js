import { Checkbox, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { getChatroomsById, updateChatroomById } from "../Functions/job";
import { getOrderId, saveOrder } from "../Functions/orders";

const Payment = ({ match,history }) => {
  const [chatroom, setChatroom] = useState();
  const [terms, setTerms] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));


  useEffect(() => {
    getChatroomsById(match.params.id).then((res) => {
      console.log(res);
      setChatroom(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  // Razorpay
  const componentDidMount = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };
  componentDidMount();

  const openPayModal = () => {
    if (terms) {
      const amt = chatroom.cost;
      var amount = amt;
      var options = {
        key: "rzp_test_Fj0KaYuYrOU0Yq",
        amount: amt*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        name: "Udukku",
        description: "Test Transaction",
        order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        singnature : "",
        payment_id : "",
        handler: function (response) {
          var values = {
            razorpay_signature: response.razorpay_signature,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
          };
          options.singnature = response.razorpay_signature;
          options.payment_id = response.razorpay_payment_id;
          saveOrder(user.userId,match.params.id,options).then((res)=>{
            console.log(res);
            history.push("/user/messages");
          }).catch((err)=>{
            console.log(err);
          });

          const reqBody = {
            id:match.params.id,
            paymentStatus : true,
          }
          updateChatroomById(reqBody).then((res)=>{
            console.log(res);
          }).catch((err)=>{
            console.log(err);
          });
        },
        prefill: {
          name: "lil Acme",
          email: "",
          contact: "",
        },
      };

      getOrderId(user.userId, match.params.id, amount, "INR", "Test", 1).then((res) => {
        console.log(res);
        options.order_id = res.id;
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
        rzp1.open();
      }).catch((err) => { console.log(err) });
    } else {
      toast.warn("please agree to terms and conditions");
    }
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
                {/* <h5>
                  <b>Quantity</b>
                </h5> */}
              </div>
              <div className="col-md-2 col-4">
                {/* <h5>
                  <b>Duration</b>
                </h5> */}
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
                  <b>
                    {chatroom !== undefined ? chatroom.proposalDetails : ""}
                  </b>
                </p>
                {/* <p style={{ paddingLeft: "10%" }}>
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
                </p> */}
              </div>
              <div className="col-md-2">
                {/* <p>
                  <b>1</b>
                </p> */}
              </div>
              <div className="col-md-2">
                {/* <p>
                  <b>1 days</b>
                </p> */}
              </div>
              <div className="col-md-2">
                <p>
                  <b>
                    <i className="fa fa-rupee-sign"></i>{chatroom !== undefined ? chatroom.cost : ""}
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
                    <i className="fa fa-rupee-sign"></i>{chatroom !== undefined ? chatroom.cost : ""}
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
          <Checkbox className="mt-5" style={{ fontSize: '1.25rem' }} onChange={() => setTerms(!terms)}>
            <b>I agreed the terms and conditions</b>
          </Checkbox>
          <br />
          <button className="mt-5 btn-hover" style={{ fontSize: '18px' }} onClick={openPayModal}>
            Pay <i className="fa fa-rupee-sign" style={{ fontSize: '14px' }}></i><span className="ml-3">{chatroom !== undefined ? chatroom.cost : ""}</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
