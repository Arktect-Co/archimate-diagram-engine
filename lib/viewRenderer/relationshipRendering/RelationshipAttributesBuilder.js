class RelationshipAttributesBuilder {
    constructor({darkColor = 'black'}, edgeBuilder) {
        this.darkColor = darkColor;
        this.builder = edgeBuilder;
    }

    buildAssociationRelationship(relationshipModelId, relationshipViewId, isBidirectional) {
        if (isBidirectional) {
            return {
                modelRelationshipId: relationshipModelId,
                viewRelationshipId: relationshipViewId,
                line: {
                    stroke: this.darkColor,
                    strokeWidth: 0.8,
                    targetMarker: this.builder.buildBasePointer(),
                },
            };
        } else {
            return {
                modelRelationshipId: relationshipModelId,
                viewRelationshipId: relationshipViewId,
                line: {
                    stroke: this.darkColor,
                    strokeWidth: 0.8,
                    targetMarker: this.builder.buildHalfThinArrowPointer(),
                },
            };
        }
    }

    buildServingRelationship(relationshipModelId, relationshipViewId) {
        return {
            modelRelationshipId: relationshipModelId,
            viewRelationshipId: relationshipViewId,
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                targetMarker: this.builder.buildThinArrowPointer(),
            },
        };
    }

    buildAssignmentRelationship(relationshipModelId, relationshipViewId) {
        return {
            modelRelationshipId: relationshipModelId,
            viewRelationshipId: relationshipViewId,
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                sourceMarker: this.builder.buildFullCircularPointer(),
                targetMarker: this.builder.buildArrowPointer(),
            },
        };
    }

    buildTriggeringRelationship(relationshipModelId, relationshipViewId) {
        return {
            modelRelationshipId: relationshipModelId,
            viewRelationshipId: relationshipViewId,
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                targetMarker: this.builder.buildArrowPointer(),
            },
        };
    }

    buildAccessRelationship(relationshipModelId, relationshipViewId, isBidirectional) {
        if (isBidirectional) {
            return {
                modelRelationshipId: relationshipModelId,
                viewRelationshipId: relationshipViewId,
                line: {
                    stroke: this.darkColor,
                    strokeWidth: 0.8,
                    strokeDasharray: 2,
                    sourceMarker: this.builder.buildSmallThinArrowPointer(),
                    targetMarker: this.builder.buildSmallThinArrowPointer(),
                },
            };
        } else {
            return {
                modelRelationshipId: relationshipModelId,
                viewRelationshipId: relationshipViewId,
                line: {
                    stroke: this.darkColor,
                    strokeWidth: 0.8,
                    strokeDasharray: 2,
                    targetMarker: this.builder.buildSmallThinArrowPointer(),
                },
            };
        }
    }

    buildInfluenceRelationship(relationshipModelId, relationshipViewId) {
        return {
            modelRelationshipId: relationshipModelId,
            viewRelationshipId: relationshipViewId,
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                strokeDasharray: 4,
                targetMarker: this.builder.buildSmallThinArrowPointer(),
            },
        };
    }

    buildRealizationRelationship(relationshipModelId, relationshipViewId) {
        return {
            modelRelationshipId: relationshipModelId,
            viewRelationshipId: relationshipViewId,
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                strokeDasharray: 2,
                targetMarker: this.builder.buildTrianglePointer(),
            },
        };
    }

    buildSpecializationRelationship(relationshipModelId, relationshipViewId) {
        return {
            modelRelationshipId: relationshipModelId,
            viewRelationshipId: relationshipViewId,
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                targetMarker: this.builder.buildTrianglePointer(),
            },
        };
    }

    buildFlowRelationship(relationshipModelId, relationshipViewId) {
        return {
            modelRelationshipId: relationshipModelId,
            viewRelationshipId: relationshipViewId,
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                strokeDasharray: 4,
                targetMarker: this.builder.buildArrowPointer(),
            },
        };
    }

    buildCompositionRelationship(relationshipModelId, relationshipViewId) {
        return {
            modelRelationshipId: relationshipModelId,
            viewRelationshipId: relationshipViewId,
            line: {
                stroke: this.darkColor,
                strokeWidth: 1,
                sourceMarker: this.builder.buildFullDiamondPointer(),
                targetMarker: this.builder.buildBasePointer(),
            },
        };
    }

    buildAggregationRelationship(relationshipModelId, relationshipViewId) {
        return {
            modelRelationshipId: relationshipModelId,
            viewRelationshipId: relationshipViewId,
            line: {
                stroke: this.darkColor,
                strokeWidth: 1,
                sourceMarker: this.builder.buildDiamondPointer(),
                targetMarker: this.builder.buildBasePointer(),
            },
        };
    }

    buildDefaultRelationship(relationshipModelId, relationshipViewId) {
        return {
            modelRelationshipId: relationshipModelId,
            viewRelationshipId: relationshipViewId,
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                strokeDasharray: 3,
                targetMarker: this.builder.buildBasePointer(),
            },
        };
    }
}

module.exports = RelationshipAttributesBuilder;
