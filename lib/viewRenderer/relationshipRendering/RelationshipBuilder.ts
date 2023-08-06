import { shapes, dia } from 'jointjs';
import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
import { ViewSetting } from '@lib/model/ViewSetting';

export class RelationshipBuilder {
  private builder: RelationshipAttributesBuilder;

  constructor(private readonly graph: dia.Graph, settings: ViewSetting) {
    this.graph = graph;
    this.builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
  }

  getRelationshipAttributes(
    type: string,
    relationshipModelId: string,
    relationshipViewId: string,
    isBidirectional: boolean,
  ) {
    switch (type) {
      case 'association':
        return this.builder.buildAssociationRelationship(isBidirectional);
      case 'serving':
      case 'usedby':
        return this.builder.buildServingRelationship();
      case 'assignment':
        return this.builder.buildAssignmentRelationship();
      case 'triggering':
        return this.builder.buildTriggeringRelationship();
      case 'access':
        return this.builder.buildAccessRelationship(isBidirectional);
      case 'influence':
        return this.builder.buildInfluenceRelationship();
      case 'realization':
      case 'realisation':
        return this.builder.buildRealizationRelationship();
      case 'specialization':
        return this.builder.buildSpecializationRelationship();
      case 'flow':
        return this.builder.buildFlowRelationship();
      case 'composition':
        return this.builder.buildCompositionRelationship();
      case 'aggregation':
        return this.builder.buildAggregationRelationship();
      default:
        return this.builder.buildDefaultRelationship();
    }
  }

  buildRelationship(
    type: string,
    relationshipModelId: string,
    relationshipViewId: string,
    isBidirectional: boolean,
    bendpoints: Array<{ x: number; y: number }>,
    sourceNode: dia.Cell,
    targetNode: dia.Cell,
    label: string,
  ) {
    if (type && sourceNode && targetNode) {
      const vertices = [];

      const link = new shapes.standard.Link();

      link.prop({
        id: relationshipViewId,
        modelRelationshipId: relationshipModelId,
        relationshipType: type,
      });
      link.attr(
        this.getRelationshipAttributes(
          type,
          relationshipModelId,
          relationshipViewId,
          isBidirectional,
        ),
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
