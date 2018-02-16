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

  'color.background': '#444',
  'color.text': '#222',
  'color.header.background': '#fff',
  'color.header.text': '#222',
  'color.table.text': '#222',
  'color.table.background': '#444',
  'color.tableCell.background.default': '#fff',
  'color.tableCell.background.odd': '#fff',
  'color.tableCell.background.even': '#fff',
  'color.tableCell.background.blank': '#444',
  'color.tableCell.text.invalid': '#222',
  'color.tableCell.background.invalid': '#444',
  'color.tableCell.background.hover': '#ccc',
  'color.tableCell.background.active': '#cb1b45',
  'color.tableCell.height': '1.5em',
  'color.sunday.text': '#222',
  'color.sunday.backgorund': '#fff',
  'color.saturday.text': '#222',
  'color.saturday.backgorund': '#fff',
  'color.pager.background': '#444',
  'color.pager.icon': '#fff',

  /** for all referencing related an ApocCalendars */
  __refs__: [],
  ref: undefined,
};

export type InitialState = typeof defaultInitialState & {
  'date.initial'?: Date,
  refs: ApocCalendar[],
  ref?: ApocCalendar,
};
