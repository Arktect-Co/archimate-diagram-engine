import { generateGlyph } from '@lib/glyphGenerator/glyphGenerator';
import { NodeType } from '@lib/common/enums/nodeType';
import { expect } from 'chai';
import { glyphs } from '@lib/glyphGenerator/glyphsDescriptions/glyphs';

const baseSvgDescription =
  '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;';

describe('glyphGenerator', () => {
  it('should return a glyph if type contains glyph', () => {
    const type = NodeType.ApplicationComponent;
    const mainSvgDescription = glyphs[type];
    const glyph = generateGlyph(type);

    expect(glyph).to.equal(baseSvgDescription + mainSvgDescription);
  });

  it('should return empty string if type does not contain glyph', () => {
    const glyph = generateGlyph('unknow');

    expect(glyph).to.equal('');
  });
});
