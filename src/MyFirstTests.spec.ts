import 'jest';

test('1+1 should equal 2', () => {
  const result = 1 + 1;

  // if (result != 2) {
  //   throw new Error('1+1 expected to = 2');
  // }
  expect(result).toEqual(2);
});

test('2+2 should equal 4', (done) => {
  const result = 2 + 2;

  if (result != 4) {
    throw new Error('result was ' + result);
  }
  expect(result).toEqual(4);
  done();
});

test('async example', (done) => {
  setTimeout(() => {
    expect(7-1).toEqual(6);
    done();
  }, 2000);
});