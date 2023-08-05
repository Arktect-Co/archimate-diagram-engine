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

  describe('AccessRelationship', () => {
    it('should return a non bidirectional access relationship', () => {
      const { line } = relationshipAttributesBuilder.buildAccessRelationship(false);

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeDasharray).to.equal(2);
      expect(line.targetMarker).to.contain({
        type: 'path',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        d: 'M 10 -5 0 0 10 5 1 0 z',
      });
    });

    it('should return a bidirectional access relationship', () => {
      const { line } = relationshipAttributesBuilder.buildAccessRelationship(true);
      const smallThinArrow = {
        type: 'path',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        d: 'M 10 -5 0 0 10 5 1 0 z',
      };
      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeDasharray).to.equal(2);
      expect(line.targetMarker).to.contain(smallThinArrow);
      expect(line.sourceMarker).to.contain(smallThinArrow);
    });
  });

  describe('InfluenceRelationship', () => {
    it('should return an influence relationship', () => {
      const { line } = relationshipAttributesBuilder.buildInfluenceRelationship();

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeDasharray).to.equal(4);
      expect(line.targetMarker).to.contain({
        type: 'path',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        d: 'M 10 -5 0 0 10 5 1 0 z',
      });
    });
  });

  describe('RealizationRelationship', () => {
    it('should return a realization relationship', () => {
      const { line } = relationshipAttributesBuilder.buildRealizationRelationship();

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeDasharray).to.equal(2);
      expect(line.targetMarker).to.contain({
        type: 'path',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        fill: SETTINGS_DEFAULT.LIGHT_COLOR,
        d: 'M 15 -9 0 0 15 9 z',
      });
    });
  });

  describe('SpecializationRelationship', () => {
    it('should return a specialization relationship', () => {
      const { line } = relationshipAttributesBuilder.buildSpecializationRelationship();

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.targetMarker).to.contain({
        type: 'path',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        fill: SETTINGS_DEFAULT.LIGHT_COLOR,
        d: 'M 15 -9 0 0 15 9 z',
      });
    });
  });

  describe('FlowRelationship', () => {
    it('should return a flow relationship', () => {
      const { line } = relationshipAttributesBuilder.buildFlowRelationship();

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeDasharray).to.equal(4);
      expect(line.targetMarker).to.contain({
        type: 'path',
        d: 'M 10 -5 0 0 10 5 z',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
      });
    });
  });

  describe('CompositionRelationship', () => {
    it('should return a composition relationship', () => {
      const { line } = relationshipAttributesBuilder.buildCompositionRelationship();

      expect(line.strokeWidth).to.equal(1);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.sourceMarker).to.contain({
        type: 'path',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        fill: SETTINGS_DEFAULT.DARK_COLOR,
        d: 'M 10 -8 0 0 10 8 20 0 z',
      });
      expect(line.targetMarker).to.contain({
        type: 'none',
      });
    });
  });
  describe('AggregationRelationship', () => {
    it('should return an aggregation relationship', () => {
      const { line } = relationshipAttributesBuilder.buildAggregationRelationship();

      expect(line.strokeWidth).to.equal(1);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.sourceMarker).to.contain({
        type: 'path',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        fill: SETTINGS_DEFAULT.LIGHT_COLOR,
        d: 'M 10 -8 0 0 10 8 20 0 z',
      });
      expect(line.targetMarker).to.contain({
        type: 'none',
      });
    });
  });
});
