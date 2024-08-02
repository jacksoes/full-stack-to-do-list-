import { Container } from "react-bootstrap";
import LogInFrom from "../../reusable components/user log in/LogInForm";
import Button from "react-bootstrap/Button";
import { Color } from "p5";

const LogInSection = () => {
  return (
    <>
      <LogInFrom />
      
      <Container className="w-25 d-flex flex-column align-items-center justify-content-center" >
        <h1>or</h1>
        <Button variant="warning" className="w-75">Sign Up</Button>
      </Container>

      
    </>
  );
};

export default LogInSection;
