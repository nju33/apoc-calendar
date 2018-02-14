// @flow
import {toDeep} from 'deep-shallow';
import Calendar from './calendar2.html';
import CalendarStore from './store2';
import {initialState as defaultInitialState} from './state';
import type {InitialState} from './state';

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
