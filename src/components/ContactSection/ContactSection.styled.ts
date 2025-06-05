import styled from "@emotion/styled";
import { Form } from "antd";

const Container = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const StyledForm = styled(Form)`
  max-width: 500px;
  margin: 0 auto;

  .ant-input, .ant-input-textarea {
    background-color: ${({ theme }) => theme.card};
    border: none;
    color: ${({ theme }) => theme.text};
  }

  .ant-input:focus, .ant-input-textarea:focus {
    border: 1px solid ${({ theme }) => theme.background};
    box-shadow: none;
  }

  .ant-btn {
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
    color: #fff;
    border: none;
  }
`;

const Socials = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.text};
    font-size: 2rem;

    &:hover {
      color: ${({ theme }) => theme.hovver};
    }
  }
`;

export const ContactSectionStyled = {
  Container,
  Title,
  StyledForm,
  Socials
};