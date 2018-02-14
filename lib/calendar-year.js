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

  /** create a month */
  constructor(date: Date, maxDate: Date, minDate: Date) {
    this._year = date.getFullYear();

    const diff: number = differenceInMonths(maxDate, minDate);
    this._months = (range(diff): number[]).map(amount => {
      return new Month(addMonths(date, amount));
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
