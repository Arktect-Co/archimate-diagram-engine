import { dia } from 'jointjs';
import { ViewNode } from '@lib/model/ViewNode';
import { ViewRelationship } from '@lib/model/ViewRelationship';
import { ViewSetting } from '@lib/model/ViewSetting';
import NodeBuilder from '@lib/viewRenderer/nodeRendering/NodeBuilder';
import RelationshipBuilder from './relationshipRendering/RelationshipBuilder';

export class ViewRenderer {
  /**
   * Converts all node and relationship views to graph
   * @param graph Jointjs Graph model
   * @param nodes View Nodes
   * @param relationships Relationships of nodes
   * @param settings Node view settings
   */
  static renderToGraph(
    graph: dia.Graph,
    nodes: Array<ViewNode>,
    relationships: Array<ViewRelationship>,
    settings: ViewSetting,
  ) {
    const nodeBuilder = new NodeBuilder(graph, settings);
    const relationshipBuilder = new RelationshipBuilder(graph, settings);

    graph.clear();

    if (Array.isArray(nodes)) {
      nodes.forEach(node => {
        let parentId = node.parent;
        let parent = null;

        if (parentId !== undefined && parentId !== null) {
          parent = graph.getCell(parentId);
        }

        nodeBuilder.buildNode(
          node.modelNodeId,
          node.viewNodeId,
          node.name,
          node.type,
          node.width,
          node.height,
          node.x,
          node.y,
          parent,
        );
      });

      let source = null,
        target = null,
        parent = null;

      relationships.forEach(rel => {
        source = graph.getCell(rel.sourceId);
        target = graph.getCell(rel.targetId);
        parent = target.attributes.parent;

        // Must add relationship only if all parties are defined and are nodes
        if (
          source !== undefined &&
          source.attributes.type !== 'standard.Link' &&
          target !== undefined &&
          target.attributes.type !== 'standard.Link'
        ) {
          // Relationships with embedded nodes should not be visible
          if (parent === null || parent !== source.id) {
            relationshipBuilder.buildRelationship(
              rel.type,
              rel.modelRelationshipId,
              rel.viewRelationshipId,
              rel.isBidirectional,
              rel.bendpoints,
              source,
              target,
              '',
            );
          }
        }
      });
    }
  }

  /**
   * Render Graph
   * @param nodes View Nodes
   * @param relationships Relationships of nodes
   * @param settings Node view settings
   */
  static render(
    nodes: Array<ViewNode>,
    relationships: Array<ViewRelationship>,
    settings: ViewSetting,
  ): dia.Graph {
    let graph = new dia.Graph();

    this.renderToGraph(graph, nodes, relationships, settings);

    return graph;
  }
}
