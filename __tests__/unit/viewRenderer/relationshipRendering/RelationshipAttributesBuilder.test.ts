import { RelationshipAttributesBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipAttributesBuilder';
import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
import { EdgePointerBuilder } from '@lib/viewRenderer/relationshipRendering/EdgePointerBuilder';
import { SETTINGS_DEFAULT } from '@lib/common/constants';
import { expect } from 'chai';

const settings = new ViewSettings({});
const builder = new EdgePointerBuilder(settings);

describe('RelationshipAttributesBuilder', () => {
  const relationshipAttributesBuilder = new RelationshipAttributesBuilder(settings, builder);

  describe('Association Relationship', () => {
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

  describe('ServingRelationship', () => {
    it('should return a serving relationship', () => {
      const { line } = relationshipAttributesBuilder.buildServingRelationship();

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.targetMarker).to.contain({
        type: 'path',
        stroke: 'black',
        d: 'M 12 -6 0 0 12 6 1 0 z',
      });
    });
  });

  describe('AssignmentRelationship', () => {
    it('should return an assignment relationship', () => {
      const { line } = relationshipAttributesBuilder.buildAssignmentRelationship();

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.targetMarker).to.contain({
        type: 'path',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        d: 'M 10 -5 0 0 10 5 z',
      });
      expect(line.sourceMarker).to.contain({
        type: 'circle',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        fill: SETTINGS_DEFAULT.DARK_COLOR,
        r: 4,
        cx: 4,
      });
    });
  });

  describe('TriggeringRelationship', () => {
    it('should return a triggering relationship', () => {
      const { line } = relationshipAttributesBuilder.buildTriggeringRelationship();

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.targetMarker).to.contain({
        type: 'path',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        d: 'M 10 -5 0 0 10 5 z',
      });
    });
  });
});
