const joint = require('jointjs');
const { RelationshipAttributesBuilder } = require('./RelationshipAttributesBuilder');
const EdgePointerBuilder = require('./EdgePointerBuilder');

class RelationshipBuilder {
  constructor(graph, settings) {
    this.graph = graph;
    this.builder = new RelationshipAttributesBuilder(settings, new EdgePointerBuilder(settings));
  }

  getRelationshipAttributes(type, relationshipModelId, relationshipViewId, isBidirectional) {
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
    type,
    relationshipModelId,
    relationshipViewId,
    isBidirectional,
    bendpoints,
    sourceNode,
    targetNode,
    label,
  ) {
    if (type && sourceNode && targetNode) {
      let vertices = [];

      let link = new joint.shapes.standard.Link();

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
        let len = bendpoints.length;

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

module.exports = RelationshipBuilder;
