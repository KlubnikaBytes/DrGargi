import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Just keeping it for any fallback

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
