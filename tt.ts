import inRange from './src/inRange';
import {map} from 'lodash';

const actual = [
  inRange(0, '1'),
  inRange(0, '0', 1),
  inRange(0, 0, '1'),
  inRange(0, NaN, 1),
  inRange(-1, -1, NaN),
];

// expect(actual, map(actual).toEqual(stubTrue));
console.log(map(actual));
