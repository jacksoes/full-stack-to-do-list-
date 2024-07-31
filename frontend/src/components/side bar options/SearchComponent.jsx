import SearchBar from "../search bar/SearchBar";
import { Container, Row, Col, Button } from "react-bootstrap";

import { useState, useEffect } from "react";

export default function SearchComponent({ data, removeData }) {

    const [searchBarState, setSearchBarState] = useState("");
    const [searchedData, setSearchedData ] = useState(data);

    useEffect(() => {
        setSearchedData(data.filter(d => d.task.indexOf(searchBarState) !== -1))
    }, [searchBarState])


    const resultsMapping = searchedData.map((result, index) => (
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

  return (
    <>
      <SearchBar setSearchBarState={setSearchBarState} />
      {resultsMapping}
    </>
  );
}
