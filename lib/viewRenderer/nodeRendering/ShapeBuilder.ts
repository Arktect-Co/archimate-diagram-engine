import { shapes, dia, attributes } from 'jointjs';
import { ViewSetting } from '@lib/model/ViewSetting';
import { SETTINGS_DEFAULT } from '@lib/common/constants';

export interface Attributes {
  body: attributes.SVGAttributes;
  label: attributes.SVGAttributes;
}

interface ShapeAttributes {
  elementName: string;
  fillColor: string;
  strokeColor: string;
  withDashedStroke?: boolean;
  textAnchor?: string;
  refX?: string;
}

interface Settings extends Partial<ShapeAttributes> {
  width?: number;
  height?: number;
}

/**
 * Class with functionality to create node shapes
 * @example
 *  import { ShapeBuilder } from '@lib/viewRenderer/nodeRendering/ShapeBuilder';
 *  import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
 *
 *  const shapeBuilder = new ShapeBuilder(new ViewSettings({}));
 */
export class ShapeBuilder {
  private defaultWidth: number;
  private defaultHeight: number;
  private readonly darkColor: string;
  private readonly lightColor: string;
  private readonly textColor: string;
  private readonly textSize: number;
  private readonly borderWidth: number;

  /**
   *
   * @param settings Settings
   * @param [settings.darkColor = 'black'] Color used for strokes
   * @param [settings.lightColor = 'white'] Color used to fulfill relationship arrow shapes
   * @param [settings.textColor = 'black'] Color used to fill texts
   * @param [settings.textSize = 12] Text font size
   * @param [settings.defaultWidth = 140] Reference size for element's width
   * @param [settings.defaultHeight = 50] Reference size for element's height
   * @param [settings.borderWidth = 0.8] Border width for elements
   */
  constructor(settings: Omit<Partial<ViewSetting>, 'style' | 'edgeWidth'>) {
    const {
      defaultWidth = SETTINGS_DEFAULT.WIDTH,
      defaultHeight = SETTINGS_DEFAULT.HEIGHT,
      darkColor = SETTINGS_DEFAULT.DARK_COLOR,
      lightColor = SETTINGS_DEFAULT.LIGHT_COLOR,
      textColor = SETTINGS_DEFAULT.TEXT_COLOR,
      textSize = SETTINGS_DEFAULT.TEXT_SIZE,
      borderWidth = SETTINGS_DEFAULT.BORDER_WIDTH,
    } = settings;

    this.defaultWidth = defaultWidth;
    this.defaultHeight = defaultHeight;
    this.darkColor = darkColor;
    this.lightColor = lightColor;
    this.textColor = textColor;
    this.textSize = textSize;
    this.borderWidth = borderWidth;
  }

  /**
   * Get the shape attributes
   * @param basicAttributes Basic Attributes
   * @param basicAttributes.elementName Element name
   * @param basicAttributes.fillColor Color used to fulfill relationship arrow shapes
   * @param basicAttributes.strokeColor Color used for strokes
   * @param basicAttributes.withDashedStroke Enable or disable Dashed Stroke
   * @param basicAttributes.textAnchor Text Anchor
   * @param basicAttributes.refX Label x-axis reference
   * @return Node shape Attributes
   * @example
   *  import { ShapeBuilder } from '@lib/viewRenderer/nodeRendering/ShapeBuilder';
   *  import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   *
   *  const shapeBuilder = new ShapeBuilder(new ViewSettings({}));
   *  const { body, label } = shapeBuilder.getAttributes({
   *       strokeColor: 'black',
   *       fillColor: 'white',
   *       elementName: 'Node 1',
   *       refX: '42.5%',
   *       textAnchor: 'middle',
   * });
   */
  getAttributes({
    elementName,
    fillColor,
    strokeColor,
    withDashedStroke,
    textAnchor,
    refX,
  }: ShapeAttributes): Attributes {
    const attributes: Attributes = {
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
          ellipsis: true,
        },
        fill: this.textColor,
        textVerticalAnchor: 'top',
        textAnchor,
        refX,
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

  /**
   * Builds a basic rectangular shape
   * @param elementName Element name
   * @param settings Shape settings
   * @param settings.width Reference size for element's width
   * @param settings.height Reference size for element's height
   * @param settings.textAnchor Text Anchor
   * @param settings.refX Label x-axis reference
   * @param settings.fillColor Color used to fulfill relationship arrow shapes
   * @param settings.strokeColor Color used for strokes
   * @param settings.withDashedStroke Enable or disable Dashed Stroke
   * @return Basic rectangular shape
   * @example
   *  import { ShapeBuilder } from '@lib/viewRenderer/nodeRendering/ShapeBuilder';
   *  import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   *
   *  const shapeBuilder = new ShapeBuilder(new ViewSettings({}));
   *  const node = shapeBuilder.buildBasicRectangular('Node 1',{
   *       strokeColor: 'black',
   *       fillColor: 'white',
   *       refX: '42.5%',
   *       textAnchor: 'middle',
   *       width: 100,
   *       height: 80
   * });
   */
  buildBasicRectangular(
    elementName: string,
    {
      width = this.defaultWidth,
      height = this.defaultHeight,
      textAnchor = 'middle',
      refX = '42.5%',
      fillColor = this.lightColor,
      strokeColor = this.darkColor,
      withDashedStroke = false,
    }: Settings,
  ) {
    const element = new shapes.standard.Rectangle();
    const attributes = this.getAttributes({
      elementName,
      fillColor: fillColor || this.lightColor,
      strokeColor: strokeColor || this.darkColor,
      withDashedStroke,
      textAnchor,
      refX,
    });

    attributes.body.rx = 0;
    attributes.body.ry = 0;

    element.resize(width, height);
    element.attr(attributes as unknown as dia.Cell.Selectors);

    return element;
  }

  /**
   * Builds a basic rounded shape
   * @param elementName Element name
   * @param settings Shape settings
   * @param settings.width Reference size for element's width
   * @param settings.height Reference size for element's height
   * @param settings.textAnchor Text Anchor
   * @param settings.refX Label x-axis reference
   * @param settings.fillColor Color used to fulfill relationship arrow shapes
   * @param settings.strokeColor Color used for strokes
   * @param settings.withDashedStroke Enable or disable Dashed Stroke
   * @return Basic rounded shape
   * @example
   *  import { ShapeBuilder } from '@lib/viewRenderer/nodeRendering/ShapeBuilder';
   *  import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   *
   *  const shapeBuilder = new ShapeBuilder(new ViewSettings({}));
   *  const node = shapeBuilder.buildBasicRounded('Node 1',{
   *       strokeColor: 'black',
   *       fillColor: 'white',
   *       refX: '42.5%',
   *       textAnchor: 'middle',
   *       width: 100,
   *       height: 80
   * });
   */
  buildBasicRounded(
    elementName,
    {
      width = this.defaultWidth,
      height = this.defaultHeight,
      textAnchor = 'middle',
      refX = '42.5%',
      fillColor = this.lightColor,
      strokeColor = this.darkColor,
      withDashedStroke = false,
    }: Settings,
  ) {
    const element = new shapes.standard.Rectangle();
    const attributes = this.getAttributes({
      elementName,
      fillColor: fillColor || this.lightColor,
      strokeColor: strokeColor || this.darkColor,
      withDashedStroke,
      textAnchor,
      refX,
    });

    attributes.body.rx = 8;
    attributes.body.ry = 8;

    element.resize(width, height);
    element.attr(attributes as unknown as dia.Cell.Selectors);

    return element;
  }

  /**
   * Builds a basic octagonal shape
   * @param elementName Element name
   * @param settings Shape settings
   * @param settings.width Reference size for element's width
   * @param settings.height Reference size for element's height
   * @param settings.textAnchor Text Anchor
   * @param settings.refX Label x-axis reference
   * @param settings.fillColor Color used to fulfill relationship arrow shapes
   * @param settings.strokeColor Color used for strokes
   * @param settings.withDashedStroke Enable or disable Dashed Stroke
   * @return Basic octagonal shape
   * @example
   *  import { ShapeBuilder } from '@lib/viewRenderer/nodeRendering/ShapeBuilder';
   *  import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   *
   *  const shapeBuilder = new ShapeBuilder(new ViewSettings({}));
   *  const node = shapeBuilder.buildBasicOctagonal('Node 1',{
   *       strokeColor: 'black',
   *       fillColor: 'white',
   *       refX: '42.5%',
   *       textAnchor: 'middle',
   *       width: 100,
   *       height: 80
   * });
   */
  buildBasicOctagonal(
    elementName,
    {
      width = this.defaultWidth,
      height = this.defaultHeight,
      textAnchor = 'middle',
      refX = '42.5%',
      fillColor = this.lightColor,
      strokeColor = this.darkColor,
      withDashedStroke = false,
    }: Settings,
  ) {
    const element = new shapes.standard.Polygon();
    const attributes = this.getAttributes({
      elementName,
      fillColor: fillColor || this.lightColor,
      strokeColor: strokeColor || this.darkColor,
      withDashedStroke,
      textAnchor,
      refX,
    });

    attributes.body.refPoints = '0,1 0.5,0 9.5,0 10,1 10,9 9.5,10 0.5,10 0,9';

    element.resize(width, height);
    element.attr(attributes as unknown as dia.Cell.Selectors);

    return element;
  }

  /**
   * Builds a small circle shape
   * @param settings Shape settings
   * @param settings.fillColor Color used to fulfill relationship arrow shapes
   * @param settings.strokeColor Color used for strokes
   * @return Basic small circle shape
   * @example
   *  import { ShapeBuilder } from '@lib/viewRenderer/nodeRendering/ShapeBuilder';
   *  import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   *
   *  const shapeBuilder = new ShapeBuilder(new ViewSettings({}));
   *  const node = shapeBuilder.buildSmallCircle({
   *       strokeColor: 'black',
   *       fillColor: 'white',
   * });
   */
  buildSmallCircle({
    fillColor = this.darkColor,
    strokeColor = this.darkColor,
  }: Partial<Omit<ShapeAttributes, 'elementName' | 'withDashedStroke' | 'textAnchor' | 'refX'>>) {
    const element = new shapes.standard.Circle();
    const attributes = this.getAttributes({
      elementName: '',
      fillColor: fillColor || this.lightColor,
      strokeColor: strokeColor || this.darkColor,
      withDashedStroke: false,
    });

    element.resize(14, 14);
    element.attr(attributes as unknown as dia.Cell.Selectors);

    return element;
  }
}
