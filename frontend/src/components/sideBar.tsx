import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function sideBar() {
  return (
    <div className="side-bar">
      <Container>
        <Row>
          <Col xs={2}>
            <img
              src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
              className="img-fluid"
            />
          </Col>
          <Col xs={4}><button className="modern-button">profile</button></Col>
          <Col xs={4}></Col>
          <Col xs={2}>
            <img
              src="https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096279_640.png"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row>
          
          <Col className="d-flex justify-content-center">
            <button className="modern-button padding1rem">search</button>
          </Col>
        </Row>
        <Row>
          
          <Col className="d-flex justify-content-center">
            <button className="modern-button padding1rem">inbox</button>
          </Col>
        </Row>
        <Row>
         
          <Col className="d-flex justify-content-center">
            <button className="modern-button padding1rem">content</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
