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

    it('should return serving relationship attributes', () => {
      const types = [RelationshipType.Serving, RelationshipType.UsedBy];

      types.forEach(type => {
        const { line } = builder.getRelationshipAttributes({
          type,
          isBidirectional: false,
        });

        expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
        expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
        expect(line.targetMarker).to.contain({
          type: PointerType.Path,
          stroke: 'black',
          d: 'M 12 -6 0 0 12 6 1 0 z',
        });
      });
    });

    it('should return assignment relationship attributes', () => {
      const { line } = builder.getRelationshipAttributes({
        type: RelationshipType.Assignment,
        isBidirectional: false,
      });

      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.targetMarker).to.contain({
        type: PointerType.Path,
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        d: 'M 10 -5 0 0 10 5 z',
      });
      expect(line.sourceMarker).to.contain({
        type: PointerType.Circle,
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        fill: SETTINGS_DEFAULT.DARK_COLOR,
        r: 4,
        cx: 4,
      });
    });

    it('should return triggering relationship attributes', () => {
      const { line } = builder.getRelationshipAttributes({
        type: RelationshipType.Triggering,
        isBidirectional: false,
      });

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.targetMarker).to.contain({
        type: PointerType.Path,
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        d: 'M 10 -5 0 0 10 5 z',
      });
    });

    it('should return access relationship attributes', () => {
      const { line } = builder.getRelationshipAttributes({
        type: RelationshipType.Access,
        isBidirectional: false,
      });

      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.strokeDasharray).to.equal(2);
      expect(line.targetMarker).to.contain({
        type: PointerType.Path,
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        d: 'M 10 -5 0 0 10 5 1 0 z',
      });
    });
  });
});
