import {Store} from 'svelte/store';
import get from 'lodash.get';
import set from 'lodash.set';
import uniqBy from 'lodash.uniqby';
import {range} from './helpers';

export default class CalendarStore extends Store {
  getYear() {
    return this.get('year');
  }

  getMonth() {
    return this.get('month');
  }

  getCurrentDates() {
    return get(this.get('data'), this.key);
  }

  getSelected() {
    return this.get('selected');
  }

  convertDay() {
    console.log(arguments);
  }

  selectDay(day) {
    const {data} = this.get();
    const dates = get(data, this.key);

    dates.filter(date => {
      return !date.prev && !date.next && date.day === day;
    }).forEach(date => {
      date.selected = true;
      return date;
    });

    this.set({
      data,
    });
  }

  get key() {
    const {year, month} = this.get();
    return `${year}.${month}`;
  }

  setDates(year, month) {
    const data = this.get('data') || {};
    const thisDate = new Date(year, month);
    const thisYear = thisDate.getFullYear();
    const thisMonth = thisDate.getMonth();
    this.set({
      year: thisYear,
      month: thisMonth,
    });

    if (typeof get(data, this.key) !== 'undefined') {
      this.set({data});
      return;
    }

    const dates = range(
      new Date(thisYear, thisMonth, 1).getDate(),
      new Date(thisYear, thisMonth + 1, 0).getDate(),
    );

    const dateObjects = dates.map(date => {
      const thatDate = new Date(thisYear, thisMonth, date);
      return {
        prev: false,
        next: false,
        selected: false,
        year: thatDate.getFullYear(),
        month: thatDate.getMonth(),
        date: thatDate.getDate(),
        day: thatDate.getDay(),
      };
    });

    set(data, this.key, dateObjects);

    this.set({
      data,
    });

    this.padHeadDate();
    this.padLastDate();
  }

  prev() {
    const {year, month} = this.get();
    this.setDates(year, month - 1);
  }

  next() {
    const {year, month} = this.get();
    this.setDates(year, month + 1);
  }

  padHeadDate() {
    const {data, year, month} = this.get();
    const dates = get(data, this.key);

    const initialDay = dates[0].day;
    if (initialDay > 0) {
      dates.unshift(
        ...range(0, initialDay - 1).map(num => {
          const thatDate = new Date(year, month, -num);
          return {
            prev: true,
            next: false,
            selected: false,
            year: thatDate.getFullYear(),
            month: thatDate.getMonth(),
            date: thatDate.getDate(),
            day: thatDate.getDay(),
          };
        })
      );
    }

    set(data, this.key, dates);
    this.set({
      data,
    });
  }

  padLastDate() {
    const {data, year, month} = this.get();
    const dates = get(data, this.key);

    const lastDay = dates[dates.length - 1].day;
    if (Math.abs(lastDay - 6) > 0) {
      dates.push(
        ...range(0, Math.abs(lastDay - 6) - 1).map(num => {
          const thatDate = new Date(year, month + 1, num + 1);
          return {
            prev: false,
            next: true,
            selected: false,
            year: thatDate.getFullYear(),
            month: thatDate.getMonth(),
            date: thatDate.getDate(),
            day: thatDate.getDay(),
          };
        })
      );
    }

    set(data, this.key, dates);
    this.set({
      data,
    });
  }
}
