import _ from 'lodash';


var getStorageKey = (prefix, id) => `${prefix}_${id}`;


var getAllStorageKeys = (prefix) => {
  return _.chain(localStorage)
    .keys()
    .filter(key => _.startsWith(key, `${prefix}_`))
    .value();
};


var clearStorage = (prefix) => {
  getAllStorageKeys(prefix).forEach(key => {
    localStorage.removeItem(key);
  });
};


export default {
  getStorageKey: getStorageKey,
  getAllStorageKeys: getAllStorageKeys,
  clearStorage: clearStorage
};
