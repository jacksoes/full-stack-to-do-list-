import { Container, Row, Col, Button } from "react-bootstrap";

export default function TodayComponent({ data, removeData }) {
  function checkDateToday(dataItem) {
    const dataItemDate = new Date(dataItem.date);
    const dateToday = new Date();

    if (
      dataItemDate.getUTCFullYear() === dateToday.getUTCFullYear() &&
      dataItemDate.getUTCMonth() === dateToday.getUTCMonth() &&
      dataItemDate.getUTCDate() === dateToday.getUTCDate()
    )
      return true;
    else return false;
  }

  const filteredData = data.filter((d) => checkDateToday(d) === true);
  const resultsMapping = filteredData.map((result, index) => (
    <Container
      key={index}
      className={`results mt-2 ${
        result.important === "true" ? "red-border" : "purple-border"
      }`}
    >
      <Row className="results-item">
        <Col xxl={4} xs={9}>
          task: {result.task}
        </Col>
        <Col xxl={2} xs={3}>
          due date: {result.date}
        </Col>
        <Col xxl={1} xs={4}>
          important: {result.important}
        </Col>
        <Col xxl={2} xs={5}></Col>
        <Col xxl={3} xs={3}>
          <Button
            className="btn-danger"
            onClick={(e) => {
              removeData(index);
            }}
          >
            DEL
          </Button>
        </Col>
      </Row>
    </Container>
  ));

  return <>{resultsMapping}</>;
}
