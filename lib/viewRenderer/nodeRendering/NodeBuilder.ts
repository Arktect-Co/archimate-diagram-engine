import { dia, shapes } from 'jointjs';

const ShapeBuilder = require('@lib/viewRenderer/nodeRendering/ShapeBuilder');
import { typeToHexColor } from '@lib/viewRenderer/utils/colorUtility';
import { typeToClassification } from '@lib/viewRenderer/utils/archimateDomainUtils';
import { generateGlyph } from '@lib/glyphGenerator/GlyphGenerator';
import { Style, ViewSetting } from '@lib/model/ViewSetting';

export class NodeBuilder {
  private readonly style: Style;
  private builder: any;

  constructor(private graph: dia.Graph, settings: ViewSetting) {
    const { style } = settings;

    this.style = style;
    this.builder = new ShapeBuilder(settings);
  }

  buildShape(name: string, type: string, width: number, height: number) {
    const classification = typeToClassification(type);

    const buildBasicRetangular = (type, attributes) => {
      return this.builder.buildBasicRetangular(name, {
        width,
        height,
        fillColor: typeToHexColor(type, this.style),
        ...attributes,
      });
    };

    switch (classification) {
      case 'structure':
        return buildBasicRetangular(type, {});
      case 'behaviour':
        return this.builder.buildBasicRounded(name, {
          width,
          height,
          fillColor: typeToHexColor(type, this.style),
        });
      case 'implementation_and_migration':
        return this.builder.buildBasicRounded(name, {
          width,
          height,
          fillColor: typeToHexColor(type, this.style),
        });
      case 'motivational':
        return this.builder.buildBasicOctagonal(name, {
          width,
          height,
          fillColor: typeToHexColor(type, this.style),
        });
      case 'grouping':
        return buildBasicRetangular(type, {
          withDashedStroke: true,
          textAnchor: 'left',
          refX: '5%',
        });
      case 'group':
        return buildBasicRetangular(type, {
          textAnchor: 'left',
          refX: '7%',
        });
      case 'viewelement':
        return buildBasicRetangular(type, {
          textAnchor: 'left',
          refX: '7%',
        });
      case 'andjunction':
        return this.builder.buildSmallCircle({
          fillColor: 'black',
        });
      case 'orjunction':
        return this.builder.buildSmallCircle({
          fillColor: 'white',
        });
      default:
        return buildBasicRetangular(type, {});
    }
  }

  buildNode(
    modelElementId: string,
    viewNodeId: string,
    name: string,
    type: string,
    width: number,
    height: number,
    posX?: number,
    posY?: number,
    parentElement?: dia.Cell | null,
  ) {
    if (viewNodeId && name && type) {
      const shape = this.buildShape(name, type, width, height);
      const x = posX ? Number(posX) : 0;
      const y = posY ? Number(posY) : 0;

      // Creating custom properties
      shape.prop({
        id: viewNodeId,
        modelElementId,
        modelElementType: type,
        parent: parentElement,
      });

      shape.position(x, y);

      shape.addTo(this.graph);

      // Nesting the element with parent
      if (parentElement !== null && parentElement !== undefined) {
        parentElement.embed(shape);

        shape.position(x, y, { parentRelative: true });
      }

      // Creating element icon
      const svgData = generateGlyph(type);

      if (svgData !== '') {
        const image = new shapes.standard.Image();

        image.resize(16, 16);
        image.attr({
          image: {
            'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(svgData),
          },
        });

        image.addTo(this.graph);
        shape.embed(image);

        image.position(width - 24, 8, { parentRelative: true });
      }
    } else {
      throw new Error(`Invalid node: Nodes must have viewNodeId, name and type defined.`);
    }
  }
}
