import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useScrollAnimation from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  useScrollAnimation();

  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}

export default App;
