import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Card = styled(motion.a)`
  display: block;
  background: ${({ theme }) => theme.cardBackground || "#fff"};
  color: inherit;
  border-radius: 12px;
  overflow: hidden;
  height: 325px;
  text-decoration: none;
  box-shadow: 0 4px 10px rgb(0 0 0 / 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  @media (max-width: 750px) {
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
`;

const Content = styled.div`
  padding: 1.2rem;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.3rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  margin-top: 0.5rem;
  opacity: 0.85;
`;

export const ProjectSectionStyled = {
  Section,
  Title,
  Grid,
  Card,
  Image,
  Content,
  ProjectTitle,
  Description,
};
