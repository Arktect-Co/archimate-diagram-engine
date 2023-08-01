import { typeToHexColor } from '@lib/viewRenderer/utils/colorUtility';
import { NodeType } from '../../../../lib/common/enums/nodeType';
import { expect } from 'chai';
import { getStyle } from '@lib/viewRenderer/utils/styleUtility';

const style = 'hybrid';
const styleSetting = getStyle(style);

describe('colorUtility', () => {
  it('should return color "MOTIVATIONAL" if type is color related', () => {
    const types = [
      NodeType.Requirement,
      NodeType.Principle,
      NodeType.Constraint,
      NodeType.Goal,
      NodeType.Driver,
      NodeType.Assessment,
      NodeType.Value,
      NodeType.Stakeholder,
      NodeType.Outcome,
      NodeType.Meaning,
    ];
    types.forEach(type => {
      const hexColor = typeToHexColor(type, style);

      expect(hexColor).to.equal(styleSetting.MOTIVATIONAL);
    });
  });

  it('should return color "IMPLEMENTATION_PROJECT" if type is color related', () => {
    const types = [NodeType.WorkPackage, NodeType.Deliverable, NodeType.ImplementationEvent];

    types.forEach(type => {
      const hexColor = typeToHexColor(type, style);

      expect(hexColor).to.equal(styleSetting.IMPLEMENTATION_PROJECT);
    });
  });

  it('should return color "IMPLEMENTATION_ROADMAP" if type is color related', () => {
    const types = [NodeType.Plateau, NodeType.Gap];

    types.forEach(type => {
      const hexColor = typeToHexColor(type, style);

      expect(hexColor).to.equal(styleSetting.IMPLEMENTATION_ROADMAP);
    });
  });

  it('should return color "BUSINESS_ACTIVE" if type is color related', () => {
    const types = [
      NodeType.BusinessCollaboration,
      NodeType.BusinessActor,
      NodeType.BusinessRole,
      NodeType.BusinessInterface,
      NodeType.Location,
    ];

    types.forEach(type => {
      const hexColor = typeToHexColor(type, style);

      expect(hexColor).to.equal(styleSetting.BUSINESS_ACTIVE);
    });
  });
});
