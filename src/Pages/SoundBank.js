import { Input } from 'antd';
import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Navigation/Header';

const SoundBank = () => {
    return (
        <>
            <Header />
            <div className='container-fluid' style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div className='text-center mt-5 pt-5 pb-5 mb-5'>
                    <h1>Sound Bank Tracks</h1>
                    <p style={{ marginLeft: '25%', marginRight: '25%' }}>
                        License hand-picked tracks &amp; beats from top industry producers
                        Find a track you love, write a topline and release your song
                        Exclusive licenses for commercial release</p>
                </div>
                <div style={{ display: 'flex', marginBottom: '10%' }}>
                    <div className="dropdown" style={{ marginLeft: 'auto' }}>
                        <p className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            License Type
                        </p>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div style={{ marginLeft: '30px', marginRight: 'auto' }}>
                        <Input placeholder="in search of..." suffix={<em className='fa fa-search' />} />
                    </div>
                </div>
                <div className='box'>
                    <div style={{ display: 'flex' }}>
                        <i className="fas fa-play play-pause-btn" style={{ marginRight: '25px' }}></i>
                        <p>Enemies
                            <br />
                            <span>Post Malone Style Track</span>
                        </p>
                        <button className='btn-hover' style={{ marginLeft: 'auto' }}>LICENSE</button>
                    </div>
                </div>
                <div className='box'>
                    <div style={{ display: 'flex' }}>
                        <i className="fas fa-play play-pause-btn" style={{ marginRight: '25px' }}></i>
                        <p>Enemies
                            <br />
                            <span>Post Malone Style Track</span>
                        </p>
                        <button className='btn-hover' style={{ marginLeft: 'auto' }}>LICENSE</button>
                    </div>
                </div>
                <div className='box'>
                    <div style={{ display: 'flex' }}>
                        <i className="fas fa-play play-pause-btn" style={{ marginRight: '25px' }}></i>
                        <p>Enemies
                            <br />
                            <span>Post Malone Style Track</span>
                        </p>
                        <button className='btn-hover' style={{ marginLeft: 'auto' }}>LICENSE</button>
                    </div>
                </div>
                <div className='box'>
                    <div style={{ display: 'flex' }}>
                        <i className="fas fa-play play-pause-btn" style={{ marginRight: '25px' }}></i>
                        <p>Enemies
                            <br />
                            <span>Post Malone Style Track</span>
                        </p>
                        <button className='btn-hover' style={{ marginLeft: 'auto' }}>LICENSE</button>
                    </div>
                </div>
                <div className='box'>
                    <div style={{ display: 'flex' }}>
                        <i className="fas fa-play play-pause-btn" style={{ marginRight: '25px' }}></i>
                        <p>Enemies
                            <br />
                            <span>Post Malone Style Track</span>
                        </p>
                        <button className='btn-hover' style={{ marginLeft: 'auto' }}>LICENSE</button>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn-hover'>Load More</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SoundBank;