import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function AddContent({ data, removeData, handleUpdate }) {
  const [tasks, setTasks] = useState([]);

  function AddForm() {
    const addTask = (event) => {
      event.preventDefault();
      const taskInput = event.target[0].value;
      const dateInput = event.target[1].value;
      const importantInput = event.target[2].value;
      console.log(event)

      setTasks([
        ...tasks,
        {
          task: taskInput,
          date: dateInput,
          important: importantInput,
        },
      ]);

      fetch("http://localhost:3000/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: taskInput,
          date: dateInput,
          important: importantInput,
        }),
      })
        .then((response) => response)
        .then((data) => {
          console.log("Success:", data);
          handleUpdate();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log("your tasks are: ", tasks);
    };

    return (
      <>
        <Container className="d-flex justify-content-center crest">
          <Form className="form-buffer" onSubmit={addTask}>
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
    const removeTask = (index) => {
      setTasks((t) => t.filter((_, i) => i != index));
      handleUpdate();
    };

    const resultsMapping = tasks.map((result, index) => (
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
                removeTask(index);
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

  return (
    <>
      <AddForm />
      <Results />
    </>
  );
}
