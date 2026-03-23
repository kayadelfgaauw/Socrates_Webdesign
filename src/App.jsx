import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// Using lazy loading or direct imports; for now direct imports to keep it simple
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Methodology from './pages/Methodology';
import Philosophy from './pages/Philosophy';
import Contact from './pages/Contact';
import AlgemeneVoorwaarden from './pages/AlgemeneVoorwaarden';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/werk" element={<Portfolio />} />
          <Route path="/formule" element={<Methodology />} />
          <Route path="/filosofie" element={<Philosophy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
