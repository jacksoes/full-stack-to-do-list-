import './App.css'
import SideBar from './components/sideBar'
import MainContent from './components/mainContent'

function App() {
 

  return (
    <>
      <div className='page-container'>
      <SideBar />
      <MainContent />
      </div>
    </>
  )
}

export default App


//one div 20% sideBar
//one div 80% mainContent