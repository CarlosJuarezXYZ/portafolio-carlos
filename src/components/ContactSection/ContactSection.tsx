/** @jsxImportSource @emotion/react */

import { motion } from "framer-motion";
import { Button, Input, Form, message } from "antd";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ContactSectionStyled } from "./ContactSection.styled";

const { Container, Title, StyledForm, Socials } = ContactSectionStyled;

const ContactSection = () => {
  const onFinish = () => {
    message.success("Mensaje enviado (simulado)");
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
          <Form.Item name="name" label="Nombre" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Correo"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="message"
            label="Mensaje"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </StyledForm>

        <Socials>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:tuemail@correo.com">
            <FaEnvelope />
          </a>
        </Socials>
      </motion.div>
    </Container>
  );
};

export default ContactSection;
