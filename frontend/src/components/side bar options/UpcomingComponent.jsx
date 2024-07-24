import { useEffect, useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function UpcomingComponent({ data, removeData, handleUpdate}) {
   

  const resultsMapping = data.map((result, index) => (
    <Container key={index} className="results mt-2">
      <Row className="results-item">
        <Col xxl={4} xs={9}>
          task: {result.task}
        </Col>
        <Col xxl={2} xs={3}>
          due date: {result.date}
        </Col>
        <Col xxl={1} xs={4}>
          {result.important}
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
