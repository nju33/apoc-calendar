// @flow
import differenceInMonths from 'date-fns/difference_in_months';
import addMonths from 'date-fns/add_months';
import range from 'lodash/range';
import Month from './calendar-month';

/** class handling a year */
export class CalendarYear {
  /** target the date */
  _date: Date;
  _year: number;
  _months: Month[];

  /** create a month */
  constructor(date: Date) {
    this._date = date;
    this._year = date.getFullYear();

    const diff: number = differenceInMonths(this._date);
    this._months = (range(diff): number[]).map(amount => {
      return new Month(addMonths(this._date, amount));
    });
  }
}
