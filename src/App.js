import Menu from "./components/Layout/Menu.js"
import Footer from "./components/Layout/Footer.js";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'
import LearningStyle from "./views/LearningStyle.js";
import OriginPlace from "./views/OriginPlace.js";
import StudenGenre from "./views/StudentGenre.js";
import ProfessorType from "./views/ProfessorType.js";
import NetworkClass from "./views/NetworkClass.js";
import GuessLearningStyle from "./views/GuessLearningStyle.js";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Menu/>
          <Footer/>
          <Routes>
            <Route path="/learning-style" element={<LearningStyle />} />
            <Route path="/origin-place" element={<OriginPlace />} />
            <Route path="/student-genre" element={<StudenGenre />} />
            <Route path="/professor-type" element={<ProfessorType />} />
            <Route path="/network-class" element={<NetworkClass />} />
            <Route path="/guess-learning-style" element={<GuessLearningStyle />} />
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;