import './App.css';
import IsTri from './component/IsTri';
import NavBar from './component/NavBar';
import Quiz from './component/Quiz';
import Hypotenuse from './component/Hypotenuse';
import Area from './component/Area';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <NavBar></NavBar>
      
        <Routes>
        <Route exact path="/"  element={<IsTri/>}/>
        <Route exact path="/Quiz" element={<Quiz/>}/>
        <Route exact path="/Hypotenuse" element={<Hypotenuse/>}/>
        <Route exact path="/Area" element={<Area/>}/>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
