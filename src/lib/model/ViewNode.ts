export interface ViewNode {
  _id?: string;
  modelNodeId: string;
  viewNodeId: string;
  name: string;
  type: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  parent?: string | null;
}
