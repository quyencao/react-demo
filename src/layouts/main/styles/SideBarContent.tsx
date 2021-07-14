import React, { useState, ReactElement } from 'react';
import { Collapse } from 'reactstrap';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import clsx from 'clsx';
import * as SideBar from './SideBar';

const SideBarContent: React.FC = (): ReactElement => {
  const [collapse, setCollapse] = useState(false);

  const toggleMenu = () => {
    setCollapse(!collapse);
  };

  return (
    <SideBar.SideBarMenuContainer id="sidebar-menu">
      <SideBar.SideMenu className="list-unstyled">
        <SideBar.SideMenuLi>
          <SideBar.SideMenuButton
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
          </SideBar.SideMenuButton>
          <Collapse isOpen={collapse}>
            <SideBar.SideMenu className="sub-menu">
              <SideBar.SideMenuLi>
                <SideBar.SideMenuLink to="/">つくばみらい</SideBar.SideMenuLink>
              </SideBar.SideMenuLi>
              <SideBar.SideMenuLi>
                <SideBar.SideMenuLink to="/">いといがわ</SideBar.SideMenuLink>
              </SideBar.SideMenuLi>
            </SideBar.SideMenu>
          </Collapse>
        </SideBar.SideMenuLi>
        <SideBar.SideMenuLi>
          <SideBar.SideMenuLink to="/">アカウント一覧</SideBar.SideMenuLink>
        </SideBar.SideMenuLi>
        <SideBar.SideMenuLi>
          <SideBar.SideMenuLink to="/">患者インポート</SideBar.SideMenuLink>
        </SideBar.SideMenuLi>
      </SideBar.SideMenu>
    </SideBar.SideBarMenuContainer>
  );
};

export default SideBarContent;
