import 'jest';

import { TestableService } from './TestableService';

let sut: TestableService;

beforeEach(() => {
  this.sut = new TestableService();
});

test('add() returns correct result', () => {
  const result = this.sut.add(5, 2);
  expect(result).toEqual(7);
});

test('addAsync() returns correct result', (done) => {
  this.sut.addAsync(5, 2, (result) => {
    expect(result).toEqual(7);
    done();
  });
});

test('addPromise() returns correct result', () => {
  // set Jest to expect 1 assertion to be triggered
  expect.assertions(1);

  return this.sut.addPromise(4, 1)
    .then((result: number) => {
      expect(result).toEqual(5);
    });
});

test('addPromise() catches expected rejection', () => {
  // set Jest to expect 1 assertion to be triggered
  expect.assertions(1);

  return this.sut.addPromise(8, 1)
    .then((result: number) => {
      expect(result).toEqual(9);
    })
    .catch((e: Error) => {
      expect(e.message).toEqual('Forced reject when result =9');
    });
});