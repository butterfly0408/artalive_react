import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

// delete this when you are done
import Readme from './pages/Readme';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/WebTest" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* delete this when you are done */}
          <Route path='/readme' element={<Readme />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
