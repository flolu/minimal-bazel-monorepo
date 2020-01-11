import { add } from './util';

test('add function', () => {
  const a = 10;
  const b = 5;
  const result = add(a, b);
  expect(result).toBe(a + b);
});
