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
import CalendarDate from './calendar-date';
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
        for (let i = 0; i < day; i++) {
          dates.unshift(new DatePad());
        }

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

  /** for rerendering components,
  /*  because it not make to update without the new argument values.
  /*  also, this `key` must pass to every function.
  /*  for example, pass `key` to last argument into  in the something function.
  */
  update(): void {
    this.set({__key__: (Math.random() / 10000) + Math.random()});
  }

  udpateDates(): void {
    // eslint-disable-next-line camelcase
    this.set({__key_dates__: (Math.random() / 10000) + Math.random()});
  }

  getSelectedDates(): CalendarDate[] {
    const result: CalendarDate[] = [];

    this.years.forEach(year => {
      year.months.forEach(month => {
        month.dates.forEach(date => {
          if (date.isSelected()) {
            result.push(date);
          }
        });
      });
    });

    return result;
  }
}
