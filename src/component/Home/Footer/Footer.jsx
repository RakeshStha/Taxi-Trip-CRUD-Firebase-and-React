import React from "react";
import '../Footer/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="top-footer-container">
          <div className="Aboutus">
            <h1>About Us</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              porro recusandae assumenda eaque vero. Cumque quaerat error fugiat
              nam atque odio laboriosam, corrupti suscipit excepturi incidunt.
              Possimus facilis quis eum harum voluptates veniam corrupti
              consequatur!
            </h3>
          </div>
          <div className="Address">
            <h1>Address</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              porro recusandae assumenda eaque vero. Cumque quaerat error fugiat
              nam atque odio laboriosam, corrupti suscipit excepturi incidunt.
              Possimus facilis quis eum harum voluptates veniam corrupti
              consequatur!
            </h3>
          </div>
          <div className="Contact">
            <h1>Contact</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              porro recusandae assumenda eaque vero. Cumque quaerat error fugiat
              nam atque odio laboriosam, corrupti suscipit excepturi incidunt.
              Possimus facilis quis eum harum voluptates veniam corrupti
              consequatur!
            </h3>
          </div>
        </div>
        <div className="bottom-footer-container">
          <div className="Copyright">
            <h3>Ⓒ Taxi Trip -All Rights Reserved</h3>
          </div>
          <div className="Privacy-policy">
            <h3>Privacy Policy</h3>
          </div>
          <div className="Terms-use">
            <h3>Terms of Use</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;