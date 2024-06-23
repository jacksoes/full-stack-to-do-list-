import { useState } from 'react';
import './App.css'
import SideBar from './components/sideBar'
import MainContent from './components/mainContent'


const App: React.FC = () => {

  type optionType = "search" | "inbox" | "to do";

  const setContent = (optionSelected: optionType) =>{
    console.log(optionSelected)
    setSelectedButton(optionSelected);
  }

  const handleLogIn = () =>{
    if (!isLoggedIn)
      logIn()
    else
      logOut()
      

      function logIn(){
        setIsLoggingIn(true);


      }

      function logOut(){
        setIsLoggingIn(false)

      }
  }




  const [selectedButton, setSelectedButton] = useState<optionType>();

  const [isLoggedIn, setIsLoggingIn] = useState<boolean>(false);

 

  return (
    <>
      <div className='page-container-flex-100'>
      <SideBar onButtonClick={setContent} handleLogIn={handleLogIn} login={isLoggedIn} />
      <MainContent selectedOption={selectedButton} />
      </div>
    </>
  )
}

export default App


//one div 20% sideBar
//one div 80% mainContent