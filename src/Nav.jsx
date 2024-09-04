import { Link } from "react-router-dom";
import { FaUserLock } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsPersonFill } from "react-icons/bs";
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <>
            <section className="header_section">
                <div className="container">
                    <div className="header_top">
                        <div className="container">
                            <div className="contact_nav">
                                <Link href="/">
                                    <FontAwesomeIcon icon={faPhone} aria-hidden="true" className="contact_nav_icon" />
                                    <span>
                                        Call : +01 123455678990
                                    </span>
                                </Link>
                                <Link href="/">
                                    <FontAwesomeIcon icon={faEnvelope} className="contact_nav_icon" />
                                    <span>
                                        Email : demo@gmail.com
                                    </span>
                                </Link>
                                <Link href="/">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" className="contact_nav_icon" />
                                    <span>
                                        Location
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-xl">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="assets/images/logo.png" alt="Logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/treatment">
                                        Treatment
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/doctors">
                                        Doctors
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/testimonial">
                                        Testimonial
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        <BsPersonFill className="login_icons" /> Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">
                                        <FaUserLock className="login_icons" /> Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

        </>
    );
};
export default Nav;