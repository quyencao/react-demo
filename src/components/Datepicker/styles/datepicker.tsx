import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  & .react-datepicker {
    border-radius: 3px;
    border: 1px solid #c4c4c4;
  }

  & .react-datepicker__day--highlighted,
  .react-datepicker__day--selected {
    background-color: #1a9f84;
    color: #fff;
    border-radius: 2px;
  }

  & .react-datepicker__day--outside-month {
    color: #a2a9af;
  }

  & .react-datepicker__header {
    background-color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #4f4f4f;
    padding: 0;
    border-bottom: 0;
  }

  & .react-datepicker__current-month {
    height: 35px;
    padding-top: 0;
    line-height: 35px;
  }

  &
    .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    border-bottom-color: #fff;
  }

  & .react-datepicker__day-names {
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: 0;
    border-top: 2px solid #d9dee2;
    border-bottom: 2px solid #d9dee2;
  }

  & .react-datepicker__day-name {
    margin: 2px 1px;
  }

  & .react-datepicker__month {
    margin: 0 4px 4px 4px;
  }

  & .react-datepicker__week {
    border-bottom: 1px solid #d9dee2;
  }

  & .react-datepicker__week:last-child {
    border-bottom: 0;
  }

  & .react-datepicker__day.react-datepicker__day--keyboard-selected {
    background: none;
    color: black;
  }

  & .react-datepicker__day--today {
    font-weight: normal;
  }

  & .react-datepicker__day {
    margin: 0 1px;
  }
`;
