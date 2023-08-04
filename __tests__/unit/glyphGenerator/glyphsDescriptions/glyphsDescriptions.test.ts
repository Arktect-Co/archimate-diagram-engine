import { getGlyph } from '../../../../lib/glyphGenerator/glyphsDescriptions/glyphDescriptions';
import { expect } from 'chai';
import { NodeType } from '@lib/common/enums/nodeType';
import { glyphs } from '@lib/glyphGenerator/glyphsDescriptions/glyphs';
import { GlyphSymbol } from '../../../../lib/common/enums/glyphSymbol';

describe('glyphsDescriptions', () => {
  it('should return empty string if type does not contain glyph', () => {
    const glyph = getGlyph('unknow');

    expect(glyph).to.equal('');
  });

  it('should return a "applicationcomponent" glyph', () => {
    const glyph = getGlyph(NodeType.ApplicationComponent);

    expect(glyph).to.equal(glyphs[NodeType.ApplicationComponent]);
  });

  it('should return a "artifact" glyph', () => {
    const glyph = getGlyph(NodeType.Artifact);

    expect(glyph).to.equal(glyphs[NodeType.Artifact]);
  });

  it('should return a "assessment" glyph', () => {
    const glyph = getGlyph(NodeType.Assessment);

    expect(glyph).to.equal(glyphs[NodeType.Assessment]);
  });

  it('should return a "businessactor" glyph', () => {
    const glyph = getGlyph(NodeType.BusinessActor);

    expect(glyph).to.equal(glyphs[NodeType.BusinessActor]);
  });

  it('should return a "capability" glyph', () => {
    const glyph = getGlyph(NodeType.Capability);

    expect(glyph).to.equal(glyphs[NodeType.Capability]);
  });

  it('should return a "collaboration" glyph', () => {
    const glyph = getGlyph(GlyphSymbol.Collaboration);

    expect(glyph).to.equal(glyphs[GlyphSymbol.Collaboration]);
  });

  it('should return a "communicationnetwork" glyph', () => {
    const glyph = getGlyph(NodeType.CommunicationNetwork);

    expect(glyph).to.equal(glyphs[NodeType.CommunicationNetwork]);
  });
});
