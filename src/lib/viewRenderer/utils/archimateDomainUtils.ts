import { NodeShapeClassification } from '@lib/common/enums/nodeShapeClassification';
import { GlyphSymbol } from '@lib/common/enums/glyphSymbol';
import { NodeType } from '@lib/common/enums/nodeType';
import { Version } from '@lib/model/ViewSetting';
import { ArchimateVersion } from '@lib/common/enums/archimateVersion';

const nodeTypeClassification = {
  [NodeType.Requirement]: NodeShapeClassification.Motivational,
  [NodeType.Principle]: NodeShapeClassification.Motivational,
  [NodeType.Constraint]: NodeShapeClassification.Motivational,
  [NodeType.Goal]: NodeShapeClassification.Motivational,
  [NodeType.Outcome]: NodeShapeClassification.Motivational,
  [NodeType.Driver]: NodeShapeClassification.Motivational,
  [NodeType.Assessment]: NodeShapeClassification.Motivational,
  [NodeType.Stakeholder]: NodeShapeClassification.Motivational,
  [NodeType.Value]: NodeShapeClassification.Motivational,
  [NodeType.Meaning]: NodeShapeClassification.Motivational,
  [NodeType.BusinessCollaboration]: NodeShapeClassification.Structure,
  [NodeType.BusinessActor]: NodeShapeClassification.Structure,
  [NodeType.BusinessRole]: NodeShapeClassification.Structure,
  [NodeType.BusinessInterface]: NodeShapeClassification.Structure,
  [NodeType.BusinessObject]: NodeShapeClassification.Structure,
  [NodeType.Representation]: NodeShapeClassification.Structure,
  [NodeType.Product]: NodeShapeClassification.Structure,
  [NodeType.Contract]: NodeShapeClassification.Structure,
  [NodeType.ApplicationComponent]: NodeShapeClassification.Structure,
  [NodeType.ApplicationCollaboration]: NodeShapeClassification.Structure,
  [NodeType.ApplicationInterface]: NodeShapeClassification.Structure,
  [NodeType.DataObject]: NodeShapeClassification.Structure,
  [NodeType.Node]: NodeShapeClassification.Structure,
  [NodeType.SystemSoftware]: NodeShapeClassification.Structure,
  [NodeType.InfrastructureInterface]: NodeShapeClassification.Structure,
  [NodeType.TechnologyInterface]: NodeShapeClassification.Structure,
  [NodeType.TechnologyCollaboration]: NodeShapeClassification.Structure,
  [NodeType.Artifact]: NodeShapeClassification.Structure,
  [NodeType.CommunicationNetwork]: NodeShapeClassification.Structure,
  [NodeType.Path]: NodeShapeClassification.Structure,
  [NodeType.Device]: NodeShapeClassification.Structure,
  [NodeType.Material]: NodeShapeClassification.Structure,
  [NodeType.Facility]: NodeShapeClassification.Structure,
  [NodeType.Equipment]: NodeShapeClassification.Structure,
  [NodeType.DistributionNetwork]: NodeShapeClassification.Structure,
  [NodeType.Resource]: NodeShapeClassification.Structure,
  [NodeType.BusinessInteraction]: NodeShapeClassification.Behaviour,
  [NodeType.BusinessProcess]: NodeShapeClassification.Behaviour,
  [NodeType.BusinessFunction]: NodeShapeClassification.Behaviour,
  [NodeType.BusinessService]: NodeShapeClassification.Behaviour,
  [NodeType.BusinessEvent]: NodeShapeClassification.Behaviour,
  [NodeType.ApplicationInteraction]: NodeShapeClassification.Behaviour,
  [NodeType.ApplicationFunction]: NodeShapeClassification.Behaviour,
  [NodeType.ApplicationService]: NodeShapeClassification.Behaviour,
  [NodeType.ApplicationProcess]: NodeShapeClassification.Behaviour,
  [NodeType.ApplicationEvent]: NodeShapeClassification.Behaviour,
  [NodeType.InfrastructureFunction]: NodeShapeClassification.Behaviour,
  [NodeType.InfrastructureService]: NodeShapeClassification.Behaviour,
  [NodeType.TechnologyFunction]: NodeShapeClassification.Behaviour,
  [NodeType.TechnologyService]: NodeShapeClassification.Behaviour,
  [NodeType.TechnologyProcess]: NodeShapeClassification.Behaviour,
  [NodeType.TechnologyInteraction]: NodeShapeClassification.Behaviour,
  [NodeType.Capability]: NodeShapeClassification.Behaviour,
  [NodeType.CourseOfAction]: NodeShapeClassification.Behaviour,
  [NodeType.ValueStream]: NodeShapeClassification.Behaviour,
  [NodeType.Plateau]: NodeShapeClassification.ImplementationAndMigration,
  [NodeType.WorkPackage]: NodeShapeClassification.ImplementationAndMigration,
  [NodeType.Deliverable]: NodeShapeClassification.ImplementationAndMigration,
  [NodeType.ImplementationEvent]: NodeShapeClassification.ImplementationAndMigration,
  [NodeType.Gap]: NodeShapeClassification.ImplementationAndMigration,
  [NodeType.Note]: NodeShapeClassification.ViewElement,
};

const archimateClassification = {
  [ArchimateVersion.LessThanOrEqualV3_1]: nodeTypeClassification,
  [ArchimateVersion.V3_2]: {
    ...nodeTypeClassification,
    [NodeType.Deliverable]: NodeShapeClassification.Structure,
    [NodeType.Gap]: NodeShapeClassification.Structure,
    [NodeType.Plateau]: NodeShapeClassification.Structure,
  },
};

/**
 * Returns a node shape classification based on type
 * @param type Node type
 * @param archimateVersion ArchiMate Version
 * @return Node classification
 *
 * @example
 * const type = 'principle';
 * const classification = typeToClassification(type);
 */
export const typeToClassification = (
  type: string,
  archimateVersion: Version = ArchimateVersion.LessThanOrEqualV3_1,
): string => {
  const nodeClassification = archimateClassification[archimateVersion];
  const classification = nodeClassification[type];
  return classification ? classification : type;
};

/**
 * Returns a pure symbol name based on the node type
 * @param type Node type
 * @return Pure Symbol
 *
 * @example
 * const type = 'principle';
 * const pureSymbol = typeToPureSymbol(type);
 */
export const typeToPureSymbol = (type: string): string => {
  const nodeTypeSymbol = {
    [NodeType.Requirement]: type,
    [NodeType.Principle]: type,
    [NodeType.Constraint]: type,
    [NodeType.Goal]: type,
    [NodeType.Driver]: type,
    [NodeType.Assessment]: type,
    [NodeType.Plateau]: type,
    [NodeType.WorkPackage]: type,
    [NodeType.Deliverable]: type,
    [NodeType.Gap]: type,
    [NodeType.BusinessActor]: type,
    [NodeType.Representation]: type,
    [NodeType.Location]: type,
    [NodeType.Product]: type,
    [NodeType.Contract]: type,
    [NodeType.Value]: type,
    [NodeType.Meaning]: type,
    [NodeType.ApplicationComponent]: type,
    [NodeType.Node]: type,
    [NodeType.SystemSoftware]: type,
    [NodeType.Artifact]: type,
    [NodeType.CommunicationNetwork]: type,
    [NodeType.Path]: type,
    [NodeType.Device]: type,
    [NodeType.Outcome]: type,
    [NodeType.Material]: type,
    [NodeType.Facility]: type,
    [NodeType.Equipment]: type,
    [NodeType.DistributionNetwork]: type,
    [NodeType.CourseOfAction]: type,
    [NodeType.Capability]: type,
    [NodeType.Resource]: type,
    [NodeType.ValueStream]: type,
    [NodeType.Grouping]: type,
    [NodeType.Group]: type,
    [NodeType.Stakeholder]: GlyphSymbol.Role,
    [NodeType.BusinessRole]: GlyphSymbol.Role,
    [NodeType.BusinessObject]: GlyphSymbol.Object,
    [NodeType.DataObject]: GlyphSymbol.Object,
    [NodeType.BusinessEvent]: GlyphSymbol.Event,
    [NodeType.ApplicationEvent]: GlyphSymbol.Event,
    [NodeType.TechnologyEvent]: GlyphSymbol.Event,
    [NodeType.ImplementationEvent]: GlyphSymbol.Event,
    [NodeType.BusinessFunction]: GlyphSymbol.Function,
    [NodeType.ApplicationFunction]: GlyphSymbol.Function,
    [NodeType.InfrastructureFunction]: GlyphSymbol.Function,
    [NodeType.TechnologyFunction]: GlyphSymbol.Function,
    [NodeType.BusinessProcess]: GlyphSymbol.Process,
    [NodeType.ApplicationProcess]: GlyphSymbol.Process,
    [NodeType.TechnologyProcess]: GlyphSymbol.Process,
    [NodeType.BusinessService]: GlyphSymbol.DomainService,
    [NodeType.ApplicationService]: GlyphSymbol.DomainService,
    [NodeType.InfrastructureService]: GlyphSymbol.DomainService,
    [NodeType.TechnologyService]: GlyphSymbol.DomainService,
    [NodeType.BusinessInterface]: GlyphSymbol.Interface,
    [NodeType.ApplicationInterface]: GlyphSymbol.Interface,
    [NodeType.InfrastructureInterface]: GlyphSymbol.Interface,
    [NodeType.TechnologyInterface]: GlyphSymbol.Interface,
    [NodeType.BusinessCollaboration]: GlyphSymbol.Collaboration,
    [NodeType.ApplicationCollaboration]: GlyphSymbol.Collaboration,
    [NodeType.TechnologyCollaboration]: GlyphSymbol.Collaboration,
    [NodeType.BusinessInteraction]: GlyphSymbol.Interaction,
    [NodeType.ApplicationInteraction]: GlyphSymbol.Interaction,
    [NodeType.TechnologyInteraction]: GlyphSymbol.Interaction,
  };

  const pureSymbol = nodeTypeSymbol[type];
  return pureSymbol ? pureSymbol : '';
};
