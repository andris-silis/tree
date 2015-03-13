jest.autoMockOff();

import { deleteChildNode } from '../treeManager';
import treeChildDeleteFixture from '../__fixtures__/treeChildDelete';

jest.autoMockOn();


describe('Tree Manager', () => {
  it('deletes child from parent children Map', () => {
    var treeCursor = treeChildDeleteFixture.cursor(['tree']);
    var childNode2Cursor = treeCursor.getIn(['children', 1]);

    deleteChildNode(treeCursor, childNode2Cursor);

    expect(
      treeChildDeleteFixture
        .cursor(['tree'])
        .equals(treeChildDeleteFixture.cursor(['treeAfterChildDelete']))
    ).toBe(true);
  });
});
