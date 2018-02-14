// @flow
import CalendarDate from './calendar-date';

export default class DatePad extends CalendarDate {
  constructor(date: Date) {
    super(date);

    this._date = '';
    this._day = '';
    this._pad = true;
  }
}
