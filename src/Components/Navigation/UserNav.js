import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../Functions/user";
import JobPost from "../../Modal/JobPost";
const UserNav = () => {
    const {user} = useSelector((state) => ({...state}));
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = () =>{
        logout().then((res)=>{
            console.log(res);
            dispatch({
                type:"LOGOUT",
                payload: null
            });
            localStorage.setItem("token",null);
            history.push("/user/login");
        }).catch((err) => console.log(err));
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <Link to="/" className="navbar-brand" >Udukku</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <Link to="/explore" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Explore
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div style={{ padding: '30px' }}>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Post a job &amp; Hire a pro <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>Browse through the Udukku profiles and hire pros to complete your project</p>
                                    <Link to="/">Learn How</Link>
                                </div>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Explore jobs &amp; Get hired <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>Browse through the Udukku profiles and hire pros to complete your project</p>
                                    <Link to="/">Learn How</Link>
                                </div>
                                <div>
                                    <h5>Post your own gig <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>Browse through the Udukku profiles and hire pros to complete your project</p>
                                    <Link to="/">Learn How</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle"  id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                            <div style={{ padding: '30px' }}>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>How to sell music <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Have been creating music but don't know how to get it across? Here are...
                                    </p>
                                    <Link to="/">Read more</Link>
                                </div>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Everything you need to know about royalities <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        A number of technicalities are involved
                                    </p>
                                    <Link to="/">Read more</Link>
                                </div>
                                <div>
                                    <h5>Top Music Skills of 2022 <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Want to know what people are looking for 2022? Here are some most...</p>
                                    <Link to="/">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </li> */}
                    <li className="nav-item dropdown">
                        <Link to="/soundbank" className="nav-link dropdown-toggle"  id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sound Track
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                            <div style={{ padding: '30px' }}>
                                <div style={{ borderBottom: '1px solid red', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <h5>Browse through sounds <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Scroll through sounds uploaded by different artists
                                        and purchase the license to use them in your songs.
                                    </p>
                                    <Link to="/">Learn more</Link>
                                </div>
                                <div>
                                    <h5>Upload your own sounds <i className="ml-3 fa fa-angle-right"></i></h5>
                                    <p className="h6" style={{ color: '#F7657A' }}>
                                        Earn By selling licenses to your previously created music.
                                    </p>
                                    <Link to="/">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav" style={{ marginLeft: 'auto', marginRight: '20px' }}>
                    <li className="nav-item"><Link to="/user/favourites" className="nav-link"><em className="fas fa-heart"></em></Link></li>
                    <li className="nav-item">
                        <Link to="/user/messages" className="nav-link">
                            <em className="fas fa-envelope"></em>
                            <span className="ml-3">
                                Message
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <button style={{border:'none',background:'transparent'}} className="nav-link dropdown-toggle"  id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {user != null ? user.name : ''}
                        </button>
                        <div className="dropdown-menu" style={{ minWidth: '2rem' }} aria-labelledby="navbarDropdown1">
                            <div style={{ padding: '10px 30px' }}>
                                <Link className="dropdown-item" to="/user/jobs">
                                    Jobs
                                </Link>
                                <a data-toggle="modal" data-target="#exampleModal" className="dropdown-item">
                                    Post A Job
                                </a>
                                <Link className="dropdown-item" to="/user/profile">
                                    My Profile
                                </Link>
                                <Link className="dropdown-item" to="/user/membership">
                                    Member Benefits
                                </Link>
                                <p onClick={handleLogout} className="dropdown-item" to="/user/jobs">
                                    Logout
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <JobPost/>
        </nav>
    );
}

export default UserNav;