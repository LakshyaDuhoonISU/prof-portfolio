import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackgroundGrid from './components/BackgroundGrid';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[--color-bg-primary] text-[--color-text-primary]">
      <BackgroundGrid />
      <ScrollProgress />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
