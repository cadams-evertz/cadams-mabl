import { queryXPath } from './html';

describe('html', () => {
  it('queryXPath()', () => {
    const test1 = document.createElement('test');
    test1.setAttribute('n', 'one');
    document.body.appendChild(test1);

    const test2 = document.createElement('test');
    test2.setAttribute('n', 'two');
    test2.appendChild(document.createTextNode('test2 text'));
    test1.appendChild(test2);

    expect(queryXPath('//test')).toEqual([test1, test2]);
    expect(queryXPath('//test/@n')).toEqual(['one', 'two']);
    expect(queryXPath('//test[@n="one"]')).toEqual(test1);
    expect(queryXPath('//test[@n="two"]')).toEqual(test2);
    expect(queryXPath('//test/test')).toEqual(test2);
    expect(queryXPath('//test/test/text()')).toEqual('test2 text');
  });
});
