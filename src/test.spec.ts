import { double } from "./test";

describe('test', () => {
  it('double()', () => {
    expect(double(101)).toEqual(202);
  });
});
