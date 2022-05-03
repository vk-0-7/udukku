import React, { useState } from 'react'
import Header from '../Components/Navigation/Header';
import { resetPassword } from '../Functions/user';

const ResetPassword = ({ match, history }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setComfirmPassword] = useState("");
    const handleActivation = () => {
        if (password === "" || confirmPassword === "") {
            alert("Both fields are required");
        }
        else if( password === confirmPassword ) {
            resetPassword(password,match.params.token).then(res => { 
                console.log(res);
                history.push("/user/login");
            }).catch(err => console.log);
        }else{
            alert("Both fields are required");
        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row auth-wrapper" style={{ marginTop: '10%' }}>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 auth-inner">
                        <h1 style={{ fontSize: '62px', textAlign: 'center' }}>Forgot Password</h1>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" placeholder="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" onChange={e => setComfirmPassword(e.target.value)} />
                        </div>
                        <br />
                        <button className="btn-hover w-100" onClick={handleActivation}>Reset Password</button>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword;