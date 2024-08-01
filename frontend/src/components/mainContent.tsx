import { useState, useEffect } from "react";

import AddContent from "./side bar options/AddContent";
import TodayComponent from "./side bar options/TodayComponent";
import UpcomingComponent from "./side bar options/UpcomingComponent";
import SearchComponent from "./side bar options/SearchComponent";
import ImportantComponent from "./side bar options/importantComponent";

import sortByDate from "../utils/sortByDate.js";
import getData from "../utils/getData.js";

interface task{
  task: string;
  date: string;
  important: string;
}

interface optionProps {
  selectedOption: string;
}

const MainContent: React.FC<optionProps> = ({ selectedOption }) => {
  const sidebarMapping = {
    add: AddContent,
    today: TodayComponent,
    upcoming: UpcomingComponent,
    search: SearchComponent,
    important: ImportantComponent,
  };

  

  const [data, setData] = useState<task[]>([]);

  const [updateTrigger, setUpdateTrigger] = useState<number>(0);

  const handleUpdate = () => {
    setUpdateTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    getData("http://localhost:3000/task", setData);
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

  let Content =
    sidebarMapping[selectedOption] ||
    (() => {
      return (
        <UpcomingComponent
          removeData={removeData}
          data={sortedData}
          handleUpdate={handleUpdate}
        />
      );
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
};

export default MainContent;
