import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="column">
            <h4>SIDETRADE</h4>
            <h1 className="list-unstyled">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Terms of Use</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="column">
            <h4>SIDETRADE</h4>
            <h1 className="list-unstyled">
              <li>About Us</li>
            </h1>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} SIDETRADE | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
