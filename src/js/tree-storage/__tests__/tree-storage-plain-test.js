import _ from 'lodash';

import treeStoragePlainManager from '../../tree-storage/treeStoragePlainManager';

import { tree } from '../__fixtures__/trees';


describe('Tree Plain Storage Manager', () => {
  it("saveTreeData saves tree's JSON representation in single localStorage key", () => {
    var mockedStore = {};
    var treeJSONString = JSON.stringify(tree.get('children').toJSON());

    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      mockedStore[key] = value;
    });

    treeStoragePlainManager.saveTreeData(tree);

    var savedValue = mockedStore[treeStoragePlainManager.LOCALSTORAGE_KEY];

    expect(treeJSONString).toEqual(savedValue);
  });


  it("loadTreeData returns tree's JSON representation from single localStorage key", () => {
    var treeJSON = tree.get('children').toJSON();

    spyOn(localStorage, 'getItem').and.callFake(function (key, value) {
      return JSON.stringify(treeJSON);
    });

    var loadedValue = treeStoragePlainManager.loadTreeData();

    expect(treeJSON).toEqual(loadedValue.toJSON());
  });


  it("loadTreeData returns undefined when there is no saved value in key", () => {
    spyOn(localStorage, 'getItem').and.callFake(function (key, value) {
    });

    var loadedValue = treeStoragePlainManager.loadTreeData();

    expect(loadedValue).toBe(undefined);
  });


  it("hasTreeData returns true when there is some saved value in key", () => {
    var treeJSON = tree.get('children').toJSON();

    spyOn(localStorage, 'getItem').and.callFake(function (key, value) {
      return JSON.stringify(treeJSON);
    });

    var value = treeStoragePlainManager.hasTreeData();

    expect(value).toBe(true);
  });


  it("hasTreeData returns false when there is no saved value in key", () => {
    spyOn(localStorage, 'getItem').and.callFake(function (key, value) {
    });

    var value = treeStoragePlainManager.hasTreeData();

    expect(value).toBe(false);
  });


});
