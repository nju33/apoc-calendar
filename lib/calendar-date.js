// @flow
import getDate from 'date-fns/get_date';
import getDay from 'date-fns/get_day';
import addSeconds from 'date-fns/add_seconds';
import format from 'date-fns/format';
import isBefore from 'date-fns/is_before';
import isAfter from 'date-fns/is_after';
import isEqual from 'date-fns/is_equal';

/** class handling a date. */
export default class CalendarDate {
  _dateDate: Date;
  _maxDate: Date;
  _minDate: Date;
  /** this date number */
  _date: number;
  get date(): number {
    return this._date;
  }
  get nextTickDate(): number {
    return addSeconds(this._dateDate, 1);
  }
  /** this day number */
  _day: number;
  get day(): number {
    return this._day;
  }
  /** whether selected state. */
  _selection: boolean;
  isSelected(): boolean {
    return this._selection;
  }

  /** create a date. */
  constructor(date: Date, maxDate: Date, minDate: Date) {
    this._dateDate = date;
    this._maxDate = maxDate;
    this._minDate = minDate;
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

  /** convert to string in the YYYY-MM-DD format */
  toString(): string {
    return format(this._dateDate, 'YYYY-MM-DD');
  }

  /** whether this and other is equal date */
  isEqual(calendarDate: CalendarDate): boolean {
    return isEqual(this._date, calendarDate.date);
  }

  inRange() {
    return (
      isBefore(this._minDate, this.nextTickDate) &&
      isAfter(this._maxDate, this.nextTickDate)
    );
  }
}
