import { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./components/sideBar";
import MainContent from "./components/mainContent";

const App: React.FC = () => {
  //type optionType = "search" | "inbox" | "to do";

  const setContent = (optionSelected) => {
    setSelectedButton(optionSelected);
  };

  const handleLogIn = () => {
    setSelectedButton("login");

    
    //if (!isLoggedIn) logIn();
    //else logOut();

    function logIn() {
      setIsLoggingIn(true);
    }

    function logOut() {
      setIsLoggingIn(false);
    }
  };

  const [selectedButton, setSelectedButton] = useState();

  const [isLoggedIn, setIsLoggingIn] = useState<boolean>(false);

  return (
    <>
      <div className="page-container-flex-100">
        <SideBar
          setSelectedContent={setContent}
          handleLogIn={handleLogIn}
          login={isLoggedIn}
        />
        <MainContent selectedOption={selectedButton} />
      </div>
    </>
  );
};

export default App;

