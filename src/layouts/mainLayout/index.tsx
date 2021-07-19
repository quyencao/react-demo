import React, { ReactElement } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainLayout: React.FC = ({ children }): ReactElement => {
  return <Container>{children}</Container>;
};

export default MainLayout;
