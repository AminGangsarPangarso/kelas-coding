import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
    return (
        <div className="footer py-5">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col lg="5" className="" >
                        <div className="sosial-footer ">
                            <h3 className="fw-bold">NGODING</h3>
                            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rem illo quos aliquid perspiciatis dignissimos pariatur quibusdam neque laudantium quas.</p>
                            <div className="no mb-1 mt-4">
                                <Link className="text-decoration-none"><i className="fa-brands fa-whatsapp"></i>
                                    <p className="m-0">+62 81804838974</p>
                                </Link>
                                <div className="email">
                                    <Link className="text-decoration-none"><i className="fa-regular fa-envelope"></i>
                                        <p className="m-0">amindailylife1976@gmail.com</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column col-lg-2 mt-lg-0 mt-5">
                        <h5 className="fw-bold">Menu</h5>
                        <Link to="/" >Home</Link>
                        <Link to="kelas" >Kelas</Link>
                        <Link to="testimonial">Testimonial</Link>
                        <Link to="faq"> FAQ</Link>
                        <Link to="syaratketen">Syarat & Ketentuan</Link>
                    </Col>
                    <Col lg="4" className="mt-lg-0 mt-5">
                        <h5 className="fw-bold mb-1">Subscribe untuk info Menarik</h5>
                        <div className="subscribe">
                            <input type="text" name="" id="" placeholder="subcribe..." />
                            <button className="rounded-end rounded-0">Subscribe</button>
                        </div>
                        <div className="social mt-3">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-youtube"></i>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className="text-center px-md-0 px-3">© Copyright {new Date().getFullYear()} by <span className="fw-bold"> Amin Gangsar Pangarso</span> , All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterComponent;

