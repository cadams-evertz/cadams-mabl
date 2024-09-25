import { initialUpper } from './text';

describe('text', () => {
  it('initialUpper()', () => {
    expect(initialUpper(undefined)).toBeUndefined();
    expect(initialUpper(null)).toBeNull();
    expect(initialUpper('hello world')).toEqual('Hello world');
    expect(initialUpper('')).toEqual('');
    expect(initialUpper('x')).toEqual('X');
    expect(initialUpper('Yy')).toEqual('Yy');
    expect(initialUpper('ZZ')).toEqual('ZZ');
  });
});
