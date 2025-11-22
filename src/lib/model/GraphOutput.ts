import { dia } from '@joint/core';

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
  parent?: { id: string } | null;
}

export interface GraphOutput {
  cells: Array<Cell>;
}
