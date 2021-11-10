const caesar = require('./caesar');

test('Caesar Cipher values only stay z-a.', () => {
  expect(caesar('abcdefghijklmnopqrstuvwxyz', 2)).toMatch(
    'cdefghijklmnopqrstuvwxyzab'
  );
});

test('Caesar Cipher values only stay Z-A.', () => {
  expect(caesar('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 2)).toMatch(
    'CDEFGHIJKLMNOPQRSTUVWXYZAB'
  );
});

test('Will not cipher integers.', () => {
  expect(caesar('123abc123a', 3)).toMatch('123def123d');
});

test('Will not cipher punctuation', () => {
  expect(
    caesar('the quick brown fox, steve, jumps over the lazy dog.', 3)
  ).toMatch('wkh txlfn eurzq ira, vwhyh, mxpsv ryhu wkh odcb grj.');
});
