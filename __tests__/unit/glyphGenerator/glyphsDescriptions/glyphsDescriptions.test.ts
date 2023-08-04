import { getGlyph } from '../../../../lib/glyphGenerator/glyphsDescriptions/glyphDescriptions';
import { expect } from 'chai';

describe('glyphsDescriptions', () => {
  it('should return empty string if type does not contain glyph', () => {
    const glyph = getGlyph('unknow');

    expect(glyph).to.equal('');
  });
});
