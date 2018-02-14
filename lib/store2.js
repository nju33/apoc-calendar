// @flow
import {Store} from 'svelte/store';
import ApocCalendar from './apoc-calendar';
import differenceInCalendarYears from 'date-fns/difference_in_calendar_years';
import addYears from 'date-fns/add_years';
import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';
import range from 'lodash/range';
import Year from './calendar-year';
import Month from './calendar-month';
import DatePad from './date-pad';
import type {InitialState} from './state';

export default class CalendarStore extends Store {
  _ref: ApocCalenar | undefined = undefined;

  constructor(initialState: InitialState) {
    super(initialState);

    const {date} = initialState;
    console.log('initialState', initialState);
    const diff: number = differenceInCalendarYears(date.min, date.max);
    const years: Year[] = (range(diff): number[]).map(amount => {
      return new Year(addYears(date.min, amount), date.max, date.min);
    });

    this.set({
      years,
      year: getYear(date.initial),
      month: getMonth(date.initial),
    });

    this.compute(
      'days',
      ['template'],
      ({dayOfTheWeek}) => {
        return [
          dayOfTheWeek.sun,
          dayOfTheWeek.mon,
          dayOfTheWeek.tues,
          dayOfTheWeek.wed,
          dayOfTheWeek.thurs,
          dayOfTheWeek.fri,
          dayOfTheWeek.sat,
        ];
      }
    );

    this.compute(
      'dates',
      ['years', 'year', 'month'],
      (years, currentYear, currentMonth) => {
        const current = new Date(currentYear, currentMonth);

        const year = years.find(year => year.toEqual(current));
        const month = year.find((month: Month) => {
          return month.toEqual(current);
        });

        if (typeof month === 'undefined') {
          throw new Error('month is undefined');
        }

        const {dates} = month;
        const {day} = dates[0];
        console.log(day);
        for (let i = 0; i < day; i++) {
          dates.unshift(new DatePad());
        }
        console.log(dates);
        // if (dates[0])

        return dates;
      }
    );
  }

  set ref(apocCalendar: ApocCalendar): void {
    this._ref = apocCalendar;
  }

  get minDate(): Date {
    return this.get('minDate');
  }

  get maxDate(): Date {
    return this.get('maxDate');
  }

  get initialMonth(): Date {
    return this.get('initialMonth');
  }

  get years(): Year[] {
    return this.get('years');
  }
}
