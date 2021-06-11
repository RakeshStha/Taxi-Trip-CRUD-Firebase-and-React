import React from 'react'
import '../About/about.css'
// import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade'; 
import Zoom from 'react-reveal/Zoom';


const About = () => {
    return (
        <div className="About-total-container">
            <div className="top-about-container">
                <div className="cars-about">
                <Fade left>
                <h1>TAXI-TRIP</h1>
                </Fade>
                <Fade left>
                <h3>Book order, share location,mark your destination </h3>
                </Fade>
                <Zoom>
                <img src="assets/images/taxi.png" alt="" />
                </Zoom>
                </div>
                <div className="map-about">
                <Zoom>
                <img src="assets/images/about_2.png" alt="" />
                </Zoom>
                </div>
            </div>
            <div className="bottom-about-container">
                <div className="how-to-use">
                    <Fade left>
                    <img src="assets/images/about_3.png" alt="" />
                    </Fade>
                </div>
                <div className="about-about">
                <Fade right>
                <h1>TAXI-TRIP</h1>
                </Fade>
                <Fade right>
                <h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
                    corrupti quidem, libero animi at harum odio quae pariatur eaque
                    repudiandae, est facere dignissimos beatae. Minima vel, possimus
                    impedit exercitationem nisi voluptas vero!
                </h3>
                </Fade>
                <Fade right>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                    mollitia sint blanditiis vel totam eos, molestiae possimus quisquam
                    eligendi quod laudantium magnam atque quasi! Nihil mollitia vero
                    dolores cum facilis? Necessitatibus, asperiores?
                </h3>
                </Fade>
                </div>
            </div>
        </div>
    )
}

export default About
