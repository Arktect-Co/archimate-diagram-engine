const joint = require("jointjs");

const ShapeBuilder = require("./ShapeBuilder");
const {typeToHexColor} = require("../utils/colorUtility");
const {typeToClassification} = require("../utils/archimateDomainUtils");
const {generateGlyph} = require("../../glyphGenerator/GlyphGenerator");

class NodeBuilder {
    constructor(graph, settings) {
        const {style} = settings;

        this.graph = graph;
        this.style = style;
        this.builder = new ShapeBuilder(settings);
    }

    buildShape(name, type, width, height) {
        let classification = typeToClassification(type);

        const buildBasicRetangular = (type, attributes) => {
            return this.builder.buildBasicRetangular(name, {
                width: width,
                height: height,
                fillColor: typeToHexColor(type, this.style),
                ...attributes
            });
        }

        switch (classification) {
            case "structure":
                return buildBasicRetangular(type, {});
            case "behaviour":
                return this.builder.buildBasicRounded(name, {
                    width,
                    height,
                    fillColor: typeToHexColor(type, this.style)
                });
            case "implementation_and_migration":
                return this.builder.buildBasicRounded(name, {
                    width,
                    height,
                    fillColor: typeToHexColor(type, this.style)
                });
            case "motivational":
                return this.builder.buildBasicOctagonal(name, {
                    width,
                    height,
                    fillColor: typeToHexColor(type, this.style)
                });
            case "grouping":
                return buildBasicRetangular(type, {
                    withDashedStroke: true,
                    textAnchor: "left",
                    refX: "5%"
                });
            case "group":
                return buildBasicRetangular(type, {
                    textAnchor: "left",
                    refX: "7%"
                });
            case "viewelement":
                return buildBasicRetangular(type, {
                    textAnchor: "left",
                    refX: "7%"
                });
            case "andjunction":
                return this.builder.buildSmallCircle({
                    fillColor: 'black'
                });
            case "orjunction":
                return this.builder.buildSmallCircle({
                    fillColor: 'white'
                });
            default:
                return buildBasicRetangular(type, {});
        }
    }

    buildNode(modelElementId, viewNodeId, name, type, width, height, posX, posY, parentElement) {
        if (viewNodeId && name && type) {
            let shape = this.buildShape(name, type, width, height);
            const x = posX ? +posX : 0;
            const y = posY ? +posY : 0;

            // Creating custom properties
            shape.prop({
                id: viewNodeId,
                modelElementId: modelElementId,
                modelElementType: type,
                parent: parentElement,
            });

            shape.position(x, y);

            shape.addTo(this.graph);

            // Nesting the element with parent
            if (parentElement !== null && parentElement !== undefined) {
                parentElement.embed(shape);

                shape.position(x, y, {parentRelative: true});
            }

            // Creating element icon
            const svgData = generateGlyph(type);

            if (svgData !== '') {
                let image = new joint.shapes.standard.Image();

                image.resize(16, 16);
                image.attr({
                    image: {
                        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(svgData)
                    },
                });

                image.addTo(this.graph);
                shape.embed(image);

                image.position(width - 24, 8, {parentRelative: true});
            }
        } else {
            throw new Error(`Invalid node: Nodes must have viewNodeId, name and type defined.`);
        }
    }
}

module.exports = NodeBuilder;
