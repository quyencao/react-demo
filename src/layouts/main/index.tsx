import { Dropdown } from 'reactstrap';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import {
  HeaderContainer,
  NavbarHeader,
  NavbarHeaderItem,
  NavbarBrandBox,
  ToggleMenuButton,
  ToggleMenuIcon,
  UserDropdownToggle,
  UserDropdownToggleIcon,
  UserDropdownMenu,
  UserDropdownMenuItem,
} from './styles/Header';
import { SideBarContainer } from './styles/SideBar';
import { MainContentContainer, PageContent } from './styles/MainContent';
import SideBarContent from './styles/SideBarContent';
import BarIcon from 'src/assets/images/bar-icon.svg';
import UserIcon from 'src/assets/images/user-icon.svg';

const LayoutContainer = styled.div`
  background-color: #f3f6f9;
`;

const Layout: React.FC = ({ children }): ReactElement => {
  const [isOpen, setOpen] = useState(false);

  const handleToggleOpenDropdown = () => {
    setOpen(!isOpen);
  };

  const handleMouseEnterDropdown = () => {
    setOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    setOpen(false);
  };

  return (
    <LayoutContainer>
      <HeaderContainer>
        <NavbarHeader>
          <NavbarHeaderItem className="d-flex">
            <NavbarBrandBox />
            <ToggleMenuButton size="sm" color="none" type="button">
              <ToggleMenuIcon src={BarIcon} />
            </ToggleMenuButton>
          </NavbarHeaderItem>
          <NavbarHeaderItem className="d-flex">
            <Dropdown
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
              toggle={handleToggleOpenDropdown}
              isOpen={isOpen}>
              <UserDropdownToggle tag="button" className="btn">
                <UserDropdownToggleIcon src={UserIcon} />
              </UserDropdownToggle>
              <UserDropdownMenu right>
                <UserDropdownMenuItem tag="button">
                  ログアウト
                </UserDropdownMenuItem>
              </UserDropdownMenu>
            </Dropdown>
          </NavbarHeaderItem>
        </NavbarHeader>
      </HeaderContainer>
      <SideBarContainer className="h-100">
        <SideBarContent />
      </SideBarContainer>
      <MainContentContainer>
        <PageContent>{children}</PageContent>
      </MainContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
