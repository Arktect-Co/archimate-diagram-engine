import { ReferenceView } from '@lib/model/ReferenceView';

export const example_view: ReferenceView = {
  id: '729e7467-03a3-4880-b21a-552514d3395c',
  name: 'Example View',
  complexity: '',
  viewNodes: [
    {
      viewNodeId: 'd96a2985',
      modelNodeId: 'd96a2985',
      name: 'User',
      type: 'BusinessActor',
      x: 135,
      y: 75,
      width: 120,
      height: 55,
    },
    {
      viewNodeId: '36534983',
      modelNodeId: '36534983',
      name: 'Internal Application Service',
      type: 'ApplicationService',
      x: 399,
      y: 227,
      width: 120,
      height: 55,
    },
    {
      viewNodeId: '25b29845',
      modelNodeId: '25b29845',
      name: 'Data Object',
      type: 'DataObject',
      x: 399,
      y: 75,
      width: 120,
      height: 55,
    },
    {
      viewNodeId: 'a2e372e1',
      modelNodeId: 'a2e372e1',
      name: 'Internal Application',
      type: 'ApplicationComponent',
      x: 135,
      y: 227,
      width: 120,
      height: 55,
    },
  ],
  viewRelationships: [
    {
      viewRelationshipId: 'a63eb432',
      modelRelationshipId: 'a63eb432',
      sourceId: 'd96a2985',
      targetId: '36534983',
      type: 'Serving',
      bendpoints: []
    },
    {
      viewRelationshipId: '50e24b7e',
      modelRelationshipId: '50e24b7e',
      sourceId: 'a2e372e1',
      targetId: '36534983',
      type: 'Assignment',
      bendpoints: []
    },
    {
      viewRelationshipId: '808150f8',
      modelRelationshipId: '808150f8',
      sourceId: '36534983',
      targetId: '25b29845',
      type: 'Access',
      bendpoints: []
    },
  ],
} as unknown as ReferenceView;
