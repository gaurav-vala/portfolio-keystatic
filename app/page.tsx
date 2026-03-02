import BlogsSection from "./components/BlogsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import "./styles.css";

export default function Homepage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <BlogsSection />
      <Footer />
    </>
  );
}
