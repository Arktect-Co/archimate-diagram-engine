import { dia, shapes } from 'jointjs';

const ShapeBuilder = require('@lib/viewRenderer/nodeRendering/ShapeBuilder');
import { typeToHexColor } from '@lib/viewRenderer/utils/colorUtility';
import { typeToClassification } from '@lib/viewRenderer/utils/archimateDomainUtils';
import { generateGlyph } from '@lib/glyphGenerator/GlyphGenerator';
import { Style, ViewSetting } from '@lib/model/ViewSetting';
import { NodeShapeClassification } from '@lib/common/enums/nodeShapeClassification';
import { NodeType } from '@lib/common/enums/nodeType';
import { Connectors } from '@lib/common/enums/connectors';

interface BasicNodeAttributes {
  name: string;
  type: string;
  width: number;
  height: number;
}

interface NodeAttributes extends BasicNodeAttributes {
  modelElementId: string;
  viewNodeId: string;
  posX?: number;
  posY?: number;
  parentElement?: dia.Cell | null;
}

export class NodeBuilder {
  private readonly style: Style;
  private builder: any;

  constructor(private graph: dia.Graph, settings: ViewSetting) {
    const { style } = settings;

    this.style = style;
    this.builder = new ShapeBuilder(settings);
  }

  buildShape({ name, type, width, height }: BasicNodeAttributes) {
    const buildBasicRetangular = (nodeType, attributes) => {
      return this.builder.buildBasicRetangular(name, {
        width,
        height,
        fillColor: typeToHexColor(nodeType, this.style),
        ...attributes,
      });
    };

    const shapeClassification = {
      [NodeShapeClassification.Structure]: (): shapes.standard.Rectangle =>
        buildBasicRetangular(type, {}),
      [NodeShapeClassification.Behaviour]: (): shapes.standard.Rectangle =>
        this.builder.buildBasicRounded(name, {
          width,
          height,
          fillColor: typeToHexColor(type, this.style),
        }),
      [NodeShapeClassification.ImplementationAndMigration]: (): shapes.standard.Rectangle =>
        this.builder.buildBasicRounded(name, {
          width,
          height,
          fillColor: typeToHexColor(type, this.style),
        }),
      [NodeShapeClassification.Motivational]: (): shapes.standard.Polygon =>
        this.builder.buildBasicOctagonal(name, {
          width,
          height,
          fillColor: typeToHexColor(type, this.style),
        }),
      [NodeType.Grouping]: (): shapes.standard.Rectangle =>
        buildBasicRetangular(type, {
          withDashedStroke: true,
          textAnchor: 'left',
          refX: '5%',
        }),
      [NodeType.Group]: (): shapes.standard.Rectangle =>
        buildBasicRetangular(type, {
          textAnchor: 'left',
          refX: '7%',
        }),
      [NodeShapeClassification.ViewElement]: (): shapes.standard.Rectangle =>
        buildBasicRetangular(type, {
          textAnchor: 'left',
          refX: '7%',
        }),
      [Connectors.AndJunction]: (): shapes.standard.Circle =>
        this.builder.buildSmallCircle({
          fillColor: 'black',
        }),
      [Connectors.OrJunction]: (): shapes.standard.Circle =>
        this.builder.buildSmallCircle({
          fillColor: 'white',
        }),
    };

    const classification = typeToClassification(type);
    const build = shapeClassification[classification];

    return build ? build() : buildBasicRetangular(type, {});
  }

  buildNode({
    modelElementId,
    viewNodeId,
    name,
    type,
    width,
    height,
    posX,
    posY,
    parentElement,
  }: NodeAttributes) {
    if (viewNodeId && name && type) {
      const shape = this.buildShape({ name, type, width, height });
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
            'xlink:href': `data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`,
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
