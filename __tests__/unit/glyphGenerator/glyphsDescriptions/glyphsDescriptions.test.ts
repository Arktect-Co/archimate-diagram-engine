import { getGlyph } from '@lib/glyphGenerator/glyphsDescriptions/glyphDescriptions';
import { expect } from 'chai';
import { NodeType } from '@lib/common/enums/nodeType';
import { glyphs } from '@lib/glyphGenerator/glyphsDescriptions/glyphs';
import { GlyphSymbol } from '@lib/common/enums/glyphSymbol';

const isMatch = (value: string, glyph: string): boolean => Boolean(glyph.match(value));

describe('glyphsDescriptions', () => {
  it('should return empty string if type does not contain glyph', () => {
    const glyph = getGlyph('unknow');

    expect(glyph).to.equal('');
  });

  it('should return a "applicationcomponent" glyph', () => {
    const type = NodeType.ApplicationComponent;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch('component', glyph)).to.equal(true);
  });

  it('should return a "artifact" glyph', () => {
    const type = NodeType.Artifact;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "assessment" glyph', () => {
    const type = NodeType.Assessment;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "businessactor" glyph', () => {
    const type = NodeType.BusinessActor;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "capability" glyph', () => {
    const type = NodeType.Capability;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "collaboration" glyph', () => {
    const type = GlyphSymbol.Collaboration;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "communicationnetwork" glyph', () => {
    const type = NodeType.CommunicationNetwork;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch('network', glyph)).to.equal(true);
  });

  it('should return a "constraint" glyph', () => {
    const type = NodeType.Constraint;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "contract" glyph', () => {
    const type = NodeType.Contract;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "courseofaction" glyph', () => {
    const type = NodeType.CourseOfAction;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch('courseaction', glyph)).to.equal(true);
  });

  it('should return a "deliverable" glyph', () => {
    const type = NodeType.Deliverable;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "device" glyph', () => {
    const type = NodeType.Device;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "distributionnetwork" glyph', () => {
    const type = NodeType.DistributionNetwork;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "domainservice" glyph', () => {
    const type = GlyphSymbol.DomainService;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch('service', glyph)).to.equal(true);
  });

  it('should return a "driver" glyph', () => {
    const type = NodeType.Driver;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "equipment" glyph', () => {
    const type = NodeType.Equipment;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "event" glyph', () => {
    const type = GlyphSymbol.Event;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "facility" glyph', () => {
    const type = NodeType.Facility;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "function" glyph', () => {
    const type = GlyphSymbol.Function;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "gap" glyph', () => {
    const type = NodeType.Gap;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "goal" glyph', () => {
    const type = NodeType.Goal;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "group" glyph', () => {
    const type = NodeType.Group;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "grouping" glyph', () => {
    const type = NodeType.Grouping;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch('group', glyph)).to.equal(true);
  });

  it('should return an "interaction" glyph', () => {
    const type = GlyphSymbol.Interaction;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return an "interface" glyph', () => {
    const type = GlyphSymbol.Interface;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "location" glyph', () => {
    const type = NodeType.Location;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "material" glyph', () => {
    const type = NodeType.Material;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "meaning" glyph', () => {
    const type = NodeType.Meaning;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "node" glyph', () => {
    const type = NodeType.Node;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return an "object" glyph', () => {
    const type = GlyphSymbol.Object;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "outcome" glyph', () => {
    const type = NodeType.Outcome;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "path" glyph', () => {
    const type = NodeType.Path;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "plateau" glyph', () => {
    const type = NodeType.Plateau;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "principle" glyph', () => {
    const type = NodeType.Principle;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "process" glyph', () => {
    const type = GlyphSymbol.Process;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "product" glyph', () => {
    const type = NodeType.Product;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "representation" glyph', () => {
    const type = NodeType.Representation;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "requirement" glyph', () => {
    const type = NodeType.Requirement;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "resource" glyph', () => {
    const type = NodeType.Resource;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "role" glyph', () => {
    const type = GlyphSymbol.Role;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "systemsoftware" glyph', () => {
    const type = NodeType.SystemSoftware;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "value" glyph', () => {
    const type = NodeType.Value;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "valuestream" glyph', () => {
    const type = NodeType.ValueStream;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });

  it('should return a "workpackage" glyph', () => {
    const type = NodeType.WorkPackage;
    const glyph = getGlyph(type);

    expect(glyph).to.equal(glyphs[type]);
    expect(isMatch(type, glyph)).to.equal(true);
  });
});
