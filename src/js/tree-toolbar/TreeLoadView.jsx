import React from 'react';
import { RaisedButton } from 'material-ui';
import _ from 'lodash';
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
    var localStorageData = this.loadSavedData();
    if (!localStorageData) {
      alert('No tree data in localStorage');
      return;
    }

    var treeDataObject = JSON.parse(localStorageData);
    this.props.tree.set('children', immutableFromJS(treeDataObject));

    if (_.isFunction(this.props.onLoad)) {
      this.props.onLoad();
    }
  },


  render() {
    return (
      <RaisedButton
        label='Load'
        onClick={this.onLoadClick}
        disabled={!this.hasSavedData()}
      />
    );
  }
});
