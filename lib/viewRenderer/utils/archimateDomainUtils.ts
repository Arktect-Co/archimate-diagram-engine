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
  switch (type) {
    case NodeType.Requirement:
    case NodeType.Principle:
    case NodeType.Constraint:
    case NodeType.Goal:
    case NodeType.Outcome:
    case NodeType.Driver:
    case NodeType.Assessment:
    case NodeType.Stakeholder:
    case NodeType.Value:
    case NodeType.Meaning:
      return NodeShapeClassification.Motivational;
    case NodeType.BusinessCollaboration:
    case NodeType.BusinessActor:
    case NodeType.BusinessRole:
    case NodeType.BusinessInterface:
    case NodeType.BusinessObject:
    case NodeType.Representation:
    case NodeType.Product:
    case NodeType.Contract:
    case NodeType.ApplicationComponent:
    case NodeType.ApplicationCollaboration:
    case NodeType.ApplicationInterface:
    case NodeType.DataObject:
    case NodeType.Node:
    case NodeType.SystemSoftware:
    case NodeType.InfrastructureInterface:
    case NodeType.TechnologyInterface:
    case NodeType.TechnologyCollaboration:
    case NodeType.Artifact:
    case NodeType.CommunicationNetwork:
    case NodeType.Path:
    case NodeType.Device:
    case NodeType.Material:
    case NodeType.Facility:
    case NodeType.Equipment:
    case NodeType.DistributionNetwork:
    case NodeType.Resource:
      return NodeShapeClassification.Structure;
    case NodeType.BusinessInteraction:
    case NodeType.BusinessProcess:
    case NodeType.BusinessFunction:
    case NodeType.BusinessService:
    case NodeType.BusinessEvent:
    case NodeType.ApplicationInteraction:
    case NodeType.ApplicationFunction:
    case NodeType.ApplicationService:
    case NodeType.ApplicationProcess:
    case NodeType.ApplicationEvent:
    case NodeType.InfrastructureFunction:
    case NodeType.InfrastructureService:
    case NodeType.TechnologyFunction:
    case NodeType.TechnologyService:
    case NodeType.TechnologyProcess:
    case NodeType.TechnologyInteraction:
    case NodeType.Capability:
    case NodeType.CourseOfAction:
    case NodeType.ValueStream:
      return NodeShapeClassification.Behaviour;
    case NodeType.Plateau:
    case NodeType.WorkPackage:
    case NodeType.Deliverable:
    case NodeType.ImplementationEvent:
    case NodeType.Gap:
      return NodeShapeClassification.ImplementationAndMigration;
    case NodeType.Note:
      return NodeShapeClassification.ViewElement;
    default:
      return type;
  }
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
