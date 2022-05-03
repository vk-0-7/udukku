import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { Tabs } from 'antd';
import { Link } from "react-router-dom";

const { TabPane } = Tabs;
const UserProfile = () => {
    
    const operations = <Link className="btn-hover mb-2" to="/user/profile/edit">Edit Profile</Link>;
    return (
        <>
            <Header />
            <div className="container-fluid mt-5 mb-5" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Udukku User</h2>
                        <p>Udukku User address</p>
                    </div>
                </div>
                <Tabs defaultActiveKey="1"  tabBarExtraContent={operations}>
                    <TabPane tab="Profile" key="1">
                        Looking for someone good
                    </TabPane>
                    <TabPane tab="Reviews" key="2">
                        No Reviews so far....
                    </TabPane>
                </Tabs>
            </div>
            <Footer />
        </>
    );
}

export default UserProfile;