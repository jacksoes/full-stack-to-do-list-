import DisplayData from "../../reusable components/display data/DisplayData";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";

interface AddContentProps{
  removeData: (index: number) => void;
  handleUpdate: (index: void) => void;
}

const AddContent: React.FC<AddContentProps> = ({ removeData, handleUpdate }) => {
  const [tasks, setTasks] = useState([]);

  const removeTask = (index) => {
    setTasks((t) => t.filter((_, i) => i != index));
    removeData(index);
  };

  function AddForm() {
    const [checked, setChecked] = useState(false);

    const handleCheck = (event) => {
      setChecked(event.target.checked);
    };

    const addTask = (event) => {
      event.preventDefault();
      
      const taskInput = event.target[0].value;
      const dateInput = event.target[1].value;
      const importantInput = checked.toString();

      //interface for tasks
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
        <Container className="d-flex justify-content-center">
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
              <Form.Check
                type="checkbox"
                label="important"
                checked={checked}
                onChange={handleCheck}
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </>
    );
  }

 

  return (
    <>
      <AddForm />
      <DisplayData data={tasks} removeData={removeTask}  />
    </>
  );
}


export default AddContent;