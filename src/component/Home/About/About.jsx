import React from 'react'
import '../About/about.css'

const About = () => {
    return (
        <div className="About-total-container">
            <div className="top-about-container">
                <div className="cars-about">
                <h1>TAXI-TRIP</h1>
                <h3>Book order, share location,mark your destination </h3>
                <img src="assets/images/taxi.png" alt="" />
                </div>
                <div className="map-about">
                <img src="assets/images/about_2.png" alt="" />
                </div>
            </div>
            <div className="bottom-about-container">
                <div className="how-to-use">
                <img src="assets/images/about_3.png" alt="" />
                </div>
                <div className="about-about">
                <h1>TAXI-TRIP</h1>
                <h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
                    corrupti quidem, libero animi at harum odio quae pariatur eaque
                    repudiandae, est facere dignissimos beatae. Minima vel, possimus
                    impedit exercitationem nisi voluptas vero!
                </h3>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                    mollitia sint blanditiis vel totam eos, molestiae possimus quisquam
                    eligendi quod laudantium magnam atque quasi! Nihil mollitia vero
                    dolores cum facilis? Necessitatibus, asperiores?
                </h3>
                </div>
            </div>
        </div>
    )
}

export default About
