// @flow
import differenceInMonths from 'date-fns/difference_in_months';
import getYear from 'date-fns/get_year';
import addMonths from 'date-fns/add_months';
import range from 'lodash/range';
import Month from './calendar-month';

/** class handling a year */
export default class CalendarYear {
  /** target the date */
  _year: number;
  _months: Month[];
  get months(): Month[] {
    return this._months;
  }

  /** create a month */
  // constructor(date: Date, monthDiff: number, maxDate: Date, minDate: Date) {
  constructor(start: Date, end: Date, maxDate: Date, minDate: Date) {
    this._year = start.getFullYear();

    const diff = differenceInMonths(end, start);

    this._months = (range(diff + 1): number[]).map(amount => {
      return new Month(addMonths(start, amount), maxDate, minDate);
    });
  }

  toEqual(date: Date): boolean {
    return this._year === getYear(date);
  }

  find(iteratorFn: ((month: Month) => any)): Month | undefined {
    const result = this._months.find(iteratorFn);
    return result;
  }
}
