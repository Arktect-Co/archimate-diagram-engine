import { typeToPureSymbol } from '../viewRenderer/utils/archimateDomainUtils';
import { getGlyph } from './glyphsDescriptions/glyphDescriptions';
import { Version } from '@lib/model/ViewSetting';
import { ArchimateVersion } from '@lib/common/enums/archimateVersion';

/**
 * Generates a Glyph based on the node type
 * @param type Node type
 * @param archimateVersion ArchiMate version
 * @return Glyph
 * @example
 * import { generateGlyph } from "@lib/glyphGenerator/glyphGenerator";
 *
 * const type = "applicationcomponent";
 * const glyph = generateGlyph(type);
 */
export const generateGlyph = (type: string, archimateVersion?: Version): string => {
  const version = archimateVersion ? archimateVersion : ArchimateVersion.LessThanOrEqualV3_1;
  const baseSvgDescription =
    '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;';
  const mainSvgDescription = getGlyph(typeToPureSymbol(type), version);

  return mainSvgDescription !== '' ? baseSvgDescription + mainSvgDescription : '';
};
