import {
  typeToClassification,
  typeToPureSymbol,
} from '@lib/viewRenderer/utils/archimateDomainUtils';
import { expect } from 'chai';
import { NodeType } from '@lib/common/enums/nodeType';
import { NodeShapeClassification } from '@lib/common/enums/nodeShapeClassification';
import { GlyphSymbol } from '@lib/common/enums/glyphSymbol';
import { ArchimateVersion } from '@lib/common/enums/archimateVersion';

describe('Archimate Domain Utils', () => {
  describe('typeToClassification', () => {
    describe('ArchiMate <=3.1', () => {
      it('should return the input type if value not found', () => {
        const type = 'unknown';
        const classification = typeToClassification(type);

        expect(classification).to.equal(type);
      });

      it('should return the "motivational" value if the type is related to classification', () => {
        const types = [
          NodeType.Requirement,
          NodeType.Principle,
          NodeType.Constraint,
          NodeType.Goal,
          NodeType.Outcome,
          NodeType.Driver,
          NodeType.Assessment,
          NodeType.Stakeholder,
          NodeType.Value,
          NodeType.Meaning,
        ];

        types.forEach(type => {
          const classification = typeToClassification(type);

          expect(classification).to.equal(NodeShapeClassification.Motivational);
        });
      });

      it('should return the "structure" value if the type is related to classification', () => {
        const types = [
          NodeType.BusinessCollaboration,
          NodeType.BusinessActor,
          NodeType.BusinessRole,
          NodeType.BusinessInterface,
          NodeType.BusinessObject,
          NodeType.Representation,
          NodeType.Product,
          NodeType.Contract,
          NodeType.ApplicationComponent,
          NodeType.ApplicationCollaboration,
          NodeType.ApplicationInterface,
          NodeType.DataObject,
          NodeType.Node,
          NodeType.SystemSoftware,
          NodeType.InfrastructureInterface,
          NodeType.TechnologyInterface,
          NodeType.TechnologyCollaboration,
          NodeType.Artifact,
          NodeType.CommunicationNetwork,
          NodeType.Path,
          NodeType.Device,
          NodeType.Material,
          NodeType.Facility,
          NodeType.Equipment,
          NodeType.DistributionNetwork,
          NodeType.Resource,
        ];

        types.forEach(type => {
          const classification = typeToClassification(type);

          expect(classification).to.equal(NodeShapeClassification.Structure);
        });
      });

      it('should return the "behaviour" value if the type is related to classification', () => {
        const types = [
          NodeType.BusinessInteraction,
          NodeType.BusinessProcess,
          NodeType.BusinessFunction,
          NodeType.BusinessService,
          NodeType.BusinessEvent,
          NodeType.ApplicationInteraction,
          NodeType.ApplicationFunction,
          NodeType.ApplicationService,
          NodeType.ApplicationProcess,
          NodeType.ApplicationEvent,
          NodeType.InfrastructureFunction,
          NodeType.InfrastructureService,
          NodeType.TechnologyFunction,
          NodeType.TechnologyService,
          NodeType.TechnologyProcess,
          NodeType.TechnologyInteraction,
          NodeType.Capability,
          NodeType.CourseOfAction,
          NodeType.ValueStream,
        ];

        types.forEach(type => {
          const classification = typeToClassification(type);

          expect(classification).to.equal(NodeShapeClassification.Behaviour);
        });
      });

      it('should return the "implementation_and_migration" value if the type is related to classification', () => {
        const types = [
          NodeType.Plateau,
          NodeType.WorkPackage,
          NodeType.Deliverable,
          NodeType.ImplementationEvent,
          NodeType.Gap,
        ];

        types.forEach(type => {
          const classification = typeToClassification(type);

          expect(classification).to.equal(NodeShapeClassification.ImplementationAndMigration);
        });
      });

      it('should return the "viewelement" value if the type is related to classification', () => {
        const type = NodeType.Note;
        const classification = typeToClassification(type);

        expect(classification).to.equal(NodeShapeClassification.ViewElement);
      });
    });

    describe('ArchiMate 3.2', () => {
      it('should return the input type if value not found', () => {
        const type = 'unknown';
        const classification = typeToClassification(type, ArchimateVersion.V3_2);

        expect(classification).to.equal(type);
      });

      it('should return the "motivational" value if the type is related to classification', () => {
        const types = [
          NodeType.Requirement,
          NodeType.Principle,
          NodeType.Constraint,
          NodeType.Goal,
          NodeType.Outcome,
          NodeType.Driver,
          NodeType.Assessment,
          NodeType.Stakeholder,
          NodeType.Value,
          NodeType.Meaning,
        ];

        types.forEach(type => {
          const classification = typeToClassification(type, ArchimateVersion.V3_2);

          expect(classification).to.equal(NodeShapeClassification.Motivational);
        });
      });

      it('should return the "structure" value if the type is related to classification', () => {
        const types = [
          NodeType.BusinessCollaboration,
          NodeType.BusinessActor,
          NodeType.BusinessRole,
          NodeType.BusinessInterface,
          NodeType.BusinessObject,
          NodeType.Representation,
          NodeType.Product,
          NodeType.Contract,
          NodeType.ApplicationComponent,
          NodeType.ApplicationCollaboration,
          NodeType.ApplicationInterface,
          NodeType.DataObject,
          NodeType.Node,
          NodeType.SystemSoftware,
          NodeType.InfrastructureInterface,
          NodeType.TechnologyInterface,
          NodeType.TechnologyCollaboration,
          NodeType.Artifact,
          NodeType.CommunicationNetwork,
          NodeType.Path,
          NodeType.Device,
          NodeType.Material,
          NodeType.Facility,
          NodeType.Equipment,
          NodeType.DistributionNetwork,
          NodeType.Resource,
          NodeType.Gap,
          NodeType.Plateau,
          NodeType.Deliverable,
        ];

        types.forEach(type => {
          const classification = typeToClassification(type, ArchimateVersion.V3_2);

          expect(classification).to.equal(NodeShapeClassification.Structure);
        });
      });

      it('should return the "behaviour" value if the type is related to classification', () => {
        const types = [
          NodeType.BusinessInteraction,
          NodeType.BusinessProcess,
          NodeType.BusinessFunction,
          NodeType.BusinessService,
          NodeType.BusinessEvent,
          NodeType.ApplicationInteraction,
          NodeType.ApplicationFunction,
          NodeType.ApplicationService,
          NodeType.ApplicationProcess,
          NodeType.ApplicationEvent,
          NodeType.InfrastructureFunction,
          NodeType.InfrastructureService,
          NodeType.TechnologyFunction,
          NodeType.TechnologyService,
          NodeType.TechnologyProcess,
          NodeType.TechnologyInteraction,
          NodeType.Capability,
          NodeType.CourseOfAction,
          NodeType.ValueStream,
        ];

        types.forEach(type => {
          const classification = typeToClassification(type, ArchimateVersion.V3_2);

          expect(classification).to.equal(NodeShapeClassification.Behaviour);
        });
      });

      it('should return the "implementation_and_migration" value if the type is related to classification', () => {
        const types = [NodeType.WorkPackage, NodeType.ImplementationEvent];

        types.forEach(type => {
          const classification = typeToClassification(type, ArchimateVersion.V3_2);

          expect(classification).to.equal(NodeShapeClassification.ImplementationAndMigration);
        });
      });

      it('should return the "viewelement" value if the type is related to classification', () => {
        const type = NodeType.Note;
        const classification = typeToClassification(type, ArchimateVersion.V3_2);

        expect(classification).to.equal(NodeShapeClassification.ViewElement);
      });
    });
  });

  describe('typeToPureSymbol', () => {
    it('should return an empty string if type not found', () => {
      const type = 'unknown';
      const pureSymbol = typeToPureSymbol(type);

      expect(pureSymbol).to.equal('');
    });

    it('should return type if no glyph symbol exists for type', () => {
      const types = [
        NodeType.Requirement,
        NodeType.Principle,
        NodeType.Constraint,
        NodeType.Goal,
        NodeType.Driver,
        NodeType.Assessment,
        NodeType.Plateau,
        NodeType.WorkPackage,
        NodeType.Deliverable,
        NodeType.Gap,
        NodeType.BusinessActor,
        NodeType.Representation,
        NodeType.Location,
        NodeType.Product,
        NodeType.Contract,
        NodeType.Value,
        NodeType.Meaning,
        NodeType.ApplicationComponent,
        NodeType.Node,
        NodeType.SystemSoftware,
        NodeType.Artifact,
        NodeType.CommunicationNetwork,
        NodeType.Path,
        NodeType.Device,
        NodeType.Outcome,
        NodeType.Material,
        NodeType.Facility,
        NodeType.Equipment,
        NodeType.DistributionNetwork,
        NodeType.CourseOfAction,
        NodeType.Capability,
        NodeType.Resource,
        NodeType.ValueStream,
        NodeType.Grouping,
        NodeType.Group,
      ];

      types.forEach(type => {
        const pureSymbol = typeToPureSymbol(type);

        expect(pureSymbol).to.equal(type);
      });
    });

    it('should return the "role" value if the type is related to Glyph Symbol', () => {
      const types = [NodeType.Stakeholder, NodeType.BusinessRole];

      types.forEach(type => {
        const pureSymbol = typeToPureSymbol(type);

        expect(pureSymbol).to.equal(GlyphSymbol.Role);
      });
    });

    it('should return the "object" value if the type is related to Glyph Symbol', () => {
      const types = [NodeType.BusinessObject, NodeType.DataObject];

      types.forEach(type => {
        const pureSymbol = typeToPureSymbol(type);

        expect(pureSymbol).to.equal(GlyphSymbol.Object);
      });
    });

    it('should return the "event" value if the type is related to Glyph Symbol', () => {
      const types = [
        NodeType.BusinessEvent,
        NodeType.ApplicationEvent,
        NodeType.TechnologyEvent,
        NodeType.ImplementationEvent,
      ];

      types.forEach(type => {
        const pureSymbol = typeToPureSymbol(type);

        expect(pureSymbol).to.equal(GlyphSymbol.Event);
      });
    });

    it('should return the "function" value if the type is related to Glyph Symbol', () => {
      const types = [
        NodeType.BusinessFunction,
        NodeType.ApplicationFunction,
        NodeType.InfrastructureFunction,
        NodeType.TechnologyFunction,
      ];

      types.forEach(type => {
        const pureSymbol = typeToPureSymbol(type);

        expect(pureSymbol).to.equal(GlyphSymbol.Function);
      });
    });

    it('should return the "process" value if the type is related to Glyph Symbol', () => {
      const types = [
        NodeType.BusinessProcess,
        NodeType.ApplicationProcess,
        NodeType.TechnologyProcess,
      ];

      types.forEach(type => {
        const pureSymbol = typeToPureSymbol(type);

        expect(pureSymbol).to.equal(GlyphSymbol.Process);
      });
    });

    it('should return the "domainservice" value if the type is related to Glyph Symbol', () => {
      const types = [
        NodeType.BusinessService,
        NodeType.ApplicationService,
        NodeType.InfrastructureService,
        NodeType.TechnologyService,
      ];

      types.forEach(type => {
        const pureSymbol = typeToPureSymbol(type);

        expect(pureSymbol).to.equal(GlyphSymbol.DomainService);
      });
    });

    it('should return the "interface" value if the type is related to Glyph Symbol', () => {
      const types = [
        NodeType.BusinessInterface,
        NodeType.ApplicationInterface,
        NodeType.InfrastructureInterface,
        NodeType.TechnologyInterface,
      ];

      types.forEach(type => {
        const pureSymbol = typeToPureSymbol(type);

        expect(pureSymbol).to.equal(GlyphSymbol.Interface);
      });
    });

    it('should return the "collaboration" value if the type is related to Glyph Symbol', () => {
      const types = [
        NodeType.BusinessCollaboration,
        NodeType.ApplicationCollaboration,
        NodeType.TechnologyCollaboration,
      ];

      types.forEach(type => {
        const pureSymbol = typeToPureSymbol(type);

        expect(pureSymbol).to.equal(GlyphSymbol.Collaboration);
      });
    });

    it('should return the "interaction" value if the type is related to Glyph Symbol', () => {
      const types = [
        NodeType.BusinessInteraction,
        NodeType.ApplicationInteraction,
        NodeType.TechnologyInteraction,
      ];

      types.forEach(type => {
        const pureSymbol = typeToPureSymbol(type);

        expect(pureSymbol).to.equal(GlyphSymbol.Interaction);
      });
    });
  });
});
