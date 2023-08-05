import { SETTINGS_DEFAULT } from '@lib/common/constants';
import { ViewSetting } from '@lib/model/ViewSetting';
import { dia } from 'jointjs';

/**
 * Relationship Attributes Builder
 * @example
 * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
 * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
 * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
 * const settings = new ViewSettings({});
 *
 * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
 */
export class RelationshipAttributesBuilder {
  private readonly darkColor: string;
  private readonly edgeWidth: number;
  private builder: any;

  /**
   * @param settings Relationship settings
   * @param [settings.darkColor = 'black'] Color used for strokes
   * @param [settings.edgeWidth = 0.8] Stroke width
   * @param edgePointerBuilder Pointer Builder
   */
  constructor(settings: Partial<ViewSetting>, edgePointerBuilder) {
    const { darkColor = SETTINGS_DEFAULT.DARK_COLOR, edgeWidth = SETTINGS_DEFAULT.EDGE_WIDTH } =
      settings;

    this.darkColor = darkColor;
    this.edgeWidth = edgeWidth;
    this.builder = edgePointerBuilder;
  }

  /**
   * Builds an association relationship
   * @param isBidirectional Indicates whether the relationship is bidirectional or not
   * @return Association Relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const associationRelationship = builder.buildAssociationRelationship(true);
   */
  buildAssociationRelationship(isBidirectional: boolean): dia.Cell.Selectors {
    if (isBidirectional) {
      return {
        line: {
          stroke: this.darkColor,
          strokeWidth: this.edgeWidth,
          targetMarker: this.builder.buildBasePointer(),
        },
      };
    } else {
      return {
        line: {
          stroke: this.darkColor,
          strokeWidth: this.edgeWidth,
          targetMarker: this.builder.buildHalfThinArrowPointer(),
        },
      };
    }
  }

  /**
   * Builds a serving relationship
   * @return Serving Relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const servingRelationship = builder.buildServingRelationship();
   */
  buildServingRelationship(): dia.Cell.Selectors {
    return {
      line: {
        stroke: this.darkColor,
        strokeWidth: this.edgeWidth,
        targetMarker: this.builder.buildThinArrowPointer(),
      },
    };
  }

  /**
   * Builds an assignment relationship
   * @return Assignment relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const assignmentRelationship = builder.buildAssignmentRelationship();
   */
  buildAssignmentRelationship(): dia.Cell.Selectors {
    return {
      line: {
        stroke: this.darkColor,
        strokeWidth: this.edgeWidth,
        sourceMarker: this.builder.buildFullCircularPointer(),
        targetMarker: this.builder.buildArrowPointer(),
      },
    };
  }

  /**
   * Builds a Triggering relationship
   * @return Triggering relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const triggeringRelationship = builder.buildTriggeringRelationship();
   */
  buildTriggeringRelationship(): dia.Cell.Selectors {
    return {
      line: {
        stroke: this.darkColor,
        strokeWidth: this.edgeWidth,
        targetMarker: this.builder.buildArrowPointer(),
      },
    };
  }

  /**
   * Builds an access relationship
   * @param isBidirectional Indicates whether the relationship is bidirectional or not
   * @return Access relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const accessRelationship = builder.buildAccessRelationship(false);
   */
  buildAccessRelationship(isBidirectional: boolean): dia.Cell.Selectors {
    if (isBidirectional) {
      return {
        line: {
          stroke: this.darkColor,
          strokeWidth: this.edgeWidth,
          strokeDasharray: 2,
          sourceMarker: this.builder.buildSmallThinArrowPointer(),
          targetMarker: this.builder.buildSmallThinArrowPointer(),
        },
      };
    } else {
      return {
        line: {
          stroke: this.darkColor,
          strokeWidth: this.edgeWidth,
          strokeDasharray: 2,
          targetMarker: this.builder.buildSmallThinArrowPointer(),
        },
      };
    }
  }

  /**
   * Builds an influence relationship
   * @return Influence relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const influenceRelationship = builder.buildInfluenceRelationship();
   */
  buildInfluenceRelationship(): dia.Cell.Selectors {
    return {
      line: {
        stroke: this.darkColor,
        strokeWidth: this.edgeWidth,
        strokeDasharray: 4,
        targetMarker: this.builder.buildSmallThinArrowPointer(),
      },
    };
  }

  /**
   * Builds a realization relationship
   * @return Realization relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const realizationRelationship = builder.buildRealizationRelationship();
   */
  buildRealizationRelationship(): dia.Cell.Selectors {
    return {
      line: {
        stroke: this.darkColor,
        strokeWidth: this.edgeWidth,
        strokeDasharray: 2,
        targetMarker: this.builder.buildTrianglePointer(),
      },
    };
  }

  /**
   * Builds a specialization relationship
   * @return Specialization relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const specializationRelationship = builder.buildSpecializationRelationship();
   */
  buildSpecializationRelationship(): dia.Cell.Selectors {
    return {
      line: {
        stroke: this.darkColor,
        strokeWidth: this.edgeWidth,
        targetMarker: this.builder.buildTrianglePointer(),
      },
    };
  }

  /**
   * Builds a flow relationship
   * @return Flow relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const flowRelationship = builder.buildFlowRelationship();
   */
  buildFlowRelationship(): dia.Cell.Selectors {
    return {
      line: {
        stroke: this.darkColor,
        strokeWidth: this.edgeWidth,
        strokeDasharray: 4,
        targetMarker: this.builder.buildArrowPointer(),
      },
    };
  }

  /**
   * Builds a composition relationship
   * @return Composition relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const compositionRelationship = builder.buildCompositionRelationship();
   */
  buildCompositionRelationship(): dia.Cell.Selectors {
    return {
      line: {
        stroke: this.darkColor,
        strokeWidth: this.edgeWidth * 1.25,
        sourceMarker: this.builder.buildFullDiamondPointer(),
        targetMarker: this.builder.buildBasePointer(),
      },
    };
  }

  /**
   * Builds an aggregation relationship
   * @return Aggregation relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const aggregationRelationship = builder.buildAggregationRelationship();
   */
  buildAggregationRelationship(): dia.Cell.Selectors {
    return {
      line: {
        stroke: this.darkColor,
        strokeWidth: this.edgeWidth * 1.25,
        sourceMarker: this.builder.buildDiamondPointer(),
        targetMarker: this.builder.buildBasePointer(),
      },
    };
  }

  /**
   * Builds a default relationship
   * @return Default relationship settings
   * @example
   * import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from "@lib/viewRenderer/relationshipRendering/EdgePointerBuilder"
   * const settings = new ViewSettings({});
   *
   * const builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
   * const defaultRelationship = builder.buildDefaultRelationship();
   */
  buildDefaultRelationship(): dia.Cell.Selectors {
    return {
      line: {
        stroke: this.darkColor,
        strokeWidth: this.edgeWidth,
        strokeDasharray: 3,
        targetMarker: this.builder.buildBasePointer(),
      },
    };
  }
}
