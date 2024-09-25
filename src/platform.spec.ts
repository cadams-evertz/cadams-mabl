import { isMac } from './platform';

describe('platform', () => {
  it('isMac()', () => {
    const window = {
      navigator: {
        platform: 'some other platform',
      },
    };
    expect(isMac(window)).toBeFalse();
    window.navigator.platform = 'Is a Mac';
    expect(isMac(window)).toBeTrue();
  });
});
