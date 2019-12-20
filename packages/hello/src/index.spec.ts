import { hello } from './index';

test('hello', () => {
  expect(() => hello('name')).not.toThrow();
});
