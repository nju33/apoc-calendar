// @flow
import {JSDOM} from 'jsdom';
import ApocCalender from './apoc-calendar';

describe('ApocCalender', () => {
  let window;
  let apocCalender;

  beforeAll(() => {
    global.getComputedStyle = jest.fn().mockReturnValue({transition: '.2s'});
    window = new JSDOM(`<!DOCTYPE html><div id="foo"></div>`).window;
  });

  beforeEach(() => {
    apocCalender = new ApocCalender(window.document.getElementById('foo'));
  });

  test('process throw when not set `from`', async () => {
    await expect(apocCalender.process()).rejects.toThrowError('Set the `from`');
  });

  test('process throw when not set `to`', async () => {
    ApocCalender.from({});
    await expect(apocCalender.process()).rejects.toThrowError('Set the `to`');
  });

  test('process', async () => {
    apocCalender._delay = jest.fn();
    apocCalender.from({}).to({color: 'pink'});
    await apocCalender.process();
    expect(apocCalender._delay).toHaveBeenCalled();
  });

  test('willChangeProps', () => {
    apocCalender.to({
      opacity: 1,
      color: 'red',
    });
    expect(apocCalender._getWillChangeProps()).toEqual(['opacity', 'color']);
  });

  test('optimization', () => {
    apocCalender.to({
      opacity: 1,
      color: 'red',
    });
    expect(apocCalender._optimization).toEqual({
      webkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      willChange: 'opacity, color',
    });
  });

  test('reverse', () => {
    const reversedApocCalender = apocCalender.from({opacity: 0}).to({opacity: 1}).reverse;
    expect(reversedApocCalender._from).toEqual({opacity: 1});
    expect(reversedApocCalender._to).toEqual({opacity: 0});
  });
});
