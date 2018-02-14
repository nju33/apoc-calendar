// @flow
import getDaysInMonth from 'date-fns/get_days_in_month';
import getMonth from 'date-fns/get_month';
import setDate from 'date-fns/set_date';
import addDays from 'date-fns/add_days';
import range from 'lodash/range';
import CalendarDate from './calendar-date';

/** class handling a month */
export default class CalendarMonth {
  _month: number;
  _dates: CalendarDate[];
  get dates(): CalendarDate[] {
    return this._dates;
  }

  /** create a month */
  constructor(date: Date) {
    this._month = getMonth(date);
    const baseDate = setDate(date, 1);

    const daysInMonth: number = getDaysInMonth(date);
    this._dates = (range(daysInMonth): number[]).map(amount => {
      return new CalendarDate(addDays(baseDate, amount));
    });
  }

  toEqual(date: Date): boolean {
    return this._month === getMonth(date);
  }
}
