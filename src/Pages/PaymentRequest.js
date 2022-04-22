import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Navigation/Header';

const PaymentRequest = () => {
    return (
        <>
            <Header />
            <div className="container-fluid" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div className="mt-3">
                    <h4 className="text-center">Payment Request</h4>
                    <button className="btn-hover" style={{ fontSize: '12px', float: 'right' }}>+ New Request</button>
                </div>
                <div className="row" style={{ marginTop: '5rem' }}>
                    <div className="col-md-3">
                        <div className="card" style={{ flexDirection: 'column',padding:'25px' }}>
                            <p>Filtered by</p>
                            <p>All Request</p>
                            <p>Request Received</p>
                            <p>Request Sents</p>
                            <p>Decllined</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p className="mt-5 text-center" style={{fontSize:'20px',fontWeight:'bold'}}>You haven't received any payment request yet</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PaymentRequest;