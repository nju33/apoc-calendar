// @flow

import addMonths from 'date-fns/add_months';
import {toDeep} from 'deep-shallow';
import Calendar from './calendar2.html';
import CalendarStore from './store2';

const TODAY_DATE = new Date();
const defaultInitialState = {
  'date.initial': TODAY_DATE,
  'date.min': TODAY_DATE,
  'date.max': addMonths(TODAY_DATE, 12),
  'date.pad': true,

  'pager.next': true,
  'pager.prev': true,
  'pager.step': 1,
};

export type InitialState = typeof defaultInitialState;

class ApocCalendar {
  constructor(target: HTMLElement, initialState: InitialState = defaultInitialState) {
    this.target = target;
    this.store = new CalendarStore(toDeep({...defaultInitialState, ...initialState}));

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
