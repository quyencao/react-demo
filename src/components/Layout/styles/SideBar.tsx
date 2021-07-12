import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export const SideBarContainer = styled.div`
  width: 250px;
  z-index: 1001;
  background-color: #343a3f;
  bottom: 0;
  margin-top: 0;
  position: fixed;
  top: 56px;
`;

export const SideBarMenuContainer = styled.div`
  padding: 19px 0 30px 0;
`;

export const SideMenu = styled.ul`
  &.sub-menu {
    padding-left: 0;
  }
`;

export const SideMenuLi = styled.li`
  display: block;
  margin-left: 8px;
  margin-right: 8px;
`;

export const SideMenuLink = styled(Link)`
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #c2c7d0;
  text-decoration: none;
  height: 40px;
  padding-left: 16px;
  line-height: 40px;

  &:hover {
    color: #fff;
  }
`;

export const SideMenuButton = styled(Button)`
  box-shadow: none !important;
  border: 0;
  border-radius: 0px;
  padding: 0;
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #c2c7d0;
  text-decoration: none;
  width: 100%;
  text-align: left;
  height: 40px;
  padding-left: 16px;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #fff;
    background: #666d72;
    border-radius: 4px;
  }

  & .side-menu-icon {
    position: absolute !important;
    right: 21px !important;
    transition: all 0.3s;
  }
`;
