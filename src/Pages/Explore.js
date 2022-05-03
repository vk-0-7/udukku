import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Navigation/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryData from '../CategoryData.json';
import { useState } from 'react';
import $ from 'jquery';
import { getServiceProviderBySubService } from '../Functions/user';

const Explore = ({ history }) => {
    const [inputData, setInputData] = useState("");
    const [windowWidth, setWindowWidth] = useState(1400);
    useEffect(() => {
        window.scrollTo(0, 0);
        getwidth();
    }, []);

    const handleSearch = () => {
        history.push(`/searchdata/${inputData}`);
    }

    function getwidth() {
        const width = document.body.clientWidth;
        setWindowWidth(width);
    }
    $(window).on("load", getwidth);
    $(window).on("resize", getwidth);

    const handleChange = (field) =>{
        getServiceProviderBySubService(field).then((res)=>{
            console.log(res);
        }).catch((err)=>{console.log(err)});
    }
    return (
        <>
            <Header />
            <div className='container-fluid' style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <div className='mt-5 text-center'>
                    <h1>Discover pro musicians in india</h1>
                    <h6>Udukku offers the largest selection of music available in online</h6>
                    <span className='d-flex'>
                        <input className='form-control search-input' placeholder='Enter the name, job title or genre' onChange={e => setInputData(e.target.value)} />
                        <i className='fa fa-search search' onClick={handleSearch} style={{ cursor: 'pointer' }}></i>
                    </span>
                </div>
                <div className='mt-5'>
                    <h4><b>{CategoryData[0].category}</b></h4>
                    <div className='d-flex justify-content-center'
                    >
                        <Swiper
                            slidesPerView={windowWidth > 800 && windowWidth < 900 ? 2 : windowWidth < 800 ? 1 : 4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop={true}
                            navigation
                        >
                            {CategoryData[0].subCategory.map((category, index) => (
                                <SwiperSlide className="slider">
                                    <div className='card bg-image' style={{ marginLeft: '40px', marginRight: '40px', height: '220px' }}>
                                        <div className='card-body p-5' style={{marginLeft:'20px'}}>
                                            <p className="text-light" key={index} style={{marginTop:'25%'}}><b>{category}</b></p>
                                            <Link className="text-light" to={`/search-providers/${category}`}>Find out more <i className='fa fa-arrow-right'></i></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <h4 className="mt-5"><b>{CategoryData[1].category}</b></h4>
                    <div className='d-flex justify-content-center'>
                        <Swiper
                            slidesPerView={windowWidth > 800 && windowWidth < 900 ? 2 : windowWidth < 800 ? 1 : 4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop={true}
                            navigation
                            style={{ width: '110%' }}
                        >
                            {CategoryData[1].subCategory.map((category, index) => (
                                <SwiperSlide className="slider">
                                    <div className='card bg-image' style={{ marginLeft: '40px', marginRight: '40px', height: '220px' }}>
                                        <div className='card-body p-5' style={{marginLeft:'20px'}}>
                                            <p className="text-light" key={index} style={{marginTop:'25%'}}><b>{category}</b></p>
                                            
                                            <Link className="text-light" to="/search-providers/producers">Find out more <i className='fa fa-arrow-right'></i></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <h4 className="mt-5"><b>{CategoryData[2].category}</b></h4>
                    <div className='d-flex justify-content-center'>
                        <Swiper
                            slidesPerView={windowWidth > 800 && windowWidth < 900 ? 2 : windowWidth < 800 ? 1 : 4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop={true}
                            navigation
                            style={{ width: '110%' }}
                        >
                            {CategoryData[2].subCategory.map((category, index) => (
                                <SwiperSlide className="slider">
                                    <div className='card bg-image' style={{ marginLeft: '40px', marginRight: '40px', height: '220px' }}>
                                        <div className='card-body p-5' style={{marginLeft:'20px'}}>
                                            <p className="text-light" key={index} style={{marginTop:'25%'}}><b>{category}</b></p>
                                            
                                            <Link className="text-light" to="/search-providers/producers">Find out more <i className='fa fa-arrow-right'></i></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <h4 className="mt-5"><b>INSTRUMENTLIST</b></h4>
                    <div className='d-flex justify-content-center'>
                        <Swiper
                            slidesPerView={windowWidth > 800 && windowWidth < 900 ? 2 : windowWidth < 800 ? 1 : 4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop={true}
                            navigation
                            style={{ width: '110%' }}
                        >
                            {CategoryData[3].subCategory.map((category, index) => (
                                <SwiperSlide className="slider">
                                    <div className='card bg-image' style={{ marginLeft: '40px', marginRight: '40px', height: '220px' }}>
                                        <div className='card-body p-5' style={{marginLeft:'20px'}}>
                                            <p className="text-light" key={index} style={{marginTop:'25%'}}><b>{category}</b></p>
                                            
                                            <Link className="text-light" to="/search-providers/producers">Find out more <i className='fa fa-arrow-right'></i></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <h4 className="mt-5"><b>{CategoryData[4].category}</b></h4>
                    <div className='d-flex justify-content-center'>
                        <Swiper
                            slidesPerView={windowWidth > 800 && windowWidth < 900 ? 2 : windowWidth < 800 ? 1 : 4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop={true}
                            navigation
                            style={{ width: '110%' }}
                        >
                            {CategoryData[4].subCategory.map((category, index) => (
                                <SwiperSlide className="slider">
                                    <div className='card bg-image' style={{ marginLeft: '40px', marginRight: '40px', height: '220px' }}>
                                        <div className='card-body p-5' style={{marginLeft:'20px'}}>
                                            <p className="text-light" key={index} style={{marginTop:'25%'}}><b>{category}</b></p>
                                            
                                            <Link className="text-light" to="/search-providers/producers">Find out more <i className='fa fa-arrow-right'></i></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Explore;