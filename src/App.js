import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home.js'
import Navbar from './Components/Navbar.js';
import Menu from './Components/Menu.js'
import About from './Components/About.js'
import Contact from './Components/Contact.js'

function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
