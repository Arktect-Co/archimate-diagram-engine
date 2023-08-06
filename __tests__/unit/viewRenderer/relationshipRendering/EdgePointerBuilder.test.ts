import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
import { expect } from 'chai';
import { PointerType } from '../../../../lib/common/enums/pointerType';

describe('EdgePointerBuilder', () => {
  const settings = new ViewSettings({});
  const builder = new EdgePointerBuilder(settings);

  it('should return a base pointer', () => {
    const edgePointer = builder.buildBasePointer();

    expect(edgePointer).to.contain({
      type: PointerType.None,
    });
  });
});
