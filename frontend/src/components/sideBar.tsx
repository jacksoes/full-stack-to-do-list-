import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

export default function sideBar({ onButtonClick, login, handleLogIn }) {
  const options: string[] = ["add", "today", "upcoming", "search", "inbox"];

  function ProfileSection() {
    return (
      <Row>
        <Col xs={2}>
          <img
            src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
            className="img-fluid"
          />
        </Col>
        <Col xs={4}>
          <button className="modern-button d-flex justify-content-center">
            profile
          </button>
        </Col>
        <Col xs={4}></Col>
        <Col xs={2}>
          <img
            src="https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096279_640.png"
            className="img-fluid"
          />
        </Col>
      </Row>
    );
  }

  

  function SideBarOptions({ options}) {
    return options.map((option: string, index: number) => (
      <Row>
        <button className="modern-button padding1rem" onClick={() => onButtonClick(option)} >
          <Col className="d-flex justify-content-center" key={index}>
            {option}
          </Col>
        </button>
      </Row>
    ));
  }

  function LogInSection({logInOption}) {
    return (
      <Row className="d-flex align-items-end">
        <button className="modern-button" onClick = {() => handleLogIn()}>
          <Col>{logInOption}</Col>
        </button>
      </Row>
    );
  }

  let profileSec = <> </>;
  let loginSec =<LogInSection logInOption="log in" />

  if (login)
    {
    profileSec = <ProfileSection />
    loginSec = <LogInSection logInOption="log out" />
    }


  return (
    <div className="side-bar">
      <Container>
        {profileSec}
        <SideBarOptions options={options} />
      </Container>
      <Container className="d-flex flex-column justify-content-end flex-grow95">
        {loginSec}
      </Container>
    </div>
  );
}
