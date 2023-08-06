import { dia, shapes } from 'jointjs';
import { expect } from 'chai';
import { RelationshipBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipBuilder';
import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
import { RelationshipType } from '@lib/common/enums/relationshipType';
import { PointerType } from '@lib/common/enums/pointerType';
import { SETTINGS_DEFAULT } from '@lib/common/constants';

describe('RelationshipBuilder', () => {
  const graph = new dia.Graph({ cellNamespace: shapes });
  const settings = new ViewSettings({});
  const builder = new RelationshipBuilder(graph, settings);

  describe('getRelationshipAttributes', () => {
    it('should return association relationship attributes', () => {
      const { line } = builder.getRelationshipAttributes({
        type: RelationshipType.Association,
        isBidirectional: false,
      });

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.targetMarker).to.contain({
        type: PointerType.Path,
        stroke: 'black',
        d: 'M 12 -6 0 0 z',
      });
    });
  });
});
