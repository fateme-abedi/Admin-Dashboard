import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import MainDash from './components/mainDash/MainDash'
import RightSide from './components/rightSide/RightSIde'
import './App.css'
function App(props) {
  return (
    <div className="App">
     <div className="AppGlass">
      <Sidebar/>
      <MainDash/>
     <RightSide/>
     </div>
    </div>
  );
}

export default App;