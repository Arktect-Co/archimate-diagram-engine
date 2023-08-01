import {
  typeToClassification,
  typeToPureSymbol,
} from '@lib/viewRenderer/utils/archimateDomainUtils';
import { expect } from 'chai';
import { NodeType } from '../../../../lib/common/enums/nodeType';
import { NodeShapeClassification } from '../../../../lib/common/enums/nodeShapeClassification';
import { GlyphSymbol } from '../../../../lib/common/enums/glyphSymbol';

describe('Archimate Domain Utils', () => {
  describe('typeToClassification', () => {
    it('should return the input type if value not found', () => {
      const type = 'unknown';
      const classification = typeToClassification(type);

      expect(classification).to.equal(type);
    });

    it('should return the "motivational" value if the type is related to classification', () => {
      const type = NodeType.Requirement;
      const classification = typeToClassification(type);

      expect(classification).to.equal(NodeShapeClassification.Motivational);
    });

    it('should return the "structure" value if the type is related to classification', () => {
      const type = NodeType.Resource;
      const classification = typeToClassification(type);

      expect(classification).to.equal(NodeShapeClassification.Structure);
    });

    it('should return the "behaviour" value if the type is related to classification', () => {
      const type = NodeType.ValueStream;
      const classification = typeToClassification(type);

      expect(classification).to.equal(NodeShapeClassification.Behaviour);
    });

    it('should return the "implementation_and_migration" value if the type is related to classification', () => {
      const type = NodeType.Gap;
      const classification = typeToClassification(type);

      expect(classification).to.equal(NodeShapeClassification.ImplementationAndMigration);
    });

    it('should return the "viewelement" value if the type is related to classification', () => {
      const type = NodeType.Note;
      const classification = typeToClassification(type);

      expect(classification).to.equal(NodeShapeClassification.ViewElement);
    });
  });

  describe('typeToPureSymbol', () => {
    it('should return an empty string if type not found', () => {
      const type = 'unknown';
      const pureSymbol = typeToPureSymbol(type);

      expect(pureSymbol).to.equal('');
    });

    it('should return the "role" value if the type is related to Glyph Symbol', () => {
      const type = NodeType.Stakeholder;
      const pureSymbol = typeToPureSymbol(type);

      expect(pureSymbol).to.equal(GlyphSymbol.Role);
    });

    it('should return the "object" value if the type is related to Glyph Symbol', () => {
      const type = NodeType.DataObject;
      const pureSymbol = typeToPureSymbol(type);

      expect(pureSymbol).to.equal(GlyphSymbol.Object);
    });

    it('should return the "event" value if the type is related to Glyph Symbol', () => {
      const type = NodeType.ImplementationEvent;
      const pureSymbol = typeToPureSymbol(type);

      expect(pureSymbol).to.equal(GlyphSymbol.Event);
    });
  });
});
