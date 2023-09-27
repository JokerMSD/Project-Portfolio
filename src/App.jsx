import React from 'react';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import About from '../src/components/About';
import Tech from '../src/components/Tech';
import Projects from '../src/components/ProjectSection';
import Footer from '../src/components/Footer';

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
