import Container from "react-bootstrap/Container";
import AddContent from "./add";

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
  const sidebarMapping = {
    add: AddContent,
  };

  

  let Content = () => {
    return <div> error not found</div>;
  };

  Content =
    sidebarMapping[selectedOption] ||
    (() => {
      return <div>ERRor page not found</div>;
    });

  //let content = sidebarMapping[add]
  /*
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
  */

  //}

  return (
    <>
      <div className="main-content">
      <div className="d-flex justify-content-center content-title">
              <h1>{selectedOption}</h1>
            </div>
            
            
            <Content />
            
            
          
        
      </div>
    </>
  );
}
