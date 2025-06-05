// Header.tsx
import React, { useState } from "react";
import { Switch } from "antd";
import { HeaderStyled } from "./Header.styled";


interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const {
  HeaderContainer,
  Nav,
  NavButton,
  ToggleContainer,
} = HeaderStyled;

export const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav isOpen={menuOpen}>
        <NavButton type="text" onClick={() => scrollToSection("home")}>
          Inicio
        </NavButton>
        <NavButton type="text" onClick={() => scrollToSection("projects")}>
          Proyectos
        </NavButton>
        <NavButton type="text" onClick={() => scrollToSection("skills")}>
          Habilidades
        </NavButton>
        <NavButton type="text" onClick={() => scrollToSection("about")}>
          Acerca
        </NavButton>
      </Nav>

      <ToggleContainer>
        <span>{isDark ? "Oscuro" : "Claro"}</span>
        <Switch checked={isDark} onChange={toggleTheme} />
      </ToggleContainer>
    </HeaderContainer>
  );
};
