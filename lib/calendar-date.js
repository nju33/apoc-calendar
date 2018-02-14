// @flow
import getDate from 'date-fns/get_date';
import getDay from 'date-fns/get_day';
import isEqual from 'date-fns/is_equal';

/** class handling a date. */
export default class CalendarDate {
  /** this date number */
  _date: number;
  get date(): number {
    return this._date;
  }
  /** this day number */
  _day: number;
  get day(): number {
    return this._day;
  }
  /** whether selected state. */
  _selection: boolean;

  /** create a date. */
  constructor(date: Date) {
    this._date = getDate(date);
    this._day = getDay(date);
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
