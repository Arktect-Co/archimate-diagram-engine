import { dia, shapes } from 'jointjs';
import { expect } from 'chai';
import { RelationshipBuilder } from '@lib/viewRenderer/relationshipRendering/RelationshipBuilder';
import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
import { RelationshipType } from '@lib/common/enums/relationshipType';
import { PointerType } from '@lib/common/enums/pointerType';
import { NodeBuilder } from '@lib/viewRenderer/nodeRendering/NodeBuilder';
import { ViewRelationship } from '@lib/model/ViewRelationship';
import { ViewNode } from '@lib/model/ViewNode';
import { SETTINGS_DEFAULT } from '@lib/common/constants';
import referenceView from '../../data/complete/reference_view.json';

describe('RelationshipBuilder', () => {
  const viewRelationship: ViewRelationship = referenceView.viewRelationships[0];
  const graph = new dia.Graph({ cellNamespace: shapes });
  const settings = new ViewSettings({});
  const builder = new RelationshipBuilder(graph, settings);

  afterEach(() => {
    graph.clear();
    const nodeBuilder = new NodeBuilder(graph, settings);
    const nodes: Array<ViewNode> = referenceView.viewNodes.filter(
      node =>
        node.viewNodeId === viewRelationship.sourceId ||
        node.viewNodeId === viewRelationship.targetId,
    );

    if (Array.isArray(nodes)) {
      nodes.forEach(node => {
        nodeBuilder.buildNode({
          modelElementId: node.modelNodeId,
          viewNodeId: node.viewNodeId,
          name: node.name,
          type: node.type,
          width: node.width,
          height: node.height,
          posX: node.x,
          posY: node.y,
          parentElement: undefined,
        });
      });
    }
  });

  describe('getRelationshipAttributes', () => {
    it('should return default relationship attributes', () => {
      const { line } = builder.getRelationshipAttributes({
        type: 'unknown',
        isBidirectional: false,
      });

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeDasharray).to.equal(3);
      expect(line.targetMarker).to.contain({
        type: PointerType.None,
      });
    });

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

    it('should return influence relationship attributes', () => {
      const { line } = builder.getRelationshipAttributes({
        type: RelationshipType.Influence,
        isBidirectional: false,
      });

      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.strokeDasharray).to.equal(4);
      expect(line.targetMarker).to.contain({
        type: PointerType.Path,
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        d: 'M 10 -5 0 0 10 5 1 0 z',
      });
    });

    it('should return realization relationship attributes', () => {
      const types = [RelationshipType.Realisation, RelationshipType.Realization];

      types.forEach(type => {
        const { line } = builder.getRelationshipAttributes({
          type,
          isBidirectional: false,
        });

        expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
        expect(line.strokeDasharray).to.equal(2);
        expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
        expect(line.targetMarker).to.contain({
          type: PointerType.Path,
          stroke: SETTINGS_DEFAULT.DARK_COLOR,
          fill: SETTINGS_DEFAULT.LIGHT_COLOR,
          d: 'M 15 -9 0 0 15 9 z',
        });
      });
    });

    it('should return specialization relationship attributes', () => {
      const { line } = builder.getRelationshipAttributes({
        type: RelationshipType.Specialization,
        isBidirectional: false,
      });

      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.targetMarker).to.contain({
        type: PointerType.Path,
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        fill: SETTINGS_DEFAULT.LIGHT_COLOR,
        d: 'M 15 -9 0 0 15 9 z',
      });
    });

    it('should return flow relationship attributes', () => {
      const { line } = builder.getRelationshipAttributes({
        type: RelationshipType.Flow,
        isBidirectional: false,
      });

      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeWidth).to.equal(SETTINGS_DEFAULT.EDGE_WIDTH);
      expect(line.strokeDasharray).to.equal(4);
      expect(line.targetMarker).to.contain({
        type: PointerType.Path,
        d: 'M 10 -5 0 0 10 5 z',
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
      });
    });

    it('should return composition relationship attributes', () => {
      const { line } = builder.getRelationshipAttributes({
        type: RelationshipType.Composition,
        isBidirectional: false,
      });

      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeWidth).to.equal(1);
      expect(line.sourceMarker).to.contain({
        type: PointerType.Path,
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        fill: SETTINGS_DEFAULT.DARK_COLOR,
        d: 'M 10 -8 0 0 10 8 20 0 z',
      });
      expect(line.targetMarker).to.contain({
        type: PointerType.None,
      });
    });

    it('should return aggregation relationship attributes', () => {
      const { line } = builder.getRelationshipAttributes({
        type: RelationshipType.Aggregation,
        isBidirectional: false,
      });

      expect(line.stroke).to.equal(SETTINGS_DEFAULT.DARK_COLOR);
      expect(line.strokeWidth).to.equal(1);
      expect(line.sourceMarker).to.contain({
        type: PointerType.Path,
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        fill: SETTINGS_DEFAULT.LIGHT_COLOR,
        d: 'M 10 -8 0 0 10 8 20 0 z',
      });
      expect(line.targetMarker).to.contain({
        type: PointerType.None,
      });
    });
  });

  describe('buildRelationship', () => {
    const relationSettings = {
      type: viewRelationship.type,
      relationshipModelId: viewRelationship.modelRelationshipId,
      relationshipViewId: viewRelationship.viewRelationshipId,
      isBidirectional: false,
      bendpoints: viewRelationship.bendpoints,
      sourceNode: graph.getCell(viewRelationship.sourceId),
      targetNode: graph.getCell(viewRelationship.targetId),
      label: {
        text: '',
      },
    };
    const errorMessage =
      'Invalid relationship: Relationships must have type, sourceNode and targetNode defined.';

    it('should return an error message if the type is not defined', () => {
      try {
        builder.buildRelationship({ ...relationSettings, type: '' });
      } catch (e) {
        const { message } = e as Error;

        expect(message).to.equal(errorMessage);
      }
    });

    it('should return an error message if the sourceNode is not defined', () => {
      try {
        builder.buildRelationship({ ...relationSettings, sourceNode: undefined });
      } catch (e) {
        const { message } = e as Error;

        expect(message).to.equal(errorMessage);
      }
    });

    it('should return an error message if the targetNode is not defined', () => {
      try {
        builder.buildRelationship({ ...relationSettings, targetNode: undefined });
      } catch (e) {
        const { message } = e as Error;

        expect(message).to.equal(errorMessage);
      }
    });

    it('should return a graph with a relationship', () => {
      const linkType = 'standard.Link';
      builder.buildRelationship({
        ...relationSettings,
        sourceNode: graph.getCell(viewRelationship.sourceId),
        targetNode: graph.getCell(viewRelationship.targetId),
      });

      const relationship = graph.toJSON().cells.find(link => link.type === linkType);

      expect(relationship).to.not.equal(undefined);
      expect(relationship).to.not.equal(null);
      expect(relationship.relationshipType).to.equal(RelationshipType.Realization);
      expect(relationship.attrs.line).to.deep.contain({
        stroke: SETTINGS_DEFAULT.DARK_COLOR,
        strokeWidth: SETTINGS_DEFAULT.EDGE_WIDTH,
        targetMarker: {
          stroke: SETTINGS_DEFAULT.DARK_COLOR,
          fill: SETTINGS_DEFAULT.LIGHT_COLOR,
          d: 'M 15 -9 0 0 15 9 z',
        },
        strokeDasharray: 2,
      });
    });
  });
});
