jest.autoMockOff();

import Cursor from 'immutable/contrib/cursor';
import { deleteChildNode } from '../treeManager';
import { tree, treeAfterChildDelete } from '../__fixtures__/treeChildDelete';

jest.autoMockOn();


describe('Tree Manager', () => {
  it("deletes child from parent's children Map", () => {
    var treeCursor = Cursor.from(tree, newTree => {
      tree = newTree;
    });
    var childNode2Cursor = treeCursor.getIn(['children', 1]);

    deleteChildNode(treeCursor, childNode2Cursor);

    expect(
      tree.equals(treeAfterChildDelete)
    ).toBe(true);
  });
});
