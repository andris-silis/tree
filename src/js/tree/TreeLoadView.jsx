import React from 'react';
import { fromJS as immutableFromJS } from 'immutable';


export default React.createClass({
  getInitialState() {
    return {
      hasDataToLoad: false
    };
  },


  componentWillMount() {
    if (!this.hasSavedData()) {
      return;
    }

    this.setState({
      hasDataToLoad: true
    })
  },


  hasSavedData() {
    return !!this.loadSavedData();
  },


  loadSavedData() {
    return localStorage.getItem('treeData');
  },


  onLoadClick() {
    var localStorageData = this.loadFromLocalStorage();
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
        disabled={!this.hasSavedData()}
      >
        Load
      </button>
    );
  }
});
