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
                target = null;

            relationships.forEach(rel => {
                source = graph.getCell(rel.sourceId);
                target = graph.getCell(rel.targetId);

                if (source !== undefined && target !== undefined) {
                    //Verifying if there is parent and embedded
                    if (target.attributes.parent !== null) {
                        if (target.attributes.parent.localeCompare(source.id) !== 0) {
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
                    } else {
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
