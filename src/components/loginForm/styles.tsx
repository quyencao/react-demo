import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  width: 255px;
  margin: 0 auto 40px;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
`;

export const FieldsContainer = styled.div`
  width: 255px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  height: 43px;
  background: #ffffff;
  border: 1px solid #ced4da;
  box-sizing: border-box;
  border-radius: 4.8px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  padding-left: 16px;
`;

export const StyledLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #1c7fa9;
`;

export const ButtonContainer = styled.div`
  width: 255px;
  height: 46px;
  margin: 20px auto 0;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: #1a9f84;
  border: none;
  border-radius: 4.8px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  cursor: pointer;
`;
