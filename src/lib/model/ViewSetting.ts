export type Style = 'layered' | 'element' | 'hybrid';
export type Version = '<=3.1' | '3.2';

export interface ViewSetting {
  archimateVersion: Version;
  /**
   * Color style for nodes
   */
  style: Style;
  /**
   * Color used for strokes
   */
  darkColor: string;
  /**
   * Color used to fulfill relationship arrow shapes
   */
  lightColor: string;
  /**
   * Color used to fill texts
   */
  textColor: string;
  /**
   * Text font size
   */
  textSize: number;
  /**
   * Reference size for element's width
   */
  defaultWidth: number;
  /**
   * Reference size for element's height
   */
  defaultHeight: number;
  /**
   * Border width for elements
   */
  borderWidth: number;
  /**
   * Width of the relationship stroke
   */
  edgeWidth: number;
}
