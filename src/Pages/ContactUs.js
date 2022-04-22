import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { contactUs } from "../Functions/user";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  const handleSubmit = () => {
    console.log(name, email, title, message);
    contactUs(name, email, title, message)
      .then((res) => {
        toast.success(
          "Your Query has been received,We will connect with you soon"
        );
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
      });
  };
  return (
    <>
      <Header />
      <div
        className="container-fluid mb-5 pt-5 pb-5 mt-5"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <div className="row">
          <div className="col-md-5">
            <h2 style={{ color: "#0070f3", fontWeight: "bold" }}>Contact Us</h2>
            <p>
              If you have any queries regarding service providers or jobs that
              you are applying to, send us a message and we will get back to you
              in less than 48 hours.
            </p>
            <div className="bar"></div>
            <label>
              <b>Name</b>
            </label>
            <input
              className="form-control mb-2"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <label>
              <b>Email</b>
            </label>
            <input
              className="form-control mb-2"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <label>
              <b>Title</b>
            </label>
            <input
              className="form-control mb-2"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your Subject"
            />
            <label>
              <b>Message</b>
            </label>
            <textarea
              style={{ resize: "none" }}
              className="form-control mb-2"
              rows="5"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a  message here"
            />
            <button onClick={handleSubmit} className="btn-hover">
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
