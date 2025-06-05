import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { darkTheme, darkThemeB } from "./features/theme/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { ProjectSection } from "./components/ProjectSection/ProjectSection";
import ContactSection from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";
import ParticlesBackground from "./components/ParticulesBackground/ParticlesBackground";
// import { ExperienceTimeline } from "./components/Experience/Experience";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import { Experience } from "./components/Experience/Experience";
// import { ExperienceCards } from "./components/Experience2/Experience2";
// import ExperienceAccordion from "./components/Experience/Experience";
// import { ExperienceCards } from "./components/Experience/Experience";

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : darkThemeB}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <ParticlesBackground />
        <HeroSection />
        <ProjectSection />
        <SkillsSection />
        {/* <ExperienceTimeline/> */}
        {/* <ExperienceCards/> */}
        {/* <ExperienceAccordion/> */}
        <Experience />
        <ContactSection />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
