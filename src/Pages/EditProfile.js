import { Checkbox, Tabs } from "antd";
import React from "react";
import SideNav from "../Components/Navigation/SideNav";
import Header from "../Components/Navigation/Header";
const { TabPane } = Tabs;
const EditProfile = () => {
    return (
        <>
            <Header />
            <div className="container-fluid mt-5 mb-5" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <Tabs tabPosition="left">
                    <TabPane tab="Edit My Profile" key="1">
                        <h4>Edit Your Profile</h4>
                        <label>Your Name</label>
                        <input className="form-control" />
                        <br />
                        <label>City Name</label>
                        <input className="form-control" placeholder="Enter a location" />
                        <br />
                        <label>Introduction</label>
                        <textarea style={{ resize: 'none' }} rows="5" className="form-control"></textarea>
                        <br />
                        <label>Add a Photo</label>
                        <br />
                        <input type="file" className="form-control"/>
                        <button className="btn-hover" style={{ float: 'right' }}>Save and preview your listing</button>
                    </TabPane>
                    <TabPane tab="Change Password" key="2">
                        <h4>Change Your Password</h4>
                        <input className="form-control" placeholder="Current password"/>
                        <br/>
                        <input className="form-control" placeholder="New password"/>
                        <br/>
                        <input className="form-control" placeholder="New password confirmation"/>
                        <button className="btn-hover">Update</button>
                    </TabPane>
                    <TabPane tab="Become a provider" key="3">
                    <h5>
                        As a provider, you'll be listed as an engineer, producer, or session musician, 
                        and eligible to be hired for remote work on SoundBetter. Are you sure you want 
                        to convert your account to a provider?
                    </h5>
                    <button className="btn-hover">Convert My Account</button>
                    <button className="btn-hover ml-3">Nevermind</button>
                    </TabPane>
                    <TabPane tab="Email Settings" key="4">
                        <h4>Email Settings</h4>
                        <div className="card">
                            <div className="card-header">
                                Marketting Emails
                            </div>
                            <div className="card-body">
                                <Checkbox>Unsubscribe from marketting emails</Checkbox>
                            </div>
                        </div>
                        <button className="btn-hover" style={{float:'right'}}>Save</button>
                    </TabPane>
                </Tabs>
            </div>
        </>
    );
}

export default EditProfile;