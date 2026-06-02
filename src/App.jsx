import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import CookieBanner from './components/CookieBanner.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Community from './pages/Community.jsx';
import Contact from './pages/Contact.jsx';
import CoastalLiving from './pages/CoastalLiving.jsx';
import BeachRetirementGuides from './pages/BeachRetirementGuides.jsx';
import OceanfrontTravel from './pages/OceanfrontTravel.jsx';
import RetirementWellness from './pages/RetirementWellness.jsx';
import TropicalHomeDesign from './pages/TropicalHomeDesign.jsx';
import ActiveSeniorLifestyle from './pages/ActiveSeniorLifestyle.jsx';
import Privacy from './pages/legal/Privacy.jsx';
import Terms from './pages/legal/Terms.jsx';
import Refund from './pages/legal/Refund.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-ocean-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coastal-living" element={<CoastalLiving />} />
          <Route path="/beach-retirement-guides" element={<BeachRetirementGuides />} />
          <Route path="/oceanfront-travel" element={<OceanfrontTravel />} />
          <Route path="/retirement-wellness" element={<RetirementWellness />} />
          <Route path="/tropical-home-design" element={<TropicalHomeDesign />} />
          <Route path="/active-senior-lifestyle" element={<ActiveSeniorLifestyle />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/refund" element={<Refund />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
