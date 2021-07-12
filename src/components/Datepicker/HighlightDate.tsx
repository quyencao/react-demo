import React, { ReactElement, useState } from 'react';
import { addDays, subDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerWrapper } from './styles/datepicker';

const CustomInput = ({
  onClick,
}: {
  value: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => <button onClick={onClick}>Date</button>;

CustomInput.displayName = 'CustomInput';

export const HighlightDate: React.FC = (): ReactElement => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        highlightDates={[
          subDays(new Date(), 7),
          addDays(new Date(), 7),
          addDays(new Date(), 2),
        ]}
        customInput={React.createElement(CustomInput)}
      />
    </DatePickerWrapper>
  );
};
