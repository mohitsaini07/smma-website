// src/App.jsx
import { useState, useEffect } from "react";
import Testimonials from "./pages/testimonials";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Contact from "./pages/contact";
import PortfolioPage from "./pages/portfolioPage";
import Services from "./pages/service";
import Thumbnail from "./pages/thumbnail";
import Loader from "./components/Loader";
import { Phone } from "lucide-react";
import Workflow from "./pages/workflow";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white font-rubik">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            <a href="https://calendly.com/mayank938988/30min" target="_blank">
              <div className="fixed sm:bottom-6 sm:right-10 animate-bounce bottom-4 right-6 z-20 border-3 shadow-indigo-500 transition-all duration-200 ease-in-out border-indigo-400 cursor-pointer p-4 bg-indigo-300 rounded-full shadow-lg flex items-center justify-center">
                <Phone className="text-white" size={18} />
              </div>
            </a>
            <Header />
            <Hero />
            <Services />
            <PortfolioPage />
            <Thumbnail />
            <Workflow />
            <Showcase />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
