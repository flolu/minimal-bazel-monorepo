import { add } from './util';
import { Constants } from '@lbm/enums';

const a = 13;
const b = 29;

console.log(`${a} + ${b} is ${add(a, b)}`);
console.log(`${Constants.Pi} + ${Constants.E} is ${add(Number(Constants.Pi), Number(Constants.E))}`);
