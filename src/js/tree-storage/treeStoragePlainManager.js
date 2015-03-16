import { fromJS as immutableFromJS } from 'immutable';

const TREE_DATA_PLAIN_KEY = 'treeDataPlain';


var saveTreeData = function (tree) {
  // No exception handling, sorry :)
  localStorage.setItem(
    TREE_DATA_PLAIN_KEY,
    JSON.stringify(tree)
  );
};


var loadTreeData = function () {
  var localStorageData = localStorage.getItem(TREE_DATA_PLAIN_KEY);
  var treeDataObject = JSON.parse(localStorageData);

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
