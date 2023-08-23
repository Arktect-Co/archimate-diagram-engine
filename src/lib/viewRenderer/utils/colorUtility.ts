import { getStyle } from '@lib/viewRenderer/utils/styleUtility';
import { NodeType } from '@lib/common/enums/nodeType';
import { Style, Version } from '@lib/model/ViewSetting';
import { ArchimateVersion } from '@lib/common/enums/archimateVersion';

interface Setting {
  style: Style;
  archimateVersion?: Version;
}

/**
 * Returns a hexadecimal color based on type
 * @param type Node type
 * @param setting
 * @param setting.style types of style
 * @param setting.archimateVersion Archimate version
 * @return Hexadecimal color
 *
 * @example
 * const type = 'principle';
 * const style = 'layered';
 * const hexadecimal = typeToHexColor(type, style);
 */
export const typeToHexColor = (
  type: string,
  { style, archimateVersion = ArchimateVersion.LessThanEqualV3_1 }: Setting,
): string => {
  const colorScheme = getStyle(style);
  const nodeTypeColor = {
    [NodeType.Requirement]: colorScheme.MOTIVATIONAL,
    [NodeType.Principle]: colorScheme.MOTIVATIONAL,
    [NodeType.Constraint]: colorScheme.MOTIVATIONAL,
    [NodeType.Goal]: colorScheme.MOTIVATIONAL,
    [NodeType.Driver]: colorScheme.MOTIVATIONAL,
    [NodeType.Assessment]: colorScheme.MOTIVATIONAL,
    [NodeType.Value]: colorScheme.MOTIVATIONAL,
    [NodeType.Stakeholder]: colorScheme.MOTIVATIONAL,
    [NodeType.Outcome]: colorScheme.MOTIVATIONAL,
    [NodeType.Meaning]: colorScheme.MOTIVATIONAL,
    [NodeType.WorkPackage]: colorScheme.IMPLEMENTATION_PROJECT,
    [NodeType.Deliverable]: colorScheme.IMPLEMENTATION_PROJECT,
    [NodeType.ImplementationEvent]: colorScheme.IMPLEMENTATION_PROJECT,
    [NodeType.Plateau]: colorScheme.IMPLEMENTATION_ROADMAP,
    [NodeType.Gap]: colorScheme.IMPLEMENTATION_ROADMAP,
    [NodeType.BusinessCollaboration]: colorScheme.BUSINESS_ACTIVE,
    [NodeType.BusinessActor]: colorScheme.BUSINESS_ACTIVE,
    [NodeType.BusinessRole]: colorScheme.BUSINESS_ACTIVE,
    [NodeType.BusinessInterface]: colorScheme.BUSINESS_ACTIVE,
    [NodeType.Location]: colorScheme.BUSINESS_ACTIVE,
    [NodeType.BusinessInteraction]: colorScheme.BUSINESS_BEHAVIOUR,
    [NodeType.BusinessProcess]: colorScheme.BUSINESS_BEHAVIOUR,
    [NodeType.BusinessFunction]: colorScheme.BUSINESS_BEHAVIOUR,
    [NodeType.BusinessService]: colorScheme.BUSINESS_BEHAVIOUR,
    [NodeType.BusinessEvent]: colorScheme.BUSINESS_BEHAVIOUR,
    [NodeType.BusinessObject]: colorScheme.BUSINESS_PASSIVE,
    [NodeType.Representation]: colorScheme.BUSINESS_PASSIVE,
    [NodeType.Product]: colorScheme.BUSINESS_PASSIVE,
    [NodeType.Contract]: colorScheme.BUSINESS_PASSIVE,
    [NodeType.ApplicationComponent]: colorScheme.APPLICATION_ACTIVE,
    [NodeType.ApplicationCollaboration]: colorScheme.APPLICATION_ACTIVE,
    [NodeType.ApplicationInterface]: colorScheme.APPLICATION_ACTIVE,
    [NodeType.ApplicationInteraction]: colorScheme.APPLICATION_BEHAVIOUR,
    [NodeType.ApplicationFunction]: colorScheme.APPLICATION_BEHAVIOUR,
    [NodeType.ApplicationService]: colorScheme.APPLICATION_BEHAVIOUR,
    [NodeType.ApplicationProcess]: colorScheme.APPLICATION_BEHAVIOUR,
    [NodeType.ApplicationEvent]: colorScheme.APPLICATION_BEHAVIOUR,
    [NodeType.DataObject]: colorScheme.APPLICATION_PASSIVE,
    [NodeType.Node]: colorScheme.TECHNOLOGY_ACTIVE,
    [NodeType.SystemSoftware]: colorScheme.TECHNOLOGY_ACTIVE,
    [NodeType.InfrastructureInterface]: colorScheme.TECHNOLOGY_ACTIVE,
    [NodeType.TechnologyInterface]: colorScheme.TECHNOLOGY_ACTIVE,
    [NodeType.TechnologyCollaboration]: colorScheme.TECHNOLOGY_ACTIVE,
    [NodeType.Network]: colorScheme.TECHNOLOGY_ACTIVE,
    [NodeType.CommunicationNetwork]: colorScheme.TECHNOLOGY_ACTIVE,
    [NodeType.CommunicationPath]: colorScheme.TECHNOLOGY_ACTIVE,
    [NodeType.Path]: colorScheme.TECHNOLOGY_ACTIVE,
    [NodeType.Device]: colorScheme.TECHNOLOGY_ACTIVE,
    [NodeType.InfrastructureFunction]: colorScheme.TECHNOLOGY_BEHAVIOUR,
    [NodeType.InfrastructureService]: colorScheme.TECHNOLOGY_BEHAVIOUR,
    [NodeType.TechnologyFunction]: colorScheme.TECHNOLOGY_BEHAVIOUR,
    [NodeType.TechnologyService]: colorScheme.TECHNOLOGY_BEHAVIOUR,
    [NodeType.TechnologyProcess]: colorScheme.TECHNOLOGY_BEHAVIOUR,
    [NodeType.TechnologyInteraction]: colorScheme.TECHNOLOGY_BEHAVIOUR,
    [NodeType.TechnologyEvent]: colorScheme.TECHNOLOGY_BEHAVIOUR,
    [NodeType.Artifact]: colorScheme.TECHNOLOGY_PASSIVE,
    [NodeType.Facility]: colorScheme.PHYSICAL_ACTIVE,
    [NodeType.Equipment]: colorScheme.PHYSICAL_ACTIVE,
    [NodeType.DistributionNetwork]: colorScheme.PHYSICAL_ACTIVE,
    [NodeType.Material]: colorScheme.PHYSICAL_PASSIVE,
    [NodeType.Resource]: colorScheme.STRATEGY,
    [NodeType.Capability]: colorScheme.STRATEGY,
    [NodeType.CourseOfAction]: colorScheme.STRATEGY,
    [NodeType.ValueStream]: colorScheme.STRATEGY,
    [NodeType.Grouping]: colorScheme.GROUPING,
    [NodeType.Group]: colorScheme.GROUPING,
  };

  const versionColors = {
    [ArchimateVersion.LessThanEqualV3_1]: nodeTypeColor,
    [ArchimateVersion.V3_2]: {
      ...nodeTypeColor,
      [NodeType.Location]: colorScheme.LOCATION,
      [NodeType.Plateau]: colorScheme.IMPLEMENTATION_PROJECT,
      [NodeType.Gap]: colorScheme.IMPLEMENTATION_PROJECT,
    },
  };

  const color = versionColors[archimateVersion][type];

  return color ? color : '';
};
