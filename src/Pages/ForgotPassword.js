import React, { useState } from "react";
import { toast } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { forgotPassword } from "../Functions/user";

const ForgotPassword = () =>{
    const [email, setEmail] = useState("");
    const handleSubmit = () =>{
        forgotPassword(email)
        .then((res) =>{
            if(res.status == 200){
                toast.success(res.data.msg);
            }
        })
        .catch((err) => {
            if(err.response.status == 400)
            {
                toast.error(err.response.data.msg);
            }
        });
    }
    return(
        <>
        <Header/>
        <div className="auth-wrapper" style={{paddingTop:'2.5rem',paddingBottom:'2.5rem'}}>
                <div className="auth-inner">
                    <h2 className="text-center">Forgot Password</h2>
                    <p className="text-center">Udukku is the leading description to find the most</p>
                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>Email</label>
                        <input type="text" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <br/>
                    <button onClick={handleSubmit} className="btn btn-login w-100">Forgot Password</button>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default ForgotPassword;