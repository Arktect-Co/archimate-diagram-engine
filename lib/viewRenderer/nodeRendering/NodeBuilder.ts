import { dia, shapes } from 'jointjs';

import { ShapeBuilder } from '@lib/viewRenderer/nodeRendering/ShapeBuilder';
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
  private builder: ShapeBuilder;

  constructor(private graph: dia.Graph, settings: ViewSetting) {
    const { style } = settings;

    this.style = style;
    this.builder = new ShapeBuilder(settings);
  }

  /**
   * Builds a node shape based on the node classification type and other given attributes
   * @param attributes
   * @param attributes.name Node name
   * @param attributes.type Node type
   * @param attributes.width Node width
   * @param attributes.height Node height
   * @return Node shape
   * @example
   * import { dia } from 'jointjs';
   * import { NodeBuilder } from '@lib/viewRenderer/nodeRendering/NodeBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   *
   * const graph = new dia.Graph({ cellNamespace: shapes });
   * const nodeBuilder = new NodeBuilder(graph, new ViewSettings({}));
   * const rectangularShape = nodeBuilder.buildShape({
   *         type: 'applicationcomponent',
   *         name: 'Model Service',
   *         width: 100,
   *         height: 80,
   * })
   */
  buildShape({ name, type, width, height }: BasicNodeAttributes) {
    const buildBasicRectangular = (nodeType, attributes) => {
      return this.builder.buildBasicRectangular(name, {
        width,
        height,
        fillColor: typeToHexColor(nodeType, this.style),
        ...attributes,
      });
    };

    const shapeClassification = {
      [NodeShapeClassification.Structure]: () => buildBasicRectangular(type, {}),
      [NodeShapeClassification.Behaviour]: () =>
        this.builder.buildBasicRounded(name, {
          width,
          height,
          fillColor: typeToHexColor(type, this.style),
        }),
      [NodeShapeClassification.ImplementationAndMigration]: () =>
        this.builder.buildBasicRounded(name, {
          width,
          height,
          fillColor: typeToHexColor(type, this.style),
        }),
      [NodeShapeClassification.Motivational]: () =>
        this.builder.buildBasicOctagonal(name, {
          width,
          height,
          fillColor: typeToHexColor(type, this.style),
        }),
      [NodeType.Grouping]: () =>
        buildBasicRectangular(type, {
          withDashedStroke: true,
          textAnchor: 'left',
          refX: '5%',
        }),
      [NodeType.Group]: () =>
        buildBasicRectangular(type, {
          textAnchor: 'left',
          refX: '7%',
        }),
      [NodeShapeClassification.ViewElement]: () =>
        buildBasicRectangular(type, {
          textAnchor: 'left',
          refX: '7%',
        }),
      [Connectors.AndJunction]: () =>
        this.builder.buildSmallCircle({
          fillColor: 'black',
        }),
      [Connectors.OrJunction]: () =>
        this.builder.buildSmallCircle({
          fillColor: 'white',
        }),
    };

    const classification = typeToClassification(type);
    const build = shapeClassification[classification];

    return build ? build() : buildBasicRectangular(type, {});
  }

  /**
   * Build a node in graph
   * @param attributes Node attributes
   * @param attributes.modelElementId Model element identification
   * @param attributes.viewNodeId View node identification
   * @param attributes.name Node name
   * @param attributes.type Node type
   * @param attributes.width Node width
   * @param attributes.height Node height
   * @param attributes.posX Position of the node on the x-axis
   * @param attributes.posY Position of the node on the y-axis
   * @param attributes.parentElement Node parent
   * @example
   * import { dia } from 'jointjs';
   * import { NodeBuilder } from '@lib/viewRenderer/nodeRendering/NodeBuilder';
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   *
   * const graph = new dia.Graph({ cellNamespace: shapes });
   * const nodeBuilder = new NodeBuilder(graph, new ViewSettings({}));
   * nodeBuilder.buildNode({
   *       width: 100,
   *       height: 100,
   *       type: 'node',
   *       name: 'Node 1',
   *       viewNodeId: '624f10ecd9f08d4030fe458f',
   *       modelElementId: 'e2e60769-fea2-45e2-9355-66e092ec6934',
   *       posX: 10,
   *       posY: 10,
   *       parentElement: undefined,
   * });
   */
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
  }: NodeAttributes): void {
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
