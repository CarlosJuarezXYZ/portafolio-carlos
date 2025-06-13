import React from "react";
import { motion } from "framer-motion";
import { ProjectSectionStyled } from "./ProjectSection.styled";
import { PROJECTS } from "./project";

const {
  Section,
  Title,
  Grid,
  Card,
  Image,
  Content,
  ProjectTitle,
  Description,
} = ProjectSectionStyled;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MotionGrid = motion(Grid);

export const ProjectSection: React.FC = () => {
return (
    <Section id="projects">
      <Title>Proyectos Destacados</Title>

      <MotionGrid
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {PROJECTS.map((project) => (
          <Card
            key={project.id}
            variants={cardVariants}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={project.image} alt={project.title} />
            <Content>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
            </Content>
          </Card>
        ))}
      </MotionGrid>
    </Section>
  );
};
