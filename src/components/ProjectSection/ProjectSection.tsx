import React from "react";
import { Fade } from "react-awesome-reveal";
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

export const ProjectSection: React.FC = () => {
  return (
    <Section id="projects">
      <Fade triggerOnce>
        <Title>Proyectos Destacados</Title>
      </Fade>
      <Grid>
        {PROJECTS.map((project) => (
          <Card
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image src={project.image} alt={project.title} />
            <Content>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};
