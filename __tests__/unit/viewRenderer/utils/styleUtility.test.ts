import { getStyle } from '@lib/viewRenderer/utils/styleUtility';
import themes from '@lib/viewRenderer/utils/style/styles';
import { expect } from 'chai';

describe('styleUtility', () => {
  it('should return the style setting of "element"', () => {
    const style = 'element';
    const theme = getStyle(style);

    expect(theme).to.equal(themes.COLOR_SCHEME_ELEMENT);
  });
});
