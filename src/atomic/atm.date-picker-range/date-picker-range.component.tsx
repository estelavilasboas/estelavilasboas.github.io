import * as React from 'react';

import { DatePicker } from '@atomic/atm.date-picker';
import { Hbox } from '@atomic/obj.box';

export interface DatePickerRangeProps {
  startDate?: Date;
  endDate?: Date;
  onDateChange?: (params: DateChangesParams) => void;
}

export interface DateChangesParams {
  startDate: Date;
  endDate: Date;
}

export const DatePickerRange: React.FC<DatePickerRangeProps> = (props) => {
  const [startDate, setStartDate] = React.useState(props.startDate);
  const [endDate, setEndDate] = React.useState(props.endDate);

  const handleStartValueChange = (selectedStartDate: Date) => {
    props.onDateChange({ startDate: selectedStartDate, endDate });
    setStartDate(selectedStartDate);
  };

  const handleEndValueChange = (selectedEndDate: Date) => {
    props.onDateChange({ startDate, endDate: selectedEndDate });
    setEndDate(selectedEndDate);
  };

  return (
    <Hbox>
      <Hbox.Item noGrow>
        <DatePicker endDate={endDate} onValueChange={handleStartValueChange} placeholder={'Start date'} />
      </Hbox.Item>
      <Hbox.Separator />
      <Hbox.Item noGrow>
        <DatePicker startDate={startDate} onValueChange={handleEndValueChange} placeholder={'End date'} endSelect />
      </Hbox.Item>
    </Hbox>
  );
};
