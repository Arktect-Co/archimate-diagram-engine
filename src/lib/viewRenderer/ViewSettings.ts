import { SETTINGS_DEFAULT } from '@lib/common/constants';
import { ViewSetting, Style, Version } from '@lib/model/ViewSetting';

const stylesAvailable: Array<Style> = ['hybrid', 'layered', 'element'];
const versionAvailable: Array<Version> = ['<=3.1', '3.2'];

/**
 * Verifies if the value is a natural number but excluding zero
 * @param value Value to be verified
 * @return {boolean} True if value is a number greater than zero
 * @example
 * const value = -1;
 * const isNaturalNumber(value);
 */
function isNaturalNumber(value: unknown): boolean {
  return typeof value === 'number' && value > 0;
}

/**
 * Setting of View Node
 * @example
 * const settings = new ViewSettings({
 *       style: 'element',
 *       darkColor: 'blue',
 *       lightColor: 'white',
 *       textColor: 'black',
 *       textSize: 16,
 *       defaultWidth: 100,
 *       defaultHeight: 80,
 *       borderWidth: 1,
 *       edgeWidth: 1
 *       });
 */
export class ViewSettings implements Required<ViewSetting> {
  public archimateVersion: Version;
  public style: Style;
  public darkColor: string;
  public lightColor: string;
  public textColor: string;
  public textSize: number;
  public defaultWidth: number;
  public defaultHeight: number;
  public borderWidth: number;
  public edgeWidth: number;

  /**
   *
   * @param settings View Settings
   * @param [settings.style = 'hybrid'] Color style for nodes
   * @param [settings.darkColor = 'black'] Color used for strokes
   * @param [settings.lightColor = 'white'] Color used to fulfill relationship arrow shapes
   * @param [settings.textColor = 'black'] Color used to fill texts
   * @param [settings.textSize = 12] Text font size
   * @param [settings.defaultWidth = 140] Reference size for element's width
   * @param [settings.defaultHeight = 50] Reference size for element's height
   * @param [settings.borderWidth = 0.8] Border width for elements
   * @param [settings.edgeWidth = 0.8] Width of the relationship stroke
   */
  constructor(settings: Partial<ViewSetting>) {
    const {
      archimateVersion = SETTINGS_DEFAULT.ARCHIMATE_VERSION,
      style = SETTINGS_DEFAULT.STYLE,
      darkColor = SETTINGS_DEFAULT.DARK_COLOR,
      lightColor = SETTINGS_DEFAULT.LIGHT_COLOR,
      textColor = SETTINGS_DEFAULT.TEXT_COLOR,
      textSize = SETTINGS_DEFAULT.TEXT_SIZE,
      defaultWidth = SETTINGS_DEFAULT.WIDTH,
      defaultHeight = SETTINGS_DEFAULT.HEIGHT,
      borderWidth = SETTINGS_DEFAULT.BORDER_WIDTH,
      edgeWidth = SETTINGS_DEFAULT.EDGE_WIDTH,
    } = settings;

    this.archimateVersion = versionAvailable.includes(archimateVersion as Version)
      ? (archimateVersion as Version)
      : (SETTINGS_DEFAULT.ARCHIMATE_VERSION as Version);
    this.style = stylesAvailable.includes(style as Style)
      ? (style as Style)
      : (SETTINGS_DEFAULT.STYLE as Style);
    this.darkColor = darkColor;
    this.lightColor = lightColor;
    this.textColor = textColor;
    this.textSize = isNaturalNumber(textSize) ? textSize : SETTINGS_DEFAULT.TEXT_SIZE;
    this.defaultWidth = isNaturalNumber(defaultWidth) ? defaultWidth : SETTINGS_DEFAULT.WIDTH;
    this.defaultHeight = isNaturalNumber(defaultHeight) ? defaultHeight : SETTINGS_DEFAULT.HEIGHT;
    this.borderWidth = isNaturalNumber(borderWidth) ? borderWidth : SETTINGS_DEFAULT.BORDER_WIDTH;
    this.edgeWidth = isNaturalNumber(edgeWidth) ? edgeWidth : SETTINGS_DEFAULT.EDGE_WIDTH;
  }
}
