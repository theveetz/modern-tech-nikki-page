import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Column from './components/Column';
import Logos from './components/Logos';
import Section from './components/Section';
import './App.css'; // Create an App.css file if it doesn't exist

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <Column />
      <Analytics />
      <Logos />
      <Footer />
    </div>
  );
};

export default App;
