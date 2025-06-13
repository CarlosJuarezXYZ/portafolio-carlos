import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.background};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  position: relative;
  @media (max-width: 510px) {
  padding: 1rem;
  gap: 10px;
  flex-direction: column;
  }
`;

const ButtonLike = styled.button<{ liked: boolean }>`
  cursor: pointer;
  border: none;
  padding: 0.4rem 1rem;
  font-size: 1.1rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ liked }) =>
    liked ? "rgba(17, 156, 236, 0.8)" : "rgba(26, 163, 243, 0.8)"};
  color: ${({ liked, theme }) => (liked ? "#fff" : theme.textSecondary)};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ liked, theme }) =>
      liked ? theme.primaryLight : theme.surface};
  }
    @media (max-width: 600px) {
   font-size: 18px;
  }
`;

const CopyrightText = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textSecondary};
   @media (max-width: 600px) {
  text-align: center
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.9;
  }
`;

export const FooterStyled = {
  FooterContainer,
  ButtonLike,
  CopyrightText,
  pulse,
};
