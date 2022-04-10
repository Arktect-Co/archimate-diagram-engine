/**
 * Verifies if a graph represents a view correctly
 * @param viewInput View object describing view nodes and relationships
 * @param graphOutput JointJS graph exported to JSON
 * @return true if the graph is equal to the view
 */
function checkModelsEquality(viewInput, graphOutput) {
    try {
        if (Array.isArray(viewInput.viewNodes) && Array.isArray(viewInput.viewRelationships) &&
            Array.isArray(graphOutput.cells)) {
            for (let i = 0; i < viewInput.viewNodes.length; i++) {
                const node = viewInput.viewNodes[i];
                const cell = graphOutput.cells.find(e => e.id === node.viewNodeId);

                // If not found, then is different
                if (!cell) {
                    return false;
                }

                // Checking attributes equality
                if (cell.attrs.label.textWrap.text !== node.name || cell.modelElementType !== node.type ||
                    cell.size.width !== node.width || cell.size.height !== node.height || cell.parent !== node.parent) {
                    return false;
                }

                // Verifying nested nodes
                if (cell.embeds && cell.embeds.length > 0) {
                    for (let j = 0; j < cell.embeds.length; j++) {
                        const possibleChildId = cell.embeds[j];

                        const childNode = viewInput.viewNodes.find(e => e.viewNodeId === possibleChildId);

                        if(childNode && childNode.parent !== cell.id){
                            return false;
                        }
                    }
                }
            }

            for (let i = 0; i < viewInput.viewRelationships.length; i++) {
                const rel = viewInput.viewRelationships[i];
                const cell = graphOutput.cells.find(e => e.id === rel.viewRelationshipId);

                // If not found, then is different
                if (!cell) {
                    return false;
                }

                // Checking attributes equality
                if (cell.source.id !== rel.sourceId || cell.target.id !== rel.targetId ||
                    cell.relationshipType !== rel.type) {
                    return false;
                }
            }
        }

        return true;
    } catch (e) {
        return false;
    }
}

module.exports = checkModelsEquality;