import { ReferenceView } from '@lib/model/ReferenceView';
import { Cell, GraphOutput } from '@lib/model/GraphOutput';
import { ViewNode } from '@lib/model/ViewNode';
import { ViewRelationship } from '@lib/model/ViewRelationship';

interface Data<T> {
  [key: string]: T;
}

/**
 * Checks attributes equality
 * @param node View node
 * @param cell Cell of graph output
 * @return boolean
 */
const isNodeAttributesEquality = (node: ViewNode, cell: Cell): boolean =>
  cell.attrs.label.textWrap.text !== node.name ||
  cell.modelElementType !== node.type ||
  cell.size.width !== node.width ||
  cell.size.height !== node.height ||
  cell.parent !== node.parent;

/**
 * Checks attributes equality
 * @param rel View relationship
 * @param cell Cell of graph output
 * @return boolean
 */
const isRelationshipAttributesEquality = (rel: ViewRelationship, cell: Cell): boolean =>
  cell.source.id !== rel.sourceId ||
  cell.target.id !== rel.targetId ||
  cell.relationshipType !== rel.type;

/**
 * Verifies if a graph represents a view correctly
 * @param viewInput View object describing view nodes and relationships
 * @param graphOutput JointJS graph exported to JSON
 * @return true if the graph is equal to the view
 */
export function checkModelsEquality(viewInput: ReferenceView, graphOutput: GraphOutput): boolean {
  try {
    if (
      Array.isArray(viewInput.viewNodes) &&
      Array.isArray(viewInput.viewRelationships) &&
      Array.isArray(graphOutput.cells)
    ) {
      const cells = graphOutput.cells.reduce((accumulator, currentValue): Data<Cell> => {
        const key = currentValue.id;

        if (!accumulator[key]) accumulator[key] = currentValue;

        return accumulator;
      }, {});
      const viewNodes = viewInput.viewNodes.reduce((accumulator, currentValue): Data<ViewNode> => {
        const key = currentValue.viewNodeId;

        if (!accumulator[key]) accumulator[key] = currentValue;

        return accumulator;
      }, {});

      for (const node of viewInput.viewNodes) {
        const cell = cells[node.viewNodeId];

        // If not found, then is different
        if (!cell) {
          return false;
        }

        // Checking attributes equality
        if (isNodeAttributesEquality(node, cell)) {
          return false;
        }

        // Verifying nested nodes
        if (cell.embeds && cell.embeds.length > 0) {
          for (const possibleChildId of cell.embeds) {
            const childNode = viewNodes[possibleChildId];

            if (childNode && childNode.parent !== cell.id) {
              return false;
            }
          }
        }
      }

      for (const rel of viewInput.viewRelationships) {
        const cell = cells[rel.viewRelationshipId];

        // If not found, then is different
        if (!cell) {
          return false;
        }

        // Checking attributes equality
        if (isRelationshipAttributesEquality(rel, cell)) {
          return false;
        }
      }
    }

    return true;
  } catch (e) {
    return false;
  }
}
