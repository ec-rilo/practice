const calculator = require('./calculator');

test('calculate addition', () => {
  expect(calculator.add(10, 10)).toBe(20);
});

test('calculate subtraction', () => {
  expect(calculator.subtract(10, 10)).toBe(0);
});

test('calculate multiplication', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test('calculate division', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
