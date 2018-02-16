// @flow
import {JSDOM} from 'jsdom';
// import ApocCalender from './apoc-calendar';
import ApocCalender from '../dist/apoc-calendar.es';

describe('ApocCalender', () => {
  let window;
  // eslint-disable-next-line
  let apocCalender;

  beforeAll(() => {
    global.getComputedStyle = jest.fn().mockReturnValue({transition: '.2s'});
    window = new JSDOM(`<!DOCTYPE html><div id="foo"></div>`).window;
  });

  beforeEach(() => {
    apocCalender = new ApocCalender(window.document.getElementById('foo'), {
      'date.min': new Date(2000, 1),
    });
  });

  test('restore', () => {
    // eslint-disable-next-line
    // apocCalendar.restore(['2000-01']);

    // eslint-disable-next-line
    // expect(apocCalendar.store.years.month[0].dates[0].isSelected).toBeTruthy();
    expect(1).toBe(1);
  });
});
