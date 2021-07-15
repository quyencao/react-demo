import styled from 'styled-components';
import React, { ReactElement } from 'react';
import SearchIcon from 'src/assets/images/search-icon.svg';

const Container = styled.div`
  width: 220px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 36px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 12px;

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.txtPlaceholder};
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 12px;
  top: 9.5px;
`;

const SearchTextbox: React.FC<React.HTMLAttributes<HTMLInputElement>> = (
  props
): ReactElement => {
  return (
    <Container>
      <Input {...props} />
      <Icon src={SearchIcon} />
    </Container>
  );
};

export default SearchTextbox;
