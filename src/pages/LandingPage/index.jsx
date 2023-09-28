import { DefaultTemplate } from "../../components/DefaultTemplate";
import About from "../../components/AboutSection/index";
import Banner from "../../components/BannerSection";
import Projects from "../../components/ProjectSection";
import Tech from "../../components/TechSection";


export const LandingPage = () => {
  return (
    <>
      <DefaultTemplate>
        <Banner />
        <About />
        <Tech />
        <Projects />
      </DefaultTemplate>
    </>
  );
};
