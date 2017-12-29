// @flow

import {range} from './range';

describe('range', () => {
  test('got [1, 2, ..., 10]', () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
