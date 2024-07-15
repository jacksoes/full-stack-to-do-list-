import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function AddContent() {
  function AddForm() {
    const [tasks, setTasks] = useState([]);

    const onSubmit = (event) => {
      event.preventDefault();
      const taskInput = event.target[0].value;
      const dateInput = event.target[1].value;
      const importantInput = event.target[2].value;

      //console.log("tasks: ", tasks)

      setTasks([
        ...tasks,
        {
          task: taskInput,
          date: dateInput,
          important: importantInput,
        },
      ]);
      console.log("your tasks are: ", tasks);
    };

    return (
      <>
        <Container className="d-flex justify-content-center crest">
          <Form className="test" onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="Task">
              <Form.Label>Task:</Form.Label>
              <Form.Control type="text" placeholder="Enter task" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="deadline">
              <Form.Label>deadline:</Form.Label>
              <Form.Control type="date" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="deadline">
              <Form.Check type="checkbox" label="important" />
            </Form.Group>
            <Button variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </>
    );
  }

  function Results() {
    return (
      <Container className="results mt-5">
        <Row className="results-item">
          <Col xxl={4} xs={9}>
            walk the dog
          </Col>
          <Col xxl={2} xs={3}>
            7/15/24
          </Col>
          <Col xxl={1} xs={4}>
            important : true
          </Col>
          <Col xxl={2} xs={6}></Col>
          <Col xxl={3} xs={2}>
            del
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <AddForm />
      <Results />
    </>
  );
}
