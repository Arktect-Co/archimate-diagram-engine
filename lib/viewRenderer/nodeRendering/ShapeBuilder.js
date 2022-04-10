const joint = require("jointjs");
const {SETTINGS_DEFAULT} = require('../../common/constants');

class ShapeBuilder {
    constructor({
                    defaultWidth = SETTINGS_DEFAULT.WIDTH,
                    defaultHeight = SETTINGS_DEFAULT.HEIGHT,
                    darkColor = SETTINGS_DEFAULT.DARK_COLOR,
                    lightColor = SETTINGS_DEFAULT.LIGHT_COLOR,
                    textColor = SETTINGS_DEFAULT.TEXT_COLOR,
                    textSize = SETTINGS_DEFAULT.TEXT_SIZE,
                    borderWidth = SETTINGS_DEFAULT.BORDER_WIDTH
                }) {
        this.defaultWidth = defaultWidth;
        this.defaultHeight = defaultHeight;
        this.darkColor = darkColor;
        this.lightColor = lightColor;
        this.textColor = textColor;
        this.textSize = textSize;
        this.borderWidth = borderWidth;
    }

    getAttributes(elementName, fillColor, strokeColor, withDashedStroke, textAnchor, refX) {
        const attributes = {
            body: {
                fill: fillColor,
                stroke: strokeColor,
                rx: 0,
                ry: 0,
                strokeWidth: this.borderWidth,
            },
            label: {
                textWrap: {
                    text: elementName,
                    width: '70%', // reference width minus 10
                    height: '100%', // half of the reference height
                    ellipsis: true
                },
                fill: this.textColor,
                textVerticalAnchor: "top",
                textAnchor: textAnchor,
                refX: refX,
                refY: 10,
                refWidth: '100%',
                refHeight: '100%',
                fontSize: this.textSize,
            },
        };

        if (withDashedStroke) {
            attributes.body.strokeDasharray = '5,5';
        }

        return attributes;
    }

    buildBasicRetangular(elementName, {
        width = this.defaultWidth,
        height = this.defaultHeight,
        textAnchor = "middle",
        refX = "42.5%",
        fillColor = this.lightColor,
        strokeColor = this.darkColor,
        withDashedStroke = false
    }) {
        let element = new joint.shapes.standard.Rectangle();
        let attributes = this.getAttributes(
            elementName,
            fillColor || this.lightColor,
            strokeColor || this.darkColor,
            withDashedStroke,
            textAnchor,
            refX
        );

        attributes.body.rx = 0;
        attributes.body.ry = 0;

        element.resize(width, height);
        element.attr(attributes);

        return element;
    }

    buildBasicRounded(elementName, {
        width = this.defaultWidth,
        height = this.defaultHeight,
        textAnchor = "middle",
        refX = "42.5%",
        fillColor = this.lightColor,
        strokeColor = this.darkColor,
        withDashedStroke = false
    }) {
        let element = new joint.shapes.standard.Rectangle();
        let attributes = this.getAttributes(
            elementName,
            fillColor || this.lightColor,
            strokeColor || this.darkColor,
            withDashedStroke,
            textAnchor,
            refX
        );

        attributes.body.rx = 8;
        attributes.body.ry = 8;

        element.resize(width, height);
        element.attr(attributes);

        return element;
    }

    buildBasicOctagonal(elementName, {
        width = this.defaultWidth,
        height = this.defaultHeight,
        textAnchor = "middle",
        refX = "42.5%",
        fillColor = this.lightColor,
        strokeColor = this.darkColor,
        withDashedStroke = false
    }) {
        let element = new joint.shapes.standard.Polygon();
        let attributes = this.getAttributes(
            elementName,
            fillColor || this.lightColor,
            strokeColor || this.darkColor,
            withDashedStroke,
            textAnchor,
            refX
        );

        attributes.body.refPoints = '0,1 0.5,0 9.5,0 10,1 10,9 9.5,10 0.5,10 0,9';

        element.resize(width, height);
        element.attr(attributes);

        return element;
    }

    buildSmallCircle({
                         fillColor = this.darkColor,
                         strokeColor = this.darkColor
                     }) {
        let element = new joint.shapes.standard.Circle();
        let attributes = this.getAttributes(
            '',
            fillColor || this.lightColor,
            strokeColor || this.darkColor,
            false
        );

        element.resize(14, 14);
        element.attr(attributes);

        return element;
    }
}

module.exports = ShapeBuilder;
