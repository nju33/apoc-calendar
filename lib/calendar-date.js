// @flow
import Year from './calendar-year';
import Month from './calendar-month';
import isEqual from 'date-fns/is_equal';

/** class handling a date. */
export default class CalendarDate {
  /** target the date. */
  _date: Date;
  get date(): Date {
    return this._date;
  }
  /** beloging the month */
  _month: Month;
  /** beloging the year */
  _year: Year;
  /** whether selected state. */
  _selection: boolean;

  /** create a date. */
  constructor(date: Date, year: Year, month: Month) {
    this._date = date;
    this._month = month;
    this._year = year;

    this._selection = false;
  }

  /** make a selected state */
  select() {
    this._selection = true;
  }

  /** make a deselected state */
  deselect() {
    this._selection = false;
  }

  /** whether this and other is equal date */
  isEqual(calendarDate: CalendarDate): boolean {
    return isEqual(this._date, calendarDate.date);
  }
}
