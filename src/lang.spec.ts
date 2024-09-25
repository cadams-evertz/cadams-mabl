import { parseText } from './lang';

describe('lang', () => {
  it('parseText()', () => {
    expect(parseText(undefined)).toBeUndefined();
    expect(parseText(null)).toBeNull();
    expect(parseText('undefined')).toBeUndefined();
    expect(parseText('null')).toBeNull();
    expect(parseText('true')).toBeTrue();
    expect(parseText('false')).toBeFalse();
    expect(parseText('123')).toEqual(123);
    expect(parseText('["a","b"]')).toEqual(['a', 'b']);
    expect(parseText('{"x":1,"s":"s","b":false}')).toEqual({ x: 1, s: 's', b: false });
    expect(parseText('just text')).toEqual('just text');
  });
});
