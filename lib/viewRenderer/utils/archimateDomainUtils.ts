import { NodeShapeClassification } from '@lib/common/enums/nodeShapeClassification';
import { GlyphSymbol } from '@lib/common/enums/glyphSymbol';
import { NodeType } from '@lib/common/enums/nodeType';

/**
 * Returns a node shape classification based on type
 * @param type Node type
 * @return Node classification
 *
 * @example
 * const type = 'principle';
 * const classification = typeToClassification(type);
 */
export const typeToClassification = (type: string): string => {
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

  const classification = nodeTypeClassification[type];
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
  switch (type) {
    case NodeType.Requirement:
    case NodeType.Principle:
    case NodeType.Constraint:
    case NodeType.Goal:
    case NodeType.Driver:
    case NodeType.Assessment:
    case NodeType.Plateau:
    case NodeType.WorkPackage:
    case NodeType.Deliverable:
    case NodeType.Gap:
    case NodeType.BusinessActor:
    case NodeType.Representation:
    case NodeType.Location:
    case NodeType.Product:
    case NodeType.Contract:
    case NodeType.Value:
    case NodeType.Meaning:
    case NodeType.ApplicationComponent:
    case NodeType.Node:
    case NodeType.SystemSoftware:
    case NodeType.Artifact:
    case NodeType.CommunicationNetwork:
    case NodeType.Path:
    case NodeType.Device:
    case NodeType.Outcome:
    case NodeType.Material:
    case NodeType.Facility:
    case NodeType.Equipment:
    case NodeType.DistributionNetwork:
    case NodeType.CourseOfAction:
    case NodeType.Capability:
    case NodeType.Resource:
    case NodeType.ValueStream:
    case NodeType.Grouping:
    case NodeType.Group:
      return type;
    case NodeType.Stakeholder:
    case NodeType.BusinessRole:
      return GlyphSymbol.Role;
    case NodeType.BusinessObject:
    case NodeType.DataObject:
      return GlyphSymbol.Object;
    case NodeType.BusinessEvent:
    case NodeType.ApplicationEvent:
    case NodeType.TechnologyEvent:
    case NodeType.ImplementationEvent:
      return GlyphSymbol.Event;
    case NodeType.BusinessFunction:
    case NodeType.ApplicationFunction:
    case NodeType.InfrastructureFunction:
    case NodeType.TechnologyFunction:
      return GlyphSymbol.Function;
    case NodeType.BusinessProcess:
    case NodeType.ApplicationProcess:
    case NodeType.TechnologyProcess:
      return GlyphSymbol.Process;
    case NodeType.BusinessService:
    case NodeType.ApplicationService:
    case NodeType.InfrastructureService:
    case NodeType.TechnologyService:
      return GlyphSymbol.DomainService;
    case NodeType.BusinessInterface:
    case NodeType.ApplicationInterface:
    case NodeType.InfrastructureInterface:
    case NodeType.TechnologyInterface:
      return GlyphSymbol.Interface;
    case NodeType.BusinessCollaboration:
    case NodeType.ApplicationCollaboration:
    case NodeType.TechnologyCollaboration:
      return GlyphSymbol.Collaboration;
    case NodeType.BusinessInteraction:
    case NodeType.ApplicationInteraction:
    case NodeType.TechnologyInteraction:
      return GlyphSymbol.Interaction;
    default:
      return '';
  }
};
