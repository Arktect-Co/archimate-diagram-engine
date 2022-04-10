const {SETTINGS_DEFAULT} = require('../../common/constants');

class RelationshipAttributesBuilder {
    constructor({
                    darkColor = SETTINGS_DEFAULT.DARK_COLOR,
                    edgeWidth = SETTINGS_DEFAULT.EDGE_WIDTH
                }, edgePointerBuilder) {
        this.darkColor = darkColor;
        this.edgeWidth = edgeWidth;
        this.builder = edgePointerBuilder;
    }

    buildAssociationRelationship(isBidirectional) {
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

    buildServingRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: this.edgeWidth,
                targetMarker: this.builder.buildThinArrowPointer(),
            },
        };
    }

    buildAssignmentRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: this.edgeWidth,
                sourceMarker: this.builder.buildFullCircularPointer(),
                targetMarker: this.builder.buildArrowPointer(),
            },
        };
    }

    buildTriggeringRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: this.edgeWidth,
                targetMarker: this.builder.buildArrowPointer(),
            },
        };
    }

    buildAccessRelationship(isBidirectional) {
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

    buildInfluenceRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: this.edgeWidth,
                strokeDasharray: 4,
                targetMarker: this.builder.buildSmallThinArrowPointer(),
            },
        };
    }

    buildRealizationRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: this.edgeWidth,
                strokeDasharray: 2,
                targetMarker: this.builder.buildTrianglePointer(),
            },
        };
    }

    buildSpecializationRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: this.edgeWidth,
                targetMarker: this.builder.buildTrianglePointer(),
            },
        };
    }

    buildFlowRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: this.edgeWidth,
                strokeDasharray: 4,
                targetMarker: this.builder.buildArrowPointer(),
            },
        };
    }

    buildCompositionRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: this.edgeWidth * 1.25,
                sourceMarker: this.builder.buildFullDiamondPointer(),
                targetMarker: this.builder.buildBasePointer(),
            },
        };
    }

    buildAggregationRelationship() {
        return {
            line: {
                stroke: this.darkColor,
                strokeWidth: this.edgeWidth * 1.25,
                sourceMarker: this.builder.buildDiamondPointer(),
                targetMarker: this.builder.buildBasePointer(),
            },
        };
    }

    buildDefaultRelationship() {
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

module.exports = RelationshipAttributesBuilder;
