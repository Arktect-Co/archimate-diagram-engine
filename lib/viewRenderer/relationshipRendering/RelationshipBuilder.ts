import { shapes, dia } from 'jointjs';
import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
import { ViewSetting } from '@lib/model/ViewSetting';
import { RelationshipType } from '@lib/common/enums/relationshipType';

interface BaseRelationshipSettings {
  type: string;
  isBidirectional: boolean;
}

interface RelationshipSettings extends BaseRelationshipSettings {
  relationshipModelId: string;
  relationshipViewId: string;
  bendpoints: Array<{ x: number; y: number }>;
  sourceNode: dia.Cell;
  targetNode: dia.Cell;
  label: string;
}

export class RelationshipBuilder {
  private builder: RelationshipAttributesBuilder;

  constructor(private readonly graph: dia.Graph, settings: ViewSetting) {
    this.graph = graph;
    this.builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
  }

  getRelationshipAttributes({ type, isBidirectional }: BaseRelationshipSettings) {
    switch (type) {
      case RelationshipType.Association:
        return this.builder.buildAssociationRelationship(isBidirectional);
      case RelationshipType.Serving:
      case RelationshipType.UsedBy:
        return this.builder.buildServingRelationship();
      case RelationshipType.Assignment:
        return this.builder.buildAssignmentRelationship();
      case RelationshipType.Triggering:
        return this.builder.buildTriggeringRelationship();
      case RelationshipType.Access:
        return this.builder.buildAccessRelationship(isBidirectional);
      case RelationshipType.Influence:
        return this.builder.buildInfluenceRelationship();
      case RelationshipType.Realization:
      case RelationshipType.Realisation:
        return this.builder.buildRealizationRelationship();
      case RelationshipType.Specialization:
        return this.builder.buildSpecializationRelationship();
      case RelationshipType.Flow:
        return this.builder.buildFlowRelationship();
      case RelationshipType.Composition:
        return this.builder.buildCompositionRelationship();
      case RelationshipType.Aggregation:
        return this.builder.buildAggregationRelationship();
      default:
        return this.builder.buildDefaultRelationship();
    }
  }

  buildRelationship({
    type,
    relationshipModelId,
    relationshipViewId,
    isBidirectional,
    bendpoints,
    sourceNode,
    targetNode,
    label,
  }: RelationshipSettings) {
    if (type && sourceNode && targetNode) {
      const vertices = [];

      const link = new shapes.standard.Link();

      link.prop({
        id: relationshipViewId,
        modelRelationshipId: relationshipModelId,
        relationshipType: type,
      });
      link.attr(
        this.getRelationshipAttributes({
          type,
          isBidirectional,
        }),
      );

      link.appendLabel({
        attrs: {
          text: {
            text: label,
          },
        },
      });
      link.source(sourceNode, {
        anchor: {
          name: 'perpendicular',
          args: {
            padding: 0,
          },
        },
      });
      link.target(targetNode, {
        anchor: {
          name: 'perpendicular',
          args: {
            padding: 0,
          },
        },
      });
      link.connector('rounded');

      if (Array.isArray(bendpoints) && bendpoints.length > 0) {
        const len = bendpoints.length;

        for (let i = 0; i < len; i++) {
          vertices.push(bendpoints[i]);
        }

        link.vertices(vertices);
      }

      link.addTo(this.graph);
    } else {
      throw new Error(
        `Invalid relationship: Relationships must have type, sourceNode and targetNode defined.`,
      );
    }
  }
}
