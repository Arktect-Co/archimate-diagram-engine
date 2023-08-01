import { typeToClassification } from '@lib/viewRenderer/utils/archimateDomainUtils';
import { expect } from 'chai';
import { NodeType } from '../../../../lib/common/enums/nodeType';
import { NodeShapeClassification } from '../../../../lib/common/enums/nodeShapeClassification';

describe('Archimate Domain Utils', () => {
  describe('typeToClassification', () => {
    it('should return the input type if value not found', () => {
      const type = 'unknown';
      const classification = typeToClassification(type);

      expect(classification).to.equal(type);
    });

    it('Should return the "motivational" value if the type is related to classification', () => {
      const type = NodeType.Requirement;
      const classification = typeToClassification(type);

      expect(classification).to.equal(NodeShapeClassification.Motivational);
    });

    it('Should return the "structure" value if the type is related to classification', () => {
      const type = NodeType.Resource;
      const classification = typeToClassification(type);

      expect(classification).to.equal(NodeShapeClassification.Structure);
    });

    it('Should return the "behaviour" value if the type is related to classification', () => {
      const type = NodeType.ValueStream;
      const classification = typeToClassification(type);

      expect(classification).to.equal(NodeShapeClassification.Behaviour);
    });

    it('Should return the "implementation_and_migration" value if the type is related to classification', () => {
      const type = NodeType.Gap;
      const classification = typeToClassification(type);

      expect(classification).to.equal(NodeShapeClassification.ImplementationAndMigration);
    });

    it('Should return the "viewelement" value if the type is related to classification', () => {
      const type = NodeType.Note;
      const classification = typeToClassification(type);

      expect(classification).to.equal(NodeShapeClassification.ViewElement);
    });
  });
});
