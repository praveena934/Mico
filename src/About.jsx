import { Link } from "react-router-dom"

function About() {
    return (
        <>
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="abtimg-box">
                                <img src="assets/images/about-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        About <span>Hospital</span>
                                    </h2>
                                </div>
                                <p>
                                    has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors
                                </p>
                                <Link href="/"> Read More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About