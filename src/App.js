import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Classes from './pages/Classes';
import Contact from './pages/Contact';
import TeacherProfile from './pages/TeacherProfile';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/WebTest" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/events" element={<Events />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/teacher/:id" element={<TeacherProfile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
