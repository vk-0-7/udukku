import React from "react";
import { toast } from "react-toastify";
import { activateAccount } from "../Functions/user";

const CompleteRegistration = ({ match,history }) => {
    const handleActivation = () =>{
        console.log(match.params.token);
        activateAccount(match.params.token).then(res => {
            toast.success(res.data.message);
            history.push("/user/login");
        }).catch(err => console.log(err));
    }
    return (
        <div className="container-fluid">
            <div className="row auth-wrapper" style={{marginTop:'10%'}}>
                <div className="col-md-4"></div>
                <div className="col-md-4 auth-inner">
                    <h1 style={{fontSize:'62px',textAlign:'center'}}>UDUKKU TECH</h1>
                    <div className="d-flex justify-content-center">
                    <button className="btn-hover" onClick={handleActivation}>Click to Activate Account</button>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
}

export default CompleteRegistration;