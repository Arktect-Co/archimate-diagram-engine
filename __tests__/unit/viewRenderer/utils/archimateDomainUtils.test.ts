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
  });
});
