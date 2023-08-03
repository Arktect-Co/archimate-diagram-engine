import { dia, shapes } from 'jointjs';
import { NodeBuilder } from '../../../../lib/viewRenderer/nodeRendering/NodeBuilder';
import { ViewSettings } from '../../../../lib/viewRenderer/ViewSettings';
import { NodeType } from '../../../../lib/common/enums/nodeType';
import { expect } from 'chai';
import { NodeShapeClassification } from '../../../../lib/common/enums/nodeShapeClassification';
import { Connectors } from '../../../../lib/common/enums/connectors';

describe('NodeBuilder', () => {
  const settings = new ViewSettings({});
  let graph: dia.Graph;
  let nodeBuilder: NodeBuilder;

  beforeEach(() => {
    graph = new dia.Graph({ cellNamespace: shapes });
    nodeBuilder = new NodeBuilder(graph, settings);
  });

  afterEach(() => {
    graph = null;
    nodeBuilder = null;
  });

  describe('buildShape', () => {
    const size = {
      width: 100,
      height: 80,
    };

    it('should return a node with rectangular shape if no classification exist', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: 'unknown',
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.size).to.contain(size);
    });

    it('should return a node with rectangular shape if classification is "structure"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: NodeType.ApplicationComponent,
        name: 'Model Service',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.size).to.contain(size);
    });

    it('should return a node with rectangular rounded shape if classification is "behaviour"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: NodeType.ValueStream,
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.size).to.contain(size);
      expect(nodeShape.attributes.attrs.body).to.contain({ rx: 8, ry: 8 });
      expect(nodeShape.attributes.attrs.label).to.contain({ textAnchor: 'middle', refX: '42.5%' });
    });

    it('should return a node with rectangular rounded shape if classification is "implementation_and_migration"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: NodeType.Gap,
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.attrs.body).to.contain({ rx: 8, ry: 8 });
      expect(nodeShape.attributes.size).to.contain(size);
      expect(nodeShape.attributes.attrs.label).to.contain({ textAnchor: 'middle', refX: '42.5%' });
    });

    it('should return a node with Octagonal shape if classification is "motivational"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: NodeType.Stakeholder,
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Polygon');
      expect(nodeShape.attributes.attrs.body).to.contain({
        refPoints: '0,1 0.5,0 9.5,0 10,1 10,9 9.5,10 0.5,10 0,9',
      });
      expect(nodeShape.attributes.size).to.contain(size);
    });

    it('should return a node with rectangular shape if classification is "grouping"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: NodeType.Grouping,
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.size).to.contain(size);
      expect(nodeShape.attributes.attrs.label).to.contain({ textAnchor: 'left', refX: '5%' });
    });

    it('should return a node with rectangular shape if classification is "group"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: NodeType.Group,
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.size).to.contain(size);
      expect(nodeShape.attributes.attrs.label).to.contain({ textAnchor: 'left', refX: '7%' });
    });

    it('should return a node with rectangular shape if classification is "viewelement"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: NodeShapeClassification.ViewElement,
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.size).to.contain(size);
      expect(nodeShape.attributes.attrs.label).to.contain({ textAnchor: 'left', refX: '7%' });
    });

    it('should return a node with circle shape if classification is "andjunction"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: Connectors.AndJunction,
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Circle');
      expect(nodeShape.attributes.size).to.contain({ width: 14, height: 14 });
      expect(nodeShape.attributes.attrs.body).to.contain({ fill: 'black' });
    });

    it('should return a node with circle shape if classification is "orjunction"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: Connectors.OrJunction,
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Circle');
      expect(nodeShape.attributes.size).to.contain({ width: 14, height: 14 });
      expect(nodeShape.attributes.attrs.body).to.contain({ fill: 'white' });
    });
  });
});
