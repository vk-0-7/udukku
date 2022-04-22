import React from 'react';
import Header from '../Components/Navigation/Header';
import Footer from '../Components/Footer/Footer';
const SingleProfile = () => {
    return (
        <>
            <Header />
            <div className='container-fluid' style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <nav id="navbar-example2" className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#fat">@fat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#mdo">@mdo</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#one">one</a>
                                <a className="dropdown-item" href="#two">two</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#three">three</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                    <h4 id="fat">

                        
                    </h4>
                    <p>...</p>
                    <h4 id="mdo">@mdo</h4>
                    <p>...</p>
                    <h4 id="one">one</h4>
                    <p>...</p>
                    <h4 id="two">two</h4>
                    <p>...</p>
                    <h4 id="three">three</h4>
                    <p>...</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SingleProfile;