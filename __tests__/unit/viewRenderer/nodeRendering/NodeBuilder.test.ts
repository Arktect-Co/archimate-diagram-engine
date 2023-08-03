import { dia, shapes } from 'jointjs';
import { NodeBuilder } from '../../../../lib/viewRenderer/nodeRendering/NodeBuilder';
import { ViewSettings } from '../../../../lib/viewRenderer/ViewSettings';
import { NodeType } from '../../../../lib/common/enums/nodeType';
import { expect } from 'chai';

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
  });
});
