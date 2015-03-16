import { fromJS as immutableFromJS } from 'immutable';

const LOCALSTORAGE_KEY = 'treeDataPlain';


var saveTreeData = function (tree) {
  // No exception handling, sorry :)

  // Save data starting from root node
  var treeData = tree.get('children');

  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify(treeData)
  );
};


var loadTreeData = function () {
  var localStorageData = localStorage.getItem(LOCALSTORAGE_KEY);

  if (!localStorageData) {
    return;
  }

  var treeDataObject = JSON.parse(localStorageData);
  if (!treeDataObject) {
    return;
  }

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
