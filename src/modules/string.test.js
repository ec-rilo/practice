const capitalize = require('./string');

test('capitalize first letter of a string', () => {
  expect(capitalize('this is spongebob.')).toMatch('This is spongebob.');
});
