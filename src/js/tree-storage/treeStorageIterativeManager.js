import { fromJS as immutableFromJS } from 'immutable';

const LOCALSTORAGE_KEY_PREFIX = 'treeDataIterative';

import { getStorageKey, clearStorage, getAllStorageKeys } from './treeStorageManagerHelpers';


var _saveAllNodes = function (node) {
  var stack = [node];
  var i = 0;
  var currentNode;

  while (currentNode = stack[i]) {
    i++;
    _saveSingleNode(currentNode);

    if (currentNode.children && _.isArray(currentNode.children)) {
      currentNode.children.forEach(childNode => stack.push(childNode));
    }
  }
};


var _saveSingleNode = function (data) {
  var dataToSave = _.omit(data, 'children');
  dataToSave.children = data.children.map(node => node.id);

  localStorage.setItem(
    getStorageKey(LOCALSTORAGE_KEY_PREFIX, data.id),
    JSON.stringify(dataToSave)
  );
};


var _loadNode = function (key) {
  var localStorageData = localStorage.getItem(
    key
  );

  if (!localStorageData) {
    return;
  }

  localStorageData = JSON.parse(localStorageData);


  return localStorageData;
};


var _loadAllNodes = function () {
  var allNodes = getAllStorageKeys(LOCALSTORAGE_KEY_PREFIX).map(_loadNode);
  // Iterates over allNodes and converts
  //  its children array IDs to instances
  allNodes = allNodes.map(node => {
    node.children = node.children.map(
      childID => _.find(allNodes, found => found.id === childID)
    );
    return node;
  });

  return _.find(allNodes, node => node.id === 'root');
};


var saveTreeData = function (tree) {
  clearStorage(LOCALSTORAGE_KEY_PREFIX);
  _saveAllNodes(tree.toJSON())
};


var loadTreeData = function () {
  var treeDataObject = _loadAllNodes();
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
  LOCALSTORAGE_KEY_PREFIX: LOCALSTORAGE_KEY_PREFIX,
  saveTreeData: saveTreeData,
  loadTreeData: loadTreeData,
  hasTreeData: hasTreeData
};
