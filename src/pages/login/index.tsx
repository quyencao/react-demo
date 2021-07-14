import React, { ReactElement } from 'react';
import {
  Container,
  LogoContainer,
  FieldsContainer,
  Input,
  StyledLink,
  ButtonContainer,
  Button,
  Logo,
} from 'src/components/Form';
import LogoIcon from 'src/assets/images/logo.png';

const Login: React.FC = (): ReactElement => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={LogoIcon} title="logo" />
      </LogoContainer>
      <FieldsContainer>
        <Input type="text" placeholder="ログインID" />
        <Input type="password" placeholder="パスワード" autoComplete="off" />
      </FieldsContainer>
      <StyledLink to="/">ログインID・パスワードをお忘れの方はこちら</StyledLink>
      <ButtonContainer>
        <Button>ログイン</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Login;
