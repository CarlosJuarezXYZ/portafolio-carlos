import styled from "@emotion/styled";
import { Form,Input } from "antd";

const Container = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:first-child {
    border-bottom: 4px solid  #00d8ff;
    border-top: 4px solid  #00d8ff;
    border-radius: 12px;
    width: 600px;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const StyledForm = styled(Form)`
  max-width: 500px;
  margin: 0 auto;

  .ant-input,
  .ant-input-textarea {
    background-color: ${({ theme }) => theme.card};
    border: none;
    color: ${({ theme }) => theme.text};
  }

  .ant-input:focus,
  .ant-input-textarea:focus {
    border: 1px solid ${({ theme }) => theme.background};
    box-shadow: none;
  }

  .ant-btn {
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
    color: #fff;
    border: none;
  }
`;

const StyledItem = styled(Form.Item)`
  & label {
    color: ${({ theme }) => theme.text} !important;
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

const InputStyled = styled(Input)`
 background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.background || "#ccc"} !important;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.background || "rgba(0, 0, 0, 0.1)"};
  }

  &.ant-input-status-error {
    background-color: ${({ theme }) => theme.background2  || "#fff"} !important;
    color: ${({ theme }) => theme.background || "#ccc"} !important;
    font-weight: 700;
    border-color: ${({ theme }) => theme.error || "#ff4d4f"} !important;
  }

  &.ant-input-status-error + .ant-form-item-explain {
    color: ${({ theme }) => theme.background || "#ff4d4f"};
    font-weight: 500;
  }
  `

export const ContactSectionStyled = {
  Container,
  Title,
  StyledForm,
  Socials,
  StyledItem,
  InputStyled
};
