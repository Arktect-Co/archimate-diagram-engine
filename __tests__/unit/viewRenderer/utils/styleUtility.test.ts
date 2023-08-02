import { getStyle } from '@lib/viewRenderer/utils/styleUtility';
import themes from '@lib/viewRenderer/utils/style/styles';
import { expect } from 'chai';
import { Style } from '@lib/model/ViewSetting';

describe('styleUtility', () => {
  it('should return the "hybrid" style configuration if the informed style does not exist', () => {
    const style = 'unknown' as Style;
    const theme = getStyle(style);

    expect(theme).to.equal(themes.COLOR_SCHEME_HYBRID);
  });

  it('should return the "element" style configuration', () => {
    const style: Style = 'element';
    const theme = getStyle(style);

    expect(theme).to.equal(themes.COLOR_SCHEME_ELEMENT);
  });

  it('should return the "layered" style configuration', () => {
    const style: Style = 'layered';
    const theme = getStyle(style);

    expect(theme).to.equal(themes.COLOR_SCHEME_LAYERED);
  });

  it('should return the "hybrid" style configuration', () => {
    const style: Style = 'hybrid';
    const theme = getStyle(style);

    expect(theme).to.equal(themes.COLOR_SCHEME_HYBRID);
  });
});
