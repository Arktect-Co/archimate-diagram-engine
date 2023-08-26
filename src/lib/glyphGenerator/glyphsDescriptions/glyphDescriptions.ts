import { archimateGlyphs } from './glyphs';
import { Version } from '@lib/model/ViewSetting';
import { ArchimateVersion } from '@lib/common/enums/archimateVersion';

/**
 * Returns a Glyph
 * @param type Node type or Glyph symbol
 * @param [archimateVersion = '<=3.1'] ArchiMate version
 * @return glyph
 * @example
 * import { getGlyph } from '@lib/glyphGenerator/glyphsDescriptions/glyphDescriptions';
 * import { typeToPureSymbol } from '@lib/viewRenderer/utils/archimateDomainUtils';
 *
 * const type = "applicationcomponent";
 * const glyph = getGlyph(typeToPureSymbol(type));
 */
export const getGlyph = (
  type: string,
  archimateVersion: Version = ArchimateVersion.LessThanOrEqualV3_1,
): string => {
  const glyphs = archimateGlyphs[archimateVersion];
  const glyph = glyphs[type];

  return glyph ? glyph : '';
};
