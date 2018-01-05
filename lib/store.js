import {Store} from 'svelte/store';
import get from 'lodash.get';
import set from 'lodash.set';
import {range} from './helpers';

const CELL_LENGTH = 42;

export default class CalendarStore extends Store {
  getYear() {
    return this.get('year');
  }

  getMonth() {
    return this.get('month');
  }

  get data() {
    return this.get('data');
  }

  get currentDates() {
    return this.get('currentDates');
  }

  reset() {
    this.set({data: {}, currentDates: []});

    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth();
    this.setDates(year, month, true);
  }

  dateEqual(a, b = null) {
    if (b === null) {
      return false;
    }

    return a.year === b.year &&
      a.month === b.month &&
      a.date === b.date;
  }

  exportData() {
    const data = this.get('data');
    const cloned = {...data};
    const result = [];

    Object.keys(cloned).forEach(year => {
      const dates = cloned[year];
      dates.forEach(monthDates => {
        monthDates
          .filter(date => date.selected)
          .forEach(date => {
            result.push(`${date.year}-${date.month + 1}-${date.date}`);
          });
      });
    });
    return result;
  }

  includesMinDate() {
    const currentDates = this.get('currentDates');
    if (typeof currentDates === 'undefined') {
      return false;
    }
    const found = currentDates.find(date => date.disabled);

    if (typeof found === 'undefined') {
      return false;
    } else if (new Date(found.year, found.month, found.date) > new Date(this.maxDate.year, this.maxDate.month, this.maxDate.date)) {
      return false;
    }
    return true;
  }

  includesMaxDate() {
    const currentDates = this.get('currentDates');
    if (typeof currentDates === 'undefined') {
      return false;
    }
    const found = [...currentDates].reverse().find(date => date.disabled);
    if (typeof found === 'undefined') {
      return false;
    } else if (new Date(found.year, found.month, found.date) < new Date(this.minDate.year, this.minDate.month, this.minDate.date)) {
      return false;
    }
    return true;
  }

  isActiveDay(day) {
    const currentDates = this.get('currentDates');

    const targetDayDate = currentDates.filter(date => {
      return date.day === day;
    });
    return targetDayDate.every(date => date.selected);
  }

  getSelected() {
    return this.get('selected');
  }

  selectDay(day) {
    const currentDates = this.get('currentDates');
    const isActiveDay = this.isActiveDay(day);

    currentDates.filter(date => {
      return date.day === day;
    }).forEach(date => {
      date.selected = !isActiveDay;
      return date;
    });

    this.set({currentDates});
  }

  selectDate(targetDate) {
    const currentDates = [...this.get('currentDates')];

    const target = currentDates.find(date => {
      return !date.disabled &&
        this.dateEqual(date, targetDate);
    });
    if (typeof target === 'undefined') {
      return;
    }

    target.selected = !target.selected;

    this.set({currentDates});
  }

  selectRangeDate(from, to = null) {
    const uncertainDates = this.get('uncertainDates');
    if (typeof uncertainDates === 'undefined' &&
      (this.dateEqual(from, to) || to === null)) {
      return;
    }

    const currentDates = this.get('currentDates');
    if (typeof uncertainDates !== 'undefined') {
      uncertainDates.forEach(date => {
        date.selected = !date.selected;
      });
    }
    const result = currentDates.reduce((obj, date) => {
      if (date.disabled) {
        return obj;
      }

      if (this.dateEqual(date, from) || this.dateEqual(date, to)) {
        if (obj.start) {
          date.selected = obj.active;
          obj.acc.push(date);
          obj.end = true;
        } else {
          obj.start = true;

          if (new Date(from.year, from.month, from.date) > new Date(to.year, from.month, from.date)) {
            obj.active = !to.selected;
          } else {
            obj.active = !from.selected;
          }
        }
      }

      if (obj.start && !obj.end) {
        date.selected = obj.active;
        obj.acc.push(date);
      }

      if (from === to) {
        obj.end = true;
        return obj;
      }

      return obj;
    }, {
      acc: [],
      active: false,
      start: false,
      end: false,
    });

    this.set({
      currentDates,
      uncertainDates: result.acc,
    });
  }

  endSelectRangeDate() {
    this.set({
      uncertainDates: undefined,
    });
  }

  get key() {
    const {year, month} = this.get();
    return `${year}.${month}`;
  }

  get prevKey() {
    const {year, month} = this.get();
    const prevDate = new Date(year, month - 1);
    return `${prevDate.getFullYear()}.${prevDate.getMonth()}`;
  }

  get nextKey() {
    const {year, month} = this.get();
    const nextDate = new Date(year, month + 1);
    return `${nextDate.getFullYear()}.${nextDate.getMonth()}`;
  }

  setOptions(options) {
    this.minDate = options.minDate;
    this.maxDate = options.maxDate;
  }

  setDates(year, month, cache = false) {
    const thisDate = new Date(year, month);
    const thisYear = thisDate.getFullYear();
    const thisMonth = thisDate.getMonth();

    if (cache) {
      this.setDates(year, month - 1);
      this.setDates(year, month + 1);
    }
    this.set({
      year: thisYear,
      month: thisMonth,
    });

    const data = this.get('data') || {};
    if (typeof get(data, this.key) !== 'undefined') {
      const currentDates = get(data, this.key);
      currentDates.forEach(date => {
        date.prev = false;
        date.next = false;
      });
      this.set({currentDates});
      if (cache) {
        this.padHeadDate();
        this.padTailDate();
      }
      this.set({data});
      return;
    }

    const dates = range(
      new Date(thisYear, thisMonth, 1).getDate(),
      new Date(thisYear, thisMonth + 1, 0).getDate(),
    );

    const minDateDate = new Date(
      this.minDate.year,
      this.minDate.month,
      this.minDate.date,
    );

    const maxDateDate = new Date(
      this.maxDate.year,
      this.maxDate.month,
      this.maxDate.date,
    );

    const dateObjects = dates.map(date => {
      const thatDate = new Date(thisYear, thisMonth, date);
      return {
        prev: false,
        next: false,
        selected: false,
        disabled: minDateDate > thatDate || thatDate > maxDateDate,
        year: thatDate.getFullYear(),
        month: thatDate.getMonth(),
        date: thatDate.getDate(),
        day: thatDate.getDay(),
      };
    });

    set(data, this.key, dateObjects);
    this.set({data, currentDates: dateObjects});
    if (cache) {
      this.padHeadDate();
      this.padTailDate();
    }
  }

  prev() {
    const {year, month} = this.get();
    this.setDates(year, month - 1, true);
  }

  next() {
    const {year, month} = this.get();
    this.setDates(year, month + 1, true);
  }

  padHeadDate() {
    const data = this.get('data');
    const dates = [...this.get('currentDates')];
    const prevDates = get(data, this.prevKey);

    const firstDay = dates[0].day;
    if (firstDay > 0) {
      dates.unshift(
        ...range(0, firstDay - 1).map(num => {
          const target = prevDates[prevDates.length - 1 - num];
          target.prev = true;
          target.next = false;
          return target;
        }).reverse()
      );
    }

    this.set({
      currentDates: dates,
    });
  }

  padTailDate() {
    const data = this.get('data');
    const dates = [...this.get('currentDates')];
    const nextDates = get(data, this.nextKey);

    const fillLength = CELL_LENGTH - dates.length - 1;
    dates.push(
      ...range(0, fillLength).map(num => {
        const target = nextDates[num];
        target.prev = false;
        target.next = true;
        return target;
      })
    );
    this.set({currentDates: dates});
  }
}
