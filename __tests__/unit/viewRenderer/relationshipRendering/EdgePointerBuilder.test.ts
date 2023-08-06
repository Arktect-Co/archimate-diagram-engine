import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
import { PointerType } from '@lib/common/enums/pointerType';
import { SETTINGS_DEFAULT } from '@lib/common/constants';
import { expect } from 'chai';

describe('EdgePointerBuilder', () => {
  const settings = new ViewSettings({});
  const builder = new EdgePointerBuilder(settings);

  it('should return a base pointer', () => {
    const edgePointer = builder.buildBasePointer();

    expect(edgePointer).to.contain({
      type: PointerType.None,
    });
  });

  it('should return a triangle Pointer', () => {
    const edgePointer = builder.buildTrianglePointer();

    expect(edgePointer).to.contain({
      type: PointerType.Path,
      stroke: SETTINGS_DEFAULT.DARK_COLOR,
      fill: SETTINGS_DEFAULT.LIGHT_COLOR,
      d: 'M 15 -9 0 0 15 9 z',
    });
  });

  it('should return a full triangle Pointer', () => {
    const edgePointer = builder.buildFullTrianglePointer();

    expect(edgePointer).to.contain({
      type: PointerType.Path,
      stroke: SETTINGS_DEFAULT.DARK_COLOR,
      fill: SETTINGS_DEFAULT.DARK_COLOR,
      d: 'M 15 -9 0 0 15 9 z',
    });
  });

  it('should return a circular Pointer', () => {
    const edgePointer = builder.buildCircularPointer();

    expect(edgePointer).to.contain({
      type: PointerType.Circle,
      stroke: SETTINGS_DEFAULT.DARK_COLOR,
      fill: SETTINGS_DEFAULT.LIGHT_COLOR,
      r: 4,
      cx: 4,
    });
  });

  it('should return a full circular Pointer', () => {
    const edgePointer = builder.buildFullCircularPointer();

    expect(edgePointer).to.contain({
      type: PointerType.Circle,
      stroke: SETTINGS_DEFAULT.DARK_COLOR,
      fill: SETTINGS_DEFAULT.DARK_COLOR,
      r: 4,
      cx: 4,
    });
  });

  it('should return a diamond Pointer', () => {
    const edgePointer = builder.buildDiamondPointer();

    expect(edgePointer).to.contain({
      type: PointerType.Path,
      stroke: SETTINGS_DEFAULT.DARK_COLOR,
      fill: SETTINGS_DEFAULT.LIGHT_COLOR,
      d: 'M 10 -8 0 0 10 8 20 0 z',
    });
  });

  it('should return a full diamond Pointer', () => {
    const edgePointer = builder.buildFullDiamondPointer();

    expect(edgePointer).to.contain({
      type: PointerType.Path,
      stroke: SETTINGS_DEFAULT.DARK_COLOR,
      fill: SETTINGS_DEFAULT.DARK_COLOR,
      d: 'M 10 -8 0 0 10 8 20 0 z',
    });
  });
});
