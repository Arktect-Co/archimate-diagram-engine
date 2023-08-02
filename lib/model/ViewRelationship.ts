export interface BrendPoint {
  x: number;
  y: number;
}

export interface ViewRelationship {
  _id: string;
  modelRelationshipId: string;
  sourceId: string;
  targetId: string;
  viewRelationshipId: string;
  type: string;
  isBidirectional?: boolean;
  bendpoints: Array<BrendPoint>;
}
