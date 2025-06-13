import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExperiencesData } from "./ExperienceData";
import { ExperienceStyled } from "./Experience.styled";

const {
  Section,
  Title,
  CardContainer,
  Card,
  Header,
  Role,
  Company,
  Date,
  Function,
  ExtraFunctions,
  ToggleText,
} = ExperienceStyled;

export const Experience: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Experiencia</Title>
        <CardContainer>
          {ExperiencesData.map((exp, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={index}
                onClick={() => toggleCard(index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: false }}
              >
                <Header>
                  <Role>{exp.title}</Role>
                  <Company>{exp.company}</Company>
                  <Date>{exp.date}</Date>
                </Header>
                <Function>{exp.description}</Function>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ExtraFunctions>
                        {exp.functions.map((func, idx) => (
                          <li key={idx}>{func}</li>
                        ))}
                      </ExtraFunctions>
                    </motion.div>
                  )}
                </AnimatePresence>

                <ToggleText>{isOpen ? "Ver menos" : "Ver más"}</ToggleText>
              </Card>
            );
          })}
        </CardContainer>
      </motion.div>
    </Section>
  );
};
