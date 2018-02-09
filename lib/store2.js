// @flow
import {Store} from 'svelte/store';
import ApocCalendar, {InitialState} from './apoc-calendar';
import differenceInCalendarYears from 'date-fns/difference_in_calendar_years';
import addYears from 'date-fns/add_years';
import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';
import range from 'lodash/range';
import Year from './calendar-year';
// import get from 'lodash.get';
// import set from 'lodash.set';
// import {range} from './helpers';

// const CELL_LENGTH = 42;

export default class CalendarStore extends Store {
  _ref: ApocCalenar | undefined = undefined;

  constructor(initialState: InitialState) {
    super(initialState);

    const {date} = initialState;
    console.log('initialState', initialState);
    const diff: number = differenceInCalendarYears(date.min, date.max);
    const years: Year[] = (range(diff): number[]).map(amount => {
      return new Year(addYears(date.min, amount));
    });

    this.set({
      years,
      year: getYear(date.initial),
      month: getMonth(date.initial),
    });

    this.compute(
      'monthDates',
      [],
      () => {
        console.log(123);
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
