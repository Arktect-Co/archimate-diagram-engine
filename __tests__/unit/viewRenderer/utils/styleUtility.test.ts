import { getStyle, Style } from '@lib/viewRenderer/utils/styleUtility';
import themes from '@lib/viewRenderer/utils/style/styles';
import { expect } from 'chai';

describe('styleUtility', () => {
  it('should return the "hybrid" style configuration if the informed style does not exist', () => {
    const style = 'unknown' as Style;
    const theme = getStyle(style);

    expect(theme).to.equal(themes.COLOR_SCHEME_HYBRID);
  });

  it('should return the style setting of "element"', () => {
    const style: Style = 'element';
    const theme = getStyle(style);

    expect(theme).to.equal(themes.COLOR_SCHEME_ELEMENT);
  });

  it('should return the style setting of "layered"', () => {
    const style: Style = 'layered';
    const theme = getStyle(style);

    expect(theme).to.equal(themes.COLOR_SCHEME_LAYERED);
  });

  it('should return the style setting of "hybrid"', () => {
    const style: Style = 'hybrid';
    const theme = getStyle(style);

    expect(theme).to.equal(themes.COLOR_SCHEME_HYBRID);
  });
});
