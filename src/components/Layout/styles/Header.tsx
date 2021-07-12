import styled from 'styled-components';
import { Button, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1002;
  background-color: #ffffff;
`;

export const NavbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 56px;
  padding: 0 12px 0 0;
`;

export const NavbarHeaderItem = styled.div`
  height: 100%;
`;

export const NavbarBrandBox = styled.div`
  padding: 0 1.5rem;
  width: 250px;
  background-color: #343a3f;
`;

export const ToggleMenuButton = styled(Button)`
  height: 56px;
  box-shadow: none !important;
  border: 0;
  border-radius: 0px;
  padding: 0;
`;

export const ToggleMenuIcon = styled.img`
  display: block;
  margin-left: 32px;
  margin-top: 21.25px;
  margin-bottom: 21.25px;
`;

export const UserDropdownToggle = styled(DropdownToggle)`
  height: 56px;
  box-shadow: none !important;
  border: 0;
  border-radius: 0px;
  padding: 0;
`;

export const UserDropdownToggleIcon = styled.img`
  display: block;
  margin-top: 19px;
  margin-right: 19px;
  margin-bottom: 19px;
`;

export const UserDropdownMenu = styled(DropdownMenu)`
  width: 255px;
  transform: translate3d(-226px, 45px, 0px) !important;
`;

export const UserDropdownMenuItem = styled(DropdownItem)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #4f4f4f;
`;
