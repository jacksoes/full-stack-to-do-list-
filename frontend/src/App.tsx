import { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./components/sideBar";
import MainContent from "./components/mainContent";

const App: React.FC = () => {
  const [data, setData] = useState();

  /*
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("error!!!", error));
  });
  */

  type optionType = "search" | "inbox" | "to do";

  const setContent = (optionSelected: optionType) => {
    
    setSelectedButton(optionSelected);


    /*
    fetch("http://localhost:3000/api", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "jack",
        age: 15
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });*/
  };

  const handleLogIn = () => {
    if (!isLoggedIn) logIn();
    else logOut();

    function logIn() {
      setIsLoggingIn(true);
    }

    function logOut() {
      setIsLoggingIn(false);
    }
  };

  const [selectedButton, setSelectedButton] = useState<optionType>();

  const [isLoggedIn, setIsLoggingIn] = useState<boolean>(false);

  return (
    <>
      <div className="page-container-flex-100">
        <SideBar
          onButtonClick={setContent}
          handleLogIn={handleLogIn}
          login={isLoggedIn}
        />
        <MainContent selectedOption={selectedButton} />
      </div>
    </>
  );
};

export default App;

//one div 20% sideBar
//one div 80% mainContent
