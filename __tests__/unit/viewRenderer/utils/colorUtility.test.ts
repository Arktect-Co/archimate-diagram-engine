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

  it('should return color "BUSINESS_BEHAVIOUR" if type is color related', () => {
    const types = [
      NodeType.BusinessInteraction,
      NodeType.BusinessProcess,
      NodeType.BusinessFunction,
      NodeType.BusinessService,
      NodeType.BusinessEvent,
    ];

    types.forEach(type => {
      const hexColor = typeToHexColor(type, style);

      expect(hexColor).to.equal(styleSetting.BUSINESS_BEHAVIOUR);
    });
  });

  it('should return color "BUSINESS_PASSIVE" if type is color related', () => {
    const types = [
      NodeType.BusinessObject,
      NodeType.Representation,
      NodeType.Product,
      NodeType.Contract,
    ];

    types.forEach(type => {
      const hexColor = typeToHexColor(type, style);

      expect(hexColor).to.equal(styleSetting.BUSINESS_PASSIVE);
    });
  });

  it('should return color "TECHNOLOGY_ACTIVE" if type is color related', () => {
    const types = [
      NodeType.Node,
      NodeType.SystemSoftware,
      NodeType.InfrastructureInterface,
      NodeType.TechnologyInterface,
      NodeType.TechnologyCollaboration,
      NodeType.Network,
      NodeType.CommunicationNetwork,
      NodeType.CommunicationPath,
      NodeType.Path,
      NodeType.Device,
    ];

    types.forEach(type => {
      const hexColor = typeToHexColor(type, style);

      expect(hexColor).to.equal(styleSetting.TECHNOLOGY_ACTIVE);
    });
  });

  it('should return color "TECHNOLOGY_BEHAVIOUR" if type is color related', () => {
    const types = [
      NodeType.InfrastructureFunction,
      NodeType.InfrastructureService,
      NodeType.TechnologyFunction,
      NodeType.TechnologyService,
      NodeType.TechnologyProcess,
      NodeType.TechnologyInteraction,
      NodeType.TechnologyEvent,
    ];

    types.forEach(type => {
      const hexColor = typeToHexColor(type, style);

      expect(hexColor).to.equal(styleSetting.TECHNOLOGY_BEHAVIOUR);
    });
  });

  it('should return color "TECHNOLOGY_PASSIVE" if type is color related', () => {
    const type = NodeType.Artifact;
    const hexColor = typeToHexColor(type, style);

    expect(hexColor).to.equal(styleSetting.TECHNOLOGY_PASSIVE);
  });

  it('should return color "PHYSICAL_ACTIVE" if type is color related', () => {
    const types = [NodeType.Facility, NodeType.Equipment, NodeType.DistributionNetwork];

    types.forEach(type => {
      const hexColor = typeToHexColor(type, style);

      expect(hexColor).to.equal(styleSetting.PHYSICAL_ACTIVE);
    });
  });

  it('should return color "PHYSICAL_PASSIVE" if type is color related', () => {
    const type = NodeType.Material;
    const hexColor = typeToHexColor(type, style);

    expect(hexColor).to.equal(styleSetting.PHYSICAL_PASSIVE);
  });

  it('should return color "STRATEGY" if type is color related', () => {
    const types = [
      NodeType.Resource,
      NodeType.Capability,
      NodeType.CourseOfAction,
      NodeType.ValueStream,
    ];

    types.forEach(type => {
      const hexColor = typeToHexColor(type, style);

      expect(hexColor).to.equal(styleSetting.STRATEGY);
    });
  });

  it('should return color "GROUPING" if type is color related', () => {
    const types = [NodeType.Grouping, NodeType.Group];

    types.forEach(type => {
      const hexColor = typeToHexColor(type, style);

      expect(hexColor).to.equal(styleSetting.GROUPING);
    });
  });
});
