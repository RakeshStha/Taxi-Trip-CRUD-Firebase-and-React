import React from 'react'
import '../Service/service.css'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import Pulse from 'react-reveal/Pulse';


const Service = () => {
    return (
        <div className="service">
            <div className="service-container">
                <div className="service-contents">
                    <Zoom>
                    <h1>WE DO BEST<br></br>
                    THAN YOU WISH</h1>
                    </Zoom>
                    <div className="flex-row service-icons">
                        <div className="flex flex-1">
                            <Flip left>
                            <img src="assets/images/service_1.png" alt="" />
                            </Flip>
                            <p>
                            <Fade left>
                                <span className="service-icons-head">Quick Pickup</span><br></br>
                            </Fade>
                            <Zoom>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.
                            </Zoom>
                            </p>
                        </div>
                        <div className="flex flex-1">
                        <Flip right>
                        <img src="assets/images/service_3.png" alt="" />
                        </Flip>
                            <p>
                            <Fade right>
                                <span className="service-icons-head">Happy Customers</span>
                            </Fade>
                                <br></br>

                            <Zoom>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.
                            </Zoom>
                            </p>
                        </div>
                    </div>
                    <div className="flex-row service-icons">
                        <div className="flex flex-1">
                            <Flip left>
                            <img src="assets/images/service_2.png" alt="" />
                            </Flip>
                            <p>
                            <Fade left>
                                <span className="service-icons-head">Bonuses for ride</span>
                            </Fade>    
                            <br></br>

                            <Zoom>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.
                            </Zoom>
                            </p>
                        </div>
                        <div className="flex flex-1">
                        <Flip right>
                        <img src="assets/images/service_4.png" alt="" />
                        </Flip>
                            <p>
                            <Fade right>
                                <span className="service-icons-head">GPS Searching</span>
                            </Fade>
                                
                                <br></br>

                            <Zoom>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.
                            </Zoom>
                            </p>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="testimonial">
                <div className="testimonial-contents">
                    <Zoom><h1>Testominals</h1></Zoom>
                </div>
                <div className="flex-row service-icons">
                    <Fade left>
                        <div className="flex flex-1 testimon">
                            <img src="assets/images/testominal.png" alt="" />
                            <p><span className="service-icons-head">Bonuses for ride</span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="flex flex-1 testimon">
                        <img src="assets/images/testominal.png" alt="" />
                            <p><span className="service-icons-head">GPS Searching</span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="call">
                <Tada><h1>WE ARE READY TO TAKE YOUR CALL 24 HOURS, 7 DAYS!</h1></Tada>
                <div className="flex-row calls">
                    <Pulse><img src="assets/images/icon_1.png" alt="" /></Pulse>
                    <Pulse><img src="assets/images/icon_2.png" alt="" /></Pulse>
                    <Pulse><img src="assets/images/icon_3.png" alt="" /></Pulse>
                    <Pulse><img src="assets/images/icon_4.png" alt="" /></Pulse>
                </div>
            </div>
        </div>
    )
}

export default Service
