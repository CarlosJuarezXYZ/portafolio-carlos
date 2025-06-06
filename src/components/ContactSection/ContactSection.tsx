/** @jsxImportSource @emotion/react */

import { motion } from "framer-motion";
import { Button, Input,message } from "antd";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ContactSectionStyled } from "./ContactSection.styled";

const { Container, Title, StyledForm, Socials,StyledItem,InputStyled } = ContactSectionStyled;

const ContactSection = () => {
 

const onFinish = (values: unknown) => {
  const { name, email, message: userMessage } = values as { name: string; email: string; message: string };

  const whatsappNumber = "51982279718";
  const text = `Hola, soy ${name}.\nMi correo es: ${email}.\nMensaje: ${userMessage}`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  message.success("Mensaje enviado (simulado)");

  window.open(url, "_blank");
};


  return (
    <Container id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Contáctame</Title>
        <StyledForm layout="vertical" onFinish={onFinish}>
          <StyledItem name="name" label="Nombre" rules={[{ required: true,message:"Nombre es requerido"}]}>
            <InputStyled />
          </StyledItem>
          <StyledItem
            name="email"
            label="Correo"
            rules={[{ required: true, type: "email",message:"Correo no válido"}]}
          >
            <InputStyled />
          </StyledItem>
          <StyledItem
            name="message"
            label="Mensaje"
            rules={[{ required: true,message:"Mensaje es requerido"}]}
          >
            <Input.TextArea rows={4} />
          </StyledItem>
          <StyledItem>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </StyledItem>
        </StyledForm>

        <Socials>
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-ju%C3%A1rez-xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:carlostuna015@gmail.com">
            <FaEnvelope />
          </a>
        </Socials>
      </motion.div>
    </Container>
  );
};

export default ContactSection;
