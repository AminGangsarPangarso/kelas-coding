import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col className="sosial">
                        <div className="sosial-footer ">
                            <h2 className="fw-bold">NGODING</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rem illo quos aliquid perspiciatis dignissimos pariatur quibusdam neque laudantium quas.</p>
                            <div className="contact">
                            <a href=""><i className="fa-brands fa-whatsapp">+62 081804828974</i></a>
                            <a href=""><i className="fa-regular fa-envelope">amindailylife1976@gmail.com</i></a>
                            </div>
                        </div>
                    </Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterComponent;

