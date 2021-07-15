import styled from 'styled-components';

const Title = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.globalDark};
`;

export default Title;
