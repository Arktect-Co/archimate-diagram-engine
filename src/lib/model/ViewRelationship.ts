import { dia, attributes } from "jointjs";

export interface BendPoint {
  x: number;
  y: number;
}

export interface LabelMarkup {
  selector?: string;
  groupSelector?: string;
  namespaceURI?: string;
  className?: string;
  attributes?: attributes.NativeSVGAttributes;
  style?: { [key: string]: unknown };
  children?: dia.MarkupJSON;
  textContent?: string;
}

export interface ViewRelationship {
  modelRelationshipId: string;
  sourceId: string;
  targetId: string;
  viewRelationshipId: string;
  type: string;
  bendpoints: Array<BendPoint>;
  _id?: string;
  isBidirectional?: boolean;
  label?: {
    text: string;
    markup?: LabelMarkup;
    position?: dia.Link.LabelPosition;
    size?: dia.Size;
  };
}
