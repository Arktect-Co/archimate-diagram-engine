import { dia, shapes } from 'jointjs';
import { NodeBuilder } from '@lib/viewRenderer/nodeRendering/NodeBuilder';
import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
import { NodeType } from '@lib/common/enums/nodeType';
import { expect } from 'chai';
import { NodeShapeClassification } from '@lib/common/enums/nodeShapeClassification';
import { Connectors } from '@lib/common/enums/connectors';
import { Position } from '@lib/common/enums/position';
import Themes from '../../../../src/lib/viewRenderer/utils/style/styles';

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
  const size = {
    width: 100,
    height: 80,
  };

  describe('ArchiMate 3.2 buildShape', () => {
    const colors = Themes['COLOR_SCHEME_HYBRID'];
    const nodeBuilderV3 = new NodeBuilder(graph, new ViewSettings({ archimateVersion: '3.2' }));

    it('should return a basic rectangular shape if node type is a "Gap"', () => {
      const nodeShape = nodeBuilderV3.buildShape({
        type: NodeType.Gap,
        name: 'Model Service',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.attrs.body.fill).to.equal(colors.IMPLEMENTATION_PROJECT);
      expect(nodeShape.attributes.size).to.contain(size);
    });

    it('should return a basic rectangular shape if node type is a "Plateau"', () => {
      const nodeShape = nodeBuilderV3.buildShape({
        type: NodeType.Plateau,
        name: 'Model Service',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.attrs.body.fill).to.equal(colors.IMPLEMENTATION_PROJECT);
      expect(nodeShape.attributes.size).to.contain(size);
    });

    it('should return a basic rectangular shape if node type is a "Deliverable"', () => {
      const nodeShape = nodeBuilderV3.buildShape({
        type: NodeType.Deliverable,
        name: 'Model Service',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.attrs.body.fill).to.equal(colors.IMPLEMENTATION_PROJECT);
      expect(nodeShape.attributes.size).to.contain(size);
    });

    it('should return a basic rectangular shape if node type is a "Contract"', () => {
      const nodeShape = nodeBuilderV3.buildShape({
        type: NodeType.Contract,
        name: 'Model Service',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.attrs.body.fill).to.equal(colors.BUSINESS_PASSIVE);
      expect(nodeShape.attributes.size).to.contain(size);
    });

    it('should return a basic Octagonal shape if node type is a "Meaning"', () => {
      const nodeShape = nodeBuilderV3.buildShape({
        type: NodeType.Meaning,
        name: 'Model Service',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Polygon');
      expect(nodeShape.attributes.attrs.body.fill).to.equal(colors.MOTIVATIONAL);
      expect(nodeShape.attributes.size).to.contain(size);
    });

    it('should return a basic Octagonal shape if node type is a "Value"', () => {
      const nodeShape = nodeBuilderV3.buildShape({
        type: NodeType.Value,
        name: 'Model Service',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Polygon');
      expect(nodeShape.attributes.attrs.body.fill).to.equal(colors.MOTIVATIONAL);
      expect(nodeShape.attributes.size).to.contain(size);
    });

    it('should return a basic Octagonal shape if node type is a "Work package"', () => {
      const nodeShape = nodeBuilderV3.buildShape({
        type: NodeType.WorkPackage,
        name: 'Model Service',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.attrs.body).to.contain({
        rx: 8,
        ry: 8,
        fill: colors.IMPLEMENTATION_PROJECT,
      });
      expect(nodeShape.attributes.size).to.contain(size);
    });
  });

  describe('buildShape', () => {
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
      expect(nodeShape.attributes.attrs.label).to.contain({
        textAnchor: Position.Middle,
        refX: '42.5%',
      });
    });

    it('should return a node with rectangular rounded shape if classification is "implementation_and_migration"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: NodeType.Gap,
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.attrs.body).to.contain({ rx: 8, ry: 8, fill: '#a7ffeb' });
      expect(nodeShape.attributes.size).to.contain(size);
      expect(nodeShape.attributes.attrs.label).to.contain({
        textAnchor: Position.Middle,
        refX: '42.5%',
      });
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
      expect(nodeShape.attributes.attrs.label).to.contain({
        textAnchor: Position.Left,
        refX: '5%',
      });
    });

    it('should return a node with rectangular shape if classification is "group"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: NodeType.Group,
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.size).to.contain(size);
      expect(nodeShape.attributes.attrs.label).to.contain({
        textAnchor: Position.Left,
        refX: '7%',
      });
    });

    it('should return a node with rectangular shape if classification is "viewelement"', () => {
      const nodeShape = nodeBuilder.buildShape({
        type: NodeShapeClassification.ViewElement,
        name: 'unknown',
        ...size,
      });

      expect(nodeShape.attributes.type).to.equal('standard.Rectangle');
      expect(nodeShape.attributes.size).to.contain(size);
      expect(nodeShape.attributes.attrs.label).to.contain({
        textAnchor: Position.Left,
        refX: '7%',
      });
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

  describe('buildNode', () => {
    const attributes = {
      width: 100,
      height: 100,
      type: NodeType.Node,
      name: 'Node 1',
      viewNodeId: '624f10ecd9f08d4030fe458f',
      modelElementId: 'e2e60769-fea2-45e2-9355-66e092ec6934',
      posX: 10,
      posY: 10,
      parentElement: undefined,
    };
    it('should build a node in graph', () => {
      nodeBuilder.buildNode(attributes);

      const node = graph.getCell(attributes.viewNodeId).toJSON();

      expect(node.id).to.equal(attributes.viewNodeId);
      expect(node.type).to.equal('standard.Rectangle');
      expect(node.position).to.contain({ x: attributes.posX, y: attributes.posY });
      expect(node.size).to.contain({ width: attributes.width, height: attributes.height });
      expect(node.modelElementId).to.equal(attributes.modelElementId);
      expect(node.attrs.label.textWrap.text).to.equal(attributes.name);
    });

    it('should return an error message if name is not defined', () => {
      try {
        nodeBuilder.buildNode({ ...attributes, name: '' });
      } catch (e) {
        const { message } = e as Error;
        expect(message).to.equal(
          'Invalid node: Nodes must have viewNodeId, name and type defined.',
        );
      }
    });

    it('should return an error message if type is not defined', () => {
      try {
        nodeBuilder.buildNode({ ...attributes, type: '' });
      } catch (e) {
        const { message } = e as Error;
        expect(message).to.equal(
          'Invalid node: Nodes must have viewNodeId, name and type defined.',
        );
      }
    });

    it('should return an error message if viewNodeId is not defined', () => {
      try {
        nodeBuilder.buildNode({ ...attributes, type: '' });
      } catch (e) {
        const { message } = e as Error;
        expect(message).to.equal(
          'Invalid node: Nodes must have viewNodeId, name and type defined.',
        );
      }
    });
  });
});
