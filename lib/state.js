// @flow
import addMonths from 'date-fns/add_months';

const TODAY_DATE = new Date();

export const initialState = {
  'date.initial': TODAY_DATE,
  'date.min': TODAY_DATE,
  'date.max': addMonths(TODAY_DATE, 12),
  'date.pad': true,

  'pager.next': true,
  'pager.prev': true,
  'pager.step': 1,

  'template.head': '{year}.{month}',
  'template.dayOfTheWeek': {
    sun: 'Sun',
    mon: 'Mon',
    tues: 'Tues',
    wed: 'Wed',
    thurs: 'Thurs',
    fri: 'Fri',
    sat: 'Sat',
  },
};

export type InitialState = typeof defaultInitialState;
