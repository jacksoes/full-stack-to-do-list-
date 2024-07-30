import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

import AddContent from "./side bar options/AddContent";
import TodayComponent from "./side bar options/TodayComponent";
import UpcomingComponent from "./side bar options/UpcomingComponent";
import SearchComponent from "./side bar options/SearchComponent";
import ImportantComponent from "./side bar options/importantComponent";

export default function MainContent({ selectedOption }) {
  const sidebarMapping = {
    add: AddContent,
    today: TodayComponent,
    upcoming: UpcomingComponent,
    search: SearchComponent,
    important: ImportantComponent,
  };

  const [data, setData] = useState([]);

  function sortByDate(objArr) {
    const sortedData = objArr.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    return sortedData;
  }

  const [updateTrigger, setUpdateTrigger] = useState(0);

  const handleUpdate = () => {
    setUpdateTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    fetch("http://localhost:3000/task")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) =>
        console.error("error retrieving tasks to mainComponent:", error)
      );
  }, [updateTrigger]);

  const removeData = (index) => {
    setData((d) => d.filter((_, i) => i !== index));

    fetch("http://localhost:3000/taskRemove", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        task: data[index].task,
        date: data[index].date,
        important: data[index].important,
      }),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log(data);
        handleUpdate();
      })
      .catch((err) => console.log(err));
  };

  let Content = () => {
    return <div> error not found</div>;
  };

  Content =
    sidebarMapping[selectedOption] ||
    (() => {
      return <div>ERRor page not found</div>;
    });

  const sortedData = sortByDate(data);
  return (
    <>
      <div className="main-content">
        <div className="d-flex justify-content-center content-title">
          <h1>{selectedOption}</h1>
        </div>
        <Content
          removeData={removeData}
          data={sortedData}
          handleUpdate={handleUpdate}
        />
      </div>
    </>
  );
}
