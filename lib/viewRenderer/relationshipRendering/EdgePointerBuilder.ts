import { SETTINGS_DEFAULT } from '@lib/common/constants';
import { ViewSetting } from '@lib/model/ViewSetting';
import { attributes } from 'jointjs';

/**
 * Edge Pointer Builder
 * @example
 * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
 * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
 *
 * const settings = new ViewSettings({});
 * const builder = new EdgePointerBuilder(settings);
 */
export class EdgePointerBuilder {
  private readonly lightColor: string;
  private readonly darkColor: string;

  /**
   * @param settings View Settings
   * @param [settings.lightColor = 'white'] Color used to fulfill relationship arrow shapes
   * @param [settings.darkColor = 'black'] Color used for strokes
   */
  constructor(settings: ViewSetting) {
    const { lightColor = SETTINGS_DEFAULT.LIGHT_COLOR, darkColor = SETTINGS_DEFAULT.DARK_COLOR } =
      settings;

    this.lightColor = lightColor;
    this.darkColor = darkColor;
  }

  /**
   * Builds a base pointer
   * @example
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
   *
   * const settings = new ViewSettings({});
   * const builder = new EdgePointerBuilder(settings);
   * const pointer = builder.buildBasePointer();
   */
  buildBasePointer(): attributes.SVGAttributes {
    return {
      type: 'none',
    };
  }

  /**
   * Builds a triangle pointer
   * @example
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
   *
   * const settings = new ViewSettings({});
   * const builder = new EdgePointerBuilder(settings);
   * const pointer = builder.buildTrianglePointer();
   */
  buildTrianglePointer(): attributes.SVGAttributes {
    return {
      type: 'path',
      stroke: this.darkColor,
      fill: this.lightColor,
      d: 'M 15 -9 0 0 15 9 z', // White filled big arrow
    };
  }

  /**
   * Builds a full triangle pointer
   * @example
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
   *
   * const settings = new ViewSettings({});
   * const builder = new EdgePointerBuilder(settings);
   * const pointer = builder.buildFullTrianglePointer();
   */
  buildFullTrianglePointer(): attributes.SVGAttributes {
    return {
      type: 'path',
      stroke: this.darkColor,
      fill: this.darkColor,
      d: 'M 15 -9 0 0 15 9 z', // White filled big arrow
    };
  }

  /**
   * Builds a circular pointer
   * @example
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
   *
   * const settings = new ViewSettings({});
   * const builder = new EdgePointerBuilder(settings);
   * const pointer = builder.buildCircularPointer();
   */
  buildCircularPointer(): attributes.SVGAttributes {
    return {
      type: 'circle', // SVG Circle
      stroke: this.darkColor,
      fill: this.lightColor,
      r: 4, // radius of the circle
      cx: 4, // move the centre of the circle 5 pixels from the end of the path
    };
  }

  /**
   * Builds a full circular pointer
   * @example
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
   *
   * const settings = new ViewSettings({});
   * const builder = new EdgePointerBuilder(settings);
   * const pointer = builder.buildFullCircularPointer();
   */
  buildFullCircularPointer(): attributes.SVGAttributes {
    return {
      type: 'circle', // SVG Circle
      stroke: this.darkColor,
      fill: this.darkColor,
      r: 4, // radius of the circle
      cx: 4, // move the centre of the circle 5 pixels from the end of the path
    };
  }

  /**
   * Builds a diamond pointer
   * @example
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
   *
   * const settings = new ViewSettings({});
   * const builder = new EdgePointerBuilder(settings);
   * const pointer = builder.buildDiamondPointer();
   */
  buildDiamondPointer(): attributes.SVGAttributes {
    return {
      type: 'path',
      stroke: this.darkColor,
      fill: this.lightColor,
      d: 'M 10 -8 0 0 10 8 20 0 z', // White diamond
    };
  }

  /**
   * Builds a full diamond pointer
   * @example
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
   *
   * const settings = new ViewSettings({});
   * const builder = new EdgePointerBuilder(settings);
   * const pointer = builder.buildFullDiamondPointer();
   */
  buildFullDiamondPointer(): attributes.SVGAttributes {
    return {
      type: 'path',
      stroke: this.darkColor,
      fill: this.darkColor,
      d: 'M 10 -8 0 0 10 8 20 0 z', // Black diamond
    };
  }

  /**
   * Builds an arrow pointer
   * @example
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
   *
   * const settings = new ViewSettings({});
   * const builder = new EdgePointerBuilder(settings);
   * const pointer = builder.buildArrowPointer();
   */
  buildArrowPointer(): attributes.SVGAttributes {
    return {
      type: 'path',
      stroke: this.darkColor,
      d: 'M 10 -5 0 0 10 5 z', // Filled arrow
    };
  }

  /**
   * Builds a thin arrow pointer
   * @example
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
   *
   * const settings = new ViewSettings({});
   * const builder = new EdgePointerBuilder(settings);
   * const pointer = builder.buildThinArrowPointer();
   */
  buildThinArrowPointer() {
    return {
      type: 'path',
      stroke: this.darkColor,
      d: 'M 12 -6 0 0 12 6 1 0 z', // Simple arrow
    };
  }

  /**
   * Builds a small thin arrow pointer
   * @example
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
   *
   * const settings = new ViewSettings({});
   * const builder = new EdgePointerBuilder(settings);
   * const pointer = builder.buildSmallThinArrowPointer();
   */
  buildSmallThinArrowPointer(): attributes.SVGAttributes {
    return {
      type: 'path',
      stroke: this.darkColor,
      d: 'M 10 -5 0 0 10 5 1 0 z', // Simple arrow - Smaller
    };
  }

  /**
   * Builds a half thin arrow pointer
   * @example
   * import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
   * import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
   *
   * const settings = new ViewSettings({});
   * const builder = new EdgePointerBuilder(settings);
   * const pointer = builder.buildHalfThinArrowPointer();
   */
  buildHalfThinArrowPointer(): attributes.SVGAttributes {
    return {
      type: 'path',
      stroke: this.darkColor,
      d: 'M 12 -6 0 0 z', // Half arrow
    };
  }
}
