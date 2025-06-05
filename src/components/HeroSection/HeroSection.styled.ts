import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Section = styled.section`
  padding: 5rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
    @media (max-width: 500px) {
    margin-top:30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  max-width: 900px;
`;

const Avatar = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.background};
  @media (max-width: 440px) {
    width: 230px;
    height: 230px;
  }
`;

const Name = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 900;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  @media (max-width: 440px) {
      font-size: 1.6rem;
  }
  @media (max-width: 330px) {
      font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 700px;
  line-height: 1.6;
  text-align: justify;
`;

const Icons = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const TechIcon = styled(motion.div)`
  color: ${({ theme }) => theme.text};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.accent};
  }
`;

const Button = styled(motion.button)`
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
     background: ${({ theme }) => theme.buttonBackgroundHover};
  }
`;

export const HeroSectionStyled = {
 Section,Container,Avatar,Name,Title,Description,Icons,TechIcon,Button
};
