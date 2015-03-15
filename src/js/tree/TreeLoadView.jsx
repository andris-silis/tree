import React from 'react';
import { fromJS as immutableFromJS } from 'immutable';


export default React.createClass({
  onLoadClick() {
    var localStorageData = localStorage.getItem('treeData');
    if (!localStorageData) {
      alert('No tree data in localStorage');
      return;
    }

    var treeDataObject = JSON.parse(localStorageData);
    this.props.tree.set('children', immutableFromJS(treeDataObject));
  },


  render() {
    return (
      <button
        onClick={this.onLoadClick}
      >
        Load
      </button>
    );
  }
});
