import React, { ReactElement } from 'react';
import styled from 'styled-components';
import SelectIcon from 'src/assets/images/select-icon.svg';
import ReactSelect, { OptionTypeBase } from 'react-select';

const DropdownIndicator = () => {
  return <img src={SelectIcon} width="18" />;
};

const StyledSelect = styled(ReactSelect)`
  width: 200px;
  height: 36px;

  & .react-select__indicators img {
    margin-right: 12px;
    display: inline-block;
  }

  & .react-select__value-container {
    padding: 2px 10px;
  }

  & .react-select__control {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors.border};

    &:hover {
      border-color: ${({ theme }) => theme.colors.border};
    }
  }

  & .react-select__menu {
    margin-top: 2px;
    border: 1px solid #dfdfdf;
    border-top: 0;
    box-shadow: none;
  }

  & .react-select__menu-list {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  & .react-select__option {
    height: 32px;
    padding: 3px 12px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
  }
`;

const Select: React.FC<OptionTypeBase> = (props): ReactElement => {
  return (
    <StyledSelect
      {...props}
      classNamePrefix="react-select"
      components={{
        DropdownIndicator: DropdownIndicator,
        IndicatorSeparator: null,
      }}
    />
  );
};

export default Select;
