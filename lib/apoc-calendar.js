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

    this._prepareObserver();
  }

  _prepareObserver() {
    this.store.observe('__key_dates__', () => {
      const dates = this.store.getSelectedDates();
      this.calendar.fire('onUpdateDates', dates.map(date => date.toString()));
    });
  }

  on(name: string, cb: Function) {
    this.calendar.on(name, cb);
  }

  share(...apocCalendars: ApocCalendar[]) {
    apocCalendars.forEach(ac => {
      ac.store.ref = ac;
    });
  }
}

export default ApocCalendar;
