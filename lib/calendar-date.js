// @flow
import isEqual from 'date-fns/is_equal';

/** class handling a date. */
export class CalendarDate {
  /** target the date. */
  _date: Date;
  get date(): Date {
    return this._date;
  }
  /** whether selected state. */
  _selection: boolean;

  /** create a date. */
  constructor(date: Date, year: Year, month: Month) {
    this._date = date;
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
