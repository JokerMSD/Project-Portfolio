import About from "../../components/AboutSection";
import Banner from "../../components/BannerSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/ProjectSection";
import Tech from "../../components/TechSection";


export const LandingPage = () => {
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
  );
};
