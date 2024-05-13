import React from 'react';
import { Calendar } from 'react-native-calendars';

export function Schedule({}:{navigation:any}): React.JSX.Element {
  return (
    <Calendar
    markingType={'period'}
    markedDates={{
      '2024-05-22': {startingDay: true, color: 'green', textColor:'white'},
      '2024-05-23': {selected: true, endingDay: true, color: 'green', textColor: 'white'},
    }}
  />
  );
}
