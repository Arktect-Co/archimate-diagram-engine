import { dia } from 'jointjs';
import { ViewNode } from '../model/ViewNode';
import { ViewRelationship } from '../model/ViewRelationship';
import { ViewSetting } from '../model/ViewSetting';
import { NodeBuilder } from './nodeRendering/NodeBuilder';
import { RelationshipBuilder } from './relationshipRendering/RelationshipBuilder';

export const ViewRenderer = {
  /**
   * Converts all node and relationship views to graph
   * @param graph Jointjs Graph model
   * @param nodes View Nodes
   * @param relationships Relationships of nodes
   * @param settings Node view settings
   * @example
   * import { ViewRenderer, ViewSettings } from '../../../index';
   * import { dia, shapes } from 'jointjs';
   *
   * let outputGraph = new dia.Graph({}, {cellNamespace: shapes});
   * let viewNodes = [
   *     {
   *         "identifier": "40eb5bd6-4d7c-4c27-98a8-602f935ed405",
   *         "name": "Resource",
   *         "type": "resource"
   *     },
   *     {
   *         "identifier": "6be02ba1-0489-4ea4-b62b-a22d302cbefe",
   *         "name": "Capability",
   *         "type": "capability"
   *     }
   * ];
   * let viewRelationships = [
   *     {
   *         "identifier": "bc8c928b-dafb-4e61-91b3-7c3e5b93a900",
   *         "sourceId": "40eb5bd6-4d7c-4c27-98a8-602f935ed405",
   *         "targetId": "6be02ba1-0489-4ea4-b62b-a22d302cbefe",
   *         "type": "assignmentrelationship"
   *     }
   * ];
   *
   * ViewRenderer.renderToGraph(
   *         outputGraph,
   *         viewNodes,
   *         viewRelationships,
   *         new ViewSettings({
   *           style: 'hybrid',
   *           darkColor: 'black',
   *           lightColor: 'white',
   *           defaultWidth: 140,
   *           defaultHeight: 50,
   *         }),
   *       );
   */
  renderToGraph(
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
        const parentId = node.parent;
        let parent = null;

        if (parentId !== undefined && parentId !== null) {
          parent = graph.getCell(parentId);
        }

        nodeBuilder.buildNode({
          modelElementId: node.modelNodeId,
          viewNodeId: node.viewNodeId,
          name: node.name,
          type: node.type,
          width: node.width,
          height: node.height,
          posX: node.x,
          posY: node.y,
          parentElement: parent,
        });
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
          source?.attributes.type !== 'standard.Link' &&
          target?.attributes.type !== 'standard.Link'
        ) {
          // Relationships with embedded nodes should not be visible
          if (parent === null || parent !== source.id) {
            relationshipBuilder.buildRelationship({
              type: rel.type,
              relationshipModelId: rel.modelRelationshipId,
              relationshipViewId: rel.viewRelationshipId,
              isBidirectional: rel.isBidirectional,
              bendpoints: rel.bendpoints,
              sourceNode: source,
              targetNode: target,
              label: rel.label,
            });
          }
        }
      });
    }
  },

  /**
   * Render Graph
   * @param nodes View Nodes
   * @param relationships Relationships of nodes
   * @param settings Node view settings
   * @example
   * let viewNodes = [
   *     {
   *         "identifier": "40eb5bd6-4d7c-4c27-98a8-602f935ed405",
   *         "name": "Resource",
   *         "type": "resource"
   *     },
   *     {
   *         "identifier": "6be02ba1-0489-4ea4-b62b-a22d302cbefe",
   *         "name": "Capability",
   *         "type": "capability"
   *     }
   * ];
   * let viewRelationships = [
   *     {
   *         "identifier": "bc8c928b-dafb-4e61-91b3-7c3e5b93a900",
   *         "sourceId": "40eb5bd6-4d7c-4c27-98a8-602f935ed405",
   *         "targetId": "6be02ba1-0489-4ea4-b62b-a22d302cbefe",
   *         "type": "assignmentrelationship"
   *     }
   * ];
   *
   * ViewRenderer.render(
   *         viewNodes,
   *         viewRelationships,
   *         new ViewSettings({
   *           style: 'hybrid',
   *           darkColor: 'black',
   *           lightColor: 'white',
   *           defaultWidth: 140,
   *           defaultHeight: 50,
   *         }),
   *       );
   */
  render(
    nodes: Array<ViewNode>,
    relationships: Array<ViewRelationship>,
    settings: ViewSetting,
  ): dia.Graph {
    const graph = new dia.Graph();

    this.renderToGraph(graph, nodes, relationships, settings);

    return graph;
  },
};
