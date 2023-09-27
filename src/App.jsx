import React from 'react';
import Header from './components/Header/index';
import Banner from './components/BannerSection/index';
import About from './components/AboutSection/index';
import Tech from './components/TechSection/index';
import Projects from './components/ProjectSection/index';
import Footer from './components/Footer/index';

function App() {


  return (
    <>
     <Header />
      <main>
        <Banner />
        <About />
        <Tech />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
