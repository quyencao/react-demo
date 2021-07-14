import styled from 'styled-components';
import { SideBarProps } from './types';

export const MainContentContainer = styled.div<SideBarProps>`
  height: 100vh;
  margin-left: ${({ isOpenMenu }) => (isOpenMenu ? '250px' : '0')};
  overflow: hidden;
  transition: all 0.5s ease;
`;

export const PageContent = styled.div`
  padding: 72px 16px 30px 16px;
`;
