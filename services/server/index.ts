import * as faker from 'faker';

import { Constants } from '@lbm/enums';

import { add } from './util';

const a = 13;
const b = 29;

console.log(`${a} + ${b} is ${add(a, b)}`);
console.log(`${Constants.Pi} + ${Constants.E} is ${add(Number(Constants.Pi), Number(Constants.E))}`);
console.log('faker', faker.name.firstName());
