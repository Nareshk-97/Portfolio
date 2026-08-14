import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Certifications from "./components/Certifications";


import "./App.css";

function App() {
  return (
    <div className="app">
      <CustomCursor />

      {/* Page entrance */}
      <motion.div
        className="page-loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "easeInOut",
        }}
        style={{
          pointerEvents: "none",
        }}
      >
        <motion.div
          className="loader-logo"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          Naresh<span>.</span>
        </motion.div>

        <motion.div
          className="loader-line"
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        />
      </motion.div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;