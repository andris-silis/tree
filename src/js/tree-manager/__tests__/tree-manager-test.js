jest.autoMockOff();

import Cursor from 'immutable/contrib/cursor';
import { deleteChildNode } from '../treeManager';
import { tree, treeAfterChildDelete } from '../__fixtures__/treeChildDelete';

jest.autoMockOn();


describe('Tree Manager', () => {
  it("deletes child from parent's children Map", () => {
    var treeData = tree;
    var treeCursor = Cursor.from(treeData, newTree => {
      treeData = newTree;
    });
    var childNode2Cursor = treeCursor.getIn(['children', 1]);

    deleteChildNode(treeCursor, childNode2Cursor);

    expect(
      treeData.equals(treeAfterChildDelete)
    ).toBe(true);
  });


  it("doesn't do anything when trying to delete non-existing child", () => {
    var treeData = tree;
    var treeCursor = Cursor.from(treeData, newTree => {
      treeData = newTree;
    });
    var childNode21Cursor = treeCursor.getIn(['children', 1, 'children', 0]);

    deleteChildNode(treeCursor, childNode21Cursor);

    expect(
      treeData.equals(tree)
    ).toBe(true);
  });
});
