import _ from 'lodash';

import { getStorageKey } from '../../tree-storage/treeStorageManagerHelpers';
import treeStorageIterativeManager, { LOCALSTORAGE_KEY_PREFIX } from '../../tree-storage/treeStorageIterativeManager';

import { tree } from '../__fixtures__/trees';


describe('Tree Iterative Storage Manager', () => {
  describe('', () => {
    var mockedStore = {};

    beforeEach(() => {
      mockedStore = {};
      spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
        mockedStore[key] = JSON.parse(value);
      });
    });


    it("saveTreeData clears storage keys before saving", () => {
      var node1 = tree.getIn(['children', 0]);
      var nodeKey = getStorageKey(LOCALSTORAGE_KEY_PREFIX, node1.get('id'));
      localStorage[nodeKey] = null;

      spyOn(localStorage, 'removeItem');

      treeStorageIterativeManager.saveTreeData(tree);

      expect(localStorage.removeItem).toHaveBeenCalledWith(nodeKey);
    });


    it("saveTreeData saves single node's data into single localStorage key", () => {
      treeStorageIterativeManager.saveTreeData(tree);

      var node1 = tree.getIn(['children', 0]);
      var storageKey = getStorageKey(LOCALSTORAGE_KEY_PREFIX, node1.get('id'));
      var savedNode = mockedStore[storageKey];

      expect(savedNode.id).toEqual(node1.get('id'));
      expect(savedNode.text).toEqual(node1.get('text'));
    });


    it("saveTreeData saves single node's childrens as list of IDs", () => {
      treeStorageIterativeManager.saveTreeData(tree);

      var storageKey = getStorageKey(
        LOCALSTORAGE_KEY_PREFIX,
        tree.get('id')
      );
      var savedNode = mockedStore[storageKey];

      expect(savedNode.children)
        .toEqual(tree.get('children').map(node => node.id).toJSON());
    });

  });


});
