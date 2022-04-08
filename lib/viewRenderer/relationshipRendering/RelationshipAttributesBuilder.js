class RelationshipAttributesBuilder {
    constructor({darkColor = 'black'}, edgeBuilder) {
        this.darkColor = darkColor;
        this.builder = edgeBuilder;
    }

    buildAssociationRelationship(isBidirectional) {
        if (isBidirectional) {
            return {
                line: {
                    stroke: this.darkColor,
                    strokeWidth: 0.8,
                    targetMarker: this.builder.buildBasePointer(),
                },
            };
        } else {
            return {
                line: {
                    stroke: this.darkColor,
                    strokeWidth: 0.8,
                    targetMarker: this.builder.buildHalfThinArrowPointer(),
                },
            };
        }
    }

    buildServingRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                targetMarker: this.builder.buildThinArrowPointer(),
            },
        };
    }

    buildAssignmentRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                sourceMarker: this.builder.buildFullCircularPointer(),
                targetMarker: this.builder.buildArrowPointer(),
            },
        };
    }

    buildTriggeringRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                targetMarker: this.builder.buildArrowPointer(),
            },
        };
    }

    buildAccessRelationship(isBidirectional) {
        if (isBidirectional) {
            return {
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
                line: {
                    stroke: this.darkColor,
                    strokeWidth: 0.8,
                    strokeDasharray: 2,
                    targetMarker: this.builder.buildSmallThinArrowPointer(),
                },
            };
        }
    }

    buildInfluenceRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                strokeDasharray: 4,
                targetMarker: this.builder.buildSmallThinArrowPointer(),
            },
        };
    }

    buildRealizationRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                strokeDasharray: 2,
                targetMarker: this.builder.buildTrianglePointer(),
            },
        };
    }

    buildSpecializationRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                targetMarker: this.builder.buildTrianglePointer(),
            },
        };
    }

    buildFlowRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: 0.8,
                strokeDasharray: 4,
                targetMarker: this.builder.buildArrowPointer(),
            },
        };
    }

    buildCompositionRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: 1,
                sourceMarker: this.builder.buildFullDiamondPointer(),
                targetMarker: this.builder.buildBasePointer(),
            },
        };
    }

    buildAggregationRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: 1,
                sourceMarker: this.builder.buildDiamondPointer(),
                targetMarker: this.builder.buildBasePointer(),
            },
        };
    }

    buildDefaultRelationship() {
        return {
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
