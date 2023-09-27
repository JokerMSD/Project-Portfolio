import React from 'react';
import Header from './components/Header/index';
import Banner from './components/Banner/index';
import About from './components/About/index';
import Tech from './components/Tech/index';
import Projects from './components/Project/index';
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
