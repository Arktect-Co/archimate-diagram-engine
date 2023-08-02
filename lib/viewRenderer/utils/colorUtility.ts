import { getStyle } from '@lib/viewRenderer/utils/styleUtility';
import { NodeType } from '@lib/common/enums/nodeType';
import { Style } from '@lib/model/ViewSetting';

/**
 * Returns a hexadecimal color based on type
 * @param type Node type
 * @param style types of style
 * @return Hexadecimal color
 *
 * @example
 * const type = 'principle';
 * const style = 'layered';
 * const hexadecimal = typeToHexColor(type, style);
 */
export const typeToHexColor = (type: string, style: Style): string => {
  const colorScheme = getStyle(style);

  switch (type) {
    case NodeType.Requirement:
    case NodeType.Principle:
    case NodeType.Constraint:
    case NodeType.Goal:
    case NodeType.Driver:
    case NodeType.Assessment:
    case NodeType.Value:
    case NodeType.Stakeholder:
    case NodeType.Outcome:
    case NodeType.Meaning:
      return colorScheme.MOTIVATIONAL;
    case NodeType.WorkPackage:
    case NodeType.Deliverable:
    case NodeType.ImplementationEvent:
      return colorScheme.IMPLEMENTATION_PROJECT;
    case NodeType.Plateau:
    case NodeType.Gap:
      return colorScheme.IMPLEMENTATION_ROADMAP;
    case NodeType.BusinessCollaboration:
    case NodeType.BusinessActor:
    case NodeType.BusinessRole:
    case NodeType.BusinessInterface:
    case NodeType.Location:
      return colorScheme.BUSINESS_ACTIVE;
    case NodeType.BusinessInteraction:
    case NodeType.BusinessProcess:
    case NodeType.BusinessFunction:
    case NodeType.BusinessService:
    case NodeType.BusinessEvent:
      return colorScheme.BUSINESS_BEHAVIOUR;
    case NodeType.BusinessObject:
    case NodeType.Representation:
    case NodeType.Product:
    case NodeType.Contract:
      return colorScheme.BUSINESS_PASSIVE;
    case NodeType.ApplicationComponent:
    case NodeType.ApplicationCollaboration:
    case NodeType.ApplicationInterface:
      return colorScheme.APPLICATION_ACTIVE;
    case NodeType.ApplicationInteraction:
    case NodeType.ApplicationFunction:
    case NodeType.ApplicationService:
    case NodeType.ApplicationProcess:
    case NodeType.ApplicationEvent:
      return colorScheme.APPLICATION_BEHAVIOUR;
    case NodeType.DataObject:
      return colorScheme.APPLICATION_PASSIVE;
    case NodeType.Node:
    case NodeType.SystemSoftware:
    case NodeType.InfrastructureInterface:
    case NodeType.TechnologyInterface:
    case NodeType.TechnologyCollaboration:
    case NodeType.Network:
    case NodeType.CommunicationNetwork:
    case NodeType.CommunicationPath:
    case NodeType.Path:
    case NodeType.Device:
      return colorScheme.TECHNOLOGY_ACTIVE;
    case NodeType.InfrastructureFunction:
    case NodeType.InfrastructureService:
    case NodeType.TechnologyFunction:
    case NodeType.TechnologyService:
    case NodeType.TechnologyProcess:
    case NodeType.TechnologyInteraction:
    case NodeType.TechnologyEvent:
      return colorScheme.TECHNOLOGY_BEHAVIOUR;
    case NodeType.Artifact:
      return colorScheme.TECHNOLOGY_PASSIVE;
    case NodeType.Facility:
    case NodeType.Equipment:
    case NodeType.DistributionNetwork:
      return colorScheme.PHYSICAL_ACTIVE;
    case NodeType.Material:
      return colorScheme.PHYSICAL_PASSIVE;
    case NodeType.Resource:
    case NodeType.Capability:
    case NodeType.CourseOfAction:
    case NodeType.ValueStream:
      return colorScheme.STRATEGY;
    case NodeType.Grouping:
    case NodeType.Group:
      return colorScheme.GROUPING;
    default:
      return '';
  }
};
