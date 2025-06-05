import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FooterStyled } from "./Footer.styled";

const { FooterContainer, ButtonLike, CopyrightText, pulse } = FooterStyled;

const HeartIcon = styled(FaHeart)<{ liked: boolean }>`
  animation: ${pulse} 1s ease-in-out;
  color: ${({ liked }) => (liked ? "#E63946" : "inherit")};
`;

const HeartIconBroken = styled(FaHeartBroken)<{ liked: boolean }>`
  animation: ${pulse} 1s ease-in-out;
  color: ${({ liked }) => (liked ? "#E63946" : "inherit")};
`;

export const Footer: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const theme = useTheme();

  const handleLikeToggle = () => {
    if (!liked) {
      setLiked(true);
      toast.success("¡Gracias por tu like! No dudes en contactarme.", {
        autoClose: 1500,
        transition: Slide,
        position: "top-center",
        hideProgressBar: true,
        closeOnClick: true,
        theme: "dark",
        icon: <HeartIcon liked={true} />,
      });
    } else {
      setLiked(false);
      toast.info("¡Me rompes el corazón!", {
        autoClose: 1500,
        transition: Slide,
        position: "top-center",
        hideProgressBar: true,
        closeOnClick: true,
        theme: "dark",
        icon: <HeartIconBroken liked={true} />,
      });
    }
  };

  return (
    <FooterContainer>
      <ButtonLike onClick={handleLikeToggle} liked={liked}>
        <HeartIcon liked={liked} />
        {liked ? "Me gusta" : "Like"}
      </ButtonLike>

      <CopyrightText>
        © {new Date().getFullYear()} Carlos - Todos los derechos reservados
      </CopyrightText>

      <ToastContainer
        limit={1}
        newestOnTop
        pauseOnHover={false}
        draggable={false}
        closeButton={false}
        toastStyle={{
          backgroundColor: theme.background,
          color: theme.text,
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      />
    </FooterContainer>
  );
};
