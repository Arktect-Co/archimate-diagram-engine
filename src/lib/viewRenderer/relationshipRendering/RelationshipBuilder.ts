import { shapes, dia } from 'jointjs';
import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
import { ViewSetting } from '@lib/model/ViewSetting';
import { RelationshipType } from '@lib/common/enums/relationshipType';
import { BendPoint, LabelMarkup } from '@lib/model/ViewRelationship';

interface BaseRelationshipSettings {
  type: string;
  isBidirectional: boolean;
}

interface RelationshipSettings extends BaseRelationshipSettings {
  relationshipModelId: string;
  relationshipViewId: string;
  bendpoints: Array<BendPoint>;
  sourceNode: dia.Cell;
  targetNode: dia.Cell;
  label: {
    text: string;
    markup?: LabelMarkup;
    position?: dia.Link.LabelPosition;
    size?: dia.Size;
  };
}

/**
 * Relationship builder class
 * @example
 * import { dia } from 'jointjs';
 * import { RelationshipBuilder } from "@lib/viewRenderer/relationshipRendering/RelationshipBuilder";
 * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
 *
 * const graph = new dia.Graph({ cellNamespace: shapes });
 * const settings = new ViewSettings({});
 * const builder = new RelationshipBuilder(graph, settings);
 */
export class RelationshipBuilder {
  private builder: RelationshipAttributesBuilder;

  /**
   * @param graph Jointjs Graph model
   * @param settings View settings
   */
  constructor(private readonly graph: dia.Graph, settings: ViewSetting) {
    this.graph = graph;
    this.builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
  }

  /**
   * Returns a relationship attributes
   * @param settings Basic relationship settings
   * @param settings.type Relationship type
   * @param settings.isBidirectional Indicates whether the relationship is bidirectional or not
   * @example
   * import { dia } from 'jointjs';
   * import { RelationshipBuilder } from "@lib/viewRenderer/relationshipRendering/RelationshipBuilder";
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   *
   * const graph = new dia.Graph({ cellNamespace: shapes });
   * const settings = new ViewSettings({});
   * const builder = new RelationshipBuilder(graph, settings);
   *
   * const relationshipAttributes = builder.getRelationshipAttributes({type: 'flow', isBidirectional: false});
   */
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

  /**
   * Builds a relationship
   * @param settings Basic relationship settings
   * @param settings.type Relationship type
   * @param settings.relationshipModelId Relationship model identification
   * @param settings.relationshipViewId Relationship view identification
   * @param settings.isBidirectional Indicates whether the relationship is bidirectional or not
   * @param settings.bendpoints Link vertices
   * @param settings.sourceNode Source Node
   * @param settings.targetNode Target Node
   * @param settings.label Relationship label
   * @example
   * import { dia } from 'jointjs';
   * import { RelationshipBuilder } from "@lib/viewRenderer/relationshipRendering/RelationshipBuilder";
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   *
   * const graph = new dia.Graph({ cellNamespace: shapes });
   * const settings = new ViewSettings({});
   * const builder = new RelationshipBuilder(graph, settings);
   *
   * const sourceNode = graph.getCell("ac0358ea-5dd2-4086-b5ac-827801196ffb");
   * const targetNode = graph.getCell("06ebe975");
   *
   * const relationshipAttributes = builder.buildRelationship({
   *  type: 'flow',
   *  isBidirectional: false,
   *  relationshipModelId: "f43b1bb0-ed2e-42e0-b94a-786223b20beb",
   *  relationshipViewId: "a4da7d5b-b482-45dc-87e3-161787e15435",
   *  bendpoints: [{x: 432, y: 12}],
   *  label: {
   *    text: "test",
   *    position: {
   *      distance: 10,
   *      offset: { x: 10, y: 10 },
   *      angle: 45,
   *    },
   *    size: {
   *      width: 100,
   *      height: 20,
   *    },
   *    markup: {
   *      tagName: 'text',
   *      style: {
   *        fill: 'red',
   *      },
   *    },
   *  },
   *  sourceNode,
   *  targetNode,
   * });
   */
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
            text: label.text || '',
          },
        },
        ...(label.markup && { markup: [{
          tagName: 'text',
          ...label.markup[0],
        }], }),
        ...(label.position && { position: label.position }),
        ...(label.size && { size: label.size }),
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
        'Invalid relationship: Relationships must have type, sourceNode and targetNode defined.',
      );
    }
  }
}
