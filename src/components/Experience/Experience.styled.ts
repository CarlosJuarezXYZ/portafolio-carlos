import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Section = styled.section`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 4rem 2rem;
  min-height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
   border-left: 4px solid #00d8ff;
`;

const Header = styled.div`
  margin-bottom: 0.5rem;
`;

const Role = styled.h3`
  font-size: 1.25rem;
  margin: 0;
`;

const Company = styled.p`
  margin: 0.2rem 0;
  color: #00d8ff;
  font-weight: bold;
`;

const Date = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`;

const Function = styled.p`
  margin: 0.5rem 0 1rem;
`;

const ExtraFunctions = styled.ul`
  margin: 0 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap:8px;
  padding-left: 1rem;
  list-style: disc;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
`;

const ToggleText = styled.p`
  text-align: center;
  margin-top: auto;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  user-select: none;
`;

export const ExperienceStyled = {
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
  ToggleText
};