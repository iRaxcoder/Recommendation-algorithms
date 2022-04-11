import Menu from "./components/Layout/Menu.js"
import Footer from "./components/Layout/Footer.js";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'
import LearningStyle from "./views/LearningStyle.js";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Menu/>
          <Footer/>
          <Routes>
            <Route path="/Learning-style" element={<LearningStyle />} />
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;