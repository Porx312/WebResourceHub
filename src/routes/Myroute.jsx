import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../components/Home';
import Donate from '../components/Donate';
import Collaborar from '../components/Collaborar';
import NotFound from '../components/NotFound';
import Favorite from '../components/Favorite';
import About from '../components/About';
import Contact from '../components/Contact';




function MyRoute() {
  return (
    <Router>
      <main className='content'>
        <section className='menu'>
          <nav>
            <h2>WebResourceHub</h2>
            <ul>
              <li><Link to="/Home"><i className="bi bi-house-door"></i> Home</Link></li>
              <li><Link to="/donate"><i className="bi bi-wallet"></i> Donate</Link></li>
              <li><Link to="/collaborar"><i className="bi bi-github"></i> Collaborar</Link></li>
              <li><Link to="/contact"><i className="bi bi-person-rolodex"></i> Contact</Link></li>
              <li><Link to="/favorite"><i className="bi bi-star-fill"></i> Favorite</Link></li>
              <li><Link to="/about"><i className="bi bi-info-circle"></i> About</Link></li>
            </ul>
          </nav>
        </section>
        <section className='content-section'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/collaborar" element={<Collaborar/>} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/favorite" element={<Favorite/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default MyRoute;
