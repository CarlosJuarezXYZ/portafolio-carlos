// Header.styled.ts
import styled from "@emotion/styled";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1000;
  box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);

  @media (max-width: 768px) {
    // flex-direction: column;
    // align-items: flex-start;
    padding: 10px;
    
  }
`;

const Nav = styled.nav<{ isOpen?: boolean }>`
  display: flex;
  gap: 1rem;
  // border:1px solid green;
  @media (max-width: 768px) {
    gap: 0.5rem;
    display: ${({ isOpen }) => (isOpen ? "flex" : "flex")};
    flex-wrap: wrap;
    
  }
`;

const NavButton = styled(Button)`
  color: ${({ theme }) => theme.text};
  border: none;
  font-weight: 600;
  background: transparent;


  &:hover {
    color: ${({ theme }) => theme.hover} !important;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.hover} !important;
  }

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

const BurgerButton = styled(MenuOutlined)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    display: flex;
    align-self: flex-start;
  }
`;

export const HeaderStyled = {
  HeaderContainer,
  Nav,
  NavButton,
  ToggleContainer,
  BurgerButton,
};
