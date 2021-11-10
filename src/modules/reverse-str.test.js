const reverseStr = require('./reverse-str');

test('reverse a given string.', () => {
  expect(reverseStr('worD and worD')).toMatch('Drow dna Drow');
});
