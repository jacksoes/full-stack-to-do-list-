import Container from "react-bootstrap/Container";
import AddForm from "./add";

export default function MainContent({ selectedOption }) {
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
      content = <AddForm />;
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
    <>
      <div className="main-content d-flex justify-content-center align-items-center">
        <Container  className="d-flex justify-content-center">
          {content}
        </Container>
      </div>
    </>
  );
}
