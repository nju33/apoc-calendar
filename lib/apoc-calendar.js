// @flow

import Calendar from './calendar2.html';
import CalendarStore from './store2';
import getMonth from 'date-fns/get_month';
import addMonths from 'date-fns/add_months';

const TODAY_DATE = new Date();
const defaultInitialState = {
  initialMonth: getMonth(TODAY_DATE),

  minDate: TODAY_DATE,
  maxDate: addMonths(TODAY_DATE, 12),
  padDate: true,

  'pager.next': true,
  'pager.prev': true,
  'pager.step': 1,
};

export type InitialState = typeof defaultInitialState;

class ApocCalendar {
  constructor(target: HTMLElement, initialState: InitialState = defaultInitialState) {
    this.target = target;
    this.store = new CalendarStore({...defaultInitialState, ...initialState});

    this.calendar = new Calendar({
      target: this.target,
      store: this.store,
    });
  }

  share(...apocCalendars: ApocCalendar[]) {
    apocCalendars.forEach(ac => {
      ac.store.ref = ac;
    });
  }
}

export default ApocCalendar;
