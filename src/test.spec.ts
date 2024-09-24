import { double, triple } from './test';

describe('test', () => {
  it('double()', () => {
    expect(double(101)).toEqual(202);
  });

  it('triple()', () => {
    expect(triple(101)).toEqual(303);
  });
});
