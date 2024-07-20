import Container from "react-bootstrap/Container";

import AddContent from "./side bar options/AddContent";
import TodayComponent from "./side bar options/TodayComponent";
import UpcomingComponent from "./side bar options/UpcomingComponent";
import SearchComponent from "./side bar options/SearchComponent";
import CompletedComponent from "./side bar options/CompletedComponent";
import InboxComponent from "./side bar options/InboxComponent";

export default function MainContent({ selectedOption }) {
  const sidebarMapping = {
    add: AddContent,
    today: TodayComponent,
    upcoming: UpcomingComponent,
    search: SearchComponent,
    completed: CompletedComponent,
    inbox: InboxComponent,
  };

  let Content = () => {
    return <div> error not found</div>;
  };

  Content =
    sidebarMapping[selectedOption] ||
    (() => {
      return <div>ERRor page not found</div>;
    });

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
