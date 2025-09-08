import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Contact from './components/Contact';
import GameZone from './components/GameZone';
import Aboutus from './components/Aboutus';
import Programs from './components/Programs';
import Labs from './components/Labs';

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages with Header + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus"  element={<Aboutus/>}/>
           <Route path="/programs"  element={<Programs/>}/>
           <Route path="/labs"  element={<Labs/>}/>
        </Route>

        {/* GameZone has no Header/Footer */}
        <Route path="/gamezone" element={<GameZone />} />
      </Routes>
    </Router>
  );
}

export default App;
