// @flow
import {Store} from 'svelte/store';
import ApocCalendar from './apoc-calendar';
import differenceInCalendarYears from 'date-fns/difference_in_calendar_years';
import isBefore from 'date-fns/is_before';
import isAfter from 'date-fns/is_after';
import addYears from 'date-fns/add_years';
import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';
import addMonths from 'date-fns/add_months';
import subMonths from 'date-fns/sub_months';
import addSeconds from 'date-fns/add_seconds';
import range from 'lodash/range';
import Year from './calendar-year';
import Month from './calendar-month';
import CalendarDate from './calendar-date';
import DatePad from './date-pad';
import type {InitialState} from './state';

export default class CalendarStore extends Store {
  _calendar: ApocCalendar;

  constructor(initialState: InitialState, calendar: ApocCalendar) {
    super(initialState);

    this._calendar = calendar;

    const {date, ref} = initialState;
    if (this._hasRef()) {
      this.ref.store.set({
        __refs__: [...this.ref.store.refs, calendar],
      });
      const date = addMonths(new Date(ref.store.year, ref.store.month), ref.store.refs.length);
      this.set({
        years: ref.store.years,
        year: getYear(date),
        month: getMonth(date),
      });
    } else {
      const diff: number = differenceInCalendarYears(date.max, date.min) + 1;
      const years = (range(diff): number[]).map(amount => {
        return new Year(addYears(date.min, amount), date.max, date.min);
      });
      this.set({
        years,
        year: getYear(date.initial || date.min),
        month: getMonth(date.initial || date.min),
      });
    }

    this.compute('days', ['template'], ({dayOfTheWeek}) => {
      return [
        dayOfTheWeek.sun,
        dayOfTheWeek.mon,
        dayOfTheWeek.tues,
        dayOfTheWeek.wed,
        dayOfTheWeek.thurs,
        dayOfTheWeek.fri,
        dayOfTheWeek.sat,
      ];
    });

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

        if (isBefore(this.minDate, addSeconds(this.currentDate, 1)) && isAfter(addSeconds(this.currentDate, 1), this.maxDate)) {
          return dates.map(() => new DatePad());
        }

        return dates;
      }
    );

    this.set({
      getDayState: this.getDayState,
    });

    // console.log('initialState', initialState);
  }

  get refs(): ApocCalendar[] {
    return this.get('__refs__');
  }

  get ref(): ApocCalendar | undefined {
    return this.get('ref');
  }

  get years(): Year[] {
    if (this._hasRef()) {
      return this.ref.store.get('years');
    }
    return this.get('years');
  }

  get year(): number {
    return this.get('year');
  }

  get month(): number {
    return this.get('month');
  }

  get dates(): (CalendarDate | PadDate)[] {
    return this.get('dates');
  }

  get date(): {min: Date, max: Date} {
    return this.get('date');
  }

  get currentDate(): Date {
    return new Date(this.year, this.month);
  }

  get minDate(): Date {
    let date: Date;
    if (this._hasRef()) {
      date = this.ref.store.date.min;
    } else {
      date = this.date.min;
    }
    return new Date(getYear(date), getMonth(date));
  }

  get maxDate(): Date {
    let date: Date;
    if (this._hasRef()) {
      date = this.ref.store.date.max;
    } else {
      date = this.date.max;
    }
    return new Date(getYear(date), getMonth(date));
  }

  get color(): object {
    return this.get('color');
  }

  _hasRef(): boolean {
    return typeof this.ref !== 'undefined';
  }

  _getRefsSize(): number {
    if (!this._hasRef()) {
      return this.refs.length;
    }
    return this.ref.store.refs.length;
  }

  _getFirstCalendar(): ApocCalendar {
    if (!this._hasRef()) {
      return this._calendar;
    }

    return this.ref;
  }

  _getLastCalendar(): ApocCalendar {
    if (typeof this.ref === 'undefined' && this.refs.length === 0) {
      return this._calendar;
    } else if (typeof this.ref === 'undefined' && this.refs.length > 0) {
      return this.refs[this.refs.length - 1];
    } else if (typeof this.ref !== 'undefined' && this.refs.length > 0) {
      return this.ref.store.refs[this.ref.store.refs.length - 1];
    }

    return this.ref.store.refs[this.ref.store.refs.length - 1];
  }

  fire(name: string, value: any): void {
    if (this._hasRef()) {
      this.ref.calendar.fire(name, value);
    } else {
      this._calendar.calendar.fire(name, value);
    }
  }

  /** for rerendering components,
  /*  because it not make to update without the new argument values.
  /*  also, this `key` must pass to every function.
  /*  for example, pass `key` to last argument into  in the something function.
  */
  update(): void {
    // eslint-disable-next-line no-mixed-operators
    this.set({__key__: Math.random() / 10000 + Math.random()});
  }

  updateDates(fromRef = false): void {
    // eslint-disable-next-line camelcase, no-mixed-operators
    this.set({__key_dates__: Math.random() / 10000 + Math.random()});

    if (!fromRef && this._hasRef()) {
      this.ref.store.updateDates(true);
    } else if (!fromRef && this.refs.length > 0) {
      setTimeout(() => {
        this.refs.forEach(calendar => {
          calendar.store.updateDates(true);
        });
      }, 30);
    }
  }

  reset(fromRef = false) {
    if (!fromRef) {
      let dates: CalendarDate[];
      if (this._hasRef()) {
        dates = this.ref.store.getSelectedDates();
      } else {
        dates = this.getSelectedDates();
      }

      dates.forEach(date => {
        date.deselect();
      });
    }

    if (!fromRef && this._hasRef()) {
      this.ref.store.reset(true);
    } else if (!fromRef) {
      this.refs.forEach(calendar => {
        calendar.store.reset(true);
      });
      this.updateDates();
    }
  }

  restore(dates: string[]) {
    let updated: boolean = false;

    this.years.forEach(year => {
      year.months.forEach(month => {
        month.dates.forEach(date => {
          if (dates.includes(date.toString())) {
            date.select();
            if (!updated) {
              updated = true;
            }
          }
        });
      });
    });

    if (updated) {
      this.updateDates();
    }
  }

  inRange(year: number, month: number): boolean {
    const current = new Date(year, month);
    return !isBefore(this.minDate, current) && !isAfter(current, this.maxDate);
  }

  selectDay(day: number): void {
    const state = this.getDayState(day);
    let updated: boolean = false;

    this.dates.forEach(date => {
      if (date instanceof DatePad) {
        return;
      }

      if (date.day === day) {
        if (state) {
          date.deselect();
        } else {
          date.select();
        }
        if (!updated) {
          updated = true;
        }
      }
    });

    if (updated) {
      this.updateDates();
    }
  }

  getDayState(day: number) {
    return (this.dates || this.$dates).filter(date => date.day === day)
      .every(date => date.isSelected());
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

  setPrevMonth(fromRef = false, provisionalPrevDate: Date | undefined) {
    const size = this._getRefsSize();
    if (typeof provisionalPrevDate === 'undefined') {
      const firstCalendar = this._getFirstCalendar();
      provisionalPrevDate = subMonths(new Date(firstCalendar.store.year, firstCalendar.store.month), size + 1);
    }

    if (isBefore(provisionalPrevDate, this.minDate)) {
      this.fire('onReachLowerLimit');
      return;
    }

    const prevDate = subMonths(new Date(this.year, this.month), size + 1);
    this.set({
      year: getYear(prevDate),
      month: getMonth(prevDate),
    });

    if (!fromRef && this._hasRef()) {
      this.ref.store.setPrevMonth(true, provisionalPrevDate);
    } else if (!fromRef) {
      this.refs.forEach(calendar => {
        calendar.store.setPrevMonth(true, provisionalPrevDate);
      });
    }
  }

  setNextMonth(fromRef = false, provisionalNextDate: Date | undefined) {
    const size = this._getRefsSize();
    if (typeof provisionalNextDate === 'undefined') {
      const lastCalendar = this._getLastCalendar();
      provisionalNextDate = addMonths(new Date(lastCalendar.store.year, lastCalendar.store.month), size + 1);
    }

    if (isAfter(provisionalNextDate, this.maxDate)) {
      this.fire('onReachUpperLimit');
      return;
    }

    const nextDate = addMonths(new Date(this.year, this.month), size + 1);
    this.set({
      year: getYear(nextDate),
      month: getMonth(nextDate),
    });

    if (!fromRef && this._hasRef()) {
      this.ref.store.setNextMonth(true, provisionalNextDate);
      this.ref.store.refs.forEach(calendar => {
        if (calendar !== this._calendar) {
          calendar.store.setNextMonth(true, provisionalNextDate);
        }
      });
    } else if (!fromRef) {
      this.refs.forEach(calendar => {
        calendar.store.setNextMonth(true, provisionalNextDate);
      });
    }
  }
}
