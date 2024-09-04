import About from "./About"
import Treatment from "./Treatment"
import Doctors from "./Doctors"
import Testimonial from "./Testimonial"
import { BsCalendarDate } from "react-icons/bs";
import Contact from "./Contact";

function Home() {
    return (
        <>
            <main>
                <section id="banner" className="carousel slide slider_section" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#banner" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#banner" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#banner" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#banner" data-bs-slide-to="3"></button>
                        <button type="button" data-bs-target="#banner" data-bs-slide-to="4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <h1>MICO <span>HOSPITAL</span></h1>
                                        <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                        <button className="contact-btn">Contact Us</button>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <img src="assets/images/slider-img.jpg" alt="Los Angeles" className="d-block slider_img1" />
                                        <img src="assets/images/dots.png" alt="" className="slider_img2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <h1>MICO <span>HOSPITAL</span></h1>
                                        <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                        <button className="contact-btn">Contact Us</button>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <img src="assets/images/slider-img.jpg" alt="Los Angeles" className="d-block slider_img1" />
                                        <img src="assets/images/dots.png" alt="" className="slider_img2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <h1>MICO <span>HOSPITAL</span></h1>
                                        <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                        <button className="contact-btn">Contact Us</button>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <img src="assets/images/slider-img.jpg" alt="Los Angeles" className="d-block slider_img1" />
                                        <img src="assets/images/dots.png" alt="" className="slider_img2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </section>


                <section className="book_section layout_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form>
                                    <h4>
                                        BOOK <span>APPOINTMENT</span>
                                    </h4>
                                    <div className="row ">
                                        <div className="form-group col-lg-4">
                                            <label>Patient Name </label>
                                            <input type="text" className="form-control" id="inputPatientName" placeholder="" />
                                        </div>
                                        <div className="form-group col-lg-4">
                                            <label>Doctor's Name</label>
                                            <select name="" className="form-control wide" id="inputDoctorName">
                                                <option value="Normal distribution ">Normal distribution </option>
                                                <option value="Normal distribution ">Normal distribution </option>
                                                <option value="Normal distribution ">Normal distribution </option>
                                            </select>
                                        </div>
                                        <div className="form-group col-lg-4">
                                            <label>Department's Name</label>
                                            <select name="" className="form-control wide" id="inputDepartmentName">
                                                <option value="Normal distribution ">Normal distribution </option>
                                                <option value="Normal distribution ">Normal distribution </option>
                                                <option value="Normal distribution ">Normal distribution </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="form-group col-lg-4">
                                            <label>Phone Number</label>
                                            <input type="number" className="form-control" id="inputPhone" placeholder="XXXXXXXXXX" />
                                        </div>
                                        <div className="form-group col-lg-4">
                                            <label>Symptoms</label>
                                            <input type="text" className="form-control" id="inputSymptoms" placeholder="" />
                                        </div>
                                        <div className="form-group col-lg-4">
                                            <label>Choose Date </label>
                                            <div className="input-group date" id="inputDate" data-date-format="mm-dd-yyyy">
                                                <input type="text" className="form-control" placeholder="mm-dd-yyyy"/>
                                                <span className="input-group-addon date_icon">
                                                   <BsCalendarDate />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <button type="submit" className="btn ">Submit Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


                <About />

                <Treatment />

                <Doctors />

                <Testimonial />

                <Contact />
            </main>

        </>
    )
}

export default Home