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

  set pad(pad) {
    this.set({pad});
  }

  setData(newestData) {
    const {year, month, currentDates, data} = this.get();
    // console.log(currentDates);

    // const pairs = [
    //   [get(newestData, this.prevKey, []), get(newestData, this.prevKey, [])],
    //   [get(newestData, `${year}.${month}`, []), get(newestData, `${year}.${month}`, [])],
    //   [get(newestData, this.nextKey, []), get(newestData, this.nextKey, [])],
    // ];

    // pairs.forEach(pair => {
    //   // eslint-disable-next-line
    //   for (const idx in pair) {
    //     const [newest, current] = pair[idx];
    //     newest.
    //   }
    // });
    //

    const target = [
      ...get(newestData, this.prevKey, []),
      ...get(newestData, `${year}.${month}`, []),
      ...get(newestData, this.nextKey, []),
    ];

    currentDates.forEach(currentDate => {
      target.forEach(targetDate => {
        if (this.dateEqual(currentDate, targetDate)) {
          currentDate.selected = targetDate.selected;
          if (year === currentDate.year && month === currentDate.month) {
            currentDate.prev = false;
            currentDate.next = false;
            if (month < currentDate) {
              currentDate.prev = true;
            } else if (month > currentDate) {
              currentDate.next = true;
            }
          }
        }
      });
    });

    Object.keys(newestData).forEach(year => {
      newestData[year].forEach(month => {
        const path = `${year}.${month}`;
        const date = get(data, path, false);
        if (!date) {
          return;
        }

        set(data, path, date.selected);
      });
    });

    // console.log('month', month, '---------------------');
    // console.log(newestData);
    // console.log(target);
    // console.log(currentDates);

    this.set({
      currentDates,
      data,
      // data: newestData,
    });

    // const cloned = {...data};
    // object.keys(cloned).forEach(year => {
    //   const dates = cloned[year];
    //   dates.forEach(monthDates => {
    //     monthDates
    //       .filter(date => date.selected)
    //       .forEach(date => {
    //         result.push(`${date.year}-${date.month + 1}-${date.date}`);
    //       });
    //   });
    // });
  }

  reset(step) {
    this.set({data: {}, currentDates: []});

    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth();
    this.setDates(year, month, step, true);
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
    const {year, month, data, currentDates} = this.get();
    // const currentDates = this.get('currentDates');
    const isActiveDay = this.isActiveDay(day);

    const dates = currentDates.filter(date => {
      return date.day === day;
    }).map(date => {
      date.selected = !isActiveDay;
      return date;
    });

    // const data = this.get('data');

    const targetDates = [
      ...get(data, this.prevKey, []),
      ...get(data, `${year}.${month}`, []),
      ...get(data, this.nextKey, []),
    ];

    targetDates.forEach(targetDate => {
      dates.forEach(date => {
        if (this.dateEqual(date, targetDate)) {
          targetDate.selected = date.selected;
        }
      });
    });

    this.set({
      currentDates: [...currentDates],
      data,
    });
  }

  selectDate(targetDate) {
    const {year, month, data, currentDates} = this.get();

    const target = currentDates.find(date => {
      return !date.disabled &&
        this.dateEqual(date, targetDate);
    });
    if (typeof target === 'undefined') {
      return;
    }

    const targetDates = [
      ...get(data, this.prevKey, []),
      ...get(data, `${year}.${month}`, []),
      ...get(data, this.nextKey, []),
    ];

    targetDates.forEach(targetDate => {
      if (this.dateEqual(targetDate, target)) {
        targetDate.selected = !target.selected;
      }
    });

    this.set({
      currentDates: [...currentDates],
      data,
    });
  }

  selectRangeDate(from, to = null) {
    const uncertainDates = this.get('uncertainDates');
    if (typeof uncertainDates === 'undefined' &&
      (this.dateEqual(from, to) || to === null)) {
      return;
    }

    const {year, month, data, currentDates} = this.get();
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

    const targetDates = [
      ...get(data, this.prevKey, []),
      ...get(data, `${year}.${month}`, []),
      ...get(data, this.nextKey, []),
    ];

    targetDates.forEach(targetDate => {
      result.acc.forEach(date => {
        if (this.dateEqual(date, targetDate)) {
          targetDate.selected = date.selected;
        }
      });
    });

    this.set({
      currentDates,
      data,
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

  cachePastDates(year, month, step) {
    let currentStep = step;
    while (currentStep > 0) {
      this.setDates(year, month - currentStep, step);
      currentStep--;
    }
  }

  cacheFutureDates(year, month, step) {
    let currentStep = step;
    while (currentStep > 0) {
      this.setDates(year, month + currentStep, step);
      currentStep--;
    }
  }

  setDates(year, month, step, cache = false) {
    const thisDate = new Date(year, month);
    const thisYear = thisDate.getFullYear();
    const thisMonth = thisDate.getMonth();

    if (cache) {
      this.cachePastDates(year, month, step);
      this.cacheFutureDates(year, month, step);
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

  prev(step) {
    const {year, month} = this.get();
    // this.setDates(year, month - 1, true);
    this.setDates(year, month - step, step, true);
  }

  next(step) {
    const {year, month} = this.get();
    // this.setDates(year, month + 1, true);
    this.setDates(year, month + step, step, true);
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
