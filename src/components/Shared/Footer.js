import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 text-white">
            <img src="http://fastgear.themerex.net/wp-content/uploads/2016/11/logo_footer.png" />
            <h4>
              We are courier company that provides fast and reliable package
              transport.
            </h4>
          </div>
          <div className="col-md-4">
            <div className="footer-service text-justify text-white">
              <h5>SERVICES</h5>
              <h6>Business Services</h6>
              <h6>Shop Delivery</h6>
              <h6>Personal Services</h6>
            </div>
          </div>
          <div className="col-md-4 text-white">
            <h5>CUSTOMER CARE</h5>
            <h6>Contact Us</h6>
            <h6>About Us</h6>
            <h6>News & Articles</h6>
          </div>
        </div>
        <small className="text-center copyright-footer">
          &copy; onestop service 1991-2021
        </small>
      </div>
    </div>
  );
};

export default Footer;
