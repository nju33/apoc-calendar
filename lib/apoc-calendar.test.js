// @flow
import {JSDOM} from 'jsdom';
import apoc-calendar from './apoc-calendar';

describe('apoc-calendar', () => {
  let window;
  let apoc-calendar;

  beforeAll(() => {
    global.getComputedStyle = jest.fn().mockReturnValue({transition: '.2s'});
    window = new JSDOM(`<!DOCTYPE html><div id="foo"></div>`).window;
  });

  beforeEach(() => {
    apoc-calendar = new apoc-calendar(window.document.getElementById('foo'));
  });

  test('process throw when not set `from`', async () => {
    await expect(apoc-calendar.process()).rejects.toThrowError('Set the `from`');
  });

  test('process throw when not set `to`', async () => {
    apoc-calendar.from({});
    await expect(apoc-calendar.process()).rejects.toThrowError('Set the `to`');
  });

  test('process', async () => {
    apoc-calendar._delay = jest.fn();
    apoc-calendar.from({}).to({color: 'pink'});
    await apoc-calendar.process()
    expect(apoc-calendar._delay).toHaveBeenCalled();
  });

  test('willChangeProps', () => {
    apoc-calendar.to({
      opacity: 1,
      color: 'red',
    });
    expect(apoc-calendar._getWillChangeProps()).toEqual(['opacity', 'color']);
  });

  test('optimization', () => {
    apoc-calendar.to({
      opacity: 1,
      color: 'red',
    });
    expect(apoc-calendar._optimization).toEqual({
      webkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      willChange: 'opacity, color',
    });
  })

  test('reverse', () => {
    const reversedapoc-calendar = apoc-calendar.from({opacity: 0}).to({opacity: 1}).reverse;
    expect(reversedapoc-calendar._from).toEqual({opacity: 1});
    expect(reversedapoc-calendar._to).toEqual({opacity: 0});
  });
});
