import { typeToClassification } from '@lib/viewRenderer/utils/archimateDomainUtils';
import { expect } from 'chai';

describe('Archimate Domain Utils', () => {
  describe('typeToClassification', () => {
    it('should return the input type if value not found', () => {
      const type = 'unknown';
      const classification = typeToClassification(type);

      expect(classification).to.equal(type);
    });
  });
});
