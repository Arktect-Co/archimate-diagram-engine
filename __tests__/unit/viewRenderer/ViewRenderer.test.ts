import { expect } from 'chai';
import { dia, shapes } from '@joint/core';
import { ViewRenderer, ViewSettings } from '../../../src';
import { example_view } from '../__fixtures__';

describe('ViewRenderer', () => {
  let graph: dia.Graph;
  let viewSettings: ViewSettings;

  beforeEach(() => {
    graph = new dia.Graph({}, { cellNamespace: shapes });
    viewSettings = new ViewSettings({});
  });

  describe('render', () => {
    it('should render relationship even when type is invalid (default case)', () => {
      const invalidRelationship: any = {
        ...example_view,
        viewRelationships: [
          {
            viewRelationshipId: 'a63eb432',
            modelRelationshipId: 'a63eb432',
            sourceId: 'd96a2985',
            targetId: '36534983',
            type: 'invalid',
          },
        ],
      };

      const result = ViewRenderer.render(
        invalidRelationship.viewNodes,
        invalidRelationship.viewRelationships,
        viewSettings,
      );

      const cells = result.getCells();
      const relationships = cells.filter(cell => cell.isLink());

      expect(relationships).to.have.lengthOf(1);
    });

    it('should render a complete view with relationships', () => {
      const result = ViewRenderer.render(example_view.viewNodes, example_view.viewRelationships, viewSettings);

      const cells = result.getCells();
      const relationships = cells.filter(cell => cell.isLink());

      expect(relationships).to.have.lengthOf(example_view.viewRelationships.length);
    });

    it('should not render relationships if relationships are not available in the view', () => {
      const viewWithoutRelationships = {
        ...example_view,
        viewRelationships: [],
      };
      const result = ViewRenderer.render(
        viewWithoutRelationships.viewNodes,
        viewWithoutRelationships.viewRelationships,
        viewSettings,
      );

      const cells = result.getCells();
      const relationships = cells.filter(cell => cell.isLink());

      expect(relationships).to.have.lengthOf(0);
    });
  });
});
