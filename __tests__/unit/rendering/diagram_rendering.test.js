const chai = require('chai');

const joint = require("jointjs");
const {ViewRenderer, ViewSettings} = require('../../../index');
const checkModelsEquality = require('../utils/equality_checker');

describe('Diagram Rendering', () => {
    describe('Complete Rendering', () => {
        it('Should create a mirrored JointJS graph from a view', async () => {
            const referenceView = require('../data/complete/reference_view.json');

            let outputGraph = new joint.dia.Graph({}, {cellNamespace: joint.shapes});

            ViewRenderer.renderToGraph(
                outputGraph,
                referenceView.viewNodes,
                referenceView.viewRelationships,
                new ViewSettings({
                    style: 'hibrid',
                    darkColor: 'black',
                    lightColor: 'white',
                    defaultWidth: 140,
                    defaultHeight: 50
                })
            );

            chai.expect(checkModelsEquality(referenceView, outputGraph)).to.true;
        });
    });
});
