import { glyphs } from '@lib/glyphGenerator/glyphsDescriptions/glyphs';

/**
 * Returns a Glyph
 * @param type Node type or Glyph symbol
 * @return glyph
 * @example
 * import { getGlyph } from '@lib/glyphGenerator/glyphsDescriptions/glyphDescriptions';
 * import { typeToPureSymbol } from '@lib/viewRenderer/utils/archimateDomainUtils';
 *
 * const type = "applicationcomponent";
 * const glyph = getGlyph(typeToPureSymbol(type));
 */
export const getGlyph = (type: string): string => {
  const glyph = glyphs[type];

  return glyph ? glyph : '';
};
