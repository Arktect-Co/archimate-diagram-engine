import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
import { SETTINGS_DEFAULT } from '@lib/common/constants';
import { expect } from 'chai';

const settings = new ViewSettings({});
const builder = new EdgePointerBuilder(settings);

describe('RelationshipAttributesBuilder', () => {
  const relationshipAttributesBuilder = new RelationshipAttributesBuilder(settings, builder);

  it('should return a non bidirectional association relationship', () => {
    const { line } = relationshipAttributesBuilder.buildAssociationRelationship(false);

    expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
    expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
    expect(line.targetMarker).to.contain({
      type: 'path',
      stroke: 'black',
      d: 'M 12 -6 0 0 z',
    });
  });

  it('should return a bidirectional association relationship', () => {
    const { line } = relationshipAttributesBuilder.buildAssociationRelationship(true);

    expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
    expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
    expect(line.targetMarker).to.contain({
      type: 'none',
    });
  });
});
