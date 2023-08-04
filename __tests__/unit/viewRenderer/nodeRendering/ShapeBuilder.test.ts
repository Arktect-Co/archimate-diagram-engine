import { ShapeBuilder } from '@lib/viewRenderer/nodeRendering/ShapeBuilder';
import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
import { expect } from 'chai';
import { Position } from '@lib/common/enums/Position';

describe('ShapeBuilder', () => {
  let shapeBuilder: ShapeBuilder = new ShapeBuilder(new ViewSettings({}));

  const shapeAttributes = {
    strokeColor: 'black',
    fillColor: 'white',
    elementName: 'Node 1',
    refX: '42.5%',
    textAnchor: Position.Middle,
  };
  describe('getAttributes', () => {
    it('should return attributes', () => {
      const { body, label } = shapeBuilder.getAttributes(shapeAttributes);

      expect(label)
        .to.deep.include({
          textWrap: {
            text: shapeAttributes.elementName,
            width: '70%',
            height: '100%',
            ellipsis: true,
          },
        })
        .contain({
          fill: 'black',
          textVerticalAnchor: Position.Top,
          textAnchor: shapeAttributes.textAnchor,
          refX: shapeAttributes.refX,
          refY: 10,
          refWidth: '100%',
          refHeight: '100%',
          fontSize: 12,
        });
      expect(body).to.contain({
        fill: shapeAttributes.fillColor,
        stroke: shapeAttributes.strokeColor,
        rx: 0,
        ry: 0,
        strokeWidth: 0.8,
      });
    });

    it('should return attributes with dashed stroke', () => {
      const { body, label } = shapeBuilder.getAttributes({
        ...shapeAttributes,
        withDashedStroke: true,
      });

      expect(label)
        .to.deep.include({
          textWrap: {
            text: shapeAttributes.elementName,
            width: '70%',
            height: '100%',
            ellipsis: true,
          },
        })
        .contain({
          fill: 'black',
          textVerticalAnchor: Position.Top,
          textAnchor: shapeAttributes.textAnchor,
          refX: shapeAttributes.refX,
          refY: 10,
          refWidth: '100%',
          refHeight: '100%',
          fontSize: 12,
        });
      expect(body).to.contain({
        fill: shapeAttributes.fillColor,
        stroke: shapeAttributes.strokeColor,
        strokeDasharray: '5,5',
        rx: 0,
        ry: 0,
        strokeWidth: 0.8,
      });
    });

    it('should return attributes without dashed stroke', () => {
      const { body } = shapeBuilder.getAttributes({
        ...shapeAttributes,
        withDashedStroke: false,
      });

      expect(body).to.contain({
        fill: shapeAttributes.fillColor,
        stroke: shapeAttributes.strokeColor,
        rx: 0,
        ry: 0,
        strokeWidth: 0.8,
      });
    });
  });

  describe('buildBasicRectangular', () => {
    it('should return a basic rectangular node', () => {
      const { elementName, ...attributes } = shapeAttributes;
      const size = { width: 100, height: 80 };
      const rectangular = shapeBuilder
        .buildBasicRectangular(elementName, { ...attributes, ...size })
        .toJSON();

      expect(rectangular.type).to.equal('standard.Rectangle');
      expect(rectangular.size).to.contain(size);
      expect(rectangular.attrs.body).to.contain({
        fill: attributes.fillColor,
        stroke: attributes.strokeColor,
        rx: 0,
        ry: 0,
        strokeWidth: 0.8,
      });
      expect(rectangular.attrs.label)
        .to.deep.include({
          textWrap: {
            text: elementName,
            width: '70%',
            height: '100%',
            ellipsis: true,
          },
        })
        .contain({
          fill: 'black',
          textVerticalAnchor: Position.Top,
          refX: attributes.refX,
          refY: 10,
          refWidth: '100%',
          refHeight: '100%',
          fontSize: 12,
        });
    });

    it('should return a basic rounded node', () => {
      const { elementName, ...attributes } = shapeAttributes;
      const size = { width: 100, height: 80 };
      const rounded = shapeBuilder
        .buildBasicRounded(elementName, { ...attributes, ...size })
        .toJSON();

      expect(rounded.type).to.equal('standard.Rectangle');
      expect(rounded.size).to.contain(size);
      expect(rounded.attrs.body).to.contain({
        fill: attributes.fillColor,
        stroke: attributes.strokeColor,
        rx: 8,
        ry: 8,
        strokeWidth: 0.8,
      });
      expect(rounded.attrs.label)
        .to.deep.include({
          textWrap: {
            text: elementName,
            width: '70%',
            height: '100%',
            ellipsis: true,
          },
        })
        .contain({
          fill: 'black',
          textVerticalAnchor: Position.Top,
          refX: attributes.refX,
          refY: 10,
          refWidth: '100%',
          refHeight: '100%',
          fontSize: 12,
        });
    });

    it('should return a basic octagonal node', () => {
      const { elementName, ...attributes } = shapeAttributes;
      const size = { width: 100, height: 80 };
      const octagonal = shapeBuilder
        .buildBasicOctagonal(elementName, { ...attributes, ...size })
        .toJSON();

      expect(octagonal.type).to.equal('standard.Polygon');
      expect(octagonal.size).to.contain(size);
      expect(octagonal.attrs.body).to.contain({
        fill: attributes.fillColor,
        stroke: attributes.strokeColor,
        rx: 0,
        ry: 0,
        strokeWidth: 0.8,
        refPoints: '0,1 0.5,0 9.5,0 10,1 10,9 9.5,10 0.5,10 0,9',
      });
      expect(octagonal.attrs.label)
        .to.deep.include({
          textWrap: {
            text: elementName,
            width: '70%',
            height: '100%',
            ellipsis: true,
          },
        })
        .contain({
          fill: 'black',
          textVerticalAnchor: Position.Top,
          refX: attributes.refX,
          refY: 10,
          refWidth: '100%',
          refHeight: '100%',
          fontSize: 12,
        });
    });

    it('should return a small circle node', () => {
      const { fillColor, strokeColor } = shapeAttributes;
      const size = { width: 14, height: 14 };
      const octagonal = shapeBuilder.buildSmallCircle({ fillColor, strokeColor }).toJSON();

      expect(octagonal.type).to.equal('standard.Circle');
      expect(octagonal.size).to.contain(size);
      expect(octagonal.attrs.body).to.contain({
        fill: fillColor,
        stroke: strokeColor,
        rx: 0,
        ry: 0,
        strokeWidth: 0.8,
      });
      expect(octagonal.attrs.label)
        .to.deep.include({
          textWrap: {
            text: '',
            width: '70%',
            height: '100%',
            ellipsis: true,
          },
        })
        .contain({
          fill: 'black',
          textVerticalAnchor: Position.Top,
          refY: 10,
          refWidth: '100%',
          refHeight: '100%',
          fontSize: 12,
        });
    });
  });
});
