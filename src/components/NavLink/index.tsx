import React, { ReactElement } from 'react';
import { StyledLink } from './styles';

const NavLink: React.FC = (): ReactElement => {
  return (
    <div>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </div>
  );
};

export default NavLink;
