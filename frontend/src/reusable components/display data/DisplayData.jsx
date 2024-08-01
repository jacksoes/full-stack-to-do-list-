import "./DisplayData.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function DisplayData({data, removeData}){
    const dataMapping = data.map((dataObject, index) => (
        <Container
          key={index}
          className={`dataObject mt-2 ${
            dataObject.important === "true" ? "red-border" : "purple-border"
          }`}
        >
          <Row>
            <Col xxl={4} xs={9}>
              task: {dataObject.task}
            </Col>
            <Col xxl={2} xs={3}>
              due date: {dataObject.date}
            </Col>
            <Col xxl={1} xs={4}>
              important: {dataObject.important}
            </Col>
            <Col xxl={2} xs={5}></Col>
            <Col xxl={3} xs={3}>
              <Button
                className="btn-danger"
                onClick={(e) => {
                  {removeData(index)}
                }}
              >
                DEL
              </Button>
            </Col>
          </Row>
        </Container>
      ));

      return <>{dataMapping}</>
}