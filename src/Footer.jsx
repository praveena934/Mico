import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = function() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="info_section">
        <div className="container">
          <div className="info_top">
            <div className="info_logo">
              <Link href="/">
                <img src="assets/images/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="info_form">
              <form className="subscribe_form">
                <input type="email" placeholder="Your email" className="email_input"/>
                <button type="submit" className="subscribe_button">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="info_bottom layout_padding2">
            <div className="row info_main_row">
              <div className="col-md-6 col-lg-3">
                <h5>Address</h5>
                <div className="info_contact">
                  <Link href="/">
                  <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" />
                    <span>Location</span>
                  </Link>
                  <Link href="tel:+011234567890">
                  <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
                    <span>Call +01 1234567890</span>
                  </Link>
                  <Link href="mailto:demo@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                    <span>demo@gmail.com</span>
                  </Link>
                </div>
                <div className="social_box">
                  <Link href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
                  </Link>
                  <Link href="https://www.twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                  </Link>
                  <Link href="https://www.linkedin.com/">
                    <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
                  </Link>
                  <Link href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_links">
                  <h5>Useful Links</h5>
                  <div className="info_links_menu">
                    <Link href="index.html">Home</Link>
                    <Link href="about.html">About</Link>
                    <Link href="treatment.html">Treatment</Link>
                    <Link href="doctor.html">Doctors</Link>
                    <Link href="testimonial.html">Testimonial</Link>
                    <Link href="contact.html">Contact Us</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_post">
                  <h5>LATEST POSTS</h5>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="assets/images/post1.jpg" alt="Post 1" />
                    </div>
                    <p>Normal distribution</p>
                  </div>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="assets/images/post2.jpg" alt="Post 2" />
                    </div>
                    <p>Normal distribution</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_post">
                  <h5>News</h5>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="assets/images/post3.jpg" alt="Post 3" />
                    </div>
                    <p>Normal distribution</p>
                  </div>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="assets/images/post4.png" alt="Post 4" />
                    </div>
                    <p>Normal distribution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End info_section */}

      {/* Footer section */}
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear">{currentYear}</span> All Rights Reserved By
            <Link href="https://html.design/"> Free Html Templates</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
