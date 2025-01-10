import React from "react";

// import "../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { reader } from "../../reader";

const About = async () => {
  const aboutme = await reader.singletons.about.read();

  // console.log(aboutme?.description.);

  return (
    <>
      <section className="min-h-[calc(100vh-236px)]">
        <p>coming soon...</p>
      </section>
    </>
  );
};

export default About;
