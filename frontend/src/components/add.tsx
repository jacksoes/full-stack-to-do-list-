import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AddForm() {
  return (
    <div>
      <Form className="test">
        <Form.Group className="mb-3" controlId="Task">
          <Form.Label>Task:</Form.Label>
          <Form.Control type="text" placeholder="Enter task" />
          <Form.Text  className="text-muted">
          </Form.Text>
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
    </div>
  );
}
