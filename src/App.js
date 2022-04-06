import './App.css';
import Welcome from "./components/Welcome"
import Register from './components/Register';
import Info from './components/Info';
import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  // const WELCOME = "welcome", REGISTER = "register", INFO = "info"
  // const [currentScreen, setCurrentScreen] = useState(WELCOME)
  
  //let content = null;

  // switch(currentScreen) {
  //   case WELCOME :
  //     content = <Welcome nextscreen={ () => setCurrentScreen(REGISTER)} />
  //     break;
  //   case REGISTER :
  //     content = <Register nextscreen={ () => setCurrentScreen(INFO)} />
  //     break
    
  //     default:
  //       content = <Info nextscreen={ () => setCurrentScreen(WELCOME)} />

  // }

  return (
    <div className="App">
      <header className="App-header">
      <main>
        <Router>
        <Routes>
         <Route exact path="/" element={
           <Welcome />
         } />
         <Route path="/register" element={
           <Register />
         } />
         
        {/* <Route path="/register/:showCaseDog" element={
          <Register />
        } />  */}
         <Route path="/info" element={
           <Info />
         } />
        </Routes>
        </Router>
        </main>
      </header>
      
    </div>
  );
}

export default App;
