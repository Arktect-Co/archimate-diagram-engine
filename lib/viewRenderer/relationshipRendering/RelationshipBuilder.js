const joint = require("jointjs");
const RelationshipAttributesBuilder = require("./RelationshipAttributesBuilder");
const EdgeBuilder = require("./EdgePointerBuilder");

class RelationshipBuilder {
    constructor(graph, settings) {
        this.graph = graph;
        this.builder = new RelationshipAttributesBuilder(settings, new EdgeBuilder(settings));
    }

    getRelationshipAttributes(type, relationshipModelId, relationshipViewId, isBidirectional) {
        switch (type) {
            case 'association':
                return this.builder.buildAssociationRelationship(relationshipModelId, relationshipViewId, isBidirectional);
            case 'serving':
                return this.builder.buildServingRelationship(relationshipModelId, relationshipViewId);
            case 'usedby':
                return this.builder.buildServingRelationship(relationshipModelId, relationshipViewId);
            case 'assignment':
                return this.builder.buildAssignmentRelationship(relationshipModelId, relationshipViewId);
            case 'triggering':
                return this.builder.buildTriggeringRelationship(relationshipModelId, relationshipViewId);
            case 'access':
                return this.builder.buildAccessRelationship(relationshipModelId, relationshipViewId, isBidirectional);
            case 'influence':
                return this.builder.buildInfluenceRelationship(relationshipModelId, relationshipViewId);
            case 'realization':
                return this.builder.buildRealizationRelationship(relationshipModelId, relationshipViewId);
            case 'realisation':
                return this.builder.buildRealizationRelationship(relationshipModelId, relationshipViewId);
            case 'specialization':
                return this.builder.buildSpecializationRelationship(relationshipModelId, relationshipViewId);
            case 'flow':
                return this.builder.buildFlowRelationship(relationshipModelId, relationshipViewId);
            case 'composition':
                return this.builder.buildCompositionRelationship(relationshipModelId, relationshipViewId);
            case 'aggregation':
                return this.builder.buildAggregationRelationship(relationshipModelId, relationshipViewId);
            default:
                return this.builder.buildDefaultRelationship(relationshipModelId, relationshipViewId);
        }
    }

    buildRelationship(type, relationshipModelId, relationshipViewId, isBidirectional, bendpoints, sourceNode, targetNode, label) {
        if (type && sourceNode && targetNode) {
            let vertices = [];

            let link = new joint.shapes.standard.Link();

            link.attr(this.getRelationshipAttributes(type, relationshipModelId, relationshipViewId, isBidirectional));

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
          throw new Error(`Invalid relationship: Relationships must have type, sourceNode and targetNode defined.`);
        }
    }
}

module.exports = RelationshipBuilder;
