import { ShapeBuilder } from '@lib/viewRenderer/nodeRendering/ShapeBuilder';
import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
import { expect } from 'chai';

describe('ShapeBuilder', () => {
  let shapeBuilder: ShapeBuilder = new ShapeBuilder(new ViewSettings({}));

  const shapeAttributes = {
    strokeColor: 'black',
    fillColor: 'white',
    elementName: 'Node 1',
    refX: '42.5%',
    textAnchor: 'middle',
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
          textVerticalAnchor: 'top',
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
          textVerticalAnchor: 'top',
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
          textVerticalAnchor: 'top',
          refX: attributes.refX,
          refY: 10,
          refWidth: '100%',
          refHeight: '100%',
          fontSize: 12,
        });
    });
  });
});
