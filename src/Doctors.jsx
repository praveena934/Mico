
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Doctors = () => {
    return (
        <>
            <main>
                <section className="team_section layout_padding">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>
                                Our <span>Doctors</span>
                            </h2>
                        </div>
                    </div>
                    <div className="container">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                   <div className="doctors_imgs">
                                        <div className="img-card">
                                            <img src="assets/images/team1.jpg" alt="" />
                                            <div className="detail-box">
                                                <h5>Hennry</h5>
                                                <h6> MBBS</h6>
                                                <div className="social_links">
                                                    <AiFillFacebook />
                                                    <AiFillTwitterCircle />
                                                    <AiFillInstagram />
                                                    <AiFillLinkedin />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-card">
                                            <img src="assets/images/team2.jpg" alt="" />
                                            <div className="detail-box">
                                                <h5>Jenni</h5>
                                                <h6> MBBS</h6>
                                                <div className="social_links">
                                                    <AiFillFacebook />
                                                    <AiFillTwitterCircle />
                                                    <AiFillInstagram />
                                                    <AiFillLinkedin />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-card">
                                            <img src="assets/images/team3.jpg" alt="" />
                                            <div className="detail-box">
                                                <h5>Morco</h5>
                                                <h6> MBBS</h6>
                                                <div className="social_links">
                                                    <AiFillFacebook />
                                                    <AiFillTwitterCircle />
                                                    <AiFillInstagram />
                                                    <AiFillLinkedin />
                                                </div>
                                            </div>
                                        </div>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                <div className="doctors_imgs">
                                <div className="img-card">
                                            <img src="assets/images/team1.jpg" alt="" />
                                            <div className="detail-box">
                                                <h5>Hennry</h5>
                                                <h6> MBBS</h6>
                                                <div className="social_links">
                                                    <AiFillFacebook />
                                                    <AiFillTwitterCircle />
                                                    <AiFillInstagram />
                                                    <AiFillLinkedin />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-card">
                                            <img src="assets/images/team2.jpg" alt="" />
                                            <div className="detail-box">
                                                <h5>Jenni</h5>
                                                <h6> MBBS</h6>
                                                <div className="social_links">
                                                    <AiFillFacebook />
                                                    <AiFillTwitterCircle />
                                                    <AiFillInstagram />
                                                    <AiFillLinkedin />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-card">
                                            <img src="assets/images/team3.jpg" alt="" />
                                            <div className="detail-box">
                                                <h5>Morco</h5>
                                                <h6> MBBS</h6>
                                                <div className="social_links">
                                                    <AiFillFacebook />
                                                    <AiFillTwitterCircle />
                                                    <AiFillInstagram />
                                                    <AiFillLinkedin />
                                                </div>
                                            </div>
                                        </div>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                <div className="doctors_imgs">
                                <div className="img-card">
                                            <img src="assets/images/team1.jpg" alt="" />
                                            <div className="detail-box">
                                                <h5>Hennry</h5>
                                                <h6> MBBS</h6>
                                                <div className="social_links">
                                                    <AiFillFacebook />
                                                    <AiFillTwitterCircle />
                                                    <AiFillInstagram />
                                                    <AiFillLinkedin />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-card">
                                            <img src="assets/images/team2.jpg" alt="" />
                                            <div className="detail-box">
                                                <h5>Jenni</h5>
                                                <h6> MBBS</h6>
                                                <div className="social_links">
                                                    <AiFillFacebook />
                                                    <AiFillTwitterCircle />
                                                    <AiFillInstagram />
                                                    <AiFillLinkedin />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-card">
                                            <img src="assets/images/team3.jpg" alt="" />
                                            <div className="detail-box">
                                                <h5>Morco</h5>
                                                <h6> MBBS</h6>
                                                <div className="social_links">
                                                    <AiFillFacebook />
                                                    <AiFillTwitterCircle />
                                                    <AiFillInstagram />
                                                    <AiFillLinkedin />
                                                </div>
                                            </div>
                                        </div>
                                  </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Doctors





