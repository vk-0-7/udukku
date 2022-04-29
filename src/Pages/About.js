import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Navigation/Header';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <div className='container-fluid mt-5' style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <h4 style={{ fontWeight: 'bold' }}>
                    ABOUT
                </h4>
                <p>Udukku is an online musician marketplace that provides them a platform to showcase their talents and find work online. We give musicians a chance to offer their services, find jobs and gigs, and get paid for their work.</p>
                <p>Our platform provides:</p>
                <ul>
                    <li>
                        <p>A personalized profile page for each artist, where they can showcase their work and list their skills and services.</p>
                    </li>
                    <li>
                        <p>A searchable database of artists, so that users can easily find and connect with musicians.</p>
                    </li>
                    <li>
                        <p>A variety of tools and resources&nbsp;to help artists promote their work and connect with industry professionals.</p>
                    </li>
                </ul>
                <p>Our mission is to bridge the gap between musicians and their potential to monetize their talent, and to help artists thrive in today&apos;s digital age while providing the best possible experience for our users. We believe that everyone should have the opportunity to pursue their passion for music, and we&apos;re committed to making that happen.</p>
                <p>Sign up for a free account today and get started on your musical journey!</p>
                <h2>Our Story&nbsp;</h2>
                <p>The story of Udukku is inseparable from that of the founder, Ishita Parakh. For the longest time, Ishita had been trying to find good music producers who could help her with her music projects. She tried everything, from online classifieds to word-of-mouth recommendations and websites, but she always came up empty-handed as all the platforms available were for western musicians.</p>
                <p>That&apos;s when she decided to take it upon herself to create a platform that would enable India&apos;s music scene. In&nbsp;2021, she launched Udukku to make it easy for musicians such as singers, songwriters, producers and composers to connect and collaborate.</p>
                <p>Since then, the platform has been in the work to help artists showcase their work, find collaborators, and get their music out there. We&apos;re constantly expanding our services and resources to support the music community better.</p>
                <h2>Who We Work With&nbsp;</h2>
                <ul>
                    <li>
                        <h3>Musicians</h3>
                    </li>
                </ul>
                <p>Whether you&apos;re just starting or you&apos;re a seasoned veteran, we can help you showcase your work and connect with users.&nbsp;If you&apos;re looking for someone to produce your next album, we can help you find the perfect collaborator.</p>
                <ul>
                    <li>
                        <h3>Industry Professionals</h3>
                    </li>
                </ul>
                <p>We work with various industry professionals, from booking agents to music festivals, to help artists promote their work and connect with opportunities.</p>
                <ul>
                    <li>
                        <h3>Labels and Venues</h3>
                    </li>
                </ul>
                <p>If you&apos;re a label or venue looking for new talent, we can help you find the best up-and-coming artists.</p>
                <h2>Our Commitment</h2>
                <p>We are committed to providing the best possible experience for our users. We believe that musicians should be able to find success in the music industry, and we&apos;re dedicated to helping them achieve their dreams.</p>
                <p>We believe that the results of collaborations initiated through our platform will go a long way in debunking the myth that only careers like medicine and engineering can make it big in India. This, in turn, will motivate more people to take up music as a profession.&nbsp;</p>
                <h2>Our Values</h2>
                <ul>
                    <li>
                        <p>Integrity:&nbsp;We are honest and transparent in dealings with users, partners, and employees.</p>
                    </li>
                    <li>
                        <p>Respect:&nbsp;We treat everyone with respect and dignity.</p>
                    </li>
                    <li>
                        <p>Excellence:&nbsp;We strive for excellence in everything we do.</p>
                    </li>
                    <li>
                        <p>Passion:&nbsp;We are passionate about our work and committed to our mission.</p>
                    </li>
                    <li>
                        <p>Teamwork:&nbsp;We believe in the power of teamwork and collaboration.</p>
                    </li>
                    <li>
                        <p>Inclusivity:&nbsp;We are committed to inclusivity and diversity in our community.</p>
                    </li>
                    <li>
                        <p>Empowerment:&nbsp;We believe in empowering musicians to achieve their dreams.</p>
                    </li>
                    <li>
                        <p>Discovery:&nbsp;We are committed to helping people discover new and exciting music.</p>
                    </li>
                    <li>
                        <p>Fun:&nbsp;We believe in having fun and enjoying what we do!</p>
                    </li>
                </ul>
                <h2>Create A Free Account and Get Started Today!</h2>
                <p>Udukku is the easiest way to find collaborators, get your talents out there, and get closer to your musical dreams.</p>
                <p>Whether you&apos;re a vocalist, producer, or industry professional, we invite you to join us on our mission to enable musicians to make a career out of their talents. Sign up for a free account today and get started on your musical journey!</p>
                <div className="d-flex justify-content-left mt-5">
                    <p>
                        <span style={{ fontSize: '18px', verticalAlign: "middle" }}>&copy;</span>
                        <span
                            style={{ fontSize: "15px", paddingRight: "10px", paddingLeft: '10px', borderRight: '1px solid #fff' }}
                        >
                            udukku 2020
                        </span>
                        <span style={{ fontSize: '15px' }}>  Developed by <a href="https://bit.ly/3C8Mxxn" style={{ color: '#000', textDecoration: 'underline' }} target="_blank">CFT Labs </a></span>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;