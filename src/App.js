import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Classes from './pages/Classes';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import TeacherProfile from './pages/TeacherProfile';

// delete this when you are done
import Readme from './pages/Readme';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/WebTest" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/events" element={<Events />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/teacher/:id" element={<TeacherProfile />} />
          <Route path="/" element={<Home />} />

          {/* delete this when you are done */}
          <Route path='/readme' element={<Readme />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
