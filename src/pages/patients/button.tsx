import styled from 'styled-components';

interface ButtonProps {
  color: 'primary' | 'secondary';
}

const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 36px;
  background-color: ${({ color, theme }) =>
    color === 'primary' ? theme.colors.btnSuccess : theme.colors.btnSecondary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

export default Button;
