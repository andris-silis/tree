import { fromJS as immutableFromJS } from 'immutable';
import _ from 'lodash';

const LOCALSTORAGE_KEY_PREFIX = 'treeDataRecursive';


var _getStorageKey = function (id) {
  return `${LOCALSTORAGE_KEY_PREFIX}_${id}`;
};


var _saveNode = function (data) {
  // Save only IDs of children
  if (data.children && !_.isEmpty(data.children)) {
    data.children.forEach(node => _saveNode(node));
    data.children = data.children.map(node => node.id);
  } else {
    data.children = [];
  }

  localStorage.setItem(
    _getStorageKey(data.id),
    JSON.stringify(data)
  );
};


var _loadNode = function (id) {
  var localStorageData = localStorage.getItem(_getStorageKey(id));
  if (!localStorageData) {
    return;
  }

  localStorageData = JSON.parse(localStorageData);

  localStorageData.children =
    localStorageData.children.map(id => _loadNode(id)) || [];

  return localStorageData;
};


var _clearStorage = function () {
  _getAllKeys().forEach(key => {
    localStorage.removeItem(key);
  });
};


var _getAllKeys = function () {
  return _.chain(localStorage)
    .keys()
    .filter(key => _.startsWith(key, `${LOCALSTORAGE_KEY_PREFIX}_`))
    .value();
};


var saveTreeData = function (tree) {
  _clearStorage();
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
