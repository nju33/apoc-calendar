// @flow
import addMonths from 'date-fns/add_months';
import ApocCalendar from './apoc-calendar';

const TODAY_DATE = new Date();

export const initialState = {
  'date.initial': undefined,
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

  'color.text': '#222',
  'color.background.table': '#444',
  'color.background.cell': '#fcfcfc',
  'color.background.hover': '#ccc',
  'color.background.active': '#cb1b45',

  /** for all referencing related an ApocCalendars */
  __refs__: [],
  ref: undefined,
};

export type InitialState = typeof defaultInitialState & {
  'date.initial'?: Date,
  refs: ApocCalendar[],
  ref?: ApocCalendar,
};