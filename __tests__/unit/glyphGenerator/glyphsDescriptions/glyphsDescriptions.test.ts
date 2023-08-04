import { getGlyph } from '../../../../lib/glyphGenerator/glyphsDescriptions/glyphDescriptions';
import { expect } from 'chai';
import { NodeType } from '@lib/common/enums/nodeType';
import { glyphs } from '@lib/glyphGenerator/glyphsDescriptions/glyphs';
import { GlyphSymbol } from '../../../../lib/common/enums/glyphSymbol';

const isMatch = (value: string, glyph: string): boolean => !!glyph.match(value);

describe('glyphsDescriptions', () => {
  it('should return empty string if type does not contain glyph', () => {
    const glyph = getGlyph('unknow');

    expect(glyph).to.equal('');
  });

  it('should return a "applicationcomponent" glyph', () => {
    const glyph = getGlyph(NodeType.ApplicationComponent);

    expect(glyph).to.equal(glyphs[NodeType.ApplicationComponent]);
    expect(isMatch('component', glyph)).to.equal(true);
  });

  it('should return a "artifact" glyph', () => {
    const glyph = getGlyph(NodeType.Artifact);

    expect(glyph).to.equal(glyphs[NodeType.Artifact]);
    expect(isMatch(NodeType.Artifact, glyph)).to.equal(true);
  });

  it('should return a "assessment" glyph', () => {
    const glyph = getGlyph(NodeType.Assessment);

    expect(glyph).to.equal(glyphs[NodeType.Assessment]);
    expect(isMatch(NodeType.Assessment, glyph)).to.equal(true);
  });

  it('should return a "businessactor" glyph', () => {
    const glyph = getGlyph(NodeType.BusinessActor);

    expect(glyph).to.equal(glyphs[NodeType.BusinessActor]);
    expect(isMatch(NodeType.BusinessActor, glyph)).to.equal(true);
  });

  it('should return a "capability" glyph', () => {
    const glyph = getGlyph(NodeType.Capability);

    expect(glyph).to.equal(glyphs[NodeType.Capability]);
    expect(isMatch(NodeType.Capability, glyph)).to.equal(true);
  });

  it('should return a "collaboration" glyph', () => {
    const glyph = getGlyph(GlyphSymbol.Collaboration);

    expect(glyph).to.equal(glyphs[GlyphSymbol.Collaboration]);
    expect(isMatch(GlyphSymbol.Collaboration, glyph)).to.equal(true);
  });

  it('should return a "communicationnetwork" glyph', () => {
    const glyph = getGlyph(NodeType.CommunicationNetwork);

    expect(glyph).to.equal(glyphs[NodeType.CommunicationNetwork]);
    expect(isMatch('network', glyph)).to.equal(true);
  });

  it('should return a "constraint" glyph', () => {
    const glyph = getGlyph(NodeType.Constraint);

    expect(glyph).to.equal(glyphs[NodeType.Constraint]);
    expect(isMatch(NodeType.Constraint, glyph)).to.equal(true);
  });

  it('should return a "contract" glyph', () => {
    const glyph = getGlyph(NodeType.Contract);

    expect(glyph).to.equal(glyphs[NodeType.Contract]);
    expect(isMatch(NodeType.Contract, glyph)).to.equal(true);
  });

  it('should return a "courseofaction" glyph', () => {
    const glyph = getGlyph(NodeType.CourseOfAction);

    expect(glyph).to.equal(glyphs[NodeType.CourseOfAction]);
    expect(isMatch('courseaction', glyph)).to.equal(true);
  });

  it('should return a "deliverable" glyph', () => {
    const glyph = getGlyph(NodeType.Deliverable);

    expect(glyph).to.equal(glyphs[NodeType.Deliverable]);
    expect(isMatch(NodeType.Deliverable, glyph)).to.equal(true);
  });

  it('should return a "device" glyph', () => {
    const glyph = getGlyph(NodeType.Device);

    expect(glyph).to.equal(glyphs[NodeType.Device]);
    expect(isMatch(NodeType.Device, glyph)).to.equal(true);
  });

  it('should return a "distributionnetwork" glyph', () => {
    const glyph = getGlyph(NodeType.DistributionNetwork);

    expect(glyph).to.equal(glyphs[NodeType.DistributionNetwork]);
    expect(isMatch(NodeType.DistributionNetwork, glyph)).to.equal(true);
  });

  it('should return a "domainservice" glyph', () => {
    const glyph = getGlyph(GlyphSymbol.DomainService);

    expect(glyph).to.equal(glyphs[GlyphSymbol.DomainService]);
    expect(isMatch('service', glyph)).to.equal(true);
  });

  it('should return a "driver" glyph', () => {
    const glyph = getGlyph(NodeType.Driver);

    expect(glyph).to.equal(glyphs[NodeType.Driver]);
    expect(isMatch(NodeType.Driver, glyph)).to.equal(true);
  });

  it('should return a "equipment" glyph', () => {
    const glyph = getGlyph(NodeType.Equipment);

    expect(glyph).to.equal(glyphs[NodeType.Equipment]);
    expect(isMatch(NodeType.Equipment, glyph)).to.equal(true);
  });

  it('should return a "event" glyph', () => {
    const glyph = getGlyph(GlyphSymbol.Event);

    expect(glyph).to.equal(glyphs[GlyphSymbol.Event]);
    expect(isMatch(GlyphSymbol.Event, glyph)).to.equal(true);
  });

  it('should return a "facility" glyph', () => {
    const glyph = getGlyph(NodeType.Facility);

    expect(glyph).to.equal(glyphs[NodeType.Facility]);
    expect(isMatch(NodeType.Facility, glyph)).to.equal(true);
  });
});
