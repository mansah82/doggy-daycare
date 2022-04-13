import './App.css';
import Welcome from "./components/Welcome"
import Register from './components/Register';
import Info from './components/Info';
import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [activeDog, setActiveDog] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
      <main>
        <Router>
        <Routes>
         <Route exact path="/" element={
           <Welcome />
         } />
         <Route path="/register" element={<Register setDogInfo={setActiveDog}/>} />
        <Route path="/info" element={<Info activeDog={activeDog}/>}/>
        </Routes>
        </Router>
        </main>
      </header>
    </div>
  );
}
export default App;