import './App.css';
import Welcome from "./components/Welcome"
import Register from './components/Register';
import Info from './components/Info';
import { useState } from 'react'

function App() {

  const WELCOME = "welcome", REGISTER = "register", INFO = "info"
  const [currentScreen, setCurrentScreen] = useState(WELCOME)
  
  let content = null;

  switch(currentScreen) {
    case WELCOME :
      content = <Welcome nextscreen={ () => setCurrentScreen(REGISTER)} />
      break;
    case REGISTER :
      content = <Register nextscreen={ () => setCurrentScreen(INFO)} />
      break
    
      default:
        content = <Info nextscreen={ () => setCurrentScreen(WELCOME)} />

  }

  return (
    <div className="App">
      <header className="App-header">
      <main>
        {content}
      </main>
      </header>
      
    </div>
  );
}

export default App;
