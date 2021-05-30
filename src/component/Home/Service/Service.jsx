import React from 'react'
import '../Service/service.css'

const Service = () => {
    return (
        <div className="service">
            <div className="service-container">
                <div className="service-contents">
                    <h1>WE DO BEST<br></br>
                    THAN YOU WISH</h1>
                    <div className="flex-row service-icons">
                        <div className="flex flex-1">
                            <img src="assets/images/service_1.png" alt="" />
                            <p><span className="service-icons-head">Quick Pickup</span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                        <div className="flex flex-1">
                        <img src="assets/images/service_3.png" alt="" />
                            <p><span className="service-icons-head">Happy Customers</span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                    </div>
                    <div className="flex-row service-icons">
                        <div className="flex flex-1">
                            <img src="assets/images/service_2.png" alt="" />
                            <p><span className="service-icons-head">Bonuses for ride</span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                        <div className="flex flex-1">
                        <img src="assets/images/service_4.png" alt="" />
                            <p><span className="service-icons-head">GPS Searching</span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="testimonial">
                <div className="testimonial-contents">
                    <h1>Testominals</h1>
                </div>
                <div className="flex-row service-icons">
                        <div className="flex flex-1 testimon">
                            <img src="assets/images/testominal.png" alt="" />
                            <p><span className="service-icons-head">Bonuses for ride</span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                        <div className="flex flex-1 testimon">
                        <img src="assets/images/testominal.png" alt="" />
                            <p><span className="service-icons-head">GPS Searching</span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                </div>
            </div>
            <div className="call">
                <h1>WE ARE READY TO TAKE YOUR CALL 24 HOURS, 7 DAYS!</h1>
                <div className="flex-row calls">
                    <img src="assets/images/icon_1.png" alt="" />
                    <img src="assets/images/icon_2.png" alt="" />
                    <img src="assets/images/icon_3.png" alt="" />
                    <img src="assets/images/icon_4.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Service
