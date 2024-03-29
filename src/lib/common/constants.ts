import { ArchimateVersion } from '@lib/common/enums/archimateVersion';

export const SETTINGS_DEFAULT = Object.freeze({
  ARCHIMATE_VERSION: ArchimateVersion.LessThanOrEqualV3_1,
  STYLE: 'hybrid',
  DARK_COLOR: 'black',
  LIGHT_COLOR: 'white',
  TEXT_COLOR: 'black',
  TEXT_SIZE: 12,
  WIDTH: 140,
  HEIGHT: 50,
  BORDER_WIDTH: 0.8,
  EDGE_WIDTH: 0.8,
});
