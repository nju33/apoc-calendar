// @flow
import getDaysInMonth from 'date-fns/get_days_in_month';
import setDate from 'date-fns/set_date';
import addDays from 'date-fns/add_days';
import range from 'lodash/range';
import Year from './calendar-year';
import CalendarDate from './calendar-date';

/** class handling a month */
export default class CalendarMonth {
  _date: Date;
  _year: Year;
  _dates: CalendarDate[];

  /** create a month */
  constructor(date: Date, year: Year) {
    this._date = date;
    this._year = year;
    this._baseDate = setDate(this._date, 1);

    const daysInMonth: number = getDaysInMonth(this._date);
    this._dates = (range(daysInMonth): number[]).map(amount => {
      return new CalendarDate(addDays(this._baseDate, amount));
    });
  }
}
