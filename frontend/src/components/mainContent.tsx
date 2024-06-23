import Container from "react-bootstrap/Container";

export default function MainContent({ selectedOption }) {
  function Add({ title }) {
    return (
      <div>
        <h1 className="content-title">{title}</h1>
      </div>
    );
  }

  function Today({ title }) {
    return (
      <div>
        <h1 className="content-title">{title}</h1>
      </div>
    );
  }

  function Upcoming({ title }) {
    return (
      <div>
        <h1 className="content-title">{title}</h1>
      </div>
    );
  }

  function Search({ title }) {
    return (
      <div>
        <h1 className="content-title">{title}</h1>
      </div>
    );
  }

  function Inbox({ title }) {
    return (
      <div>
        <h1 className="content-title">{title}</h1>
      </div>
    );
  }

  let content;

  switch (selectedOption) {
    case "add":
      content = <Add title={selectedOption} />;
      break;
    case "today":
      content = <Today title={selectedOption} />;
      break;
    case "upcoming":
      content = <Upcoming title={selectedOption} />;
      break;
    case "search":
      content = <Search title={selectedOption} />;
      break;
    case "inbox":
      content = <Inbox title={selectedOption} />;
      break;
    default:
      content = <div></div>;
  }

  return (
    <div className="main-content">
      <Container className="d-flex justify-content-center">{content}</Container>
    </div>
  );
}
