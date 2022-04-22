import React from "react";

const UdukkuFacts = () => {
    return (
        <div className="container-fluid mt-5 mb-5">
            <h1 className="text-center">What Section</h1>
            <div className="row mt-3" style={{ backgroundColor: 'teal', padding: '5% 0px' }}>
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={music} alt="" height="200" width="200" />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={music1} alt="" height="200" width="200" />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={music2} alt="" height="200" width="200" />
                </div>
            </div>
        </div>
    );
}

export default UdukkuFacts;