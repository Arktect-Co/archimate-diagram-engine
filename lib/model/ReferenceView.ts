import { ViewNode } from '@lib/model/ViewNode';
import { ViewRelationship } from '@lib/model/ViewRelationship';

interface Hash {
  elements: string;
  relationships: string;
}

interface AxisBounds {
  min: number;
  max: number;
}

interface Bounds {
  vertical: AxisBounds;
  horizontal: AxisBounds;
}

export interface ReferenceView {
  _id: string;
  id: string;
  name: string;
  bounds: Bounds;
  viewNodes: Array<ViewNode>;
  viewRelationships: Array<ViewRelationship>;
  date: string;
  complexity: string;
  purpose: string;
  hash: Hash;
}
