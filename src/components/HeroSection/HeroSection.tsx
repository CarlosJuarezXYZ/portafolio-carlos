import React from "react";
import { HeroSectionStyled } from "./HeroSection.styled";
import { FaGithub, FaLinkedin, FaWhatsapp, FaFile } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const {
  Section,
  Container,
  Avatar,
  Name,
  Title,
  Description,
  Icons,
  TechIcon,
  Button,
} = HeroSectionStyled;
import { Typewriter } from "react-simple-typewriter";

export const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="home">
      <Container>
        <Avatar
          src="./images/perfil-about.png"
          alt="Carlos Juarez"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <Name
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Carlos Juarez
        </Name>
        <Title
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Typewriter
            words={[
              "Software Developer",
              "Frontend Engineer",
              "Backend Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </Title>
        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          ¡Hola! Soy desarrollador de software con más de 5 años de experiencia
          construyendo aplicaciones web modernas, escalables y centradas en el
          usuario. Trabajo con tecnologías como React,Angular, Node.js,
          TypeScript entre otras. Me destaco por mi enfoque colaborativo,
          habilidades de comunicación y compromiso.
        </Description>
        <Icons>
          <TechIcon whileHover={{ scale: 1.3 }}>
            <a
              href="mailto:carlostuna015@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail />
            </a>
          </TechIcon>
          <TechIcon whileHover={{ scale: 1.3 }}>
            <a
              href="https://www.linkedin.com/in/carlos-ju%C3%A1rez-xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </TechIcon>
          <TechIcon whileHover={{ scale: 1.3 }}>
            <a
              href="https://wa.me/51982279718"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </TechIcon>
          <TechIcon whileHover={{ scale: 1.3 }}>
            <a
              href="https://github.com/CarlosJuarezXYZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </TechIcon>
          <TechIcon whileHover={{ scale: 1.3 }}>
            <a href="../documents/cv-carlos-juarez-I.pdf" download>
              <FaFile />
            </a>
          </TechIcon>
        </Icons>
        <Button
          onClick={scrollToProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver proyectos
        </Button>
      </Container>
    </Section>
  );
};
