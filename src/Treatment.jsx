import { Link } from "react-router-dom"

function Treatment() {
    return (
        <>
            <main>
                <section className="treatment_section layout_padding">
                    <div className="container">
                        <div className="side_img">
                            <img src="assets/images/treatment-side-img.jpg" alt="" />
                        </div>
                        <div className="container">
                            <div className="heading_container">
                                <h2> Hospital <span>Treatment</span></h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src="assets/images/t1.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h4> Nephrologist Care</h4>
                                            <p> alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                                            <Link href="/"> Read More</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src="assets/images/t2.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h4> Eye Care </h4>
                                            <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything </p>
                                            <Link href="/">Read More</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src="assets/images/t3.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h4>Pediatrician Clinic</h4>
                                            <p>
                                                alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything
                                            </p>
                                            <Link href="/">Read More</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src="assets/images/t4.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h4>Parental Care</h4>
                                            <p>
                                                alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything
                                            </p>
                                            <Link href="/"> Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Treatment