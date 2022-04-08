const joint = require("jointjs");
const NodeBuilder = require("./nodeRendering/NodeBuilder");
const RelationshipBuilder = require("./relationshipRendering/RelationshipBuilder");

class ViewRenderer {

    static renderToGraph(graph, nodes, relationships, settings) {
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
                    parent
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
                if (source !== undefined && source.attributes.type !== "standard.Link" &&
                    target !== undefined && target.attributes.type !== "standard.Link") {
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
                            ''
                        );
                    }
                }
            });
        }
    }

    static render(nodes, relationships, settings) {
        let graph = new joint.dia.Graph();

        this.renderToGraph(graph, nodes, relationships, settings);

        return graph;
    }
}

module.exports = ViewRenderer;
