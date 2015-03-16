import { fromJS as immutableFromJS } from 'immutable';
import _ from 'lodash';

const LOCALSTORAGE_KEY_PREFIX = 'treeDataRecursive';

import { getStorageKey, clearStorage } from './treeStorageManagerHelpers';


var _saveNode = function (data) {
  // Save only IDs of children
  if (data.children && !_.isEmpty(data.children)) {
    // Save each children
    data.children.forEach(node => _saveNode(node));
    // Replace children with their IDs
    data.children = data.children.map(node => node.id);
  } else {
    data.children = [];
  }

  localStorage.setItem(
    getStorageKey(LOCALSTORAGE_KEY_PREFIX, data.id),
    JSON.stringify(data)
  );
};


var _loadNode = function (id) {
  var localStorageData = localStorage.getItem(
    getStorageKey(LOCALSTORAGE_KEY_PREFIX, id)
  );

  if (!localStorageData) {
    return;
  }

  localStorageData = JSON.parse(localStorageData);

  localStorageData.children =
    localStorageData.children.map(id => _loadNode(id)) || [];

  return localStorageData;
};


var saveTreeData = function (tree) {
  clearStorage(LOCALSTORAGE_KEY_PREFIX);
  _saveNode(tree.toJSON())
};


var loadTreeData = function () {
  var treeDataObject = _loadNode('root');
  if (!treeDataObject) {
    return;
  }

  treeDataObject = treeDataObject.children;

  return immutableFromJS(treeDataObject);
};


var hasTreeData = function () {
  return !!loadTreeData();
};


export default {
  saveTreeData: saveTreeData,
  loadTreeData: loadTreeData,
  hasTreeData: hasTreeData
};
