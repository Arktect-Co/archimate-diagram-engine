import { dia } from 'jointjs';

interface Position {
  x: number;
  y: number;
}

interface Relationship {
  id: string;
}

export interface Cell {
  id: string;
  type: string;
  position: Position;
  angle: number;
  z: number;
  modelElementType: string;
  modelElementId: string;
  size: dia.Size;
  embeds: Array<string>;
  attrs: dia.Cell.Selectors;
  source: Relationship;
  target: Relationship;
  modelRelationshipId: string;
  relationshipType: string;
  parent?: string;
}

export interface GraphOutput {
  cells: Array<Cell>;
}
