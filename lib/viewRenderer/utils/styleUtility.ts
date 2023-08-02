import themes, { ThemeSchema } from '@lib/viewRenderer/utils/style/styles';
import { Style } from '@lib/model/ViewSetting';

/**
 * Returns a style setting
 * @param style types of style
 * @return Style setting
 *
 * @example
 * const style = getStyle('layered');
 */
export const getStyle = (style: Style): ThemeSchema => {
  const key = `COLOR_SCHEME_${style.toUpperCase()}`;

  return themes[key] || themes.COLOR_SCHEME_HYBRID;
};
