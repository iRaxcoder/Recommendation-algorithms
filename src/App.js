import Menu from "./components/Layout/Menu.js"
import Footer from "./components/Layout/Footer.js";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'
import LearningStyle from "./views/LearningStyle.js";
import OriginPlace from "./views/OriginPlace.js";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Menu/>
          <Footer/>
          <Routes>
            <Route path="/learning-style" element={<LearningStyle />} />
            <Route path="/origin-place" element={<OriginPlace />} />
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;