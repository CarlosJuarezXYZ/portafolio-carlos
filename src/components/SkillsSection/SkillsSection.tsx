import React from "react";
import { Fade } from "react-awesome-reveal";
import { SkillsSectionStyled } from "./SkillsSection.styled";
import { skills } from "./Skills";

const {Section,Title,GridContainer,CategoryTitle,CategoryGrid,SkillCard,SkillLabel} = SkillsSectionStyled;

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills">
      <Fade triggerOnce>
        <Title>Habilidades</Title>
      </Fade>
      <GridContainer>
        <div>
          <CategoryTitle>Frontend</CategoryTitle>
          <CategoryGrid>
            {skills.frontend.map((skill, i) => (
              <SkillCard
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                viewport={{ once: false }}
              >
                {skill.icon}
                <SkillLabel>{skill.name}</SkillLabel>
              </SkillCard>
            ))}
          </CategoryGrid>
        </div>

        <div>
          <CategoryTitle>Backend</CategoryTitle>
          <CategoryGrid>
            {skills.backend.map((skill, i) => (
              <SkillCard
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: i * 0.05 }}
                viewport={{ once: false }}
                
              >
                {skill.icon}
                <SkillLabel>{skill.name}</SkillLabel>
              </SkillCard>
            ))}
          </CategoryGrid>
        </div>

        <div>
          <CategoryTitle>Base de Datos</CategoryTitle>
          <CategoryGrid>
            {skills.database.map((skill, i) => (
              <SkillCard
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: i * 0.05 }}
                viewport={{ once: false }}
              >
                {skill.icon}
                <SkillLabel>{skill.name}</SkillLabel>
              </SkillCard>
            ))}
          </CategoryGrid>
        </div>
      </GridContainer>
    </Section>
  );
};

export default SkillsSection;