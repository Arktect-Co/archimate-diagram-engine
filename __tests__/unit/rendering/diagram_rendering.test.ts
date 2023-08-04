import chai from 'chai';

import { dia, shapes } from 'jointjs';
import { ViewRenderer, ViewSettings } from '../../../index';
import checkModelsEquality from '../utils/equality_checker';
import referenceView from '../data/complete/reference_view.json';

describe('Diagram Rendering', () => {
  describe('Complete Rendering', () => {
    it('Should create a mirrored JointJS graph from a view', async () => {
      const outputGraph = new dia.Graph({}, { cellNamespace: shapes });

      ViewRenderer.renderToGraph(
        outputGraph,
        referenceView.viewNodes,
        referenceView.viewRelationships,
        new ViewSettings({
          style: 'hybrid',
          darkColor: 'black',
          lightColor: 'white',
          defaultWidth: 140,
          defaultHeight: 50,
        }),
      );

      chai.expect(checkModelsEquality(referenceView, outputGraph.toJSON())).to.true;
    });
  });
});
