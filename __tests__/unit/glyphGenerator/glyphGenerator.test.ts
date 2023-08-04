import { generateGlyph } from '@lib/glyphGenerator/glyphGenerator';
import { NodeType } from '../../../lib/common/enums/nodeType';
import { expect } from 'chai';

const baseSvgDescription =
  '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;';

describe('glyphGenerator', () => {
  it('should return a glyph if type contains glyph', () => {
    const mainSvgDescription =
      'stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="component" x="0" y="0" width="16" height="16" style="fill:none;"/><g><rect x="1" y="3.333" width="8.167" height="3.5" style="fill:none;stroke:#0d0d0d;stroke-width:1px;"/><rect x="1" y="9.167" width="8.167" height="3.5" style="fill:none;stroke:#0d0d0d;stroke-width:1px;"/><path d="M15,15l-9.333,0l0,-2.333l3.5,0l0,-3.5l-3.5,0l0,-2.334l3.5,0l0,-3.5l-3.5,0l0,-2.333l9.333,0l0,14Z" style="fill:none;stroke:#0d0d0d;stroke-width:1px;"/></g></svg>';

    const glyph = generateGlyph(NodeType.ApplicationComponent);

    expect(glyph).to.equal(baseSvgDescription + mainSvgDescription);
  });
});
