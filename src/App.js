import './App.css';
import Navigation from './components/navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <Router>
      <div className="app-container">
        <CustomCursor />
        <Navigation />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;