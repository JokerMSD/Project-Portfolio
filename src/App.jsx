import React from 'react';
import Header from './data/Header';
import Banner from './data/Banner';
import About from './data/About';
import Tech from './data/Tech';
import Projects from './data/ProjectSection';
import Footer from './data/Footer';

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
