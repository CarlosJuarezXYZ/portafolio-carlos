import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme?.text};
  padding-bottom: 0.3rem;
  width: 100%;
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme?.background};
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  color: ${({ theme }) => theme?.text || "#eee"};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

const SkillLabel = styled.span`
  margin-top: 0.5rem;
  font-size: 0.85rem;
`;

export const SkillsSectionStyled = {
  Section,Title,GridContainer,CategoryGrid,CategoryTitle,SkillCard,SkillLabel
};
