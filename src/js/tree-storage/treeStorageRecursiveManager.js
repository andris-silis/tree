import { fromJS as immutableFromJS } from 'immutable';

const LOCALSTORAGE_KEY = 'treeDataRecursive';


var saveTreeData = function (tree) {
  // No exception handling, sorry :)
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify(tree)
  );
};


var loadTreeData = function () {
  var localStorageData = localStorage.getItem(LOCALSTORAGE_KEY);
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
