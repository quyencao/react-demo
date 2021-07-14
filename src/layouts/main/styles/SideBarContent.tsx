import React, { useState, ReactElement } from 'react';
import { Collapse } from 'reactstrap';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import clsx from 'clsx';
import {
  SideBarMenuContainer,
  SideMenu,
  SideMenuLi,
  SideMenuButton,
  SideMenuLink,
} from './SideBar';

const SideBarContent: React.FC = (): ReactElement => {
  const [collapse, setCollapse] = useState(false);

  const toggleMenu = () => {
    setCollapse(!collapse);
  };

  return (
    <SideBarMenuContainer id="sidebar-menu">
      <SideMenu className="list-unstyled">
        <SideMenuLi>
          <SideMenuButton
            color="none"
            type="button"
            onClick={toggleMenu}
            className={clsx({ active: collapse })}>
            診療所
            <Icon
              className="side-menu-icon"
              path={mdiChevronDown}
              size={1}
              horizontal
              vertical
              rotate={collapse ? -180 : -90}
              color={collapse ? '#FFFFFF' : '#C2C7D0'}
            />
          </SideMenuButton>
          <Collapse isOpen={collapse}>
            <SideMenu className="sub-menu">
              <SideMenuLi>
                <SideMenuLink to="/">つくばみらい</SideMenuLink>
              </SideMenuLi>
              <SideMenuLi>
                <SideMenuLink to="/">いといがわ</SideMenuLink>
              </SideMenuLi>
            </SideMenu>
          </Collapse>
        </SideMenuLi>
        <SideMenuLi>
          <SideMenuLink to="/">アカウント一覧</SideMenuLink>
        </SideMenuLi>
        <SideMenuLi>
          <SideMenuLink to="/">患者インポート</SideMenuLink>
        </SideMenuLi>
      </SideMenu>
    </SideBarMenuContainer>
  );
};

export default SideBarContent;
