import React from "react";
import { Link } from "react-router-dom";

const JobPost = () => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <em className="fa fa-times"></em>
                        </button>
                        <br/>
                        <h4>What can we help you with?</h4>
                        <input className="form-control" placeholder="e.g. Need 5 songs mixed" />
                        <br/>
                        <h4>Tell us more about your project:</h4>
                        <p>Need help Check out our <Link className="link">Music production glossary</Link></p>
                        <textarea className="form-control" rows="8" 
                        placeholder="e.g. I have finished songs and I am looking prfoessional vocalist,drummer,studio etc" 
                        style={{resize:'none'}}>
                        </textarea>
                        <label className="btn-hover" style={{margin:'10px 0px', display:'block',textAlign:'center'}}>
                            Upload Mp3 (optional)
                            <input type="file"  style={{display:'none'}} accept=".mp3,audio/*"/>
                        </label>
                        <button className="btn-hover d-block w-100" data-dismiss="modal" aria-label="Close">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobPost;