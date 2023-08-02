export type Style = 'layered' | 'element' | 'hybrid';

export interface ViewSetting {
  style: Style;
  darkColor: string;
  lightColor: string;
  textColor: string;
  textSize: number;
  defaultWidth: number;
  defaultHeight: number;
  borderWidth: number;
  edgeWidth: number;
}
