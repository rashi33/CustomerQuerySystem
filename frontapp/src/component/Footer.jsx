import React from 'react';
import logo from '../component/img/logo1.png';
import s4 from '../component/img/s4.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Left Section with Logo and Contact Details */}
          <div className="col-md-6 d-flex align-items-center">
            <img src={logo} alt="Logo" className="me-3" style={{ width: '150px' }} />
            <div>
              <h5>Contact Details</h5>
              <p>
                <i className="bi bi-house-door"></i> D-95, Sector 2, Noida, Uttar Pradesh - 201301
              </p>
              <p>
                <i className="bi bi-envelope"></i> <a href="mailto:karam@karam.in" className="text-light">karam@karam.in</a>
              </p>
              <p>
                <i className="bi bi-phone"></i> <a href="tel:18001037085" className="text-light">1800-103-7085</a>
              </p>
              <p>
                <i className="bi bi-phone"></i> <a href="tel:+911204734400" className="text-light">+91 120 4734400</a>
              </p>
            </div>
          </div>
          {/* Right Section with Image */}
          <div className="col-md-6 text-end">
            <img src={s4} alt="Footer Image" className="img-fluid" style={{ maxWidth: '300px' }} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p>&copy; 2024, All rights reserved by KARAM Safety Pvt. Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
