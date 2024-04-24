import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../components/Home';




function MyRoute() {
  return (
    <Router>
      <main className='content'>
       
        <section className='content-section'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route path="/WebResourceHub/dist/index.html" element={<Home/>} />
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default MyRoute;
